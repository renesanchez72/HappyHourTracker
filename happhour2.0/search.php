<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content = "IE-edge">
    <title>Search Page</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="search.css">
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
          <button type="button" class="tabBtn" id="addRest">ADD DEAL</button>
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
              echo "<a href='https://www.yelp.com/biz/bar-louie-northridge-fashion-center-northridge-2' target='_blank'><p>$rest_name</p></a>";
              echo "<div class='line'></div>";
              echo "<p>$deal</p>";
              echo "<ul class='stars'>";
              echo "<li><i class='fas fa-star'></i></li>";
              echo "<li><i class='fas fa-star'></i></li>";
              echo "<li><i class='fas fa-star'></i></li>";
              echo "<li><i class='fas fa-star'></i></li>";
              echo "<li><i class='fas fa-star'></i></li>";
              echo "</ul>";
              echo "<p>$daysofweek</p>";
            echo "</div>";
            // echo "<button   onclick='fav($restaurantID,$userid);'>Favorite</button>";
            echo "</div>";
        }
    } else {
        // Print a message if there are no rows in the result
        echo "<p>No data found in the table.</p>";
    }

       // Close the database connection
       mysqli_close($mysqli);
       ?>
          <!--specials #1-->
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

          <!--specials #2--> 
          <!-- <div class="food todaysDeal">
          <div class="picture">
          <img src="yhpizzas.PNG" alt="Yard House">
          </div>
            <div class="info">
            <a href="https://www.yelp.com/biz/yard-house-northridge-4" target="_blank"><p>Yard House</p></a>
            <div class="line"></div>
            <p>1/2 off select appetizer & all pizzas.</p>     
              <ul class="stars">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fa fa-star-half-o"></i></li>
                <li><i class="far fa-star"></i></li>
              </ul>
              <p>Mon-Fri 3pm-6pm</p>       
            </div>  
          </div> -->
          <!--end of specials #2-->

          <!--specials #3--> 
          <!-- <div class="food todaysDeal">
          <div class="picture">
          <img src="tacos.PNG" alt="Sharky's">
          </div>
            <div class="info">
            <a href="https://www.yelp.com/biz/sharky-s-los-angeles-los-angeles" target="_blank"><p>Sharky's Wooodfired Mexican Grill</p></a>
            <div class="line"></div>
            <p>$7.50 for 2 grilled shrimp tacos.</p>     
            <ul class="stars">
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="far fa-star"></i></li>
            </ul>
            <p>Everyday 3pm-5pm</p>
           </div>      
          </div> -->
          <!--end of specials #3-->

          <!--specials #4--> 
          <!-- <div class="food todaysDeal">
          <div class="picture">
          <img src="dhbeer.PNG" alt="Dog Haus">
          </div>
            <div class="info">
            <a href="https://www.yelp.com/biz/dog-haus-northridge?osq=dog+haus" target="_blank"><p>Dog Haus</p></a>
            <div class="line"></div>
            <p>$2 off draft beer & wine, $3.99 burger, $2.99 sliced sausage, $1.49 tots or fries, $3 PBR 16oz cans.</p>
            <ul class="stars">
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="far fa-star"></i></li>
            </ul>
            <p>Mon-Thurs 3pm-6pm & Sun 3pm-11pm</p>   
           </div>   
          </div> -->
          <!--end of specials #4-->

          <!--specials #5--> 
          <!-- <div class="food todaysDeal">
            <div class="picture">
            <img src="beer.PNG" alt="Brent's Deli">
            </div>
              <div class="info">
              <a href="https://www.yelp.com/biz/brents-deli-northridge-northridge" target="_blank"><p>Brent's Deli</p></a>
              <div class="line"></div>
              <p>$10 signature cocktails, $7 well drinks, $1 off wine, $1 off draft beers.</p>
              <ul class="stars">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fa fa-star-half-o"></i></li>
              </ul>
              <p>Everyday 3pm-6pm</p>
             </div>      
            </div> -->
            <!--end of specials #5-->

          <!--specials #6--> 
          <!-- <div class="food todaysDeal">
          <div class="picture">
          <img src="wings.PNG" alt="Wood Ranch">
          </div>
            <div class="info">
            <a href="https://www.yelp.com/biz/wood-ranch-northridge-northridge" target="_blank"><p>Wood Ranch</p></a>
            <div class="line"></div>
            <p>$2 off small plates: killer buffalo wings, spinach-artichoke dip (1/2), guacamole & chips (1/2), BBQ chicken potato skins (2), baby back ribs (5).</p>    
            <ul class="stars">
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="fas fa-star"></i></li>
              <li><i class="far fa-star"></i></li>
            </ul>
            <p>Mon-Fri 3pm-6pm</p>   
           </div>      
          </div> -->
          <!--end of specials #6-->
          
          <!--specials #7--> 
          <!-- <div class="food todaysDeal">
            <div class="picture">
            <img src="dbdrinks.PNG" alt="Dave Buster">
            </div>
              <div class="info">
              <a href="https://www.yelp.com/biz/dave-and-busters-northridge-2" target="_blank"><p>Dave & Buster's</p></a>
              <div class="line"></div>
              <p>1/2 price cocktails, $2.50 domestic pints, $1 off drafts, $1 off wines by the glass, $3 off bottles of wine.</p>    
              <ul class="stars">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fa fa-star-half-o"></i></li>
                <li><i class="far fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
              </ul>
              <p>Mon-Fri 4pm-7pm</p>   
             </div>      
            </div> -->
            <!--end of specials #7-->

            <!--specials #8--> 
            <!-- <div class="food todaysDeal">
              <div class="picture">
              <img src="sushi.PNG" alt="Aikan Sushi">
              </div>
                <div class="info">
                <a href="https://www.yelp.com/biz/aikan-sushi-northridge" target="_blank"><p>Aikan Sushi</p></a>
                <div class="line"></div>
                <p>$1 sushi and beer.</p>
                <ul class="stars">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <p>Mon-Thurs 3pm-5pm 8pm-closing</p>   
              </div>      
              </div>
              end of specials #8 -->
            </div> <!--end of specials-->

            <!-- add deal -->
            <div class="addDeal">
              <form name="addRestaurant" class="addDeal addRest">
                <img src = "./happyhourlogo2.PNG" class="addDeal">
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
            <div class="foodCat categories" >
             <div class="picture2"><img src="tacotuesday.PNG" alt="taco"></div>
              <div class="overlay">
                <div class="overlayText">View Restaurants</div>
              </div>
            </div>     
            <!--end of category #1-->

            <!--category #2-->
            <div class="foodCat categories" >
              <div class="picture2"><img src="steakhouse.PNG" alt="steak"></div>
                <div class="overlay">
                  <div class="overlayText">View Restaurants</div>
                </div>
            </div> 
            <!--end of category #2-->

            <!--category #3-->
            <div class="foodCat categories" >
              <div class="picture2"><img src="fastfood.PNG" alt="fast food"></div>
                <div class="overlay">
                  <div class="overlayText">View Restaurants</div>
                </div>
            </div>
            <!--end of category #3-->

            <!--category #4-->
            <div class="foodCat categories" >
              <div class="picture2"><img src="asian.PNG" alt="asian"></div>
                <div class="overlay">
                  <div class="overlayText">View Restaurants</div>
                </div>
            </div> 
            <!--end of category #4-->

            <!--category #5-->
            <div class="foodCat categories" >
              <div class="picture2"><img src="bar.PNG" alt="bar"></div>
                <div class="overlay">
                  <div class="overlayText">View Restaurants</div>
                </div>
            </div>
            <!--end of category #5-->
           </div><!--end of category-->
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
    <script src="autocompletesearchlist.js"></script> 
     <script src="search.js"></script> 
  </body>
</html>