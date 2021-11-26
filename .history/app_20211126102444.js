
var menu=document.getElementById('menu');
var header=document.querySelector('header');
menu.onclick=function(e){
    if(this.className=='fas fa-bars'){
        this.classList.remove('fa-bars');
        this.classList.add('fa-times');
        header.classList.remove('toggle');
    }
    else{
        this.classList.remove('fa-times');
        this.classList.add('fa-bars');
        header.classList.add('toggle');
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