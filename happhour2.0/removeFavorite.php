<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $mysqli = require __DIR__ . "/database.php";
    $table = "user";
    $id = $_POST["userid"]; // Change this to the ID of the row you want to update
    // $query = "SELECT favorites FROM `user` WHERE id = 49";
    // $result = mysqli_query($mysqli, $query);
    $sql = sprintf("SELECT favorites FROM user
    WHERE id = '%s'",
        $mysqli->real_escape_string($_POST["userid"])
    );

    if (!$result = $mysqli->query($sql)) {
        die(
            json_encode(
                array(
                    'favoriteRemoved' => false,
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
                    'favoriteRemoved' => false,
                    'text' => "'Mysql error: ' . $mysqli->error"
                )
            )
        );
        exit;
    }
    ;





    // split into an array and split at each comma 
    $values = explode(",", $row["favorites"]);

    // Find the index of 'restaurantid' in the array
    $index = array_search($_POST['restaurantid'], $values);

    // Check if 'banana' was found in the array
    if ($index !== false) {
        // Remove 'banana' from the array
        unset($values[$index]);
    }
    // shave off any empty values in array
    $values = array_filter($values);
    // join each value in array with a , in between values
    $values = implode(",", $values);

    // Update the row with the new values


    $sqlupdate = "UPDATE user SET favorites = ? WHERE id = ?";
    $statement = $mysqli->stmt_init();
    // bunch of error checking when it comes to sql syntax
    if (!$statement->prepare($sqlupdate)) {
        die(
            json_encode(
                array(
                    'favoriteRemoved' => false,
                    'text' => "'Mysql error: ' . $mysqli->error"
                )
            )
        );
        exit;
    }
    ;
    // here we are passing the values inside the sql statement to avoid injection
    $statement->bind_param("ss", $values, $id);
    try {
        //if the statement excutes then return true yayyyyy
        $statement->execute();
        echo json_encode(
            array(
                'favoriteRemoved' => true,
                'text' => 'Restaurant removed from favorites, Refresh to see changes'
            )
        );
        exit;
    } catch (\Throwable $th) {
        //throws an error if sql statement doesnt go through
        die(
            json_encode(
                array(
                    'favoriteRemoved' => false,
                    'text' => "'Mysql error: ' . $mysqli->error"
                )
            )
        );
        exit;
    }




}

?>