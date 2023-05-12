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

          text-shadow:
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px #5334dd,
            0 0 82px #5334dd,
            0 0 92px #5334dd,
            0 0 102px #5334dd,
            0 0 151px #5334dd;
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
        animation: 10s slider infinite;
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

    /*Footer*/
    *{
      box-sizing: border-box;
    }

    .footer{
      width: 100%;
      padding: 100px 15%;
      display: flex;
      color: white;
    }

    .footer div{
      text-align: center;
    }

    .contact{
      flex-grow: 2;
    }

    .footer div h3{
      font-weight: 300;
      margin-bottom: 30px;
      letter-spacing: 1px;
      color: #5334dd;
      font-family: 'Gurajada', serif;  
    }

    .siteLinks a{
      display: block;
      text-decoration: none;
      color: white;
      margin-bottom: 10px;
    }

    .contact p{
      display: block;
    }

    .socials i{
      font: 20px;
      margin: 5px;
      cursor: pointer;
      color: white;
    }

    .copyright{
      color: white;
      display: flex;
      justify-content: center;
      background-color: #5334dd;
      font-family: 'Gurajada', serif;  
      font-size: 20px;
    }
    </style>

    <nav class="myNavs">
      <img src="./happyhourlogo.png" width='80px' height='80px' alt='image'>
        <a href="./homepage.php"><u>Home</u></a>
        <a href="./about.html"><u>About</u></a>
        <a href="./search.php"><u>Search Now</u></a>
        <a href="./logout.php">Logout</a>
    </nav>
</head>
<body>
    <!--PICTURE CAROUSEL-->
    <div id="slider">
        <figure>
            <img src="./welcome.png" height= "800px">
            <img src="./pizza.jpg" height="800px">
            <img src="./wine.jpg" height="800px">
            <img src="./hamburger.jpg" height="800px">
            <img src="./welcome.png" height="800px">
        </figure>
    </div>
    
    <!--footer-->
    <div class="footer">
      <div class="siteLinks">
        <h3>SITE LINKS</h3>
        <a href="./homepage.php">Home</a>
        <a href="./about.html">About Us</a>
        <a href="./search.php">Search</a>
        <a href="./accountsetting.php">Settings</a>
      </div>

      <div class="contact">
        <h3>CONTACT US</h3>
        <p><i class="fa-solid fa-phone"></i> +1-800-777-7777<br><br><i class="fa-solid fa-envelope"></i> help@happyhour.com<br><br>
        <i class="fa-sharp fa-solid fa-house-chimney"></i> 18111 Nordhoff St, Northridge, CA 91330</p>
      </div>

      <div class="socials">
        <h3>SOCIALS</h3>
        <a href="https://twitter.com/HappyHour481" target="_blank"><i class="fa-brands fa-square-twitter fa-xl"></i></a>
        <a href="https://www.instagram.com/thehappyhourapp481/" target="_blank"><i class="fa-brands fa-square-instagram fa-xl"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100092731233530" target="_blank"><i class="fa-brands fa-square-facebook fa-xl"></i></a>
      </div>
    </div>

    <div class="copyright">
      &copy;2022-2023 Happy Hour. All rights reserved.
    </div>
</body>
</html>