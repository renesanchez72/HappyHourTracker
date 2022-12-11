<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // date_default_timezone_set("America/Los_Angeles");
    // $currtime = date("H:i");
    // $ThatTime ="23:00";
    // var_dump($currtime);
    // if (strtotime($ThatTime) <= $currtime) {
    //     echo "ok";
    //   }
    session_start();
    $mysqli = require __DIR__ . "/database.php";
    $sql = "INSERT INTO message (userid , emailaddress,datetime,message)
    VALUES (?,?,?,?)";
    $statement = $mysqli->stmt_init();

    if ( !$statement->prepare($sql) ) {
    die("Mysql error: " . $mysqli->error);
    };

    $statement->bind_param("ssss",$_SESSION["userid"],$_POST["email"],$_POST["time"],$_POST["message"]);
    try {
        $statement->execute();
        header("Location: requestsent.php");
        // die ("Successfully sent message to database");
        // exit;
    } catch (\Throwable $th) {
        //throw $th;
        die("Mysql error: " . $mysqli->error . " " . $mysqli->errno);
    }
    
    

}
var_dump($_SESSION);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail Sender</title>
</head>
<body>

    <h1>Send Email</h1>


    <form id="emailform" method="post">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        <label for="message">Message</label>
        <input type="text" name="message" id="message">
        <label for="time">Choose a Time</label>
        <select name="time" id="time" form="emailform">
            <option value="00:00">12am</option>
            <option value="00:30">12:30am</option>
            <option value="01:00">1am</option>
            <option value="01:30">1:30am</option>
            <option value="02:00">2am</option>
            <option value="02:30">2:30am</option>
            <option value="03:00">3am</option>
            <option value="03:30">3:30am</option>
            <option value="04:00">4am</option>
            <option value="04:30">4:30am</option>
            <option value="05:00">5am</option>
            <option value="05:30">5:30am</option>
            <option value="06:00">6am</option>
            <option value="06:30">6:30am</option>
            <option value="07:00">7am</option>
            <option value="07:30">7:30am</option>
            <option value="08:00">8am</option>
            <option value="08:30">8:30am</option>
        </select>
        <button type="submit">Send Message</button>
    </form>
</body>
</html>