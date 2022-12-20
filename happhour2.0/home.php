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

    //code to open and close sidebar
    function openSidebar() {
      document.getElementById("mySidebar").style.width = "250px";
    }
    
    function closeSidebar() {
      document.getElementById("mySidebar").style.width = "0px";
    }

    </script>

<!--Google Map API-->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPFZlspqE_qxNzcOSHo5p5lwmMmw45zUA&libraries=geometry"></script>
<script type="text/javascript">     

// Store Name[0],delivery[1],Address[2],Delivery Zone[3],Coordinates[4] data from FusionTables pizza stores example
var locations = [
 ["Rincome Restaurant","no","17050 Devonshire St, Northridge, CA","<Polygon><outerBoundaryIs><LinearRing><coordinates>-122.121277,37.386799,0 -122.158012,37.4168,0 -122.158012,37.448151,0 -122.142906,37.456055,0 -122.118874,37.45224,0 -122.107544,37.437793,0 -122.102737,37.422526,0 -122.113037,37.414618,0 -122.121277,37.386799,0   </coordinates></LinearRing></outerBoundaryIs></Polygon>","34.257191838147726,-118.50406390215346","http://maps.google.com/mapfiles/ms/icons/blue.png"],
 ["Maru Ramen","no","9035 Reseda Blvd, Northridge, CA","<Polygon><outerBoundaryIs><LinearRing><coordinates>-122.200928,37.438611,0 -122.158012,37.4168,0 -122.158012,37.448151,0 -122.142906,37.456055,0 -122.144623,37.475948,0 -122.164192,37.481125,0 -122.189255,37.478673,0 -122.208481,37.468319,0 -122.201271,37.438338,0 </coordinates></LinearRing></outerBoundaryIs></Polygon>","34.234705576354685,-118.53646034834487","http://maps.google.com/mapfiles/ms/icons/purple.png"],
 ["Gen Korean BBQ House","no","10151 Reseda Blvd, Northridge, CA","<Polygon><outerBoundaryIs><LinearRing><coordinates>-122.304268,37.516534,0 -122.300835,37.505096,0 -122.262383,37.481669,0 -122.242813,37.502917,0 -122.244186,37.534232,0 -122.269249,37.550021,0 -122.291222,37.545122,0 -122.302895,37.537499,0 -122.304268,37.516534,0 </coordinates></LinearRing></outerBoundaryIs></Polygon>","34.255394810874975,-118.53725534448034","http://maps.google.com/mapfiles/ms/icons/red.png"],
 ["Chilis","yes","9200 Reseda Blvd, Northridge, CA","<Polygon><outerBoundaryIs><LinearRing><coordinates>-122.304268,37.516534,0 -122.348557,37.538044,0 -122.359886,37.56363,0 -122.364006,37.582405,0 -122.33654,37.589207,0 -122.281609,37.570433,0 -122.291222,37.545122,0 -122.302895,37.537499,0 -122.304268,37.516534,0 </coordinates></LinearRing></outerBoundaryIs></Polygon>","34.23774217410968,-118.53542124915504","http://maps.google.com/mapfiles/ms/icons/green.png"], 
 ["Buffalo Wild Wings","yes","9301 Tampa Ave, Northridge, CA","<Polygon><outerBoundaryIs><LinearRing><coordinates>-122.121277,37.386799,0 -122.158012,37.4168,0 -122.158012,37.448151,0 -122.142906,37.456055,0 -122.118874,37.45224,0 -122.107544,37.437793,0 -122.102737,37.422526,0 -122.113037,37.414618,0 -122.121277,37.386799,0 </coordinates></LinearRing></outerBoundaryIs></Polygon>","34.23862674988454,-118.55607707331743","http://maps.google.com/mapfiles/ms/icons/yellow.png"]  
];

var geocoder = null;
var map = null;
var customerMarker = null;
var gmarkers = [];
var closest = [];

function initialize() {
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map'), 
        {       
            zoom: 9,       
            center: new google.maps.LatLng(52.6699927, -0.7274620),       
            mapTypeId: google.maps.MapTypeId.ROADMAP     
        });      
  var infowindow = new google.maps.InfoWindow();      
  var marker, i;      
  var bounds = new google.maps.LatLngBounds();
  document.getElementById('info').innerHTML = "Found "+locations.length+" Restaurants near Northridge, CA<br>";
  for (i = 0; i < locations.length; i++) {         
            var coordStr = locations[i][4];
	    var coords = coordStr.split(",");
	    var pt = new google.maps.LatLng(parseFloat(coords[0]),parseFloat(coords[1]));
            bounds.extend(pt);
            marker = new google.maps.Marker({         
                            position: pt,         
                            map: map,
			    icon: locations[i][5],
                            address: locations[i][2],
                            title: locations[i][0],
                            html: locations[i][0]+"<br>"+locations[i][2]
                            });                              
            gmarkers.push(marker);
            google.maps.event.addListener(marker, 'click', (function(marker, i) {         return function() 
            {           infowindow.setContent(marker.html);
                        infowindow.open(map, marker);         
            }       
        })
        (marker, i));     
    }
    map.fitBounds(bounds);   

}

      function codeAddress() {
        var numberOfResults = 14;
        var address = document.getElementById('address').value;
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
	    if (customerMarker) customerMarker.setMap(null);
            customerMarker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
	    closest = findClosestN(results[0].geometry.location,numberOfResults);
            closest = closest.splice(0,numberOfResults);
            calculateDistances(results[0].geometry.location, closest,numberOfResults);
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }

function findClosestN(pt,numberOfResults) {
   var closest = [];
   document.getElementById('info').innerHTML += "processing "+gmarkers.length+"<br>";
   for (var i=0; i<gmarkers.length;i++) {
     gmarkers[i].distance = google.maps.geometry.spherical.computeDistanceBetween(pt,gmarkers[i].getPosition());
     document.getElementById('info').innerHTML += "process "+i+":"+gmarkers[i].getPosition().toUrlValue(6)+":"+gmarkers[i].distance.toFixed(2)+"<br>";
     gmarkers[i].setMap(null);
     closest.push(gmarkers[i]);
   }
   closest.sort(sortByDist);
   return closest;
}

function sortByDist(a,b) {
   return (a.distance- b.distance)
}
     
function calculateDistances(pt,closest,numberOfResults) {
  var service = new google.maps.DistanceMatrixService();
  var request =    {
      origins: [pt],
      destinations: [],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    };
  for (var i=0; i<closest.length; i++) {
    request.destinations.push(closest[i].getPosition());
  }
  service.getDistanceMatrix(request, function (response, status) {
    if (status != google.maps.DistanceMatrixStatus.OK) {
      alert('Error was: ' + status);
    } else {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
      var outputDiv = document.getElementById('side_bar');
      outputDiv.innerHTML = '';

      var results = response.rows[0].elements;
      for (var i=0; i<closest.length;i++) {
         results[i].title = closest[i].title;
         results[i].address = closest[i].address;
	 results[i].idx_closestMark = i;
      }
      results.sort(sortByDistDM);
      for (var i = 0; ((i < numberOfResults) && (i < closest.length)); i++) {
        closest[i].setMap(map);
        outputDiv.innerHTML += "<a href='javascript:google.maps.event.trigger(closest["+results[i].idx_closestMark+"],\"click\");'>"+results[i].title + '</a><br>' + results[i].address+"<br>"
            + results[i].distance.text + ' appoximately '
            + results[i].duration.text + '<br><hr>';
      }
    }
  });
}
function sortByDistDM(a,b) {
   return (a.distance.value- b.distance.value)
}

google.maps.event.addDomListener(window, 'load', initialize);
</script> 


</head>
<body>
    <nav>
        <!--HAPPY HOUR LOGO-->
        <img src="./happyhourlogo.png" width='100px' height='100px' alt='image'>
        <a href="./home.php">HOME</a>
        <a href="./favoritesPage.php">FAVORITES</a>
        <a href="./addRestaurantPage.php">ADD DEAL</a>

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
    
    <!--Google Map API-->
    <table border="1"><tr><td>
     <div id="map" style="height: 600px; width:800px;"></div>
    </td><td>
     <div id="side_bar"></div>
    </td></tr></table>
    <input id="address" type="text" value="Northridge, CA">
    <input type="button" value="Search" onclick="codeAddress();">
    <div id="info"></div>
    <script src="http://www.google-analytics.com/urchin.js" type="text/javascript"> 
    </script> 
    <script type="text/javascript"> 
_   uacct = "UA-162157-1";
    urchinTracker();
    </script> 

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




