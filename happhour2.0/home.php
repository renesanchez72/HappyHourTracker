<?php
        session_start();
        $userid = $_SESSION["userid"];
?>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
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
            color: gray;
        }
        body {
            font-family: sans-serif;
            margin: 0;
        }

        
        /*picture carousel jw*/ 
        .slider{
            width: 800px;
            height: 500px;
            border-radius: 10px;
            overflow: hidden;
        }

        .picture{
            width: 500%;
            height: 500px;
            display: flex;
        }
        
        .picture input{
            display: none;
        }

        .pics{
            width: 20px;
            transition: 2s;
        }

        .pics img{
            width: 800px;
            height: 500px;
        }

        .manualNavigation{
            position: absolute;
            width: 800px;
            margin-top: -40px;
            display: flex;
            justify-content: center;
        }
        
        .manualBtn{
            border: 1px solid black;
            padding: 5px;
            border-radius: 10px;
            cursor: pointer;
            transition: 1s;
        }       

        .manualBtn:not(:last-child){
            margin-right: 40px;
        }

        .manualBtn:hover{
            background: black;
        }

        #r1:checked ~ .one{
            margin-left: 0;
        }

        #r2:checked ~ .one{
            margin-left: -20%;
        }

        #r3:checked ~ .one{
            margin-left: -40%;
        }
        
        .autoNavigation{
            position: absolute;
            display: flex;
            width: 800px;
            justify-content: center;
            margin-top: 460px;
        }

        .autoNavigation div{
            border: 1px solid black;
            padding 5px;
            border-radius: 10px;
            transition 1s;
        }

        .autoNavigation div:not(:last-child){
            margin-right: 40px;
        }

        #r1:checked ~ .autoNavigation .autoBtn1{
            background: black;
        }

        #r2:checked ~ .autoNavigation .autoBtn2{
            background: black;
        }

        #r3:checked ~ .autoNavigation .autoBtn3{
            background: black;
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
        <!--HAPPY HOUR LOGO jw-->
        <img src="./happyhourlogo.png" width='100px' height='100px' alt='image'>
        <a href="./home.php">HOME</a>
        <a href="./favoritesPage.php">FAVORITES</a>
        <a href="./addRestaurantPage.php">ADD DEAL</a>
        <a href="./logout.php">LOGOUT</a>
        
    </nav>

    <!--PICTURE CAROUSEL jw-->
    <div class="slider">
        <div class="picture">
            <input type="radio" name = "radio-btn" id="r1">
            <input type="radio" name = "radio-btn" id="r2">
            <input type="radio" name = "radio-btn" id="r3">
        </div>
    <div class="pics one">
        <img src="./hamburger.jpg" style="width:100%">
    </div>
    <div class="pics">
        <img src="./pizza.jpg" style="width:100%">
    </div>
    <div class="pics">
        <img src="./wine.jpg" style="width:100%">
    </div>
    
    <div class="autoNavigation">
        <div class="autoBtn1">
        <div class="autoBtn2">
        <div class="autoBtn3">
    </div>

    <div class="manualNavigation">
        <label for="r1" class=manualBtn></label>
        <label for="r2" class=manualBtn></label>
        <label for="r3" class=manualBtn></label>
    </div>
    </div>

    <script type = "text/javascript">
        var counter = 1;
        setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4){
            counter = 1;
        }
        }, 5000);
    </script>

    <main>
        <!-- PHP code that retrieves data from the database and displays it in a table -->
        <?php
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




