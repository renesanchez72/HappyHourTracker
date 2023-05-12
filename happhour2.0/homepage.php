<?php
        session_start();
        $userid = $_SESSION["userid"];
?>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://kit.fontawesome.com/519591b792.js" crossorigin="anonymous"></script>

    <title>My Home Page</title>
    <style>
        /* Basic styles for the page */
        @import url('https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Gurajada&display=swap');

        
        body{
          background-color: black;
        }

        .myNavs {
            display: flex;
            margin-right: auto;
            padding-bottom: 10px;

        }


        .myNavs > :nth-child(1) {
            margin-right: auto; 
        }
        

        .myNavs a {
          font-family: 'Gurajada', serif;  
          font-size: 23px;
          color: white;
          text-decoration: none;
          padding: 10px;

        }
        
        .myNavs a:hover{
          background-color: #5334dd;
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
    </style>

    <nav class="myNavs">
      <img src="./happyhourlogo.png" width='80px' height='80px' alt='image'>
        <a href="./homepage.php"><u>Home</u></a>
        <a href="./about.html"><u>About</u></a>
        <a href="./search.php"><u>Search</u></a>
        <a href="./logout.php">Logout</a>
    </nav>
</head>
<body>
    <!--PICTURE CAROUSEL-->
    <div id="slider">
        <figure>
            <img src="./carouseltxt.png" height= "800px">
            <img src="./pizza.jpg" height="800px">
            <img src="./wine.jpg" height="800px">
            <img src="./hamburger.jpg" height="800px">
            <img src="./carouseltxt.png" height="800px">
        </figure>
    </div> 
</body>
</html>




