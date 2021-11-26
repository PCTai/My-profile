
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
var section = document.querySelectorAll('header .navbar ul li a');
for(var i=0 ; i<section.length;i++){
    // console.log(section[i]);
    section[i].onclick =function(){
        header.classList.add('toggle');
        if(header.className='toggle')
            header.classList.remove('toggle');
           
        menu.classList.remove('fa-times');
        menu.classList.add('fa-bars');
    }
    
}