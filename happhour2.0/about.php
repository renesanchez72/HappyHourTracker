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
            padding-top: 10px;
            padding-left: 10px;
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

    /*Footer*/
    *{
      padding: 0;
      margin: 0;
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
      font-size: 20px;
      font-family: 'Gurajada', serif;  
    }

    .contact p{
      display: block;
      font-family: 'Gurajada', serif;  
      font-size: 20px;
    }

    .socials i{
      font: 20px;
      margin: 5px;
      cursor: pointer;
      color: white;
    }

    .about-section {
      padding: 50px 0;
      background-color: #5334dd;
      color: white;
      text-align: center;
    }

    .about-section h2 {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 20px;
      font-family: 'Gurajada', serif;  
    }

    .about-section p {
      font-size: 18px;
      line-height: 1.5;
    }

    .about-section p:last-child {
      margin-bottom: 0;
    }

    .about-section a {
      color: white;
      text-decoration: underline;
    }

    .about-section a:hover {
      text-decoration: none;
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
        <a href="./about.php"><u>About</u></a>
        <a href="./search.php"><u>Search Now</u></a>
        <a href="./logout.php">Logout</a>
    </nav>
</head>
<body>
    <div class="about-section">
      <h2>About Happy Hour Tracker</h2>
      <p>Happy Hour Tracker is a place to find the best deals around. We are a community-led platform where users can discover and share the latest happy hour specials in their area.</p>
      <p>Our mission is to connect people with great happy hour experiences and help them save money while enjoying their favorite drinks and food.</p>
      <p>Join our community today and start exploring the best happy hour deals near you!</p>
      <p><a href="./search.php">Search Now</a></p>
    </div>
     
    <!--footer-->
    <div class="footer">
      <div class="siteLinks">
        <h3>SITE LINKS</h3>
        <a href="./homepage.php">Home</a>
        <a href="./about.php">About Us</a>
        <a href="./search.php">Search</a>
        <a href="./accountsetting.php">Settings</a>
      </div>

      <div class="contact">
        <h3>CONTACT US</h3>
        <p><i class="fa-solid fa-phone"></i> +1-800-777-7777<br><i class="fa-solid fa-envelope"></i> help@happyhour.com<br>
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
