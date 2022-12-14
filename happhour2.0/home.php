<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
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

        
        /*picture carousel*/ 
        * {box-sizing: border-box}
        .slides 
        {display: none}
        img 
        {vertical-align: middle;}

        /* container */
        .slideContainer {
        max-width: 1000px;
        position: relative;
        margin: auto;
        }

        /* next button */
        .previous, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 10px;
        color: white;
        transition: 0.6s ease;
        user-select: none;
        }

        /* next button only */
        .next {
        right: 0;
        }

        /* dots */
        .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #D3D3D3;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
        }

        .active, .dot:hover {
        background-color: #gray;
        }

        /* carousel fades */
        .fade {
        animation-name: fade;
        animation-duration: 1.5s;
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

        //PICTURE CAROUSEL jw
        let slideIndex = 1;
        show(slideIndex);

        function increase(n) {
        show(slideIndex += n);
        }

        function current(n) {
        show(slideIndex = n);
        }

        function show(n) {
        let i;
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) 
        {
            slideIndex = 1
        }    
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        }

    </script>
</head>
<body>
    <nav>
        <!--HAPPY HOUR LOGO jw-->
        <img src="./happyhourlogo.png" width='100px' height='100px' alt='image'>
        <a href="./home.php">HOME</a>
        <a href="./favoritesPage.php">FAVORITES</a>
        <a href="./logout.php">LOGOUT</a>
    </nav>

    <!--PICTURE CAROUSEL jw-->
    <div class="slideContainer">

    <div class="slides fade">
    <img src="./hamburger.jpg" style="width:100%">
    </div>

    <div class="slides fade">
    <img src="./pizza.jpg" style="width:100%">
    </div>

    <div class="slides fade">
    <img src="./wine.jpg" style="width:100%">
    </div>

    <a class="previous" onclick="increase(-1)">❮</a>
    <a class="next" onclick="increase(1)">❯</a>
    </div>
    <br>

    <div style="text-align:center">
    <span class="dot" onclick="current(1)"></span> 
    <span class="dot" onclick="current(2)"></span> 
    <span class="dot" onclick="current(3)"></span> 
    </div>

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




