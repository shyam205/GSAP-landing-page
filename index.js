TweenMax.from(".left-section",2, {
    width:"0",
    ease:Expo.ease
})
TweenMax.from(".right-section",2, {
    delay:2,
    width:"70vw",
    opacity:"0",
   
})
TweenMax.from(".center-section",2, {
    delay:3,
    width:"0",
    height:"450px",
    x:-20,
    ease:Expo.easeInOut
})
TweenMax.from(".logo",2, {
    delay:1.5,
    y:-20,
    opacity:0,
    ease:Expo.easeInOut
})
TweenMax.from(".description",2, {
    delay:2,
    y:20,
    opacity:0,
    ease:Expo.easeInOut
})
TweenMax.from(".content",2, {
    delay:1,
    x:20,
    opacity:0,
    ease:Expo.easeInOut
})
TweenMax.from(".toggle",2, {
    delay:1,
    y:-20,
    opacity:0,
    ease:Expo.easeInOut
})
TweenMax.from(".menu nav ul li",2, {
    delay:1,
    y:-20,
    opacity:0,
    ease:Expo.easeInOut
})


var toggle = document.querySelector(".toggle");
var menu = document.querySelector(".menu");
var cancelbox = document.querySelector(".cancelbox");
toggle.addEventListener("click",function(e) {
    menu.classList.add("active");
})
cancelbox.addEventListener("click",function(e) {
    menu.classList.remove("active");
})

