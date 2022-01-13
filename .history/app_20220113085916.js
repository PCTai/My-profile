
var menu=document.getElementById('menu');
var header=document.querySelector('header');
menu.onclick=function(e){
    if(this.className=='fas fa-bars'){
        this.classList.remove('fa-bars');
        this.classList.add('fa-times');
        header.style='left:0%';
    }
    else{
        this.classList.remove('fa-times');
        this.classList.add('fa-bars');
        header.style='left:-125%';
    }
};
var section = document.querySelectorAll('section');
for(var i=0 ; i<section.length;i++){
    // console.log(section[i]);
    section[i].onclick =function(){
        if(WidthHTML<'1024'){
            header.style='left:-125%';
            menu.classList.remove('fa-times');
            menu.classList.add('fa-bars');
        }
    
    }
    
}
var WidthHTML=document.querySelector('html').offsetWidth;
var navbar = document.querySelectorAll('header .navbar ul li a');
for(var i=0 ; i<navbar.length;i++){
    // console.log(section[i]);
    navbar[i].onclick =function(){
        if(WidthHTML<'1024'){
            header.style='left:-125%';
            menu.classList.remove('fa-times');
            menu.classList.add('fa-bars');
        }
    
    }
    
}
var HeightBody=document.querySelector('body').offsetHeight;
var HeightSection=HeightBody/5;


var topScroll=document.querySelector('.top-cr');
if(HeightBody>HeightSection){
    topScroll.style='display:inline';
}
else{
    topScroll.style='display:none';
}
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    if(scroll>0){
        topScroll.style='display:inline';   
    }else topScroll.style='display:none';
    
});

