<?php
session_start();
$userid = $_SESSION["userid"];
?>
<!DOCTYPE html>
<html>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@700&display=swap" rel="stylesheet">

    <title>My PHP page</title>
    <style>
        /* Basic styles for the page */
        @import url('https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@700&display=swap');

        nav {
            background-color: #333;
            color: #fff;
            display: flex;
            justify-content: space-between;
            padding: 0.5em 1em;
        }

        nav a {
            margin-top: 30px;
            margin-bottom: 30px;
            font-family: 'Palanquin Dark', sans-serif;
            color: #fff;
            text-decoration: none;
        }

        nav a:hover {
            color: #D3D3D3;
        }

        body {
            font-family: sans-serif;
            margin: 0;
        }
    </style>
    
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script>
        function unFav(restaurantid, userid) {
            console.log('removing fav');
            console.log(restaurantid);
            console.log(userid);
            var request = $.ajax({
                type: 'POST',
                url: 'removeFavorite.php',
                dataType: 'json',
                data: 'restaurantid=' + restaurantid + '&userid=' + userid,
                success: function (response) {
                    console.log(response);
                    if (response.favoriteRemoved) {
                        console.log("Removed from favorites");
                        alert(response.text);
                    } else {
                        alert(response.text);
                    }
                }
            });
        }
    </script>
</head>

<body>
    <nav>
        <!--HAPPY HOUR LOGO jw-->
        <img src="./happyhourlogo.png" width='100px' height='100px' alt='image'>
        <a href="./home.php">HOME</a>
        <a href="./favoritesPage.php">FAVORITES</a>
        <a href="./addRestaurantPage.php">ADD DEAL</a>
        <a href="./logout.php">LOGOUT</a>

    </nav>
    <main>
        <!-- PHP code that retrieves data from the database and displays it in a table -->
        <?php
        // Connect to the database
        $mysqli = require __DIR__ . "/database.php";

        $table = "user";
        $sql = sprintf("SELECT favorites FROM user
        WHERE id = '%s'",
            $mysqli->real_escape_string($userid)
        );

        if (!$result = $mysqli->query($sql)) {
            die(
                json_encode(
                    array(
                        'favoriteAdded' => false,
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
                        'favoriteAdded' => false,
                        'text' => "'Mysql error: ' . $mysqli->error"
                    )
                )
            );
            exit;
        }
        ;


        // Append a new value to the values column
        // split into an array and split at each comma 
        $values = explode(",", $row["favorites"]);

        foreach ($values as $restaurantID) {
            $table_name = "restaurants";
            $query = "SELECT * FROM $table_name WHERE id = $restaurantID";
            $result = mysqli_query($mysqli, $query);
            // if no favorites print out they aint nuthin
            if (!$result || mysqli_num_rows($result) == 0) {
                echo "<p>No data found in the table.</p>";
                exit;
            }
            if (mysqli_num_rows($result) > 0) {
                // Store the data in an array
                $data = [];
                while ($row = mysqli_fetch_assoc($result)) {
                    $data[] = $row;
                }

                // Generate HTML code for each row of data
                foreach ($data as $row) {
                    echo "<div id='restaurant'>";
                    foreach ($row as $col => $value) {
                        if ($col == "image") {
                            echo "<img src='$value' width='200px' height='200px' alt='image'/>";
                        } elseif ($col == "id") {
                            $restaurantID = $value;
                        } else {
                            echo "<p>$value</p>";
                        }
                    }
                    echo "<button   onclick='unFav($restaurantID,$userid);'>Remove</button>";
                    echo "</div>";
                }
            } else {
                // Print a message if there are no rows in the result
        
            }
        }
        // Select all columns from the table
        
        // Close the database connection
        mysqli_close($mysqli);
        ?>
    </main>
</body>

</html>