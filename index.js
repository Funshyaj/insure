let menuBtn = document.querySelector('#hamburger')
let body = document.querySelector('.body')
let menu = document.querySelector('.nav')

menuBtn.addEventListener("click", 
()=> {
    if (menuBtn.id == "hamburger"){
            menuBtn.src ='images/icon-close.svg'
            menuBtn.id = "close"
            body.style.display = "none"
            menu.style.display = "flex"
            menu.style.height = '100%'
    }

   else if (menuBtn.id == 'close'){
        menuBtn.src='images/icon-hamburger.svg'
        menuBtn.id = "hamburger"
        body.style.display = "block"
            menu.style.display = "none"
            menu.style.height = '0'
    }


})