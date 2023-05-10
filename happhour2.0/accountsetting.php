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
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
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
        </script>
</head>
 <body>
    <nav>
    <!--sidebar-->
    <span class="openBtn" onclick="openSidebar()">&#9776;</span>
      <ul>
    <div id="mySidebar" class="sidebar">
      <a href="javascript:void(0)" class="closeBtn" onclick="closeSidebar()">&#215;</a>
      <hr class="solid">
      <li><a href="./homepage.php"><i class="fa-solid fa-house"></i>  Home</a></li>
      <li><a href="./search.php"><i class="fa-solid fa-heart"></i> Search</a></li>
      <li><a href="./accountsetting.php"><i class="fa-sharp fa-solid fa-gear"></i> Settings</a></li>
      <li><a href="./aboutus.php"><i class="fa-solid fa-face-smile"></i> About Us</a></li>
      <a href="./logout.php"><button class="logoutBtn"><i class="fa-solid fa-right-to-bracket"></i> LOGOUT</button></a> 
    </ul>
    </div>
    <!--end of sidebar-->
    </nav>

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

        <div class="img-upload-container">
         <button class="settings-title">Change Profile Photo</button>
         <div class="form my-form">
          <label class="img-upload btn btn-bwm" style="background-image: url(&quot;/profile-placeholder.jpg&quot;);">
          <input type="file" accept=".jpg, .png, .jpeg, .gif" value="">
          </label>
           <div class="img-preview-container">
            <div class="img-preview" style="background-image: url('http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png');"></div>
           </div> <!--end of "img-preview-container"-->
        </div> <!--end of "img-upload-container"-->
        </div> <!--end of "form my-form"-->

    </section> <!--end of "settings-container"-->
    </div> <!--end of "settings-page"-->      

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
</html>