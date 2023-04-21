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
        var user = ['<u>Faith P.', '<u>Mike D.', '<u>Jen M.']
        var date = ['4/21/2022', '4/16/2023', '1/29/2023']
        var rating = ['5', '1', '1']
        var comment = ['<i>"I love the mobile order booths, very accessible for me to do self checkout and take the orders out once you get called."</i>', '<i>"This place sucks. I just went to order breakfast through the drive thru. I asked for "bacon egg and cheese biscuits". You want to know what I got? sausage biscuits with no egg or cheese. Not sure how my bacon egg and cheese got translated into sausage. I called and no one is picking up the phone."</i>', '<i>"Every time I come to this location, the manager is always rude or arguing with elder customers. That ain&#8217t right...she&#8217ll be an elder herself one day, and I hope it&#8217s not too late before she realizes that our elders deserve to be treated well."</i>']
  
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
      } else {
        clear();
      }
      
    if (clicksOn == "McDonalds"){
        var user = ['<u>Faith P.', '<u>Mike D.', '<u>Jen M.']
        var date = ['4/21/2022', '4/16/2023', '1/29/2023']
        var rating = ['5', '1', '1']
        var comment = ['<i>"I love the mobile order booths, very accessible for me to do self checkout and take the orders out once you get called."</i>', '<i>"This place sucks. I just went to order breakfast through the drive thru. I asked for "bacon egg and cheese biscuits". You want to know what I got? sausage biscuits with no egg or cheese. Not sure how my bacon egg and cheese got translated into sausage. I called and no one is picking up the phone."</i>', '<i>"Every time I come to this location, the manager is always rude or arguing with elder customers. That ain&#8217t right...she&#8217ll be an elder herself one day, and I hope it&#8217s not too late before she realizes that our elders deserve to be treated well."</i>']
  
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

