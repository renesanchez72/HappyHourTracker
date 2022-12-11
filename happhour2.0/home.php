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
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">login</a>
    </nav>
    <main>
        <!-- PHP code that retrieves data from the database and displays it in a table -->
        <?php
        session_start();
        // Connect to the database
        $mysqli = require __DIR__ . "/database.php";
       // Select all columns from the table
       $table_name = "restaurants";
       $query = "SELECT * FROM $table_name";
       $result = mysqli_query($mysqli, $query);

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
                    # code...
                }
                else{
                    echo "<p>$value</p>";
                }
            }
            echo "</div>";
        }
    } else {
        // Print a message if there are no rows in the result
        echo "<p>No data found in the table.</p>";
    }

       // Close the database connection
       mysqli_close($mysqli);
       ?>
   </main>
</body>
</html>




