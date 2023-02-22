<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $mysqli = require __DIR__ . "/database.php";
    $table = "user";

// doing checks 
    // see if password is less that 8 chars , regex does this too
    if (strlen($_POST["newPassword"]) < 8) {
        die(
            json_encode(
                array(
                    'passwordReset' => false,
                    'text' => "must be at least 8 chars"
                )
            )
        );
        exit;
     }
     
     
     // checks for 1 letter 1 numer and 1 special character
     if (! preg_match("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d$&+,:;=?@#|'<>.^*()%!-]{8,}$/", $_POST["newPassword"])) {
         die(
            json_encode(
                array(
                    'passwordReset' => false,
                    'text' => "new password does not meet requirements"
                )
            )
        );
        exit;
     }
    

    $id = $_POST["userid"]; // Change this to the ID of the row you want to update
    $currentPassword = $_POST["currentPassword"]; 
    $newPassword = $_POST["newPassword"]; 
    // $query = "SELECT favorites FROM `user` WHERE id = 49";

    $sql = sprintf("SELECT * FROM user
    WHERE id = '%s'",
        $mysqli->real_escape_string($_POST["userid"])
    );

    if (!$result = $mysqli->query($sql)) {
        die(
            json_encode(
                array(
                    'passwordReset' => false,
                    'text' => "'Mysql error: ' . $mysqli->error"
                )
            )
        );
        exit;
    }
    ;

    if (!$row = mysqli_fetch_assoc($result)) {
        die(
            json_encode(
                array(
                    'passwordReset' => false,
                    'text' => "'Mysql error: ' . $mysqli->error"
                )
            )
        );
        exit;
    }
    ;
    if ($row) {
        

        $saltedPassword = $row["salt"] . $_POST["currentPassword"];

        if (password_verify($saltedPassword, $row["password_hash"])) {
            // create the new hash
            $newSaltedPassword = $row["salt"] . $_POST["newPassword"];
            $hashed_password = password_hash($newSaltedPassword, PASSWORD_DEFAULT);
            // Update the row with the new values
            $sqlupdate = "UPDATE user SET password_hash = ? WHERE id = ?";
            $statement = $mysqli->stmt_init();
            // bunch of error checking when it comes to sql syntax
            if (!$statement->prepare($sqlupdate)) {
                die(
                    json_encode(
                        array(
                            'passwordReset' => false,
                            'text' => "'Mysql error: ' . $mysqli->error"
                        )
                    )
                );
                exit;
            }
            ;
            // here we are passing the values inside the sql statement to avoid injection
            $statement->bind_param("ss", $hashed_password, $id);
            try {
                //if the statement excutes then return true yayyyyy
                $statement->execute();
                echo json_encode(
                    array(
                        'passwordReset' => true,
                        'text' => "Password changed please sign out to view changes"
                    )
                );
                exit;
            } catch (\Throwable $th) {
                //throws an error if sql statement doesnt go through
                die(
                    json_encode(
                        array(
                            'passwordReset' => false,
                            'text' => "'Mysql error: ' . $mysqli->error"
                        )
                    )
                );
                exit;
    }
        }else {
            die(
                json_encode(
                    array(
                        'passwordReset' => false,
                        'text' => "wrong current password"
                    )
                )
            );
            exit;

        }
    }


}