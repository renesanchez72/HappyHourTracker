const searchArea = document.querySelector(".userInput");
const inputBox = searchArea.querySelector("input");
const suggBox = searchArea.querySelector(".searchBox");
const icon = searchArea.querySelector(".icon");
var text = document.getElementById('text');
const tabBtn = document.querySelectorAll('.tabBtn');
const foodBox = document.querySelectorAll('.food');
const catBox = document.querySelectorAll('.foodCat');
const addBox = document.querySelectorAll('.addDeal');

//tab switchover & shows current tab
let active = "categories";
display_tab_pages(active);

function display_tab_pages(currBtn){
  active = currBtn;
  console.log(active);
  foodBox.forEach((foodItem) => {
      if(foodItem.classList.contains(active)){
          foodItem.style.display = "grid";
      } else{
          foodItem.style.display = "none";
      }
  });

  catBox.forEach((foodItem) => {
      if(foodItem.classList.contains(active)){
          foodItem.style.display = "flex"; 
      } else{
          foodItem.style.display = "none";
      }
  });

  addBox.forEach((foodItem) => {
    if(foodItem.classList.contains(active)){
        foodItem.style.display = "block"; 
    } else{
        foodItem.style.display = "none";
    }
});

}

tabBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtn.forEach((btn) => {
        btn.classList.remove("activeBtn"); //reset & remove tab
    });
        display_tab_pages(btn.id);
        btn.classList.add("activeBtn"); //current tab
    });
});

//user types restaurant
inputBox.onkeyup = (e)=>{
    let typesIn = e.target.value; 
    let emptyArr = [];
    if(typesIn){
        emptyArr = suggestions.filter((data)=>{
            //returns user character as LowerCase is filtered
            return data.toLocaleLowerCase().startsWith(typesIn.toLocaleLowerCase());
        });

        emptyArr = emptyArr.map((data)=>{
            //displays restaurant name
            return data = `<li>${data}</li>`;
        });
        
        //autocomplete box shown
        searchArea.classList.add("active"); 
        restaurantList(emptyArr); //function restaurantList([])
        let completeSearchList = suggBox.querySelectorAll("li");
        //sets onclick attribute to each <li> & enables us to select from dropdown option (autocompletesearchlist)
        for (let i = 0; i < completeSearchList.length; i++) {
            completeSearchList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        //autocomplete box hidden
        searchArea.classList.remove("active"); 
    }

    if (typesIn == "Hikari Sushi"){
      var user = ['<u>Sydney A.', '<u>Maya C.', '<u>B B.']
      var date = ['1/23/2023', '1/15/2023', '2/3/2023']
      var rating = ['5', '5', '4']
      var comment = ['<i>"Awesome service from Amber and Lesley! Good food as always! Been going here since the pandemic and food quality is still the same!!"</i>', '<i>"The best sushi spot in the valley! Best service, food, and environment. (Come on your birthay, you won&#8217t regret it) THANK YOU LESLEY FOR TAKING CARE OF US"</i>', '<i>"The food was great, the new server was very personable and quick, we were seated fast and efficiently. Fish tasted very fresh as well. Would recommend. Servers name was Tristan highly recommend"</i>']

      var table =
      '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
      for(var i=0; i<user.length; i++){
      table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
      }
      table+='</tbody></table>';
      text.innerHTML = '<a href="https://www.yelp.com/biz/hikari-sushi-chatsworth-2" title="Hikari Sushi" target=_blank>Hikari Sushi</a>' + table;
    } else {
      clear();
    }

    if (typesIn == "McDonalds"){
        var user = ['<u>Conor B.', '<u>Mike D.', '<u>Jen M.']
        var date = ['3/29/2023', '4/16/2023', '1/29/2023']
        var rating = ['3', '1', '1']
        var comment = ['<i>"This location is fine. The remodel they did a few years ago makes it look nice & welcoming. However, what kills it is just the experience you will inevitably have here. If you come anywhere near a major meal time, the drive thru gets backed up. Even if you don&#8217t want to go through there, that backup affects your ability to move around the parking lot (or even get in/out of it!) It often even spills out into affecting people trying to visit other businesses in the center such as the Vons. It&#8217s so annoying. Don&#8217t even bother coming in via the Nordhoff driveway. Inside, as mentioned, it looks nice. However, it&#8217s always crowded. There is always bunch of people who have ordered via the kiosk just waiting around for their order to the point where you don&#8217t know if there is a line to order or to get your order or both. And then there is very little indoor seating. I think they banked on people post pandemic getting takeout vs. dine in. That&#8217s not always the case. Not to mention I can&#8217t tell you how many times I&#8217ve come in to see CSUN students sitting around doing homework & such at a table with no part of their order still on the table. They&#8217re just using the place as their local study hall or whatever without a care in the world for all the other customers who want to enjoy their meal at a table vs. in their car/at home. Food itself? It&#8217s fine. I see people complaining things are dry so maybe I&#8217ve just gotten lucky. I admittedly don&#8217t come to this location a lot because of the reasons mentioned above, but my meals have always been hot, well cooked, and provided to me fast. I just try & come here on &#8217off hours&#8217 to avoid basically everyone else coming."</i>', '<i>"This place sucks. I just went to order breakfast through the drive thru. I asked for "bacon egg and cheese biscuits". You want to know what I got? sausage biscuits with no egg or cheese. Not sure how my bacon egg and cheese got translated into sausage. I called and no one is picking up the phone."</i>', '<i>"Every time I come to this location, the manager is always rude or arguing with elder customers. That ain&#8217t right...she&#8217ll be an elder herself one day, and I hope it&#8217s not too late before she realizes that our elders deserve to be treated well."</i>']
  
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/mcdonalds-northridge-3" title="McDonalds" target=_blank>McDonalds</a>' + table;
    } else {
      clear();
    }
}

//user selects restaurant option from dropdown
function select(element){
    let clicksOn= element.textContent;
    inputBox.value = clicksOn;

    if (clicksOn== "Hikari Sushi"){
        var user = ['<u>Sydney A.', '<u>Maya C.', '<u>B B.']
        var date = ['1/23/2023', '1/15/2023', '2/3/2023']
        var rating = ['5', '5', '4']
        var comment = ['<i>"Awesome service from Amber and Lesley! Good food as always! Been going here since the pandemic and food quality is still the same!!"</i>', '<i>"The best sushi spot in the valley! Best service, food, and environment. (Come on your birthay, you won&#8217t regret it) THANK YOU LESLEY FOR TAKING CARE OF US"</i>', '<i>"The food was great, the new server was very personable and quick, we were seated fast and efficiently. Fish tasted very fresh as well. Would recommend. Servers name was Tristan highly recommend"</i>']

        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/hikari-sushi-chatsworth-2" title="Hikari Sushi" target=_blank>Hikari Sushi</a>' + table;
      }
      
      if (clicksOn == "McDonald's"){
        var user = ['<u>Conor B.', '<u>Mike D.', '<u>Jen M.']
        var date = ['3/29/2023', '4/16/2023', '1/29/2023']
        var rating = ['3', '1', '1']
        var comment = ['<i>"This location is fine. The remodel they did a few years ago makes it look nice & welcoming. However, what kills it is just the experience you will inevitably have here. If you come anywhere near a major meal time, the drive thru gets backed up. Even if you don&#8217t want to go through there, that backup affects your ability to move around the parking lot (or even get in/out of it!) It often even spills out into affecting people trying to visit other businesses in the center such as the Vons. It&#8217s so annoying. Don&#8217t even bother coming in via the Nordhoff driveway. Inside, as mentioned, it looks nice. However, it&#8217s always crowded. There is always bunch of people who have ordered via the kiosk just waiting around for their order to the point where you don&#8217t know if there is a line to order or to get your order or both. And then there is very little indoor seating. I think they banked on people post pandemic getting takeout vs. dine in. That&#8217s not always the case. Not to mention I can&#8217t tell you how many times I&#8217ve come in to see CSUN students sitting around doing homework & such at a table with no part of their order still on the table. They&#8217re just using the place as their local study hall or whatever without a care in the world for all the other customers who want to enjoy their meal at a table vs. in their car/at home. Food itself? It&#8217s fine. I see people complaining things are dry so maybe I&#8217ve just gotten lucky. I admittedly don&#8217t come to this location a lot because of the reasons mentioned above, but my meals have always been hot, well cooked, and provided to me fast. I just try & come here on &#8217off hours&#8217 to avoid basically everyone else coming."</i>', '<i>"This place sucks. I just went to order breakfast through the drive thru. I asked for "bacon egg and cheese biscuits". You want to know what I got? sausage biscuits with no egg or cheese. Not sure how my bacon egg and cheese got translated into sausage. I called and no one is picking up the phone."</i>', '<i>"Every time I come to this location, the manager is always rude or arguing with elder customers. That ain&#8217t right...she&#8217ll be an elder herself one day, and I hope it&#8217s not too late before she realizes that our elders deserve to be treated well."</i>']
  
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/mcdonalds-northridge-3" title="McDonald&#8217s" target=_blank>McDonald&#8217s</a>' + table;
    } else {
      clear();
    }
}

//restaurant dropdown list attach 
function restaurantList(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

function clear(){
  // deletes table and displays no result
  text.innerHTML = "no result found";
}

