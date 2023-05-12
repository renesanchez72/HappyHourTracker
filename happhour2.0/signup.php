<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (empty($_POST["username"])) {
        // die("Username is required");
        echo json_encode(array('success' => false, 'error' => 'Username is required'));
        exit;
    }
    
    
    // see if password is less that 8 chars , regex does this too
    if (strlen($_POST["password"]) < 8) {
    //    die("must be at least 8 chars");
        echo json_encode(array('success' => false, 'error' => 'password must be at least 8 characters'));
        exit;
    }
    
    
    // checks for 1 letter 1 numer and 1 special character
    if (! preg_match("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d$&+,:;=?@#|'<>.^*()%!-]{8,}$/", $_POST["password"])) {
        // die("password does not meet requirements press back to");
        echo json_encode(array('success' => false, 'error' => 'password does not meet requirements'));
        exit;
    }
    
    $length = 8;    
    $salt = substr(str_shuffle('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'),1,$length);
    
    $saltedPassword = $salt . $_POST["password"];
    
    
    $hashed_password = password_hash($saltedPassword, PASSWORD_DEFAULT);
    
    $mysqli = require __DIR__ . "/database.php";
    
    $sql = "INSERT INTO user (username , password_hash , salt)
            VALUES (?,?,?)";
    $statement = $mysqli->stmt_init();
    
    if ( !$statement->prepare($sql) ) {
        // die("Mysql error: " . $mysqli->error);
        echo json_encode(array('success' => false, 'error' => "Mysql error: " . $mysqli->error));
        exit;
    };
    
    $statement->bind_param("sss",$_POST["username"],$hashed_password,$salt);
    
    try {
        $statement->execute();
        echo json_encode(array('success' => true, 'text' => 'Signup Successful'));
        // header("Location: afterSignup.php");
        exit;
    } catch (\Throwable $th) {
        //throw $th;
        if ($mysqli->errno === 1062) {
            // die("username is already taken");
            echo json_encode(array('success' => false, 'error' => 'username is already taken'));
            exit;
        }
        // die("Mysql error: " . $mysqli->error . " " . $mysqli->errno);
        echo json_encode(array('success' => false, 'error' => "Mysql error: " . $mysqli->error . " " . $mysqli->errno));
        exit;

    }
}


?>



<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script src="lab4.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        span {
            font-size: 12px;
            color: rgb(177, 177, 177);
            font-weight: normal;
            opacity: 0.8;
            letter-spacing: 1.5px;
            padding: 5px;
        }
    </style>
    <title>Sign Up</title>
</head>
<body>
    <h1>Sign Up</h1>
    <h6>
        Password must have atleast 8 characters <br>
        Must contain one letter.<br>
        Must contain one number.<br>
        Must contain one special charecter.<br>
    </h6>
    <h6>Already have an account? <a href="login.php">Login</a></h6>

<form name="signupform" method="post" onSubmit="return validateForm()">
    <label for="username">Username</label>
    <input id="username" type="text" name="username">
    <label for="password">Password</label>
    <input type="password" name="password" id="password">

    <button type="submit" >Sign Up</button>
</form>
</body>

</html> -->