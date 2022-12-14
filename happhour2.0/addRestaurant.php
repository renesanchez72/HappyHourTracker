<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    if (empty($_POST["restaurantName"])) {
        die( json_encode(
            array(
                'restaurantAdded' => false,
                'text' => "restaurantName is required"
        )));
    }
    
    
    if (empty($_POST["address"])) {
        die( json_encode(
            array(
                'restaurantAdded' => false,
                'text' => "address is required"
        )));
    }
    

    
    $mysqli = require __DIR__ . "/database.php";
    
    $sql = "INSERT INTO restaurants (image , name , address , deal , daysofweek) 
            VALUES (?,?,?,?,?)";
    $statement = $mysqli->stmt_init();
    
    if ( !$statement->prepare($sql) ) {
        die("Mysql error: " . $mysqli->error);
    };
    
    $statement->bind_param("sssss",$_POST["restaurantImage"],$_POST["restaurantName"],$_POST["address"],$_POST["deal"],$_POST["dayschosen"]);
    
    try {
        $statement->execute();
        echo json_encode(
            array(
                'restaurantAdded' => true,
                'text' => 'Restaurant successfully added to Happy Hour Tracker'
            ));
        exit;
    } catch (\Throwable $th) {
        //throw $th;
        die( json_encode(
            array(
                'restaurantAdded' => false,
                'text' => "'Mysql error: ' . $mysqli->error"
        )));
    }
}

?>