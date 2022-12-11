$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script

    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer", "Consultant", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full Stack Developer", "Consultant", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

//promises, await and async method
let quote = document.getElementById("q1");
let author = document.getElementById("q2");

const url ='http://quotes.stormconsultancy.co.uk/random.json';

let getQuote = async () => {
  await fetch(url)
  .then((data) => data.json())
  .then((item) => {
    console.log(item.quote);
    quote.innerHTML = item.quote;
    author.innerHTML = item.author;
  });
} 

window.addEventListener("load" , getQuote);

//currying method
document.getElementById("heady").innerHTML = getuserCurry("Harshpreet Singh")("And I am a developer.");

function getuserCurry(firstname) {

        return function(lastname) {
            return "Hi , I am  " + firstname + " " + lastname ;
        }
      }

      //closure method
      function show() {
        var name = 'Clousre Added';
        function displayName() {
          alert(name);
        }
        return displayName;
      }
      
      var closeu = show()


      //bind , call, apply methods
      var obj1={
        num : "My"
     }
     var add = function(num2){
        return (myservice.innerHTML=(this.num +" "+ num2));
     }
  
    add.call(obj1,"Services");  

  