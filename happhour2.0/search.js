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

