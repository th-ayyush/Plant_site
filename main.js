const navMenu =document.getElementById("nav-menu")
const navLink= document.querySelectorAll(".nav-link")
const hamburger=document.getElementById("hamburger")

hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link=>{
    link.addEventListener("click",()=>{
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
})
})


const swiper = new Swiper('.swiper', {
    speed:400,
    spaceBetween:30,
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    grabCursor:true,
    breakPoints:{
        640:{
            slidesPerView:1
        },
        760:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
  
  });

  //scroll show up
  const scrollUp=()=>{
    const header =document.getElementById("scroll-up")
    if(this.scrollY>=250){
        header.classList.remove("-bottom-1/2")
        header.classList.add("bottom-4")
    }else{
        header.classList.add("-bottom-1/2")
        header.classList.remove("bottom -4")
    }
  }

  window.addEventListener("scroll",scrollUp)

  //Change background header

  const scrollHeader=()=>{
    const header =document.getElementById("navbar")
    if(this.scrollY>=50){
        header.classList.add("border-b","border-yellow-500");
    }else{
        header.classList.remove("border-b","border-yellow-500");
    }
  }

  window.addEventListener("scroll",scrollHeader)

//   scroll active link

const activeLink=()=>{
    const sections=document.querySelectorAll('.section');
    const navLinks=document.querySelectorAll('.nav-link')
    let current="home"

    sections.forEach(section=>{
        const sectionTop=section.offsetTop;
        if(this.scrollY>=sectionTop-60){
            current=section.getAttribute("id")
        }
    })
    navLinks.forEach(item=>{
        item.classList.remove("active")
        if(item.href.includes(current)){
            item.classList.add("active")
        }
    })

}
window.addEventListener("scroll",activeLink)

//scroll reveal animation

const sr=ScrollRevel({
    origin: "top",
    distance:"60px",
    duration:2500,
    delay:300,
    reset:true
})

sr.reveal(`.home_data`)
sr.reveal(`.home_image`,{delay:500,scale:0.5});
sr.reveal(`.service_card`)