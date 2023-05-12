<?php
        session_start();
        $userid = $_SESSION["userid"];
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content = "IE-edge">
    <title>Search Page</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="search.css">
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script>
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
        }
        function unFav(restaurantid, userid) {
            console.log('removing fav');
            console.log(restaurantid);
            console.log(userid);
            var request = $.ajax({
                type: 'POST',
                url: 'removeFavorite.php',
                dataType: 'json',
                data: 'restaurantid=' + restaurantid + '&userid=' + userid,
                success: function (response) {
                    console.log(response);
                    if (response.favoriteRemoved) {
                        console.log("Removed from favorites");
                        alert(response.text);
                    } else {
                        alert(response.text);
                    }
                }
            });
        }
    </script>
    
    <nav>
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
      <section class="searchPage">
      <div class="container">
        <div class="title">
            <h2>Find Amazing Deals Near You.</h2>
        </div>

        <div class="tabs">
          <button type="button" class="tabBtn activeBtn" id="categories">CATEGORIES</button>
          <button type="button" class="tabBtn" id="todaysDeal">SPECIAL DEALS</button>
          <button type="button" class="tabBtn" id="addDeal">ADD DEAL</button>
          <button type="button" class="tabBtn" id="favs">FAVORITE DEALS</button>
        </div>
        
        <div class="specials">
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
              
            foreach ($row as $col => $value) {
                if ($col == "image") {
                  $image = $value;
                }elseif ($col == "id") {
                    $restaurantID = $value;
                }elseif ($col == "name"){
                    // echo "<p>$value</p>";
                    $rest_name = $value;
                }elseif ($col == "address") {
                  # code...
                  $address = $value;
                }elseif ($col == "deal") {
                  # code...
                  $deal = $value;
                }elseif ($col == "daysofweek") {
                  # code...
                  $daysofweek = $value;
                }
            }

            echo "<div class='food todaysDeal'>";
              echo "<div class='picture'>";
              echo "<img src='$image' alt='Restraunt Image'>";
              echo "</div>";
              echo "<div class='info'>";
              echo "<div class='name'>";
              echo "$rest_name";
            echo "</div>";
              echo "<div class='line'></div>";
              echo "<div class='description'>";
              echo "<p>$deal</p>";
            echo "</div>";
              echo "<ul class='stars'>";
              echo "<li><i class='fas fa-star'></i></li>";
              echo "<li><i class='fas fa-star'></i></li>";
              echo "<li><i class='fas fa-star'></i></li>";
              echo "<li><i class='fas fa-star'></i></li>";
              echo "<li><i class='fas fa-star'></i></li>";
              echo "</ul>";
              echo "<p>$daysofweek</p>";
              echo "<button class='btn' onclick='fav($restaurantID,$userid);'>Favorite deal</button>";
            echo "</div>";
            echo "</div>";
        }
    } else {
        // Print a message if there are no rows in the result

    }
       // Close the database connection
       mysqli_close($mysqli);
       ?>
<!-- PHP code that retrieves data from the database and displays it in a table -->
        <?php
        // Connect to the database
        $mysqli = require __DIR__ . "/database.php";

        $table = "user";
        $sql = sprintf("SELECT favorites FROM user
        WHERE id = '%s'",
            $mysqli->real_escape_string($userid)
        );
        if (!$result = $mysqli->query($sql)) {
            die(
                json_encode(
                    array(
                        'favoriteAdded' => false,
                        'text' => "'Mysql error: ' . $mysqli->error"
                    )
                )
            );
            exit;
        }
        ;
        if (!$row = mysqli_fetch_assoc($result)) {
            die(
                json_encode(
                    array(
                        'favoriteAdded' => false,
                        'text' => "'Mysql error: ' . $mysqli->error"
                    )
                )
            );
            exit;
        }
        ;
        // Append a new value to the values column
        // split into an array and split at each comma 
        $values = explode(",", $row["favorites"]);

        foreach ($values as $restaurantID) {
            $table_name = "restaurants";
            $query = "SELECT * FROM $table_name WHERE id = $restaurantID";
            $result = mysqli_query($mysqli, $query);
            // if no favorites print out they aint nuthin
            if (!$result || mysqli_num_rows($result) == 0) {
                echo "<p>No data found in the table.</p>";
                exit;
            }
            if (mysqli_num_rows($result) > 0) {
                // Store the data in an array
                $data = [];
                while ($row = mysqli_fetch_assoc($result)) {
                    $data[] = $row;
                }

    // Generate HTML code for each row of data
    foreach ($data as $row) {
              
      foreach ($row as $col => $value) {
          if ($col == "image") {
            $image = $value;
          }elseif ($col == "id") {
              $restaurantID = $value;
          }elseif ($col == "name"){
              // echo "<p>$value</p>";
              $rest_name = $value;
          }elseif ($col == "address") {
            # code...
            $address = $value;
          }elseif ($col == "deal") {
            # code...
            $deal = $value;
          }elseif ($col == "daysofweek") {
            # code...
            $daysofweek = $value;
          }
      }

      echo "<div class='favs todaysDeal'>";
        echo "<div class='picture'>";
        echo "<img src='$image' alt='Restraunt Image'>";
        echo "</div>";
        echo "<div class='info'>";
        echo "<div class='name'>";
        echo "$rest_name";
      echo "</div>";
        echo "<div class='line'></div>";
        echo "<div class='description'>";
        echo "<p>$deal</p>";
      echo "</div>";
        echo "<ul class='stars'>";
        echo "<li><i class='fas fa-star'></i></li>";
        echo "<li><i class='fas fa-star'></i></li>";
        echo "<li><i class='fas fa-star'></i></li>";
        echo "<li><i class='fas fa-star'></i></li>";
        echo "<li><i class='fas fa-star'></i></li>";
        echo "</ul>";
        echo "<p>$daysofweek</p>";
        echo "<button class='btn' onclick='unFav($restaurantID,$userid);'>Remove Favorite</button>";
      echo "</div>";
      echo "</div>";
  }
            } else {
                // Print a message if there are no rows in the result
                echo "<div class='food todaysDeal'>";
                echo "<p>no deals favorited</p>";
                echo "</div>";
            }
        }
        // Select all columns from the table
        
        // Close the database connection
        mysqli_close($mysqli);
        ?>
          <!--specials #1 EXAMPLE-->
          <!-- <div class="food todaysDeal">
            <div class="picture">
            <img src="cocktail.PNG" alt="Bar Louie">
            </div>
              <div class="info">
              <a href="https://www.yelp.com/biz/bar-louie-northridge-fashion-center-northridge-2" target="_blank"><p>Bar Louie-Northridge Fashion Center</p></a>
              <div class="line"></div>
              <p>$8 select premium cocktails.</p> 
              <ul class="stars">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
              </ul>
              <p>Mon-Fri 4pm-7pm</p>
            </div>     
          </div> -->
          <!--end of specials #1-->
              <!-- end of specials #8 --> 
            </div> <!--end of specials-->

            <!-- add deal -->
            <div class="addDeal">
              <form name="addRestaurant" class="addDeal addRest">
              <div class="neonFlash">ADD A DEAL</div>
              <label class="addDeal addRest" for="restaurantName">Name of Restaurant</label>
              <input class="addDeal addRest" type="text" name="restaurantName" id="restaurantName"> 
              <label class="addDeal addRest" for="restaurantImage">Image Link</label>
              <input class="addDeal addRest" type="text" name="restaurantImage" id="restaurantImage">
              <label class="addDeal addRest" for="address">Address of Restaurant</label>
              <input class="addDeal addRest" type="text" name="address" id="address">
              <label class="addDeal addRest" for="deal">Deal or Promotion</label>
              <input class="addDeal addRest" type="text" name="deal" id="deal">
              <label class="addDeal addRest" for="days">Select the days of the week promo is active:</label><br>
              <input class="addDeal addRest" type="checkbox" name="days" value="MON">Monday<br>
              <input class="addDeal addRest" type="checkbox" name="days" value="TUES">Tuesday<br>
              <input class="addDeal addRest" type="checkbox" name="days" value="WED">Wednesday<br>
              <input class="addDeal addRest" type="checkbox" name="days" value="THUR">Thursday<br>
              <input class="addDeal addRest" type="checkbox" name="days" value="FRI">Friday<br>
              <input class="addDeal addRest" type="checkbox" name="days" value="SAT">Saturday<br>
              <input class="addDeal addRest" type="checkbox" name="days" value="SUN">Sunday<br>
              <input class="addDeal addRest" type="button" value="Submit" id="addRestaurantButton">
              </form>
            </div>

            <!--category--> 
            <div class="categories">
              <!--category #1-->
              <div class="foodCat categories">
                <div class="picture2"><img src="tacotuesday.PNG" alt="taco"></div>
                  <div class="overlay">
                    <a href="#popupBox">View Restaurants</a>
                  </div>
              </div>
              <div id="popupBox" class="popup">
                <div class="popupContent">
                <!--categories content
              
                bla bla bla
              
                -->
                <div class="food categories">
            <div class="picture">
            <img src="cocktail.PNG" alt="Bar Louie">
            </div>
              <div class="info">
              <a href="https://www.yelp.com/biz/bar-louie-northridge-fashion-center-northridge-2" target="_blank"><p>Bar Louie-Northridge Fashion Center</p></a>
              <div class="line"></div>
              <p>$8 select premium cocktails.</p> 
              <ul class="stars">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
              </ul>
              <p>Mon-Fri 4pm-7pm</p>
            </div>     
          </div> 
                  <a href="#" class="popupClose">&times;</a>
                </div>
              </div>     
              <!--end of category #1-->

              <!--category #2-->
              <div class="foodCat categories" >
                <div class="picture2"><img src="steakhouse.PNG" alt="steak"></div>
                  <div class="overlay">
                    <a href="#popupBox2">View Restaurants</a>
                  </div>
              </div>
              <div id="popupBox2" class="popup">
                <div class="popupContent">
                <!--categories content
              
                bla bla bla
              
                -->
                  <a href="#" class="popupClose">&times;</a>
                </div>
              </div> 
              <!--end of category #2-->

              <!--category #3-->
              <div class="foodCat categories" >
                <div class="picture2"><img src="fastfood.PNG" alt="fast food"></div>
                  <div class="overlay">
                    <a href="#popupBox">View Restaurants</a>
                  </div>
              </div>
              <div id="popupBox" class="popup">
                <div class="popupContent">
                <!--categories content
              
                bla bla bla
              
                -->
                  <a href="#" class="popupClose">&times;</a>
                </div>
              </div> 
              <!--end of category #3-->

              <!--category #4-->
              <div class="foodCat categories" >
                <div class="picture2"><img src="asian.PNG" alt="asian"></div>
                  <div class="overlay">
                    <a href="#popupBox">View Restaurants</a>
                  </div>
              </div>
              <div id="popupBox" class="popup">
                <div class="popupContent">
                <!--categories content
              
                bla bla bla
              
                -->
                  <a href="#" class="popupClose">&times;</a>
                </div>
              </div> 
              <!--end of category #4-->

              <!--category #5-->
              <div class="foodCat categories" >
                <div class="picture2"><img src="bar.PNG" alt="bar"></div>
                  <div class="overlay">
                    <a href="#popupBox">View Restaurants</a>
                  </div>
              </div>
              <div id="popupBox" class="popup">
                <div class="popupContent">
                <!--categories content
              
                bla bla bla
              
                -->
                  <a href="#" class="popupClose">&times;</a>
                </div>
              </div> 
              <!--end of category #5-->
            </div><!--end of category-->
        </div>
      </section> 

    <!-- restaurant autocomplete search bar-->
    <div class="container2">
      <div class="userInput">
        <a href="" target="_blank" hidden></a>
        <div class="icon"><i class="fas fa-search"></i></div>
        <input type="text" placeholder="Find restaurant...">
        <div class="searchBox">
        <!-- this is where list from JS appears -->
        </div>
      </div>
    </div>
    <div id = "text"></div>
    <script src="https://kit.fontawesome.com/519591b792.js" crossorigin="anonymous"></script>
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="autocompletesearchlist.js"></script>
    <script src="addRestaurantPage.js"></script>
    <script src="search.js"></script> 
  </body>
</html>