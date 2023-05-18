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
<link href="https://fonts.googleapis.com/css2?family=Passion+One&display=swap" rel="stylesheet">
<script src="https://kit.fontawesome.com/519591b792.js" crossorigin="anonymous"></script>

    <title>My PHP page</title>
    <style>
        /* Basic styles for the page */
        @import url('https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Passion+One&display=swap');



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

        
    /*picture carousel*/ 
    #slider {
        overflow: hidden;
    }

    #slider figure {
        position: relative;
        width: 500%;
        margin: 0;
        left: 0;
        animation: 20s slider infinite;
    }    

    #slider figure img {
        float: left;
        width: 20%;
        z-index: 1;
    }

    @keyframes slider {
        0% {
            left: 0;
        }
        20% {
            left: 0;
        }
        25% {
            left: -100%;
        }
        45% {
            left: -100%;
        }
        50% {
            left: -200%;
        }
        70% {
            left: -200%;
        }
        75% {
            left: -300%;
        }
        95%{
            left: -300%;
        }
        100%{
            left: -400%;
        }
    }

    /*add textbox on carousel*/
    .textbox{
    position: absolute;
    color: white;
    font-size: 40px;
    display:flex;
    flex-direction:column-reverse;
    font-family: 'Passion One', cursive;
    align-items: center;
    top: 200px;
    left: 500px;
    }

/*sidebar menu*/
@media screen and (max-width: 600px) {
      nav .sidebarBtn{
          display: flex;
      }
      nav .navLinks{
          display: none;
      }
  }
  
.sidebar {
      height: 54%;
      position: fixed;
      top: 0;
      right: 0;
      background-color: #FAF9F6;
      overflow-x: hidden;
      transition: 0.3 ease-in;
      padding-top: 20px;
      border-radius: 30px;
      z-index: 2;
  }
  
  .sidebar a {
      padding: 8px 8px 3px 15px;
      display: block;
      font-size: 25px;
      color: black;
      text-decoration: none;
      text-align: right;
  }
  
  .closeBtn {
      position: absolute;
      top: 0px;
      right: 9px;
  }
  
  .openBtn {
      position: absolute;
      top: 0px;
      right: 10px;
      font-size: 30px; 
      cursor: pointer;
  }
  
  /*logout button*/
  button[class=.logoutBtn]{
      position: absolute;
      top: 12px;
      color: white;
      font-size: 15px;
      margin-left: 0px;
      display: block;
      cursor: pointer;
      border-radius: 5px;
      background-color: black;
  }

  /*solid line divider*/
   hr.solid {
      border-top: 1px solid lightgray;
  }

  /*icon*/
  .fas
  {
    color: #AFA398;
  }

    </style>

    <script src="//code.jquery.com/jquery-1.9.1.js"></script>
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

    //code to open and close sidebar
    function openSidebar() {
      document.getElementById("mySidebar").style.width = "250px";
    }
    
    function closeSidebar() {
      document.getElementById("mySidebar").style.width = "0px";
    }
    </script>

</head>
<body>
    <nav>
        <!--HAPPY HOUR LOGO-->
        <img src="./happyhourlogo.png" width='100px' height='100px' alt='image'>
        <a href="./home.php">HOME</a>
        <a href="./favoritesPage.php">FAVORITES</a>
        <a href="./addRestaurantPage.php">ADD DEAL</a>
        <a href="./accountSettingsPage.php">ACCOUNT SETTINGS</a>

        <!--sidebar-->
        <span class="openBtn" onclick="openSidebar()">&#9776;</span>
        <ul>
        <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closeBtn" onclick="closeSidebar()">&#215;</a>
            <hr class="solid">
            <li><a href="./home.php"><i class="fa-solid fa-house"></i>  Home  <i class="fa-solid fa-chevron-right"></i></a></li>
            <li><a href="./favoritesPage.php"><i class="fa-solid fa-heart"></i> Favorites  <i class="fa-solid fa-chevron-right"></i></a></li>
            <li><a href="./addRestaurantPage.php"><i class="fa-solid fa-utensils"></i> Add Deal <i class="fa-solid fa-chevron-right"></i></a></li>
            <a href="./logout.php"><button class="logoutBtn"><i class="fa-solid fa-right-to-bracket"></i> LOGOUT</button></a> 
        </ul>
        </div>
    </nav>

    <!--PICTURE CAROUSEL-->
    <div id="slider">
        <figure>
            <div class= textbox> Welcome to the Happy Hour App!
                <img src= "./happyhourlogo.png" style= height:300px;width:300px;>
            </div>
            <img src="./hamburger.jpg" height= "800px">
            <img src="./pizza.jpg" height="800px">
            <img src="./wine.jpg" height="800px">
            <img src="./burrito.jpg" height="800px">
            <img src="./hamburger.jpg" height="800px">
        </figure>
    </div> 

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
                    echo "<img src='$value' width='400px' height='400px' border-radius='30px' alt='image'/>";
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




