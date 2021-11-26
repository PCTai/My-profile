
var menu=document.getElementById('menu');
var header=document.querySelector('header');
menu.onclick=function(e){
    if(this.className=='fas fa-bars'){
        this.classList.remove('fa-bars');
        this.classList.add('fa-times');
    }
    else{
        this.classList.remove('fa-times');
        this.classList.add('fa-bars');
    }
};