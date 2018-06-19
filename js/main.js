//landing page

// const landingPage = document.querySelector('.bg__image');
// const loadingPage = document.querySelector('.loading');
// const webSite = document.querySelector('.page-contain');

// loadingPage.style.display = 'none';
// webSite.style.display = 'none';

// const enterSite = document.querySelector('.bg-enter');
// enterSite.addEventListener('click', enterWebsite);

// //click button and loading page then site "loads";
// function enterWebsite() {
//   landingPage.style.display = 'none';
//   loadingPage.style.display = 'block';

//   setTimeout(function(){
//     webSite.style.display = 'block';
//     loadingPage.style.display = 'none';
//   },7000);
  
// }



//navigation links
const navLinks = document.querySelectorAll('.navigation__link');
const navButton = document.querySelector('.navigation__button');
//navigation button to open nav menu
navButton.addEventListener('click', navClick);
//loop through navLinks
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', getClick);
}

//when nav link is clicked checkbox set to false to reverse navButton menu animation transition
function getClick() {
  document.querySelector('.navigation__checkbox').checked = false;
}

//when nav button is closed hide links in the background from being clicked
function navClick(e) {
  let checked = document.querySelector('.navigation__checkbox').checked;
  const navList = document.querySelector('.navigation__list');
  
  if (checked === true) {
    setTimeout(function(){
      navList.style.display = 'none';
    }, 500);
  } else {
    navList.style.display = 'block';
  }
}



var api = "https://fcc-weather-api.glitch.me/api/current?"
var lat;
var lon;
var tempIcon = 'F';
var TempInCelsius;
var TempInFar;
var windMPH;
var windKM;



// var x = document.getElementById("demo");
// x.innerHTML = getLocation();

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(showPosition){
      var lat = "lat=" + showPosition.coords.latitude;
      var lon = "lon=" + showPosition.coords.longitude;
      getWeather(lat, lon);
    });
  } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
getLocation();


function getWeather(lat, lon) {  
  var apiString = api + lon + "&" + lat;
  $.ajax({
    url: apiString, success: function (result) {
      $("#city").text(result.name + ", ");
      $("#country").text(result.sys.country);

      TempInCelsius = Math.round(result.main.temp);
      TempInFar = Math.round(result.main.temp * 9/5 + 32);
      $("#temp").text(Math.round(result.main.temp * 9/5 + 32) + String.fromCharCode(176));
      $("#tempicon").text(tempIcon);

      $("#weather").text(result.weather[0].main);
      $("#wind").text(result.wind.speed + " mph");
      windMPH = result.wind.speed;
      windKM = result.wind.speed * 1.6;

      sunRise = result.sys.sunrise;
      sunRiseDate = new Date(sunRise * 1000);
      sunRiseTime = sunRiseDate.toLocaleTimeString();

      sunSet = result.sys.sunset;
      sunSetDate = new Date(sunSet * 1000);
      sunSetTime = sunSetDate.toLocaleTimeString();

      $("#sunrise").text(sunRiseTime);
      $("#sunset").text(sunSetTime);

      $("#humidity").text(result.main.humidity + "%");

      var icon = result.weather[0].icon;
      $("#icon").html("<img src=" + icon + ">");

      // var getBackground = function() {
      //   var weatherNow = result.weather[0].main;
        
      //   if (weatherNow == "Drizzle"){
      //     var backgroundImg = document.body.style.backgroundImage = "url('img/drizzle.jpg')";
          
      //     console.log('Drizzle');
      //   } else if (weatherNow == "Clouds") {
      //     var backgroundImg = document.body.style.backgroundImage = "url('img/clouds.jpg')";
      //     console.log('Clouds');

      //   } else if (weatherNow == "Rain") {
      //     var backgroundImg = document.body.style.backgroundImage = "url('img/rain.jpg')";
      //     console.log('Rain');
          
      //   } else if (weatherNow == "Clear") {
      //     var backgroundImg = document.body.style.backgroundImage = "url('img/clear.jpg')";
      //     console.log('Clear');
          
      //   } else if (weatherNow == "Snow") {
      //     var backgroundImg = document.body.style.backgroundImage = "url('img/snow.jpg')";
      //     console.log('Snow');
          
      //   } else {
      //     var backgroundImg = document.body.style.backgroundImage = "url('img/thunderstorm.jpg')";
      //     console.log('Thunderstorm');
      //   }
      // }
      // getBackground();
    }
  });
}


  // function changeTemp() {
  //   var x = document.getElementById("tempicon");
  //   var y = document.getElementById('temp');
  //   var z = document.getElementById("wind");

  //   x.addEventListener('click', function(){
  //     if (x.textContent == 'F'){
  //       x.innerHTML = 'C';
  //       y.innerHTML = TempInCelsius + String.fromCharCode(176);
  //       z.innerHTML = windKM.toFixed(1) + ' kmh';
  //     } else if (x.textContent != 'F') {
  //       x.innerHTML = 'F';
  //       y.innerHTML = TempInFar + String.fromCharCode(176);
  //       z.innerHTML = windMPH.toFixed(1) + ' mph';
  //     } else {
  //       console.log('broken');
  //     }
  //   });
  // } 

  // changeTemp()


function setDate() {

  var now = new Date();

  var seconds = now.getSeconds().toString();
  var mins = now.getMinutes().toString();
  var hour = now.getHours().toString();

  if (hour > 12) {
    hour -= 12;
  }
  if (mins < 10) {
    mins = 0 + mins;
  }
  if (seconds < 10) {
    seconds = 0 + seconds;
  }
  /*------- check this over AMPM-----*/
  var AMPM = function() {
    var now = new Date();
    var hour = now.getHours();

    if (hour > 12) {
      return ' PM';
    } else {
      return ' AM';
    } 
  }
  /*----------------------------*/

  switch (now.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
  }




  switch (now.getMonth()) {
    case 0:
        month = "January ";
        break;
    case 1:
        month = "February ";
        break;
    case 2:
        month = "March ";
        break;
    case 3:
        month = "April ";
        break;
    case 4:
        month = "May ";
        break;
    case 5:
        month = "June ";
        break;
    case 6:
        month = "July ";
        break;
    case 7:
        month = "August ";
        break;
    case 8:
        month = "September ";
        break;
    case 9:
        month = "October ";
        break;
    case 10:
        month = "November ";
        break;
    case 11:
        month = "December ";
        break;
    }



  function end(day) {
    day = now.getDate();

    if (day == 1 || day == 21 || day == 31) {
      return "st";
    } else if (day == 2 || day == 22) {
      return "nd";
    } else if (day == 3 || day == 23) {
      return "rd";
    } else if (day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9 || day == 10 || day == 11 || day == 12 || day == 13 || day == 14 || day == 15 || day == 16 || day == 17 || day == 18 || day == 19 || day == 20 || day == 24 || day == 25 || day == 26 || day == 27 || day == 28 || day == 29 || day == 30){
      return "th";
    }
  } 



  document.getElementById('time').innerHTML = day + " " +  month + now.getDate() + end() + ", " + hour + ":" + mins + ":" + seconds + AMPM();
}

setInterval(setDate, 1000);

setDate();



//When scrolling add class 
window.onscroll = function() {
  let scroll = window.pageYOffset;



  if (scroll > 200) {

    //FRONT END EXPERIENCE display header 
    document.querySelector('.about__font-main-header').classList.add('about__font-main-header-add')

    //display icons
    document.querySelector('.about__font-responsive').classList.add('about__font-responsive-add')
    document.querySelector('.about__font-newspaper').classList.add('about__font-newspaper-add')
    document.querySelector('.about__font-dynamic').classList.add('about__font-dynamic-add')

    //display headers/text
    document.querySelector('.about__font-responsive-body').classList.add('about__font-responsive-add')
    document.querySelector('.about__font-newspaper-body').classList.add('about__font-newspaper-add')
    document.querySelector('.about__font-dynamic-body').classList.add('about__font-dynamic-add')
  }

  //learn about me section
  if (scroll > 750) {
    //header
    document.querySelector('.about__header').classList.add('about__header-add');
    //picture/name/title
    document.querySelector('.about__picture').classList.add('about__picture-add');
    document.querySelector('.about__picture--name').classList.add('about__picture--name-add');
    document.querySelector('.about__picture--title').classList.add('about__picture--title-add');


    //skill names
    document.querySelector('.about__html5').classList.add('about__html5-add');
    document.querySelector('.about__css3').classList.add('about__css3-add');
    document.querySelector('.about__bootstrap').classList.add('about__bootstrap-add');
    document.querySelector('.about__sass').classList.add('about__sass-add');
    document.querySelector('.about__javascript').classList.add('about__javascript-add');
    document.querySelector('.about__express').classList.add('about__express-add');
    document.querySelector('.about__mongoDB').classList.add('about__mongoDB-add');
    document.querySelector('.about__php').classList.add('about__php-add');
    document.querySelector('.about__mysql').classList.add('about__mysql-add');



    //all progress bars
    document.querySelector('.about__html5-bar').classList.add('about__html5-bar-add');
    document.querySelector('.about__css3-bar').classList.add('about__css3-bar-add');
    document.querySelector('.about__bootstrap-bar').classList.add('about__bootstrap-bar-add');
    document.querySelector('.about__sass-bar').classList.add('about__sass-bar-add');
    document.querySelector('.about__javascript-bar').classList.add('about__javascript-bar-add');
    document.querySelector('.about__express-bar').classList.add('about__express-bar-add');
    document.querySelector('.about__mongoDB-bar').classList.add('about__mongoDB-bar-add');
    document.querySelector('.about__php-bar').classList.add('about__php-bar-add');
    document.querySelector('.about__mysql-bar').classList.add('about__mysql-bar-add');
  }

  console.log(scroll);

}






/////////////////WORK PAGE///////////////////

// //on hover animate overlay with text
// document.querySelector('.overlay').addEventListener('mouseover', animate);

// function animate() {

// // document.querySelector('.work__desc').classList.add('work__desc-add');

//   // document.querySelector('.work__button').classList.add('work__button-add');

//   if ('mouseover' === true) {
//     console.log('yes');
//   }
// }


// //on hover off animate back
// document.querySelector('.overlay').addEventListener('mouseout', resetAnimate);

// function resetAnimate(e) {
//   document.querySelector('.work__button').classList.remove('work__button-add');

//   document.querySelector('.work__button').style.transition = ".5s";
// }



















// let overlay = document.querySelectorAll('.work__overlay');

// for (let i = 0; i < overlay.length; i++) {

//   overlay[i].addEventListener('mousover', function(){
//     console.log('yes')
//   });

// }


// document.body.addEventListener('mouseover', function(e){
//   if (e.target.classList.contains('work__overlay')) {

//     let workDesc = document.querySelectorAll('.work__desc');
//     let workButton = document.querySelectorAll('.work__button');

//     for (let i = 0; i < workDesc.length; i++) {
//       workDesc[i].classList.add('work__desc-add');
//       workButton[i].classList.add('work__button-add');
//     }

//   }
// });



//Card 1
document.querySelector('.work__overlay').addEventListener('mouseover', function(){

  document.querySelector('.work__desc').classList.add('work__desc-add');
  document.querySelector('.work__button').classList.add('work__button-add'); 
});
//on hover off animate back
document.querySelector('.work__overlay').addEventListener('mouseout', function(){

  document.querySelector('.work__desc').classList.remove('work__desc-add');
  document.querySelector('.work__desc').style.transition = ".5s";

  document.querySelector('.work__button').classList.remove('work__button-add');
  document.querySelector('.work__button').style.transition = ".5s";
});

//Card 2
document.querySelector('.work__overlay2').addEventListener('mouseover', function(){

  document.querySelector('.work__desc2').classList.add('work__desc-add');
  document.querySelector('.work__button2').classList.add('work__button-add'); 
});
//on hover off animate back
document.querySelector('.work__overlay2').addEventListener('mouseout', function(){

  document.querySelector('.work__desc2').classList.remove('work__desc-add');
  document.querySelector('.work__desc2').style.transition = ".5s";

  document.querySelector('.work__button2').classList.remove('work__button-add');
  document.querySelector('.work__button2').style.transition = ".5s";
});

//Card 3
document.querySelector('.work__overlay3').addEventListener('mouseover', function(){

  document.querySelector('.work__desc3').classList.add('work__desc-add');
  document.querySelector('.work__button3').classList.add('work__button-add'); 
});
//on hover off animate back
document.querySelector('.work__overlay3').addEventListener('mouseout', function(){

  document.querySelector('.work__desc3').classList.remove('work__desc-add');
  document.querySelector('.work__desc3').style.transition = ".5s";

  document.querySelector('.work__button3').classList.remove('work__button-add');
  document.querySelector('.work__button3').style.transition = ".5s";
});









