var iconLeft =  document.querySelector(".icon1");
var iconRight =  document.querySelector(".icon2");
var Images = document.querySelector(".images")

var swap = 0;
iconRight.addEventListener("click",function(){
    swap = swap+100;
    Images.scrollTo(swap,0)
})
iconLeft.addEventListener("click",function(){
    swap = swap-100;
    Images.scrollTo(swap,0)
})
