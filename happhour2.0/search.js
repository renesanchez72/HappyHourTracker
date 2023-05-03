const searchArea = document.querySelector(".userInput");
const inputBox = searchArea.querySelector("input");
const suggBox = searchArea.querySelector(".searchBox");
const icon = searchArea.querySelector(".icon");
var text = document.getElementById('text');
const tabBtn = document.querySelectorAll('.tabBtn');
const foodBox = document.querySelectorAll('.food');
const catBox = document.querySelectorAll('.foodCat');
const addBox = document.querySelectorAll('.addDeal');
const favBox = document.querySelectorAll('.favs');

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

  favBox.forEach((foodItem) => {
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
        foodItem.style.display = "flex"; 
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
    } else if (typesIn == "McDonalds"){
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
    } else if (typesIn == "Jack in the Box"){
        var user = ['<u>Dyann C.', '<u>Bryan M.', '<u>Arelisa D.']
        var date = ['5/2/2022', '11/21/2019', '2/9/2015']
        var rating = ['5', '4', '5']
        var comment = ['<i>"Oreo milkshake is delicious. They always have free or cheap items in the app. Close & convenient location."</i>', '<i>"Love the fast food here I really love it especially the munchie deals and such. I love their Mocha Iced Coffee as well it&#8217s my favorite drink"</i>', '<i>"They always have really great customer service and get my order right.on Oe employee went out of his way to change my order, thanks!!!"</i>']
      
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/jack-in-the-box-northridge-3" title="Jack in the Box" target=_blank>Jack in the box</a>' + table;
    } else if (typesIn == "Chilis"){
        var user = ['<u>The M.', '<u>Elba T.', '<u>Dyann C.']
        var date = ['3/19/2023', '1/26/2023', '7/30/2022']
        var rating = ['5', '4', '5']
        var comment = ['<i>"Food came out very fast.it was very busy but still very fast.not even 10 minutes after we ordered food was out.it was piping hot and soda refill was not even 30 seconds.server was very nice.10"</i>', '<i>"Came in for dinner last night with my friend right after the gym, we had the most delicious and satisfying meal! Hands down to the classic sirloin! And to top it off don&#8217t forget to order the skillet chocolate cookie OMGGGG!! Mouth watering"</i>', '<i>"I got my FREE Chicken Wings today from Chili&#8217s on Chicken  Wing Day! Check the App for coupons like free appetizer, free kids meal or free dessert."</i>']
      
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/chilis-northridge" title="Chilis" target=_blank>Chilis</a>' + table;   
    } else if (typesIn == "Dunkin Donuts"){
        var user = ['<u>Shad A.', '<u>Hippy M.', '<u>Selena P.']
        var date = ['2/19/2023', '10/6/2022', '4/5/2023']
        var rating = ['3', '5', '1']
        var comment = ['<i>"Great prompt cashier services, and the place is clean with enough parking slots, and also easy to locate. The only thing is that, the donuts we ordered were extra hard and stale. I mean, maybe its bc we got it in the afternoon, but still, could&#8217ve been a lot better than that."</i>', '<i>"Great customer service. Came in right before they closed, and they stayed to help me out. I really appreciate the freshness of the donuts, I&#8217ve never had a stale pastry from this location! Very clean and well organized."</i>', '<i>"Bad customer service from this young girl , it&#8217s like she hates working there.  Went in at 10am today , said they ran out of cold brew. This is why Starbucks gets my $."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/dunkin-northridge" title="Dunkin" target=_blank>Dunkin</a>' + table;        
    } else if (typesIn == "Rincome Restaurants"){
        var user = ['<u>Jim B.', '<u>Robin K.', '<u>Jarm A.']
        var date = ['1/18/2023', '12/27/2022', '4/27/2023']
        var rating = ['5', '5', '4']
        var comment = ['<i>"My favorite Thai restaurant. Not fancy, just great food and service. An extensive menu with so many terrific choices. My wife and I shared War Wonton soup and Pad Thai. Everything was great! The portions are large and the prices are reasonable."</i>', '<i>"Rincome was a pleasant experience! This is a Thai restaurant located near northridge. The restaurant has great parking & seating, the workers are super friendly, and food comes out decently quick! My underdog favorite was the cream cheese wontons!! Super delicious! I totally recommend it !"</i>', '<i>"Today is Good Friday, so I ordered some fish soup from Rincome. The soup was well prepared and had lots of fish. I got the mild, and it had a kick. I may do the "not spicy" next time. I also ordered their fillet fish with ginger, and it was good. I like the fact that they give a small salad and rice with the plate."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/rincome-northridge" title="Rincome Restaurants" target=_blank>Rincome Restaurants</a>' + table;        
    } else if (typesIn == "Boba Snow House"){
        var user = ['<u>The B.', '<u>Henry D.', '<u>Alexa R.']
        var date = ['3/7/2023', '11/20/2022', '1/31/2023']
        var rating = ['5', '5', '3']
        var comment = ['<i>"Best boba that&#8217s not 30 mins away. Glad to have it so close to home and always fast service."</i>', '<i>"Best boba in the valley! Always consistent and great and quick service. Our go to spot when we crave boba!"</i>', '<i>"I love this place, but during my last visit they forgot to add the sea salt latte to the top of my drink. Their attempt to "fix it" resulted in my smoothie melted and my latte not layered..."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/boba-snow-house-northridge" title="Boba Snow House" target=_blank>Boba Snow House</a>' + table;        
    } else if (typesIn == "Rococo Ramen"){
        var user = ['<u>Michelle Lopez L.', '<u>Melly M.', '<u>Jasmine H.']
        var date = ['2/22/2023', '4/23/2023', '4/15/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"This place is a gem! The Ramen hair is unbelievable there pork belly is to die for !!! The service is excellent. Everybody is so nice. !!!"</i>', '<i>"Best Ramen in Granada Hills. Delicious and tasty food and appetizers and always satisfies the ramen cravings for us."</i>', '<i>"One of the best Ramens in SoCal. As someone who LOVES ramen - I highly recommend this restaurant. Food is A++ as well as the awesome service."</i>']

        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/rococo-ramen-granada-hills" title="Rococo Ramen" target=_blank>Rococo Ramen</a>' + table;            
    } else if (typesIn == "Outback Steakhouse"){
        var user = ['<u>Jessica M.', '<u>Josh D.', '<u>Cynthia B.']
        var date = ['9/3/2022', '4/9/2023', '2/17/2023']
        var rating = ['3', '5', '5']
        var comment = ['<i>"Came here for my dads birthday and Robert was our server. We ordered the bloomin onion as a started and it was pretty good. Our meals was not the best but honestly the service that Robert provided us really made our experience better. He was very attentive to our needs and had a great personality for the job"</i>', '<i>"Ahmad in Northridge was a great server. Our glasses were never empty amongst other stuff."</i>', '<i>"Excellent food, excellent service. Hanna, my server was fantastic! She checked in regularly to see if I needed anything and immediately responded to any requests. Thank you for the VIP service!!"</i>']         
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/outback-steakhouse-northridge" title="Outback" target=_blank>Outback</a>' + table;        
    } else if (typesIn == "Presidente Restaurant"){
        var user = ['<u>Faten A.', '<u>Stephen Clint P.', '<u>Anthony C.']
        var date = ['8/6/2018', '11/8/2019', '5/12/2018']
        var rating = ['5', '1', '1']
        var comment = ['<i>"Always consistent. Just don&#8217t ask for onions in your fajitas or it would just be all onions lol. My brother gets the giant chicken burrito and has his heart set on that. Everyone is so welcoming and nice, never had a nasty attitude waiter/waitress."</i>', '<i>"The worse Mexican food ever! Go to El Torito instead. The service was great bu the food quality was bad."</i>', '<i>"I got steak and chicken fajitas and they gave me like four pieces of meat. 90% of it was veggies. Next time I want all veggies I&#8217ll order the veggie fajita. Waste of my money"</i>']

        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/presidente-northridge" title="Presidente Restaurant" target=_blank>Presidente Restaurant</a>' + table;        
    } else if (typesIn == "Good Pho You"){
        var user = ['<u>Karla B.', '<u>Rene T.', '<u>Leilani A.']
        var date = ['3/26/2023', '3/19/2023', '1/29/2022']
        var rating = ['5', '5', '5']
        var comment = ['<i>"This is our new favorite Pho spot.  The Pho is always yummy and portions are great . We also like their egg rolls always fresh . They are open late which is a plus . However Sundays they do close early so check the hours."</i>', '<i>"Food is good my son had a meal! First time and live it ! I came here a few time and is till good ! Service is nice the girls are nice beautiful and kind !"</i>', '<i>"My favorite pho spot!! They&#8217re egg rolls are sooo good & their staff is friendly & attentive!! my mom wasn&#8217t really big on pho until i brought her here, now she wants to come every week! its a win win lol!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/good-pho-you-granada-hills" title="Good Pho You" target=_blank>Good Pho You</a>' + table;        
    } else if (typesIn == "Maru Ramen"){
        var user = ['<u>Lucy Z.', '<u>Ethan M.', '<u>Mark Joseph R.']
        var date = ['4/14/2023', '2/5/2023', '11/26/2023']
        var rating = ['5', '5', '4']
        var comment = ['<i>"This place is awesome! So glad to find a delish and close place while traveling to visit family. We&#8217ll definitely be back. I wish they offered thick noodles but the thin was done right, well made and chewy."</i>', '<i>"First time trying Maru Ramen and it was DELICIOUS! Super umami and rich broth and tender pork. The noodles were perfectly cooked. If you&#8217re craving ramen, this is a must try. The employees were friendly and very helpful too."</i>', '<i>"This place serves one of my favorite chasu bowls that I&#8217ve had. There is a good ratio between fatty and lean meat and everything tastes delicious. I would definitely recommend this place."</i>']

        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/maru-ramen-northridge-northridge" title="Maru Ramen" target=_blank>Maru Ramen</a>' + table;        
    } else if (typesIn == "Truman House Tavern"){
        var user = ['<u>Julian L.', '<u>Esmeralda N.', '<u>Ken P.']
        var date = ['4/5/2023', '4/4/2023', '4/13/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Super Chill Vibes A must go! Never a dull moment They always have the Dodger games on. Let&#8217s go Dodgers"</i>', '<i>"Food, drinks and service are great! The ambiance is great. Their Old Fashioned is a must if you&#8217re a whiskey lover...what the heck, even if you&#8217re not, it&#8217s a must have."</i>', '<i>"This place is amazing to grab a few drinks & food ! it&#8217s a great place for a friday night ! the service here is amazing !"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href=" https://www.yelp.com/biz/truman-house-tavern-san-fernando-2" title="Truman House Tavern" target=_blank>Truman House Tavern</a>' + table;        
    } else if (typesIn == "Gen Korean BBQ House"){
        var user = ['<u>Corey C.', '<u>Gabrielle F.', '<u>Joanna J.']
        var date = ['4/14/2023', '4/20/2023', '2/26/2023']
        var rating = ['5', '5', '3']
        var comment = ['<i>"Food is fire  wait to get in wasn&#8217t bad. so many options to try the honey soy beef belly and mango soju was our favorites. Our server Tenzin was very helpful always stocking up the meats. Will def be back"</i>', '<i>"If you go to Gen KBBQ Northridge you better hope you get Danny R. and Connie as servers. They are phenomenal and make the experience unforgettable. Great meat and great vibes, but Connie and Danny certainly enhance the experience. I will sure be coming back."</i>', '<i>"Good food, good service. It was just too much food for my taste, if you go be ready to eat! Down side you come out with your clothes smelling like Korean bbq."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/gen-korean-bbq-house-northridge-2" title="Gen KBBQ" target=_blank>Gen KBBQ</a>' + table;        
    } else if (typesIn == "Applebee's Grill + Bar"){
        var user = ['<u>John H.', '<u>Candice H.', '<u>Rebecca K.']
        var date = ['4/10/2023', '3/10/2023', '2/7/2023']
        var rating = ['4', '1', '5']
        var comment = ['<i>"Second time at this location and we were happy again. The food, the service, and the ambiance were quit good. Not excellent, but pretty decent. All things considered when over the hill it&#8217s nice to know a reliable restaurant to go to."</i>', '<i>"I came in out of the pouring rain for my lunch to Applebee&#8217s.  empty restaurant so no excuse why I waited over 8 minutes for anyone to take me order. So disappointed .  Wasted my time"</i>', '<i>"Just had the best service at the bar the food was amazing the bartender (Stephanie) was also my server and she was so sweet and informative and overall made my experience much better!"</i>']          
        
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/applebees-grill-bar-chatsworth-2" title="Applebees" target=_blank>Applebees</a>' + table;        
    } else if (typesIn == "Buffalo Wild Wings"){
        var user = ['<u>Jared-Cedric F.', '<u>Kaitlyn B.', '<u>Elton M.']
        var date = ['4/18/2023', '4/18/2023', '2/18/2023']
        var rating = ['1', '1', '3']
        var comment = ['<i>"Long ass wait for okay food. and the music is too fucking loud. im not tryna bust a move while i wait 50 min for 8 wings."</i>', '<i>"Buffalo Wild Wings is one of my fav places but this location has such rude employees. They say us and then proceeded to tell us they the kitchen was closed 33 minutes before they close."</i>', '<i>"Food was ok .server was courteous. The place was a mess trash on floor. Empty TV box in aisle apparently from work done earlier. Had to ask to turn music down (server agreed)."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/buffalo-wild-wings-northridge-2" title="Buffalo Wild Wings" target=_blank>Buffalo Wild Wings</a>' + table;        
    } else if (typesIn == "TGI Fridays"){
        var user = ['<u>A R.', '<u>Tatiana S.', '<u>Araks K.']
        var date = ['9/2/2022', '10/25/2022', '9/6/2023']
        var rating = ['1', '5', '4']
        var comment = ['<i>"Worst experience. The artichoke dip was awful and runny. The chicken shrimp skillet was bland and unappetizing. The pasta dish was bland. We came home and felt sick afterwards. The waiter was good too bad the food was awful."</i>', '<i>"The service tonight was amazing and very friendly . Andy with an A  is a very great waiter . Hope to see him again, because his vibe is dope. Thanks Andy."</i>', '<i>"I was coming to TGIF for more then 15 years but now days The food is  so bland and not appetizing, bad service, not coming back ever !!! Hi"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/tgi-fridays-northridge" title="TGI Fridays" target=_blank>TGI Fridays</a>' + table;            
    } else if (typesIn == "Finney's Crafthouse-Porter Ranch"){
        var user = ['<u>Chad S.', '<u>Clint C.', '<u>James V.']
        var date = ['3/30/2023', '4/8/2023', '10/27/2022']
        var rating = ['5', '5', '4']
        var comment = ['<i>"Melissa and Nysia were amazing tonight kept asking us how we were doing and making sure our guava margs were one point!! Thank you, def coming back!"</i>', '<i>"We were a party of 10 the service was fast, the food quality above average. The server was attentive and they had a computer at the table to make it easy for guest to split the checks which is great for large parties. The prices were a little high compared to other similar restaurants but otherwise it was a good place to eat."</i>', '<i>"Wanted a small snack and drink, so we stopped by here. No wait at all  and very friendly service. I really loved their menu selection, cuz all their foods and beers looked so good, I actually had a hard time choosing. I went with the steak taquitos, which had an awesome kick thanks to their chipotle aioli. I loved it! Definitely recommend this place to anyone wanting just a chill place to snack, drink, and hang out!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/finneys-crafthouse-porter-ranch-porter-ranch" title="Finneys Crafthouse" target=_blank>Finneys Crafthouse</a>' + table;        
    } else if (typesIn == "Gus's BBQ"){
        var user = ['<u>Erik A.', '<u>Guy G.', '<u>Marlisa S.']
        var date = ['4/6/2023', '3/29/2023', '4/16/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Great food, great service from Jessica.  Had a small issue manger totally was on it.  Will be back for the great food and the awesome service.  Thanks"</i>', '<i>"Great ambiance and vibe! Friendly down home relaxed atmosphere. Can be crowded on weekends."</i>', '<i>"Food was so yummy and it came out so fast!! The servers were all really nice and they allowed us to move tables without any problems. I liked the overall vibe, pretty loud but only cause it&#8217s always packed!! Loved it here!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/guss-bbq-porter-ranch" title="Gus BBQ" target=_blank>Gus BBQ</a>' + table;       
    } else if (typesIn == "Domino's Pizza"){
        var user = ['<u>Erik A.', '<u>Guy G.', '<u>Marlisa S.']
        var date = ['4/6/2023', '3/29/2023', '4/16/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Great food, great service from Jessica.  Had a small issue manger totally was on it.  Will be back for the great food and the awesome service.  Thanks"</i>', '<i>"Great ambiance and vibe! Friendly down home relaxed atmosphere. Can be crowded on weekends."</i>', '<i>"Food was so yummy and it came out so fast!! The servers were all really nice and they allowed us to move tables without any problems. I liked the overall vibe, pretty loud but only cause it&#8217s always packed!! Loved it here!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/dominos-pizza-northridge" title="Dominos" target=_blank>Dominos</a>' + table;        
    } else if (typesIn == "Chipotle Mexican Grill"){
        var user = ['<u>Diego A.', '<u>Albert K.', '<u>Sahar R.']
        var date = ['2/19/2023', '2/18/2023', '2/3/2023']
        var rating = ['1', '1', '3']
        var comment = ['<i>"Food was just ok. Chips were stale and soaked in oil (worst ones I&#8217ve ever had) I hate that their sour cream is always contaminated by food that falls in it all the time and it also has traces of other sauces in it too."</i>', '<i>"having just one employee to serve, prepare, and handle the cash register while there&#8217s a long line seems to be an ongoing problem with chain restaurants like Chipotle. hope this one employee gets paid at least 25/hr because he does everything. i doubt it tho this location is the worst of all"</i>', '<i>"I actually like the veggie style, but the people there are slow ! The location is kind of comfortable ."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/chipotle-mexican-grill-northridge-2" title="Chipotle" target=_blank>Chipotle</a>' + table;        
    } else if (typesIn == "PokiMX (San Fernando)"){
        var user = ['<u>Anna F.', '<u>Amy L.', '<u>Katsumi M.']
        var date = ['3/9/2023', '9/16/2022', '3/6/2023']
        var rating = ['5', '5', '4']
        var comment = ['<i>"First time eating poke here and it was amazing! It is spacious and inviting. The only thing I would personally recommend is signage like "order here" and "pick up here." I stood near the door for a minute trying to figure out where to order and a worker guided me. The ingredients were super fresh and tasty. I got the spicy tuna and ordered all the toppings on it. It was so tasty and filling! The portion was huge! Very happy with my visit and plan on making more!"</i>', '<i>"I ordered delivery from here yesterday. Food arrived promptly and was delicious. I&#8217ll definitely be re-ordering from here again!"</i>', '<i>"Food was really good, I had the nachos and I really loved the wonton "chips", they were very well served, probably good for 2-3 people."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/pokimx-san-fernando" title="PokiMX" target=_blank>PokiMX</a>' + table;        
    } else if (typesIn == "Bar Louie-Northridge Fashion Center"){
        var user = ['<u>Jazmine D.', '<u>Kassandra T.', '<u>Miriam L.']
        var date = ['4/8/2023', '4/2/2023', '4/22/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Food was amazing and Alexis gave amazing service!!! I would definitely come back with my friends!"</i>', '<i>"A great bar to catch up with friends and have great drinks! Fridays and Saturdays have a lit dj and if alexis is working you are in great hands she is a gem! Can&#8217t recommend this place more !"</i>', '<i>"My friends and I visited and had such a great time! Huge shoutout to our server Yeli! Such great energy and went above and beyond in terms of service and being on top of things! We are excited to come back soon! I ordered the blackened shrimp tacos, a drink recommended by Yeli (which was great) and fries. The food was great and all of us finished every last thing. Super excited to come back!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/bar-louie-northridge-fashion-center-northridge-2" title="Bar Louie" target=_blank>Bar Louie</a>' + table;        
    } else if (typesIn == "Porto's Bakery and Cafe"){
        var user = ['<u>Arturo O.', '<u>Jake P.', '<u>Jackie N.']
        var date = ['3/23/2023', '4/7/2023', '4/1/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"The food was great, sweet. I just bought the new grava rose very delicious, and it has a guava center in it. The sandwiches&#8217 perfect nice cooked cheese was melted.Would recommend ten out of ten The court was perfect, very nice and calming wide open space coffee bar as well. Everything was freshly baked and cooked."</i>', '<i>"Kevin has single handedly given me the best customer service I&#8217ve ever received in my life!!!!"</i>', '<i>"First time there. Vince was very helpful and kind helped us out a lot. They&#8217re breakfast wrap was amazing!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/portos-bakery-and-cafe-northridge" title="Portos" target=_blank>Portos</a>' + table;        
    } else if (typesIn == "Yard House"){
        var user = ['<u>Bobby P.', '<u>Mark L.', '<u>Kelly Q.']
        var date = ['4/9/2023', '4/23/2023', '11/10/2022']
        var rating = ['5', '4', '5']
        var comment = ['<i>"This is my favorite yardhouse by a mile. My sister goes to UCLA and this is our go to spot after any of the big games. In my experience the servers really try under the circumstances of it being a very crowded bar, and nothing is going to be perfect when you have patrons lining out the door. Try their chicken nachos as it&#8217s by far the best plate."</i>', '<i>"Good happy hour menu. Sliders and pizza were good. Great selection of beers. Nice vibe and lots of Televisions."</i>', '<i>"Came here for happy hour and the deals were great! All the appetizers were half off, which was such a steal. Got the poké nachos, and I was pleasantly surprised by how good it was. The fish was delicious and paired perfectly with the seaweed, jalapeño, and truffle toppings. Great service and a really nice ambiance. Would highly recommend!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/yard-house-northridge-4" title="Yard House" target=_blank>Yard House</a>' + table;        
    } else if (typesIn == "Wood Ranch"){
        var user = ['<u>Jeni P.', '<u>Wendy R.', '<u>Kimberly E.']
        var date = ['3/27/2023', '4/25/2023', '3/8/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Find out what night Tommy works and get him as your server.  He was the bomb and makes the absolute, best I&#8217ve ever had, birthday sundae.  I could feel the love. Food is great, love the roasted brussel sprouts and ribs.  Not super thrilled with the tri tip salad. Plenty of parking.  Bathrooms are clean.   If you&#8217re limited on time I would recommend making a reservation. Go Tommy!!"</i>', '<i>"I ordered pulled pork sliders minus the bread and put lettuce inside of it and they were delicious.  I ordered coleslaw with peanuts and that was yummy too!  I serve it was very attentive and a very sweet person who&#8217s always nice when you&#8217re going out for lunch and refilled my husbands drink, and our friends drink many times. We will be back."</i>', '<i>"We had a delicious bbq meal although the restaurant was crowded the wait was comfortable and our server was pleasant and helpful! The bread is beyond delish we love to dip it in the bbq sauce‼the bbq chicken salad was the perfect size and chicken was prepared perfectly the bbq beans were fab as well‼"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/wood-ranch-northridge-northridge" title="Wood Ranch" target=_blank>Wood Ranch</a>' + table;        
    } else if (typesIn == "Los Tres Hermanos Bar & Grill"){
        var user = ['<u>Dianna A.', '<u>Crystal V.', '<u>Mark N.']
        var date = ['2/4/2023', '9/13/2022', '9/18/2022']
        var rating = ['3', '5', '3']
        var comment = ['<i>"This is a hidden gem.  We came here to watch the game.  I love how everyone is on top of their game.  A shout out to the older man passing our chips and salsa.  He is a hard worker.  The margarita and fajitas are the bomb.  Plus, the waitress was nice and took care of us.  This is a friendly place that takes care of their customers... get the fajitas!"</i>', '<i>"I&#8217ve been here several times and have never been disappointed. The micheladas are delicious and the spicy bean dip is to die for! Came here to sit at the bar for some taquitos and chicken soup. The vibe was nice, service was great and the Mexican music was perfect for a Sunday lunch. I will be coming back, i LOVE this San Fernando gem!"</i>', '<i>"The service was pretty slow, but I think it was cause jam packed full of people. The food was actually pretty decent, like a 6/10, but the corn tortillas weren&#8217t the best. All my friends liked their food though and developed the same opinion about the tortillas. All the food did come out at once, which I appreciated, but doesn&#8217t make up for how the food tasted."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/los-tres-hermanos-restaurant-san-fernando" title="Los Tres Hermanos" target=_blank>Los Tres Hermanos</a>' + table;        
    } else if (typesIn == "El Torito"){
        var user = ['<u>Antoinette A.', '<u>Karen C.', '<u>Mateo G.']
        var date = ['3/1/2023', '3/26/2023', '4/8/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"OMG......  El Torito in Northridge is the best ..... Service is amazing Food is hot and their Corn Cake is Fire .......  But From My Mothers Mouth the Bananas fosters was amazing (I&#8217m allergic) but mom is raving about it"</i>', '<i>"Beautiful service. Our waitress Marta, was sweet and kind and made everything go super fast. She constantly checked in on us and made sure to refill our drinks when she noticed they were low! The food was great and the setting was super nice. Amazing service cannot wait to come back"</i>', '<i>"Super Great Service From LIZ!!! Love the food and drinks! She recommended great options and was super nice. Ambiance is fantastic ! Thanks Liz!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/el-torito-northridge" title="El Torito" target=_blank>El Torito</a>' + table;        
    } else if (typesIn == "Fishbowl Poke Co."){
        var user = ['<u>Nohemy M.', '<u>Betty M.', '<u>Mercy Anne C.']
        var date = ['4/1/2023', '9/5/2022', '12/5/2022']
        var rating = ['5', '4', '5']
        var comment = ['<i>"Very delicious, flavorful, fresh and filling poke bowls! Staff is very friendly too!! Love the mural and chill atmosphere. Will visit this place again!"</i>', '<i>"Tried Fishbowl Poke Co with my daughter who is a big Poké fan. We each got the regular bowl. Many items to choose from at a reasonable price. All the ingredients were fresh and tasted great! My picky daughter gave it a . Parking is challenging in that lot especially where it&#8217s located. I would park a little further away and walk to avoid the congestion. Other than that, I&#8217ll be back."</i>', '<i>"Shout-out to whoever was on aux on December 5th around 9pm. I hope you&#8217re okay. The large bowl was on the expensive side but fish is fish. Straight fye.. love the Christmas decorations. Clean place. Chill staff"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/fishbowl-poke-co-northridge-4" title="Fishbowl Poke Co." target=_blank>Fishbowl Poke Co.</a>' + table;        
    } else if (typesIn == "California Pizza Kitchen at Northridge"){
        var user = ['<u>Elton M.', '<u>Jessica M.', '<u>Mane S.']
        var date = ['4/8/2023', '1/31/2023', '3/18/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"We went here for dinner before the movies. Server was good food was good. The only bad thing I noticed was on the wall next to our booth was a big patch of crayon markings on the wall. Would go back"</i>', '<i>"We&#8217ve been here numerous times but this last time was incredible. Thank you FRANK! You were extremely hospitable and entertaining. Frank is hands down the best server we&#8217ve ever had. Our food was great and came in a timely manner. Thank you for a wonderful evening."</i>', '<i>"My kids eat the cauliflower pizza and it&#8217s absolutely delicious...always. I love to get the cauliflower buffalo and it is absolutely delicious and my kids love it too. The salmon is also another great choice."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/california-pizza-kitchen-northridge-5" title="California Pizza Kitchen" target=_blank>California Pizza Kitchen</a>' + table;        
    } else if (typesIn == "Ceviches mariscos estilo Nayarit"){
        var user = ['<u>Margarita L.', '<u>Alejandro L.', '<u>Ariana T.']
        var date = ['3/18/2023', '6/22/2022', '5/13/2023']
        var rating = ['5', '5', '4']
        var comment = ['<i>"Absolutely delicious and authentic mariscos and the nicest crew anywhere. Our server was extremely attentive and really made my mom feel special. The empanadas de camarón were like the ones we&#8217ve had in San Blas, Nayarit and the tostada mixta was yummy. 100% we&#8217re coming back!!"</i>', '<i>"Just found a mariscos gem. This place has a good vibe and the owner was an amazing host. All dishes we tried were savory. Plus the outside atmosphere took me back to the beach!"</i>', '<i>"Came with my Grandparents Saturday at 4ish and it wasn&#8217t that crowded got seated right away ..  I got the Camarones a la cucaracha spicy they were delicious, I wish they could make there on toast. I also order the shrimp empanadas fire the green sauce bomb."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/ceviches-san-fernando-2" title="Ceviches mariscos estillo Nayarit" target=_blank>Ceviches mariscos estillo Nayarit</a>' + table;
    } else if (typesIn == "SUSHIRAW"){
        var user = ['<u>Jake M.', '<u>Emily B.', '<u>C C.']
        var date = ['2/11/2023', '3/9/2023', '11/22/2022']
        var rating = ['5', '3', '5']
        var comment = ['<i>"This is a great place to get sushi! The food is amazing & always tasting fresh. There is lots of good sushi in this area but this place is a stand out. Creative & tasty rolls, very cool atmosphere also. The place can fill up deservingly & the overall atmosphere is cheerful and fun."</i>', '<i>"Really tasty food and good quality ingredients. The restaurant itself was beautiful and had some really cool decor. The staff was a bit cold and mighty."</i>', '<i>"Absolutely amazing I enjoy ordering sushi from SUSHIRAW great customer services definitely eat there"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/sushiraw-granada-hills" title="SUSHIRAW" target=_blank>SUSHIRAW</a>' + table;        
    } else if (typesIn == "Asahi Sushi"){
        var user = ['<u>Bryan E.', '<u>Mo C.', '<u>Sandra L.']
        var date = ['4/9/2023', '4/1/2023', '4/6/2023']
        var rating = ['5', '3', '5']
        var comment = ['<i>"The food is great, definitely enjoy the garlic edamame and recommend the Asahi roll. The snow cone is also delicious! Michael is my favorite server, his energy and helpfulness is always a 11/10. Cool decor in this place :)"</i>', '<i>"Went there for a bite at 10:15 pm on a Saturday, they said they had called last call and closed.  Asked the owner why the website says 11:00.  See picture below.  We were there 45 minutes before closing.  Business should consider updating their hours!"</i>', '<i>"This is my go to place when I&#8217m craving some fresh yummy  sushi . Simply my favorite thank you"</i>']          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/asahi-sushi-granada-hills" title="Asahi Sushi" target=_blank>Asahi Sushi</a>' + table;        
    } else if (typesIn == "Blue Palms Brewhouse"){
        var user = ['<u>Tiffanie S.', '<u>Graciecorn L.', '<u>Tal K.']
        var date = ['2/17/2023', '3/27/2023', '3/28/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Our new favorite place. The food is yummy and drinks are on a rotation. Oh and the music is always on point."</i>', '<i>"Great service, awesome selection of brews and crafted cocktails. Highly recommend for a casual bite"</i>', '<i>"Amazing local pub. Great beers, great pub food and great atmosphere. Lots of beer on rotation and their food is great quality for bar food. New go to spot !"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/blue-palms-brewhouse-los-angeles-4" title="Blue Palms Brewhouse" target=_blank>Blue Palms Brewhouse</a>' + table;        
    } else if (typesIn == "San Fernando Brewing Company"){
        var user = ['<u>Brian D.', '<u>Ezln 2.', '<u>Mei Z.']
        var date = ['11/5/2023', '11/5/2022', '8/14/2022']
        var rating = ['5', '3', '4']
        var comment = ['<i>"Great Craft Beer, excellent service, nice setting to relax and have a cold one. Good friendly place to share with friends and great place to meet new friends!!"</i>', '<i>"The vibe of this place was everything!! I had a cucumber michelada and it was not good IMO. But the staff was super friendly and they did serve us even though they called "last call". I would definitely go again!!"</i>', '<i>"Found out about this place at the Brew at the LA Zoo event where we had the opportunity to enjoy unlimited beer samples with our tickets. Ricky and Rose provided us amazing service and the choices offered from their stand was top notch. Thank you for your great energy!!!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/san-fernando-brewing-company-san-fernando-2" title="San Fernando Brewing Company" target=_blank>San Fernando Brewing Company</a>' + table;        
    } else if (typesIn == "Lucille's Smokehouse Bar-B-Que"){
        var user = ['<u>Ken P.', '<u>Sharon H.', '<u>Rudd N.']
        var date = ['4/24/2023', '2/8/2023', '1/15/2023']
        var rating = ['4', '4', '4']
        var comment = ['<i>"We get take out from this place sometimes, we did so on Saturday the bottom line is that we liked the ribs but the links are hot it&#8217s like it&#8217s full of chili whatever they use they need to tone it down so I would not recommend getting the links unless you like that kind of style that level of spice that could print a hole in your tongue or cheek if that&#8217sthathat&#8217sthat&#8217sthathathat&#8217"</i>', '<i>"It&#8217s good for mass-produced, chain restaurant BBQ. The biscuits with Apple butter are delicious. I have come to just buy biscuits when I get a craving. They also have burnt ends, which can be hard to find at a lot of BBQ places. They can be a bit spicy, but are good. There are lots of options. Service has always been good. It can have a wait and be loud when the get busy, so we try to go during off hours."</i>', '<i>"Had this awesome gift card and at least 7 years not eating at Lucille&#8217s so about time to check it out. Fantastic beef nachos, highly recommended. Deviled eggs looked good but were cold... skipped on heavy drinks but will try some next time. Great service!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/lucilles-smokehouse-bar-b-que-tustin-3" title="Lucilles Smokehouse Bar-B-Que" target=_blank>Lucilles Smokehouse Bar-B-Que</a>' + table;        
    } else if (typesIn == "Lazy Dog Restaurant & Bar"){
        var user = ['<u>Israel A.', '<u>Melissa W.', '<u>Rosemary B.']
        var date = ['4/3/2023', '3/2/2023', '3/28/2023']
        var rating = ['5', '5', '4']
        var comment = ['<i>"Brittany was my server and BOY! Was she fantastic! She greeted us immediately and was so attentive. I felt unbelievably welcome, like I was a part of the lazy dog family. We ordered some food and it came out quickly and made sure we were okay. Her attitude and attention to detail is the reason I will be back. Ask for Brittany!"</i>', '<i>"The Spring tasting event is always fun and cannot wait for this years. On a normal basis, the Mediterranean Bowl is always my go to and very filling"</i>', '<i>"Fried cheese curds!  Need I say more? Okay, how about bacon candy? Lots of tasty choices to satisfy everyone&#8217s tastes"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/lazy-dog-restaurant-and-bar-valencia?osq=lazy+dog+restaurant+%26+bar" title="Lazy Dog" target=_blank>Lazy Dog</a>' + table;        
    } else if (typesIn == "Marci's Sports Bar & Grill"){
        var user = ['<u>David O.', '<u>Christopher B.', '<u>Vicki F.']
        var date = ['2/24/2023', '4/12/2022', '1/28/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Went last night for the 1st time ... food was great I had wings and a burger and they were delicious. Beer was cold and the bartender was gorgeous and was the best!!! Definitely will be back when I&#8217m in the area for work!!!"</i>', '<i>"The food here was super good!   I ordered a few tacos, just to get a taste.  All of them were delicious.  I wasn&#8217t really hungry at the time... simply stopped to get out of the heat and snack a little.  So glad I did.  While the tacos were ridiculously small....  Almost 1 bite small....  They were very good.  Would do again."</i>', '<i>"Went to Marci&#8217s for Steak Night last night and it was amazing. Top quality filet, cooked to perfection and sides were tasty. Great quality for great price!!!!  We will definitely go back."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/marcis-sports-bar-and-grill-santa-clarita" title="Marcis Sports Bar & Grill" target=_blank>Marcis Sports Bar & Grill</a>' + table;        
    } else if (typesIn == "BJ's Restaurant & Brewhouse"){
        var user = ['<u>M J.', '<u>Julie F.', '<u>Shima M.']
        var date = ['2/11/2023', '4/2/2023', '1/12/2023']
        var rating = ['3', '1', '5']
        var comment = ['<i>"I hate to be disappointed again. Knowing the steak will get cooked a little more on transport I always get medium rare but expect medium. Tonight I got my medium rare and it was more like medium well no pink to be found. It wasn&#8217t well done but definitely not what I asked for."</i>', '<i>"I go to different BJs a lot after cheer competitions.. but this one was the  worst one I have been too.. the waiter drops drinks on my sister and leaves to go get napkins and doesn&#8217t come back for like 15 minutes.. then doesn&#8217t refill our drinks at all never comes back to check on us.. tells us the dessert is on him.. it NEVER comes out.. waited for our to go containers never brings them.. you need to do better BJs.."</i>', '<i>"Foods are great, I recommend their beers, Jeremiah red is the best beer I have ever had. Usually servers are nice and if they aren&#8217t, managers are, they come and take care . I was in many branches, if I wanted to rate them, the Glendale is the lowest one, the place is not as cool as other branches, also service is not , and the highest rate goes to Thousands Oaks, then Woodland Hills."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/bjs-restaurant-and-brewhouse-woodland-hills" title="BJs" target=_blank>BJs</a>' + table;        
    } else if (typesIn == "Red Robin Gourmet Burgers and Brews"){
        var user = ['<u>Bruce S', '<u>Paula F.', '<u>Harambe O.']
        var date = ['3/10/2023', '12/23/2023', '1/10/2023']
        var rating = ['4', '3', '5']
        var comment = ['<i>"Dropped in for lunch at our local Red Robin & were seated promptly & had a great server, friendly & gave us time to make up our minds.  Burgers cooked to order medium rare & quite quickly.  Super awesome onion rings. Great location with easy parking on the north end of the Northridge mall."</i>', '<i>"Ended up here because the two restaurants next to it  (Yard House and Wood Ranch) were packed.  The wait was about 10 minutes. In short...Food was decent. Service was good.  Prices  were reasonable. It&#8217s good in a pinch."</i>', '<i>"I really enjoyed the food here, but was mostly impressed by the staff. They hustled! Made sure our food was delivered quickly and that our glasses were filled. Will return!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/red-robin-gourmet-burgers-and-brews-northridge" title="Red Robin" target=_blank>Red Robin</a>' + table;            
    } else if (typesIn == "Dave & Buster's"){
        var user = ['<u>Plank J.', '<u>Lana S.', '<u>Nelson V.']
        var date = ['4/10/2023', '4/1/2023', '3/18/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Ashley is the best bartender at Dave n busters , great service !!! I love going to this place because of her !! Great energy and great attitude !!! Def a happy customer"</i>', '<i>"Ricardo honestly was the nicest person I had met at D&B all night, he was so helpful and made and effort to make sure our group was taken care of and was so quick and nice! Made our night"</i>', '<i>"Great place, always a fun time. Ricardo was really helpful and gave great and fast service!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/dave-and-busters-northridge-2" title="Dave & Buster" target=_blank>Dave & Buster</a>' + table;        
    } else if (typesIn == "Wing Stop"){
        var user = ['<u>Shontina K.', '<u>Bob T.', '<u>Mark V.']
        var date = ['1/23/2023', '1/20/2023', '11/12/2022']
        var rating = ['5', '1', '2']
        var comment = ['<i>"This wing stop always gets it right!!  Lemon hot is the best extra crispy. I&#8217ve tried a few in the valley and this location is the BEST! Always clean and plenty of parking in the rear. Brian the cashier will always greet you with a smile.  He exhumes excellent Customer Service!! It&#8217s always best to phone ahead because they can get crowded at times. Always worth the wait!"</i>', '<i>"The place was very dirty and smelled very bad.  The counter and tables were dirty... besides all that the cashier was horrible.. she was a heavier latina. I would not recommend you buy your wings from this location. Look for another Wingstop (litterly)!"</i>', '<i>"Ordered for delivery and let me say really disappointed. Been eating/ ordering here for awhile. I understand it&#8217s fast food and it&#8217s busy at times but man at least fill my drink all the way, include a STRAW for my drink and some napkins lolol. Tried calling plenty of times back but no answer. Definitely just going in person rather doing delivery again."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/wingstop-northridge" title="Wing Stop" target=_blank>Wing Stop</a>' + table;        
    } else if (typesIn == "Dave's Hot Chicken"){
        var user = ['<u>Lizette L.', '<u>Giullianna L.', '<u>Melissa H.']
        var date = ['4/24/2023', '4/22/2023', '2/25/2023']
        var rating = ['4', '5', '5']
        var comment = ['<i>"I&#8217ve had no problems and I&#8217ve been coming since they opened. It gets crowded but the food still comes out fast and fresh. Bri was super nice and attentive."</i>', '<i>"Really good food! Love the service and the ambiance as well. Would highly recommend!!!"</i>', '<i>"We came In here to place a walk in order Eddie greeted us he was very friendly and attentive  we love coming here service is always great place is clean the ambiance is chill"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/daves-hot-chicken-northridge" title="Daves Hot Chicken" target=_blank>Daves Hot Chicken</a>' + table;  
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
    } else if (clicksOn == "McDonalds"){
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
    } else if (clicksOn == "Jack in the Box"){
        var user = ['<u>Dyann C.', '<u>Bryan M.', '<u>Arelisa D.']
        var date = ['5/2/2022', '11/21/2019', '2/9/2015']
        var rating = ['5', '4', '5']
        var comment = ['<i>"Oreo milkshake is delicious. They always have free or cheap items in the app. Close & convenient location."</i>', '<i>"Love the fast food here I really love it especially the munchie deals and such. I love their Mocha Iced Coffee as well it&#8217s my favorite drink"</i>', '<i>"They always have really great customer service and get my order right.on Oe employee went out of his way to change my order, thanks!!!"</i>']
      
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/jack-in-the-box-northridge-3" title="Jack in the Box" target=_blank>Jack in the box</a>' + table;
    } else if (clicksOn == "Chilis"){
        var user = ['<u>The M.', '<u>Elba T.', '<u>Dyann C.']
        var date = ['3/19/2023', '1/26/2023', '7/30/2022']
        var rating = ['5', '4', '5']
        var comment = ['<i>"Food came out very fast.it was very busy but still very fast.not even 10 minutes after we ordered food was out.it was piping hot and soda refill was not even 30 seconds.server was very nice.10"</i>', '<i>"Came in for dinner last night with my friend right after the gym, we had the most delicious and satisfying meal! Hands down to the classic sirloin! And to top it off don&#8217t forget to order the skillet chocolate cookie OMGGGG!! Mouth watering"</i>', '<i>"I got my FREE Chicken Wings today from Chili&#8217s on Chicken  Wing Day! Check the App for coupons like free appetizer, free kids meal or free dessert."</i>']
      
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/chilis-northridge" title="Chilis" target=_blank>Chilis</a>' + table;   
    } else if (clicksOn == "Dunkin Donuts"){
        var user = ['<u>Shad A.', '<u>Hippy M.', '<u>Selena P.']
        var date = ['2/19/2023', '10/6/2022', '4/5/2023']
        var rating = ['3', '5', '1']
        var comment = ['<i>"Great prompt cashier services, and the place is clean with enough parking slots, and also easy to locate. The only thing is that, the donuts we ordered were extra hard and stale. I mean, maybe its bc we got it in the afternoon, but still, could&#8217ve been a lot better than that."</i>', '<i>"Great customer service. Came in right before they closed, and they stayed to help me out. I really appreciate the freshness of the donuts, I&#8217ve never had a stale pastry from this location! Very clean and well organized."</i>', '<i>"Bad customer service from this young girl , it&#8217s like she hates working there.  Went in at 10am today , said they ran out of cold brew. This is why Starbucks gets my $."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/dunkin-northridge" title="Dunkin" target=_blank>Dunkin</a>' + table;        
    } else if (clicksOn == "Rincome Restaurants"){
        var user = ['<u>Jim B.', '<u>Robin K.', '<u>Jarm A.']
        var date = ['1/18/2023', '12/27/2022', '4/27/2023']
        var rating = ['5', '5', '4']
        var comment = ['<i>"My favorite Thai restaurant. Not fancy, just great food and service. An extensive menu with so many terrific choices. My wife and I shared War Wonton soup and Pad Thai. Everything was great! The portions are large and the prices are reasonable."</i>', '<i>"Rincome was a pleasant experience! This is a Thai restaurant located near northridge. The restaurant has great parking & seating, the workers are super friendly, and food comes out decently quick! My underdog favorite was the cream cheese wontons!! Super delicious! I totally recommend it !"</i>', '<i>"Today is Good Friday, so I ordered some fish soup from Rincome. The soup was well prepared and had lots of fish. I got the mild, and it had a kick. I may do the "not spicy" next time. I also ordered their fillet fish with ginger, and it was good. I like the fact that they give a small salad and rice with the plate."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/rincome-northridge" title="Rincome Restaurants" target=_blank>Rincome Restaurants</a>' + table;        
    } else if (clicksOn == "Boba Snow House"){
        var user = ['<u>The B.', '<u>Henry D.', '<u>Alexa R.']
        var date = ['3/7/2023', '11/20/2022', '1/31/2023']
        var rating = ['5', '5', '3']
        var comment = ['<i>"Best boba that&#8217s not 30 mins away. Glad to have it so close to home and always fast service."</i>', '<i>"Best boba in the valley! Always consistent and great and quick service. Our go to spot when we crave boba!"</i>', '<i>"I love this place, but during my last visit they forgot to add the sea salt latte to the top of my drink. Their attempt to "fix it" resulted in my smoothie melted and my latte not layered..."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/boba-snow-house-northridge" title="Boba Snow House" target=_blank>Boba Snow House</a>' + table;        
    } else if (clicksOn == "Rococo Ramen"){
        var user = ['<u>Michelle Lopez L.', '<u>Melly M.', '<u>Jasmine H.']
        var date = ['2/22/2023', '4/23/2023', '4/15/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"This place is a gem! The Ramen hair is unbelievable there pork belly is to die for !!! The service is excellent. Everybody is so nice. !!!"</i>', '<i>"Best Ramen in Granada Hills. Delicious and tasty food and appetizers and always satisfies the ramen cravings for us."</i>', '<i>"One of the best Ramens in SoCal. As someone who LOVES ramen - I highly recommend this restaurant. Food is A++ as well as the awesome service."</i>']

        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/rococo-ramen-granada-hills" title="Rococo Ramen" target=_blank>Rococo Ramen</a>' + table;            
    } else if (clicksOn == "Outback Steakhouse"){
        var user = ['<u>Jessica M.', '<u>Josh D.', '<u>Cynthia B.']
        var date = ['9/3/2022', '4/9/2023', '2/17/2023']
        var rating = ['3', '5', '5']
        var comment = ['<i>"Came here for my dads birthday and Robert was our server. We ordered the bloomin onion as a started and it was pretty good. Our meals was not the best but honestly the service that Robert provided us really made our experience better. He was very attentive to our needs and had a great personality for the job"</i>', '<i>"Ahmad in Northridge was a great server. Our glasses were never empty amongst other stuff."</i>', '<i>"Excellent food, excellent service. Hanna, my server was fantastic! She checked in regularly to see if I needed anything and immediately responded to any requests. Thank you for the VIP service!!"</i>']         
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/outback-steakhouse-northridge" title="Outback" target=_blank>Outback</a>' + table;        
    } else if (clicksOn == "Presidente Restaurant"){
        var user = ['<u>Faten A.', '<u>Stephen Clint P.', '<u>Anthony C.']
        var date = ['8/6/2018', '11/8/2019', '5/12/2018']
        var rating = ['5', '1', '1']
        var comment = ['<i>"Always consistent. Just don&#8217t ask for onions in your fajitas or it would just be all onions lol. My brother gets the giant chicken burrito and has his heart set on that. Everyone is so welcoming and nice, never had a nasty attitude waiter/waitress."</i>', '<i>"The worse Mexican food ever! Go to El Torito instead. The service was great bu the food quality was bad."</i>', '<i>"I got steak and chicken fajitas and they gave me like four pieces of meat. 90% of it was veggies. Next time I want all veggies I&#8217ll order the veggie fajita. Waste of my money"</i>']

        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/presidente-northridge" title="Presidente Restaurant" target=_blank>Presidente Restaurant</a>' + table;        
    } else if (clicksOn == "Good Pho You"){
        var user = ['<u>Karla B.', '<u>Rene T.', '<u>Leilani A.']
        var date = ['3/26/2023', '3/19/2023', '1/29/2022']
        var rating = ['5', '5', '5']
        var comment = ['<i>"This is our new favorite Pho spot.  The Pho is always yummy and portions are great . We also like their egg rolls always fresh . They are open late which is a plus . However Sundays they do close early so check the hours."</i>', '<i>"Food is good my son had a meal! First time and live it ! I came here a few time and is till good ! Service is nice the girls are nice beautiful and kind !"</i>', '<i>"My favorite pho spot!! They&#8217re egg rolls are sooo good & their staff is friendly & attentive!! my mom wasn&#8217t really big on pho until i brought her here, now she wants to come every week! its a win win lol!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/good-pho-you-granada-hills" title="Good Pho You" target=_blank>Good Pho You</a>' + table;        
    } else if (clicksOn == "Maru Ramen"){
        var user = ['<u>Lucy Z.', '<u>Ethan M.', '<u>Mark Joseph R.']
        var date = ['4/14/2023', '2/5/2023', '11/26/2023']
        var rating = ['5', '5', '4']
        var comment = ['<i>"This place is awesome! So glad to find a delish and close place while traveling to visit family. We&#8217ll definitely be back. I wish they offered thick noodles but the thin was done right, well made and chewy."</i>', '<i>"First time trying Maru Ramen and it was DELICIOUS! Super umami and rich broth and tender pork. The noodles were perfectly cooked. If you&#8217re craving ramen, this is a must try. The employees were friendly and very helpful too."</i>', '<i>"This place serves one of my favorite chasu bowls that I&#8217ve had. There is a good ratio between fatty and lean meat and everything tastes delicious. I would definitely recommend this place."</i>']

        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/maru-ramen-northridge-northridge" title="Maru Ramen" target=_blank>Maru Ramen</a>' + table;        
    } else if (clicksOn == "Truman House Tavern"){
        var user = ['<u>Julian L.', '<u>Esmeralda N.', '<u>Ken P.']
        var date = ['4/5/2023', '4/4/2023', '4/13/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Super Chill Vibes A must go! Never a dull moment They always have the Dodger games on. Let&#8217s go Dodgers"</i>', '<i>"Food, drinks and service are great! The ambiance is great. Their Old Fashioned is a must if you&#8217re a whiskey lover...what the heck, even if you&#8217re not, it&#8217s a must have."</i>', '<i>"This place is amazing to grab a few drinks & food ! it&#8217s a great place for a friday night ! the service here is amazing !"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href=" https://www.yelp.com/biz/truman-house-tavern-san-fernando-2" title="Truman House Tavern" target=_blank>Truman House Tavern</a>' + table;        
    } else if (clicksOn == "Gen Korean BBQ House"){
        var user = ['<u>Corey C.', '<u>Gabrielle F.', '<u>Joanna J.']
        var date = ['4/14/2023', '4/20/2023', '2/26/2023']
        var rating = ['5', '5', '3']
        var comment = ['<i>"Food is fire  wait to get in wasn&#8217t bad. so many options to try the honey soy beef belly and mango soju was our favorites. Our server Tenzin was very helpful always stocking up the meats. Will def be back"</i>', '<i>"If you go to Gen KBBQ Northridge you better hope you get Danny R. and Connie as servers. They are phenomenal and make the experience unforgettable. Great meat and great vibes, but Connie and Danny certainly enhance the experience. I will sure be coming back."</i>', '<i>"Good food, good service. It was just too much food for my taste, if you go be ready to eat! Down side you come out with your clothes smelling like Korean bbq."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/gen-korean-bbq-house-northridge-2" title="Gen KBBQ" target=_blank>Gen KBBQ</a>' + table;        
    } else if (clicksOn == "Applebee's Grill + Bar"){
        var user = ['<u>John H.', '<u>Candice H.', '<u>Rebecca K.']
        var date = ['4/10/2023', '3/10/2023', '2/7/2023']
        var rating = ['4', '1', '5']
        var comment = ['<i>"Second time at this location and we were happy again. The food, the service, and the ambiance were quit good. Not excellent, but pretty decent. All things considered when over the hill it&#8217s nice to know a reliable restaurant to go to."</i>', '<i>"I came in out of the pouring rain for my lunch to Applebee&#8217s.  empty restaurant so no excuse why I waited over 8 minutes for anyone to take me order. So disappointed .  Wasted my time"</i>', '<i>"Just had the best service at the bar the food was amazing the bartender (Stephanie) was also my server and she was so sweet and informative and overall made my experience much better!"</i>']          
        
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/applebees-grill-bar-chatsworth-2" title="Applebees" target=_blank>Applebees</a>' + table;        
    } else if (clicksOn == "Buffalo Wild Wings"){
        var user = ['<u>Jared-Cedric F.', '<u>Kaitlyn B.', '<u>Elton M.']
        var date = ['4/18/2023', '4/18/2023', '2/18/2023']
        var rating = ['1', '1', '3']
        var comment = ['<i>"Long ass wait for okay food. and the music is too fucking loud. im not tryna bust a move while i wait 50 min for 8 wings."</i>', '<i>"Buffalo Wild Wings is one of my fav places but this location has such rude employees. They say us and then proceeded to tell us they the kitchen was closed 33 minutes before they close."</i>', '<i>"Food was ok .server was courteous. The place was a mess trash on floor. Empty TV box in aisle apparently from work done earlier. Had to ask to turn music down (server agreed)."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/buffalo-wild-wings-northridge-2" title="Buffalo Wild Wings" target=_blank>Buffalo Wild Wings</a>' + table;        
    } else if (clicksOn == "TGI Fridays"){
        var user = ['<u>A R.', '<u>Tatiana S.', '<u>Araks K.']
        var date = ['9/2/2022', '10/25/2022', '9/6/2023']
        var rating = ['1', '5', '4']
        var comment = ['<i>"Worst experience. The artichoke dip was awful and runny. The chicken shrimp skillet was bland and unappetizing. The pasta dish was bland. We came home and felt sick afterwards. The waiter was good too bad the food was awful."</i>', '<i>"The service tonight was amazing and very friendly . Andy with an A  is a very great waiter . Hope to see him again, because his vibe is dope. Thanks Andy."</i>', '<i>"I was coming to TGIF for more then 15 years but now days The food is  so bland and not appetizing, bad service, not coming back ever !!! Hi"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/tgi-fridays-northridge" title="TGI Fridays" target=_blank>TGI Fridays</a>' + table;        
    } else if (clicksOn == "Finney's Crafthouse-Porter Ranch"){
        var user = ['<u>Chad S.', '<u>Clint C.', '<u>James V.']
        var date = ['3/30/2023', '4/8/2023', '10/27/2022']
        var rating = ['5', '5', '4']
        var comment = ['<i>"Melissa and Nysia were amazing tonight kept asking us how we were doing and making sure our guava margs were one point!! Thank you, def coming back!"</i>', '<i>"We were a party of 10 the service was fast, the food quality above average. The server was attentive and they had a computer at the table to make it easy for guest to split the checks which is great for large parties. The prices were a little high compared to other similar restaurants but otherwise it was a good place to eat."</i>', '<i>"Wanted a small snack and drink, so we stopped by here. No wait at all  and very friendly service. I really loved their menu selection, cuz all their foods and beers looked so good, I actually had a hard time choosing. I went with the steak taquitos, which had an awesome kick thanks to their chipotle aioli. I loved it! Definitely recommend this place to anyone wanting just a chill place to snack, drink, and hang out!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/finneys-crafthouse-porter-ranch-porter-ranch" title="Finneys Crafthouse" target=_blank>Finneys Crafthouse</a>' + table;        
    } else if (clicksOn == "Gus's BBQ"){
        var user = ['<u>Erik A.', '<u>Guy G.', '<u>Marlisa S.']
        var date = ['4/6/2023', '3/29/2023', '4/16/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Great food, great service from Jessica.  Had a small issue manger totally was on it.  Will be back for the great food and the awesome service.  Thanks"</i>', '<i>"Great ambiance and vibe! Friendly down home relaxed atmosphere. Can be crowded on weekends."</i>', '<i>"Food was so yummy and it came out so fast!! The servers were all really nice and they allowed us to move tables without any problems. I liked the overall vibe, pretty loud but only cause it&#8217s always packed!! Loved it here!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/guss-bbq-porter-ranch" title="Gus BBQ" target=_blank>Gus BBQ</a>' + table;        
    } else if (clicksOn == "Domino's Pizza"){
        var user = ['<u>Erik A.', '<u>Guy G.', '<u>Marlisa S.']
        var date = ['4/6/2023', '3/29/2023', '4/16/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Great food, great service from Jessica.  Had a small issue manger totally was on it.  Will be back for the great food and the awesome service.  Thanks"</i>', '<i>"Great ambiance and vibe! Friendly down home relaxed atmosphere. Can be crowded on weekends."</i>', '<i>"Food was so yummy and it came out so fast!! The servers were all really nice and they allowed us to move tables without any problems. I liked the overall vibe, pretty loud but only cause it&#8217s always packed!! Loved it here!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/dominos-pizza-northridge" title="Dominos" target=_blank>Dominos</a>' + table;        
    } else if (clicksOn == "Chipotle Mexican Grill"){
        var user = ['<u>Diego A.', '<u>Albert K.', '<u>Sahar R.']
        var date = ['2/19/2023', '2/18/2023', '2/3/2023']
        var rating = ['1', '1', '3']
        var comment = ['<i>"Food was just ok. Chips were stale and soaked in oil (worst ones I&#8217ve ever had) I hate that their sour cream is always contaminated by food that falls in it all the time and it also has traces of other sauces in it too."</i>', '<i>"having just one employee to serve, prepare, and handle the cash register while there&#8217s a long line seems to be an ongoing problem with chain restaurants like Chipotle. hope this one employee gets paid at least 25/hr because he does everything. i doubt it tho this location is the worst of all"</i>', '<i>"I actually like the veggie style, but the people there are slow ! The location is kind of comfortable ."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/chipotle-mexican-grill-northridge-2" title="Chipotle" target=_blank>Chipotle</a>' + table;        
    } else if (clicksOn == "PokiMX (San Fernando)"){
        var user = ['<u>Anna F.', '<u>Amy L.', '<u>Katsumi M.']
        var date = ['3/9/2023', '9/16/2022', '3/6/2023']
        var rating = ['5', '5', '4']
        var comment = ['<i>"First time eating poke here and it was amazing! It is spacious and inviting. The only thing I would personally recommend is signage like "order here" and "pick up here." I stood near the door for a minute trying to figure out where to order and a worker guided me. The ingredients were super fresh and tasty. I got the spicy tuna and ordered all the toppings on it. It was so tasty and filling! The portion was huge! Very happy with my visit and plan on making more!"</i>', '<i>"I ordered delivery from here yesterday. Food arrived promptly and was delicious. I&#8217ll definitely be re-ordering from here again!"</i>', '<i>"Food was really good, I had the nachos and I really loved the wonton "chips", they were very well served, probably good for 2-3 people."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/pokimx-san-fernando" title="PokiMX" target=_blank>PokiMX</a>' + table;        
    } else if (clicksOn == "Bar Louie-Northridge Fashion Center"){
        var user = ['<u>Jazmine D.', '<u>Kassandra T.', '<u>Miriam L.']
        var date = ['4/8/2023', '4/2/2023', '4/22/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Food was amazing and Alexis gave amazing service!!! I would definitely come back with my friends!"</i>', '<i>"A great bar to catch up with friends and have great drinks! Fridays and Saturdays have a lit dj and if alexis is working you are in great hands she is a gem! Can&#8217t recommend this place more !"</i>', '<i>"My friends and I visited and had such a great time! Huge shoutout to our server Yeli! Such great energy and went above and beyond in terms of service and being on top of things! We are excited to come back soon! I ordered the blackened shrimp tacos, a drink recommended by Yeli (which was great) and fries. The food was great and all of us finished every last thing. Super excited to come back!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/bar-louie-northridge-fashion-center-northridge-2" title="Bar Louie" target=_blank>Bar Louie</a>' + table;        
    } else if (clicksOn == "Porto's Bakery and Cafe"){
        var user = ['<u>Arturo O.', '<u>Jake P.', '<u>Jackie N.']
        var date = ['3/23/2023', '4/7/2023', '4/1/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"The food was great, sweet. I just bought the new grava rose very delicious, and it has a guava center in it. The sandwiches&#8217 perfect nice cooked cheese was melted.Would recommend ten out of ten The court was perfect, very nice and calming wide open space coffee bar as well. Everything was freshly baked and cooked."</i>', '<i>"Kevin has single handedly given me the best customer service I&#8217ve ever received in my life!!!!"</i>', '<i>"First time there. Vince was very helpful and kind helped us out a lot. They&#8217re breakfast wrap was amazing!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/portos-bakery-and-cafe-northridge" title="Portos" target=_blank>Portos</a>' + table;        
    } else if (clicksOn == "Yard House"){
        var user = ['<u>Bobby P.', '<u>Mark L.', '<u>Kelly Q.']
        var date = ['4/9/2023', '4/23/2023', '11/10/2022']
        var rating = ['5', '4', '5']
        var comment = ['<i>"This is my favorite yardhouse by a mile. My sister goes to UCLA and this is our go to spot after any of the big games. In my experience the servers really try under the circumstances of it being a very crowded bar, and nothing is going to be perfect when you have patrons lining out the door. Try their chicken nachos as it&#8217s by far the best plate."</i>', '<i>"Good happy hour menu. Sliders and pizza were good. Great selection of beers. Nice vibe and lots of Televisions."</i>', '<i>"Came here for happy hour and the deals were great! All the appetizers were half off, which was such a steal. Got the poké nachos, and I was pleasantly surprised by how good it was. The fish was delicious and paired perfectly with the seaweed, jalapeño, and truffle toppings. Great service and a really nice ambiance. Would highly recommend!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/yard-house-northridge-4" title="Yard House" target=_blank>Yard House</a>' + table;        
    } else if (clicksOn == "Wood Ranch"){
        var user = ['<u>Jeni P.', '<u>Wendy R.', '<u>Kimberly E.']
        var date = ['3/27/2023', '4/25/2023', '3/8/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Find out what night Tommy works and get him as your server.  He was the bomb and makes the absolute, best I&#8217ve ever had, birthday sundae.  I could feel the love. Food is great, love the roasted brussel sprouts and ribs.  Not super thrilled with the tri tip salad. Plenty of parking.  Bathrooms are clean.   If you&#8217re limited on time I would recommend making a reservation. Go Tommy!!"</i>', '<i>"I ordered pulled pork sliders minus the bread and put lettuce inside of it and they were delicious.  I ordered coleslaw with peanuts and that was yummy too!  I serve it was very attentive and a very sweet person who&#8217s always nice when you&#8217re going out for lunch and refilled my husbands drink, and our friends drink many times. We will be back."</i>', '<i>"We had a delicious bbq meal although the restaurant was crowded the wait was comfortable and our server was pleasant and helpful! The bread is beyond delish we love to dip it in the bbq sauce‼the bbq chicken salad was the perfect size and chicken was prepared perfectly the bbq beans were fab as well‼"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/wood-ranch-northridge-northridge" title="Wood Ranch" target=_blank>Wood Ranch</a>' + table;        
    } else if (clicksOn == "Los Tres Hermanos Bar & Grill"){
        var user = ['<u>Dianna A.', '<u>Crystal V.', '<u>Mark N.']
        var date = ['2/4/2023', '9/13/2022', '9/18/2022']
        var rating = ['3', '5', '3']
        var comment = ['<i>"This is a hidden gem.  We came here to watch the game.  I love how everyone is on top of their game.  A shout out to the older man passing our chips and salsa.  He is a hard worker.  The margarita and fajitas are the bomb.  Plus, the waitress was nice and took care of us.  This is a friendly place that takes care of their customers... get the fajitas!"</i>', '<i>"I&#8217ve been here several times and have never been disappointed. The micheladas are delicious and the spicy bean dip is to die for! Came here to sit at the bar for some taquitos and chicken soup. The vibe was nice, service was great and the Mexican music was perfect for a Sunday lunch. I will be coming back, i LOVE this San Fernando gem!"</i>', '<i>"The service was pretty slow, but I think it was cause jam packed full of people. The food was actually pretty decent, like a 6/10, but the corn tortillas weren&#8217t the best. All my friends liked their food though and developed the same opinion about the tortillas. All the food did come out at once, which I appreciated, but doesn&#8217t make up for how the food tasted."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/los-tres-hermanos-restaurant-san-fernando" title="Los Tres Hermanos" target=_blank>Los Tres Hermanos</a>' + table;        
    } else if (clicksOn == "El Torito"){
        var user = ['<u>Antoinette A.', '<u>Karen C.', '<u>Mateo G.']
        var date = ['3/1/2023', '3/26/2023', '4/8/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"OMG......  El Torito in Northridge is the best ..... Service is amazing Food is hot and their Corn Cake is Fire .......  But From My Mothers Mouth the Bananas fosters was amazing (I&#8217m allergic) but mom is raving about it"</i>', '<i>"Beautiful service. Our waitress Marta, was sweet and kind and made everything go super fast. She constantly checked in on us and made sure to refill our drinks when she noticed they were low! The food was great and the setting was super nice. Amazing service cannot wait to come back"</i>', '<i>"Super Great Service From LIZ!!! Love the food and drinks! She recommended great options and was super nice. Ambiance is fantastic ! Thanks Liz!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/el-torito-northridge" title="El Torito" target=_blank>El Torito</a>' + table;        
    } else if (clicksOn == "Fishbowl Poke Co."){
        var user = ['<u>Nohemy M.', '<u>Betty M.', '<u>Mercy Anne C.']
        var date = ['4/1/2023', '9/5/2022', '12/5/2022']
        var rating = ['5', '4', '5']
        var comment = ['<i>"Very delicious, flavorful, fresh and filling poke bowls! Staff is very friendly too!! Love the mural and chill atmosphere. Will visit this place again!"</i>', '<i>"Tried Fishbowl Poke Co with my daughter who is a big Poké fan. We each got the regular bowl. Many items to choose from at a reasonable price. All the ingredients were fresh and tasted great! My picky daughter gave it a . Parking is challenging in that lot especially where it&#8217s located. I would park a little further away and walk to avoid the congestion. Other than that, I&#8217ll be back."</i>', '<i>"Shout-out to whoever was on aux on December 5th around 9pm. I hope you&#8217re okay. The large bowl was on the expensive side but fish is fish. Straight fye.. love the Christmas decorations. Clean place. Chill staff"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/fishbowl-poke-co-northridge-4" title="Fishbowl Poke Co." target=_blank>Fishbowl Poke Co.</a>' + table;        
    } else if (clicksOn == "California Pizza Kitchen at Northridge"){
        var user = ['<u>Elton M.', '<u>Jessica M.', '<u>Mane S.']
        var date = ['4/8/2023', '1/31/2023', '3/18/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"We went here for dinner before the movies. Server was good food was good. The only bad thing I noticed was on the wall next to our booth was a big patch of crayon markings on the wall. Would go back"</i>', '<i>"We&#8217ve been here numerous times but this last time was incredible. Thank you FRANK! You were extremely hospitable and entertaining. Frank is hands down the best server we&#8217ve ever had. Our food was great and came in a timely manner. Thank you for a wonderful evening."</i>', '<i>"My kids eat the cauliflower pizza and it&#8217s absolutely delicious...always. I love to get the cauliflower buffalo and it is absolutely delicious and my kids love it too. The salmon is also another great choice."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/california-pizza-kitchen-northridge-5" title="California Pizza Kitchen" target=_blank>California Pizza Kitchen</a>' + table;        
    } else if (clicksOn == "Ceviches mariscos estilo Nayarit"){
        var user = ['<u>Margarita L.', '<u>Alejandro L.', '<u>Ariana T.']
        var date = ['3/18/2023', '6/22/2022', '5/13/2023']
        var rating = ['5', '5', '4']
        var comment = ['<i>"Absolutely delicious and authentic mariscos and the nicest crew anywhere. Our server was extremely attentive and really made my mom feel special. The empanadas de camarón were like the ones we&#8217ve had in San Blas, Nayarit and the tostada mixta was yummy. 100% we&#8217re coming back!!"</i>', '<i>"Just found a mariscos gem. This place has a good vibe and the owner was an amazing host. All dishes we tried were savory. Plus the outside atmosphere took me back to the beach!"</i>', '<i>"Came with my Grandparents Saturday at 4ish and it wasn&#8217t that crowded got seated right away ..  I got the Camarones a la cucaracha spicy they were delicious, I wish they could make there on toast. I also order the shrimp empanadas fire the green sauce bomb."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/ceviches-san-fernando-2" title="Ceviches mariscos estillo Nayarit" target=_blank>Ceviches mariscos estillo Nayarit</a>' + table;
    } else if (clicksOn == "SUSHIRAW"){
        var user = ['<u>Jake M.', '<u>Emily B.', '<u>C C.']
        var date = ['2/11/2023', '3/9/2023', '11/22/2022']
        var rating = ['5', '3', '5']
        var comment = ['<i>"This is a great place to get sushi! The food is amazing & always tasting fresh. There is lots of good sushi in this area but this place is a stand out. Creative & tasty rolls, very cool atmosphere also. The place can fill up deservingly & the overall atmosphere is cheerful and fun."</i>', '<i>"Really tasty food and good quality ingredients. The restaurant itself was beautiful and had some really cool decor. The staff was a bit cold and mighty."</i>', '<i>"Absolutely amazing I enjoy ordering sushi from SUSHIRAW great customer services definitely eat there"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/sushiraw-granada-hills" title="SUSHIRAW" target=_blank>SUSHIRAW</a>' + table;        
    } else if (clicksOn == "Asahi Sushi"){
        var user = ['<u>Bryan E.', '<u>Mo C.', '<u>Sandra L.']
        var date = ['4/9/2023', '4/1/2023', '4/6/2023']
        var rating = ['5', '3', '5']
        var comment = ['<i>"The food is great, definitely enjoy the garlic edamame and recommend the Asahi roll. The snow cone is also delicious! Michael is my favorite server, his energy and helpfulness is always a 11/10. Cool decor in this place :)"</i>', '<i>"Went there for a bite at 10:15 pm on a Saturday, they said they had called last call and closed.  Asked the owner why the website says 11:00.  See picture below.  We were there 45 minutes before closing.  Business should consider updating their hours!"</i>', '<i>"This is my go to place when I&#8217m craving some fresh yummy  sushi . Simply my favorite thank you"</i>']          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/asahi-sushi-granada-hills" title="Asahi Sushi" target=_blank>Asahi Sushi</a>' + table;        
    } else if (clicksOn == "Blue Palms Brewhouse"){
        var user = ['<u>Tiffanie S.', '<u>Graciecorn L.', '<u>Tal K.']
        var date = ['2/17/2023', '3/27/2023', '3/28/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Our new favorite place. The food is yummy and drinks are on a rotation. Oh and the music is always on point."</i>', '<i>"Great service, awesome selection of brews and crafted cocktails. Highly recommend for a casual bite"</i>', '<i>"Amazing local pub. Great beers, great pub food and great atmosphere. Lots of beer on rotation and their food is great quality for bar food. New go to spot !"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/blue-palms-brewhouse-los-angeles-4" title="Blue Palms Brewhouse" target=_blank>Blue Palms Brewhouse</a>' + table;        
    } else if (clicksOn == "San Fernando Brewing Company"){
        var user = ['<u>Brian D.', '<u>Ezln 2.', '<u>Mei Z.']
        var date = ['11/5/2023', '11/5/2022', '8/14/2022']
        var rating = ['5', '3', '4']
        var comment = ['<i>"Great Craft Beer, excellent service, nice setting to relax and have a cold one. Good friendly place to share with friends and great place to meet new friends!!"</i>', '<i>"The vibe of this place was everything!! I had a cucumber michelada and it was not good IMO. But the staff was super friendly and they did serve us even though they called "last call". I would definitely go again!!"</i>', '<i>"Found out about this place at the Brew at the LA Zoo event where we had the opportunity to enjoy unlimited beer samples with our tickets. Ricky and Rose provided us amazing service and the choices offered from their stand was top notch. Thank you for your great energy!!!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/san-fernando-brewing-company-san-fernando-2" title="San Fernando Brewing Company" target=_blank>San Fernando Brewing Company</a>' + table;        
    } else if (clicksOn == "Lucille's Smokehouse Bar-B-Que"){
        var user = ['<u>Ken P.', '<u>Sharon H.', '<u>Rudd N.']
        var date = ['4/24/2023', '2/8/2023', '1/15/2023']
        var rating = ['4', '4', '4']
        var comment = ['<i>"We get take out from this place sometimes, we did so on Saturday the bottom line is that we liked the ribs but the links are hot it&#8217s like it&#8217s full of chili whatever they use they need to tone it down so I would not recommend getting the links unless you like that kind of style that level of spice that could print a hole in your tongue or cheek if that&#8217sthathat&#8217sthat&#8217sthathathat&#8217"</i>', '<i>"It&#8217s good for mass-produced, chain restaurant BBQ. The biscuits with Apple butter are delicious. I have come to just buy biscuits when I get a craving. They also have burnt ends, which can be hard to find at a lot of BBQ places. They can be a bit spicy, but are good. There are lots of options. Service has always been good. It can have a wait and be loud when the get busy, so we try to go during off hours."</i>', '<i>"Had this awesome gift card and at least 7 years not eating at Lucille&#8217s so about time to check it out. Fantastic beef nachos, highly recommended. Deviled eggs looked good but were cold... skipped on heavy drinks but will try some next time. Great service!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/lucilles-smokehouse-bar-b-que-tustin-3" title="Lucilles Smokehouse Bar-B-Que" target=_blank>Lucilles Smokehouse Bar-B-Que</a>' + table;        
    } else if (clicksOn == "Lazy Dog Restaurant & Bar"){
        var user = ['<u>Israel A.', '<u>Melissa W.', '<u>Rosemary B.']
        var date = ['4/3/2023', '3/2/2023', '3/28/2023']
        var rating = ['5', '5', '4']
        var comment = ['<i>"Brittany was my server and BOY! Was she fantastic! She greeted us immediately and was so attentive. I felt unbelievably welcome, like I was a part of the lazy dog family. We ordered some food and it came out quickly and made sure we were okay. Her attitude and attention to detail is the reason I will be back. Ask for Brittany!"</i>', '<i>"The Spring tasting event is always fun and cannot wait for this years. On a normal basis, the Mediterranean Bowl is always my go to and very filling"</i>', '<i>"Fried cheese curds!  Need I say more? Okay, how about bacon candy? Lots of tasty choices to satisfy everyone&#8217s tastes"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/lazy-dog-restaurant-and-bar-valencia?osq=lazy+dog+restaurant+%26+bar" title="Lazy Dog" target=_blank>Lazy Dog</a>' + table;        
    } else if (clicksOn == "Marci's Sports Bar & Grill"){
        var user = ['<u>David O.', '<u>Christopher B.', '<u>Vicki F.']
        var date = ['2/24/2023', '4/12/2022', '1/28/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Went last night for the 1st time ... food was great I had wings and a burger and they were delicious. Beer was cold and the bartender was gorgeous and was the best!!! Definitely will be back when I&#8217m in the area for work!!!"</i>', '<i>"The food here was super good!   I ordered a few tacos, just to get a taste.  All of them were delicious.  I wasn&#8217t really hungry at the time... simply stopped to get out of the heat and snack a little.  So glad I did.  While the tacos were ridiculously small....  Almost 1 bite small....  They were very good.  Would do again."</i>', '<i>"Went to Marci&#8217s for Steak Night last night and it was amazing. Top quality filet, cooked to perfection and sides were tasty. Great quality for great price!!!!  We will definitely go back."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/marcis-sports-bar-and-grill-santa-clarita" title="Marcis Sports Bar & Grill" target=_blank>Marcis Sports Bar & Grill</a>' + table;        
    } else if (clicksOn == "BJ's Restaurant & Brewhouse"){
        var user = ['<u>M J.', '<u>Julie F.', '<u>Shima M.']
        var date = ['2/11/2023', '4/2/2023', '1/12/2023']
        var rating = ['3', '1', '5']
        var comment = ['<i>"I hate to be disappointed again. Knowing the steak will get cooked a little more on transport I always get medium rare but expect medium. Tonight I got my medium rare and it was more like medium well no pink to be found. It wasn&#8217t well done but definitely not what I asked for."</i>', '<i>"I go to different BJs a lot after cheer competitions.. but this one was the  worst one I have been too.. the waiter drops drinks on my sister and leaves to go get napkins and doesn&#8217t come back for like 15 minutes.. then doesn&#8217t refill our drinks at all never comes back to check on us.. tells us the dessert is on him.. it NEVER comes out.. waited for our to go containers never brings them.. you need to do better BJs.."</i>', '<i>"Foods are great, I recommend their beers, Jeremiah red is the best beer I have ever had. Usually servers are nice and if they aren&#8217t, managers are, they come and take care . I was in many branches, if I wanted to rate them, the Glendale is the lowest one, the place is not as cool as other branches, also service is not , and the highest rate goes to Thousands Oaks, then Woodland Hills."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/bjs-restaurant-and-brewhouse-woodland-hills" title="BJs" target=_blank>BJs</a>' + table;        
    } else if (clicksOn == "Red Robin Gourmet Burgers and Brews"){
        var user = ['<u>Bruce S', '<u>Paula F.', '<u>Harambe O.']
        var date = ['3/10/2023', '12/23/2023', '1/10/2023']
        var rating = ['4', '3', '5']
        var comment = ['<i>"Dropped in for lunch at our local Red Robin & were seated promptly & had a great server, friendly & gave us time to make up our minds.  Burgers cooked to order medium rare & quite quickly.  Super awesome onion rings. Great location with easy parking on the north end of the Northridge mall."</i>', '<i>"Ended up here because the two restaurants next to it  (Yard House and Wood Ranch) were packed.  The wait was about 10 minutes. In short...Food was decent. Service was good.  Prices  were reasonable. It&#8217s good in a pinch."</i>', '<i>"I really enjoyed the food here, but was mostly impressed by the staff. They hustled! Made sure our food was delivered quickly and that our glasses were filled. Will return!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/red-robin-gourmet-burgers-and-brews-northridge" title="Red Robin" target=_blank>Red Robin</a>' + table;            
    } else if (clicksOn == "Dave & Buster's"){
        var user = ['<u>Plank J.', '<u>Lana S.', '<u>Nelson V.']
        var date = ['4/10/2023', '4/1/2023', '3/18/2023']
        var rating = ['5', '5', '5']
        var comment = ['<i>"Ashley is the best bartender at Dave n busters , great service !!! I love going to this place because of her !! Great energy and great attitude !!! Def a happy customer"</i>', '<i>"Ricardo honestly was the nicest person I had met at D&B all night, he was so helpful and made and effort to make sure our group was taken care of and was so quick and nice! Made our night"</i>', '<i>"Great place, always a fun time. Ricardo was really helpful and gave great and fast service!"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/dave-and-busters-northridge-2" title="Dave & Buster" target=_blank>Dave & Buster</a>' + table;        
    } else if (clicksOn == "Wing Stop"){
        var user = ['<u>Shontina K.', '<u>Bob T.', '<u>Mark V.']
        var date = ['1/23/2023', '1/20/2023', '11/12/2022']
        var rating = ['5', '1', '2']
        var comment = ['<i>"This wing stop always gets it right!!  Lemon hot is the best extra crispy. I&#8217ve tried a few in the valley and this location is the BEST! Always clean and plenty of parking in the rear. Brian the cashier will always greet you with a smile.  He exhumes excellent Customer Service!! It&#8217s always best to phone ahead because they can get crowded at times. Always worth the wait!"</i>', '<i>"The place was very dirty and smelled very bad.  The counter and tables were dirty... besides all that the cashier was horrible.. she was a heavier latina. I would not recommend you buy your wings from this location. Look for another Wingstop (litterly)!"</i>', '<i>"Ordered for delivery and let me say really disappointed. Been eating/ ordering here for awhile. I understand it&#8217s fast food and it&#8217s busy at times but man at least fill my drink all the way, include a STRAW for my drink and some napkins lolol. Tried calling plenty of times back but no answer. Definitely just going in person rather doing delivery again."</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/wingstop-northridge" title="Wing Stop" target=_blank>Wing Stop</a>' + table;        
    } else if (clicksOn == "Dave's Hot Chicken"){
        var user = ['<u>Lizette L.', '<u>Giullianna L.', '<u>Melissa H.']
        var date = ['4/24/2023', '4/22/2023', '2/25/2023']
        var rating = ['4', '5', '5']
        var comment = ['<i>"I&#8217ve had no problems and I&#8217ve been coming since they opened. It gets crowded but the food still comes out fast and fresh. Bri was super nice and attentive."</i>', '<i>"Really good food! Love the service and the ambiance as well. Would highly recommend!!!"</i>', '<i>"We came In here to place a walk in order Eddie greeted us he was very friendly and attentive  we love coming here service is always great place is clean the ambiance is chill"</i>']
          
        var table =
        '<table><thead><tr><th>User</th><th>Date</th><th>Stars</th><th>Comment</th></tr></thead><tbody>';
        for(var i=0; i<user.length; i++){
        table += '<tr><td>' + user[i] + '</td><td>' + date[i] + '</td><td>' + rating[i] + '</td><td>' + comment[i] + '</td></tr>';
        }
        table+='</tbody></table>';
        text.innerHTML = '<a href="https://www.yelp.com/biz/daves-hot-chicken-northridge" title="Daves Hot Chicken" target=_blank>Daves Hot Chicken</a>' + table;  
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

//sidebar appears closed by default
document.getElementById("mySidebar").style.display = "none";

//open and close sidebar
function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
}
  
function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
}

