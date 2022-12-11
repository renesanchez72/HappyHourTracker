<?php
require_once 'vendor/autoload.php';
$mysqli = require __DIR__ . "/database.php";

// Create the Transport
$transport = (new Swift_SmtpTransport('smtp.gmail.com', 465, "ssl"))
  ->setUsername('rene.sanchez.72@my.csun.edu')
  ->setPassword('N0Vand@ls!!!!')
;

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// grab current time from server set to pst by defualt
date_default_timezone_set("America/Los_Angeles");
$currtime = date("H:i");

// get all rows from the message table where sent is false and  grab them into seperate assoticve arrays
$sql = "SELECT * FROM message WHERE sent='0'";

$result = $mysqli->query($sql);
$allRows = $result->fetch_all(MYSQLI_ASSOC);

// run a for each loop on all the rows in the user table where sent is false
foreach ($allRows as $row) {
// grab the time from the row 
  $ThatTime = $row["datetime"];
  // check of the time from the row is less or equal to the current time if so then procceed
  if (date('H:i', strtotime($ThatTime)) <= $currtime) {
    // for logging purposes print out the times and that messag is getting sent
    echo $ThatTime . " is less than the current time " . $currtime . "\n";
    echo "sending message: " . $row["message"] . "\n";
    // set up message from vars in the row and with csun email
    $message = (new Swift_Message('Automated Email'))
      ->setFrom(['rene.sanchez.72@my.csun.edu' => 'Rene Sanchez'])
      ->setTo([$row["emailaddress"] => 'Rene Sanchez'])
      ->setBody($row["message"])
    ;
    // if the email was successfully sent then update the record to sent = true in the database
    if ($result = $mailer->send($message)) {
      $sqlupdate = "UPDATE message SET sent=? WHERE msgid=?";
      $statement = $mysqli->stmt_init();
      $sentNum = 1;

      if ( !$statement->prepare($sqlupdate) ) {
        die("Mysql error: " . $mysqli->error);
      };
      $statement->bind_param("ss", $sentNum, $row["msgid"]);
      try {
        $statement->execute();
        echo "email sent record updated";
      } catch (\Throwable $th) {
        //throw $th;
        die("Mysql error: " . $mysqli->error . " " . $mysqli->errno);
      }
    };
  }
}

?>