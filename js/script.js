let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')
let searchIcon = document.querySelector('#search-icon')
let searchForm = document.querySelector('#search-form')
let closeSearch = document.querySelector('#close')
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header .navbar a')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
} 

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')

    section.forEach(section => {
        let top = window.scrollY
        let height = section.offsetHeight
        let offset = section.offsetTop - 150
        let id = section.getAttribute('id')
        console.log(top)
        console.log(height)
        console.log(offset)
        console.log(id)

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active')
            })
        }

    })

} 

searchIcon.onclick = () => {
    searchForm.classList.toggle('active')
}

closeSearch.onclick =() => {
    searchForm.classList.remove('active')
}





let swiper = new Swiper(".home-slider", {
    spaceBetween: 200,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    
  });

let swiper2 = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
   
    loop: true,
    breakpoints:{
        0: {
            slidesPerView:1,
        },
        640: {
            slidesPerView:2,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
       
       
    },
  });

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
  }

  function fadeOut(){
    setInterval(loader, 3000)
  }

  window.onload = fadeOut;