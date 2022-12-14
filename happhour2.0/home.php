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

        
        /*picture carousel*/ 
        * {box-sizing: border-box}
        .pics 
        {display: none}
        img 
        {vertical-align: middle;}

        /* container */
        .container {
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
        background-color: gray;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
        }

        .currentDot, .dot:hover {
        background-color: #D3D3D3;
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
        let index = 1;
        show(index);

        function increase(n) {
        show(index += n);
        }

        function current(n) {
        show(index = n);
        }

        function show(n) {
        let i;
        let picture = document.getElementsByClassName("pics");
        let dots = document.getElementsByClassName("dot");
        if (n > picture.length) 
        {
            index = 1
        }    
        if (n < 1) {
            index = picture.length
        }
        for (i = 0; i < picture.length; i++) {
        picture[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" currentDot", "");
        }
        picture[index-1].style.display = "block";  
        dots[index-1].className += " currentDot";
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
        
    <div class="pics one">
        <img src="./hamburger.jpg">
    </div>

    <div class="pics">
        <img src="./pizza.jpg">
    </div>

    <div class="pics">
        <img src="./wine.jpg">
    </div>
    
    <div class="autoNavigation">
        <div class="autoBtn1">
        <div class="autoBtn2">
        <div class="autoBtn3">
    </div>
    </div>
        <div class="manualNavigation">
        <label for="r1" class=manualBtn></label>
        <label for="r2" class=manualBtn></label>
        <label for="r3" class=manualBtn></label>
    </div>


</body>
</html>




