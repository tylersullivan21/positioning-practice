window.onload = attachEventListener;

var slideAddSet = false;
var slideRemoveSet = false;

function attachEventListener(){
window.addEventListener('scroll', doSomething);
}

function doSomething(){
const scrolled = window.scrollY;
console.log(scrolled);

var slide  = document.getElementsByClassName("test-slide")[0];
console.log("function is working");

 if(scrolled <= 870 && slideAddSet ==true){
    slide.classList.add("slide-add-on");
    slide.classList.remove("slide-remove-class");
   
    slideRemoveSet = true;
    slideAddSet = false;
    console.log("the remove class has been added;")
 
}


else if( scrolled >= 871 && slideRemoveSet ==false){
    slide.classList.add("slide-add-on");
    slide.classList.remove("slide-remove-class");
   slideAddSet = true;
   slideRemoveSet = false;
    console.log("the class slide add on has been added");
}





}