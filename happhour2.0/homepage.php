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

    <title>My Home Page</title>
    <style>
        /* Basic styles for the page */
        @import url('https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Passion+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Gurajada&display=swap');

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

/*sidebar*/
.sidebar {
    height: 100%;
    width: 150px;
    position: fixed;
    right: 0;
    top: 0;
    background-color: #eeeeeb;
    overflow-x: hidden;
    padding-top: 80px;
    z-index: 1;
  }
  
  .sidebar a {
    padding: 8px 8px 3px 15px;
    margin: 0;
    display: flex;
    font-size: 25px;
    color: black;
    text-decoration: none;
    align-items: center;
    justify-content: space-between;
    font-family: 'Gurajada', serif;  
    }

  a:hover{
    color: #5334dd;
  }
  
  .closeBtn {
    position: absolute;
    top: 0px;
    right: 0px;
  }
  
  .openBtn {
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 30px; 
    cursor: pointer;
  }
  
  .logoutBtn{
    padding: 4px 4px;
    position: absolute;
    color: black;
    font-size: 13px;
    margin-top: 10px;
    margin-left: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
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
  
  nav a {
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: 'Palanquin Dark', sans-serif;
    color: #fff;
    text-decoration: none;
  }
  
  nav a:hover {
    opacity: 0.8;
  }
  
  @media screen and (max-width: 600px) {
    nav .sidebarBtn{
        display: flex;
    }
    nav .navLinks{
        display: none;
    }
  }
    </style>

    <script >
        //sidebar appears closed by default
        document.getElementById("mySidebar").style.display = "none";

        //open and close sidebar
        function openSidebar() {
        document.getElementById("mySidebar").style.display = "block";   
        }
  
        function closeSidebar() {
        document.getElementById("mySidebar").style.display = "none";
        }
    </script>

    <nav>
        <!--HAPPY HOUR LOGO-->
        <img src="./happyhourlogo.png" width='100px' height='100px' alt='image'>
        <a href="./homepage.php">HOME</a>
        <a href="./search.php">SEARCH</a>
        <a href="./accountsetting.php">SETTINGS</a>

        <!--sidebar-->
        <span class="openBtn" onclick="openSidebar()">&#9776;</span>
        <ul>
        <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closeBtn" onclick="closeSidebar()">&#215;</a>
        <hr class="solid">
        <li><a href="./homepage.php"><i class="fa-solid fa-house"></i>  HOME</a></li>
        <hr class="solid">
        <li><a href="./search.php"><i class="fa-solid fa-heart"></i> SEARCH</a></li>
        <hr class="solid">
        <li><a href="./accountsetting.php"><i class="fa-sharp fa-solid fa-gear"></i> SETTINGS</a></li>
        <hr class="solid">
        <li><a href="./aboutus.php"><i class="fa-solid fa-face-smile"></i> ABOUT US</a></li>
        <hr class="solid">
        <a href="./logout.php"><button class="logoutBtn"> LOGOUT</button></a> 
        </ul>
        </div>
        <!--end of sidebar-->
    </nav>
</head>
<body>
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
</body>
</html>




