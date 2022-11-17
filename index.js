let menuBtn = document.querySelector('#hamburger')
let body = document.querySelector('.body')
let hero = document.querySelector('.hero-info')
let menu = document.querySelector('.nav')

//nav menu toggle
menuBtn.addEventListener("click", 
()=> {
    if (menuBtn.id == "hamburger"){
            menuBtn.src ='images/icon-close.svg'
            menuBtn.id = "close"
            body.style.display = "none"
            hero.style.display = "none"
            menu.style.display = "flex"
            menu.style.height = '100%'
           
    }

   else if (menuBtn.id == 'close'){
        menuBtn.src='images/icon-hamburger.svg'
        menuBtn.id = "hamburger"
        body.style.display = "block"
        hero.style.display = "block"
             menu.style.display = "none"
    }


})