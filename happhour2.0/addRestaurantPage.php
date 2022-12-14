<!DOCTYPE html>
<html>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@700&display=swap" rel="stylesheet">

    <title>Add Restaurant</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@700&display=swap');

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
            margin-top: 30px;
            margin-bottom: 30px;
            font-family: 'Palanquin Dark', sans-serif;
        }

        nav a:hover {
            color: #D3D3D3;
        }

        body {
            font-family: sans-serif;
            margin: 0;
        }


        label,
        input {
            display: block;
            border-radius: 10px;
        }

        input checkbox {
            display: inline;
        }

        
        form {
	    margin-top: 10px;
        color: blue;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }
 
        input {
	    border-radius: 10px;
        }

        .container {
	    border-radius: 10px;
	    border: 1px solid black;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 300px;
        }

        input button {
        display: flex;
        justify-content: center;
        align-items: center;    
        }

    </style>
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script>
        $(function () {
            $('#addRestaurantButton').bind('click', function (event) {
                console.log("adding restaurant");
                event.preventDefault();
                var name = $('#restaurantName').val();
                var address = $('#address').val();
                var restaurantImage = $('#restaurantImage').val();
                var deal = $('#deal').val();
                var dayschosen = [];
                var checkboxes = $('input[name="days"]');
                var flag = true;
                checkboxes.filter(":checked").map(function () {
                    dayschosen.push(this.value);
                    console.log(dayschosen);

                }).get()
                var dayschosenString = dayschosen.join(' ');
                /********validate all our form fields***********/
                /* restaurantName field validation  */
                if (name == "") {
                    $('#restaurantName').css('border-color', 'red');
                    alert('The restaurant name is empty');
                    flag = false;
                }
                if (deal == "") {
                    $('#deal').css('border-color', 'red');
                    alert('deal is empty');
                    flag = false;
                }

                if (address == "") {
                    $('#address').css('border-color', 'red');
                    flag = false;
                    alert('address is empty');
                }

                if (dayschosen == "") {
                    alert('No days chosen');
                    flag = false;
                }

                if (flag == true) {
                    $.ajax({
                        type: 'POST',
                        url: 'addRestaurant.php',
                        dataType: 'json',
                        data: 'restaurantName=' + name + '&address=' + address + '&deal=' + deal + '&dayschosen=' + dayschosenString + '&restaurantImage=' + restaurantImage,
                        success: function (response) {
                            console.log(response);
                            if (response.restaurantAdded) {
                                alert(response.text);
                            } else {
                                alert(response.text);
                            }
                        }
                    });
                }
            });
        });
    </script>
</head>

<body>
    <nav>
        <!--HAPPY HOUR LOGO jw-->
        <img src="./happyhourlogo.png" width='100px' height='100px' alt='image'>
        <a href="./home.php">HOME</a>
        <a href="./favoritesPage.php">FAVORITES</a>
        <a href="./addRestaurant.html">ADD DEAL</a>
        <a href="./logout.php">LOGOUT</a>

    </nav>



    <div class = "container">
    <form name="addRestaurant">
        <label for="restaurantName">Name of Restaurant</label>
        <input type="text" name="restaurantName" id="restaurantName">
        <label for="restaurantImage">Image Link</label>
        <input type="text" name="restaurantImage" id="restaurantImage">
        <label for="address">Address of Restaurant</label>
        <input type="text" name="address" id="address">
        <label for="deal">Deal or Promotion</label>
        <input type="text" name="deal" id="deal">
        <label for="days">Select the days of the week promo is active:</label><br>
        <input type="checkbox" name="days" value="MON">Monday<br>
        <input type="checkbox" name="days" value="TUES">Tuesday<br>
        <input type="checkbox" name="days" value="WED">Wednesday<br>
        <input type="checkbox" name="days" value="THUR">Thursday<br>
        <input type="checkbox" name="days" value="FRI">Friday<br>
        <input type="checkbox" name="days" value="SAT">Saturday<br>
        <input type="checkbox" name="days" value="SUN">Sunday<br>
        <input type="button" value="Submit" id="addRestaurantButton">
    </form>
    </div>
</body>

</html>