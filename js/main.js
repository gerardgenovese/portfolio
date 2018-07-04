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
//set z-index to 0 so the nav menu doesn't site above anything in the background.
document.querySelector('.navigation__nav').style.zIndex = '0';
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
  const checked = document.querySelector('.navigation__checkbox').checked;
  const navList = document.querySelector('.navigation__list');
  const navNav = document.querySelector('.navigation__nav');
  const navigationNAV = document.querySelector('.navigation__nav');

  
  if (checked === true) {
  navNav.style.width = '0';
    setTimeout(function(){
      navList.style.display = 'none';
      navigationNAV.style.zIndex = '-1';
    }, 500);
  } else if (checked === false) {
    navList.style.display = 'block';
    navNav.style.width = '100%';
    navigationNAV.style.zIndex = '1500';
  }
}

// setTimeout(function(){
//   document.querySelector('.navigation__nav').style.width = '0';
// },500);

// document.querySelector('.navigation__nav').style.width = '0';

// function linkChecked() {
//   const navList = document.querySelector('.navigation__list');
//   setTimeout(function(){
//     navList.style.display = 'none';
//   }, 500);

// document.querySelector('.navigation__nav').style.width = '0';
// document.querySelector('.navigation__checkbox').checked = false;

  
// }
function linkChecked() {
  const navList = document.querySelector('.navigation__list');
  setTimeout(function(){
    navList.style.display = 'none';
  }, 500);
  const navigationNAV = document.querySelector('.navigation__nav');

  navigationNAV.style.zIndex = '0';
}


//DATE
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






setTimeout(function(){
  document.querySelector('.twinkling').style.opacity = '1';
},2000);



//When scrolling add class 
window.onscroll = function() {
  let scroll = window.pageYOffset;



  if (scroll > 200) {

    //FRONT END EXPERIENCE display header 
    document.querySelector('.development__main-header').classList.add('development__main-header-add')

    //display development
    document.querySelector('.development__body').classList.add('development__body-add')
    document.querySelector('.development__body-2').classList.add('development__body-2-add')
    document.querySelector('.development__body-3').classList.add('development__body-3-add')
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

    //paragraph
    document.querySelector('.about__info').classList.add('about__info-add');
  }

  // console.log(scroll);

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

//CarSite
// document.querySelector('.work__overlay4').addEventListener('mouseover', function(){

//   document.querySelector('.work__desc4').classList.add('work__desc-add');
//   document.querySelector('.work__button4').classList.add('work__button-add'); 
// });
// //on hover off animate back
// document.querySelector('.work__overlay4').addEventListener('mouseout', function(){

//   document.querySelector('.work__desc4').classList.remove('work__desc-add');
//   document.querySelector('.work__desc4').style.transition = ".5s";

//   document.querySelector('.work__button4').classList.remove('work__button-add');
//   document.querySelector('.work__button4').style.transition = ".5s";
// });






//MUSIC

/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  // console.log(icon);
  toggle.textContent = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


//Change Src to play song

let allSongs = document.querySelectorAll('.song');
for (let i = 0; i < allSongs.length; i++) {
  allSongs[i].addEventListener('click', function(e){

    let player = document.querySelector('.player__video');

    let songFile = allSongs[i].getAttribute("value");
    player.src = songFile;

    togglePlay();
    e.preventDefault();
  });
}






