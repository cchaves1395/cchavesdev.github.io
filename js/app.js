const header = document.querySelector('header')
const menuBtn = document.querySelector('#hamburger-btn')
const dropdrownBtn = document.querySelectorAll('.dropdown-item-submenu')    

//Show or hide menu
menuBtn.addEventListener('click', () => {
    header.classList.toggle('active')
})


//Accordion function to submenu
dropdrownBtn.forEach((element, index) =>{

    element.addEventListener('click', () => {
        
        if(element.classList.contains('active')){
            element.classList.remove('active')
            return;
        }

        //delete active class to other buttons
        dropdrownBtn.forEach(element => {
            element.classList.remove('active')
        })

        //add active class
        element.classList.add('active')
    })
} )