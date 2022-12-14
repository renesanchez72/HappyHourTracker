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

        /*centers images jw*/ 
        .logo{
            display: flex;
            align-items: center;
            justify-content: center;
            border-color: black;
            margin: .8px;
        }

    </style>
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script >
        function fav(restaurantid,userid){
            console.log('adding fav');
            console.log(restaurantid);
            console.log(userid);
            var request = $.ajax({
                type: 'POST',
                url: 'favorite.php',
                dataType: 'json',
                data: 'restaurantid='+restaurantid+'&userid='+userid,
                success: function (response) {
                    console.log(response);
                    if (response.favoriteAdded) {
                        console.log("added to favorites");
                        alert('Restaurant added to favorites');
                    }else{
                        alert(response.text);
                    }
                }

                
            });
            //some code
        }
    </script>
</head>
<body>
<nav>
        <a href="./home.php">Home</a>
        <a href="./favoritesPage.php">Favorites</a>
        <a href="./logout.php">logOut</a>
    </nav>

    <!--HAPPY HOUR LOGO jw-->
    <img src="./happyhourlogo.png" width='100px' height='100px' alt='image' class="logo">

    <main>
        <!-- PHP code that retrieves data from the database and displays it in a table -->
        <?php
        session_start();
        $userid = $_SESSION["userid"];
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
                    echo "<img src='$value' width='400px' height='400px' alt='image'/>";
                }elseif ($col == "id") {
                    $restaurantID = $value;
                }
                else{
                    echo "<p>$value</p>";
                }
            }
            echo "<button   onclick='fav($restaurantID,$userid);'>Favorite</button>";
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




