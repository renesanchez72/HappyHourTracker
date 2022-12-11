<!DOCTYPE html>
<html>
<head>
    <title>My PHP page</title>
    <style>
        /* Basic styles for the page */
        nav {
            background-color: #333;
            color: #fff;
            display: flex;
            justify-content: space-between;
            padding: 0.5em 1em;
        }
        nav a {
            color: #fff;
            text-decoration: none;
        }
        nav a:hover {
            text-decoration: underline;
        }
        body {
            font-family: sans-serif;
            margin: 0;
        }

    </style>
</head>
<body>
<nav>
        <a href="./home.php">Home</a>
        <a href="./favoritesPage.php">Favorites</a>
        <a href="./logout.php">logOut</a>
    </nav>
    <main>
        <!-- PHP code that retrieves data from the database and displays it in a table -->
        <?php
        session_start();
        $userid = $_SESSION["userid"];
        // Connect to the database
        $mysqli = require __DIR__ . "/database.php";

        $table = "user";
        $sql = sprintf("SELECT favorites FROM user
        WHERE id = '%s'",
        $mysqli->real_escape_string($userid));
    
        if ( !$result = $mysqli->query($sql) ) {
            die( json_encode(
                array(
                    'favoriteAdded' => false,
                    'text' => "'Mysql error: ' . $mysqli->error"
            )));
            exit;
        };
    
        if ( !$row = mysqli_fetch_assoc($result) ) {
            die( json_encode(
                array(
                    'favoriteAdded' => false,
                    'text' => "'Mysql error: ' . $mysqli->error"
            )));
            exit;
        };
    
    
        // Append a new value to the values column
        // split into an array and split at each comma 
        $values = explode(",", $row["favorites"]);
        
        foreach ($values as $restaurantID) {
            $table_name = "restaurants";
            $query = "SELECT * FROM $table_name WHERE id = $restaurantID";
            $result = mysqli_query($mysqli, $query);
            // if no favorites print out they aint nuthin
            if (!$result || mysqli_num_rows($result) == 0){
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
                     }elseif ($col == "id") {
                         $restaurantID = $value;
                     }
                     else{
                         echo "<p>$value</p>";
                     }
                 }
                //  echo "<button   onclick='fav($restaurantID,$userid);'>Favorite</button>";
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




