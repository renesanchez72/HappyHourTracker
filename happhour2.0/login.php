<?php


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $mysqli = require __DIR__ . "/database.php";
    
    $sql = sprintf("SELECT * FROM user
                    WHERE username = '%s'",
                   $mysqli->real_escape_string($_POST["username"]));
    
    $result = $mysqli->query($sql);
    
    $user = $result->fetch_assoc();

    if ($user) {
        

        $saltedPassword = $user["salt"] . $_POST["password"];

        if (password_verify($saltedPassword, $user["password_hash"])) {
            session_start();
            $_SESSION["userid"] = $user["id"];
            header("Location: home.php");
            exit;
        }else {
            print_r("login failed press back to try again ");

        }
    }
}

?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in</title>
</head>
<body>

    <h1>Login</h1>

    <form method="post">
        <label for="username">Username</label>
        <input type="text" name="username" id="username">
        <label for="password">Password</label>
        <input type="password" name="password" id="password">

        <button type="submit">Login</button>
    </form>
</body>
</html> -->