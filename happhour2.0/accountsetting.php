<?php
        session_start();
        $userid = $_SESSION["userid"];
        $currentuser = $_SESSION["username"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="accountsetting.css">
    <title>Account Settings Page</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial scale=1.0">
    <script src="https://kit.fontawesome.com/519591b792.js" crossorigin="anonymous"></script>
    <script src="//code.jquery.com/jquery-1.9.1.js"></script>
    <script >
        function resetUsername(userid){
            console.log('Resetting username');
            const userField = document.getElementById('newUsername').value
            var request = $.ajax({
                type: 'POST',
                url: 'resetUsername.php',
                dataType: 'json',
                data: 'userid='+userid+'&newUsername='+userField,
                success: function (response) {
                    console.log(response);
                    if (response.usernameReset) {
                        console.log("username reset");
                        alert(response.text);
                    }else{
                        alert(response.text);
                    }
                }

                
            });
            //some code
        }
        function resetPassword(userid){
            console.log('Resetting password');
            const currentPassword = document.getElementById('currentPassword').value
            const newPassword = document.getElementById('password').value
            var request = $.ajax({
                type: 'POST',
                url: 'resetPassword.php',
                dataType: 'json',
                data: 'userid='+userid+'&currentPassword='+currentPassword+'&newPassword='+newPassword,
                success: function (response) {
                    console.log(response);
                    if (response.usernameReset) {
                        console.log("password reset");
                        alert(response.text);
                    }else{
                        alert(response.text);
                    }
                }

                
            });
            //some code
        }

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
    <!--sidebar-->
    <span class="openBtn" style="color: #ffffff" onclick="openSidebar()">&#9776;</span>
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
  <div class="entirety">
    <div class="settings-page">
     <div class="settings-container">
        <img src = "happyhourlogo2.PNG" width="300px">
        
        <h1 class="page-title">Account Settings</h1>  

         <button class="settings-title">Change Username</button>
          <div class="form my-form">
           <?php
           echo "<p>Current Username: $currentuser</p>";
           ?>
           <input id="newUsername" name="newUsername" placeholder="new username" type="text" class="form-control" autocomplete="new username"  value="">
            <div class="form-submit">
             <button class="btn button full" <?php echo "onclick='resetUsername($userid);'"; ?>>Update</button>
            </div> <!--end of "form-submit"-->
          </div> <!--end of "form my-form"-->

         <button class="settings-title">Change Password</button>
          <div class="form my-form">
           <div class="form-group">
            <div class="input-group">
             <input id="currentPassword" name="currentPassword" placeholder="old password" type="password" class="form-control" autocomplete="Old Password" value="">
             <span class="focus-input"></span>
            </div> <!--end of "input-group"-->
           </div> <!--end of "form-group"-->
             <div class="form-group">
              <div class="input-group">
               <input id="password" name="password" placeholder="new password" type="password" class="form-control" autocomplete="New Password" value="">
               <span class="focus-input"></span>
              </div> <!--end of "input-group"-->
             </div> <!--end of "form-group"-->
               <div class="form-submit right">
                <button class="btn button full" <?php echo "onclick='resetPassword($userid);'"; ?>>Update</button>
               </div> <!--end of "form-submit right"-->
          </div> <!--end of "form my-form"-->

        <!-- <div class="img-upload-container"> -->
         <!-- <button class="settings-title">Change Profile Photo</button> -->
         <!-- <div class="form my-form">
          <label class="img-upload btn btn-bwm" style="background-image: url(&quot;/profile-placeholder.jpg&quot;);">
          <input type="file" accept=".jpg, .png, .jpeg, .gif" value="">
          </label>
           <div class="img-preview-container">
            <div class="img-preview" style="background-image: url('http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png');"></div>
           </div> end of "img-preview-container" -->
        <!-- </div> end of "img-upload-container" -->
        </div> <!--end of "form my-form"-->

    </section> <!--end of "settings-container"-->
    </div> <!--end of "settings-page"-->   
  </div> <!--end of "entirety"-->

    <script>
    var accordian = document.getElementsByClassName("settings-title");
    
    for (i = 0; i < accordian.length; i++) {
     accordian[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var tab = this.nextElementSibling;
     if (tab.style.maxHeight) {
      tab.style.maxHeight = null;
     } else {
      tab.style.maxHeight = tab.scrollHeight + "px";
     } 
    });
    }

    </script>
 </body>
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
</html>