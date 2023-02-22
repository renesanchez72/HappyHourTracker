<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $mysqli = require __DIR__ . "/database.php";
    $table = "user";
    $id = $_POST["userid"]; // Change this to the ID of the row you want to update
    $newUsername = $_POST["newUsername"]; // Change this to the new username
    // $query = "SELECT favorites FROM `user` WHERE id = 49";
    // $result = mysqli_query($mysqli, $query);
    $sql = sprintf("SELECT * FROM user
    WHERE id = '%s'",
        $mysqli->real_escape_string($_POST["userid"])
    );

    if (!$result = $mysqli->query($sql)) {
        die(
            json_encode(
                array(
                    'usernameReset' => false,
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
                    'usernameReset' => false,
                    'text' => "'Mysql error: ' . $mysqli->error"
                )
            )
        );
        exit;
    }
    ;


    // Update the row with the new values


    $sqlupdate = "UPDATE user SET username = ? WHERE id = ?";
    $statement = $mysqli->stmt_init();
    // bunch of error checking when it comes to sql syntax
    if (!$statement->prepare($sqlupdate)) {
        die(
            json_encode(
                array(
                    'usernameReset' => false,
                    'text' => "'Mysql error: ' . $mysqli->error"
                )
            )
        );
        exit;
    }
    ;
    // here we are passing the values inside the sql statement to avoid injection
    $statement->bind_param("ss", $newUsername, $id);
    try {
        //if the statement excutes then return true yayyyyy
        $statement->execute();
        echo json_encode(
            array(
                'usernameReset' => true,
                'text' => "Username Changed to  $newUsername please sign out to view changes"
            )
        );
        exit;
    } catch (\Throwable $th) {
        //throws an error if sql statement doesnt go through
        die(
            json_encode(
                array(
                    'usernameReset' => false,
                    'text' => "'Mysql error: ' . $mysqli->error"
                )
            )
        );
        exit;
    }
}