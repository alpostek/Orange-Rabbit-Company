import "../sass/main.scss"

  $(function() {
    var burgerNav = document.querySelector(".burger-nav");
    var menuToShow = document.querySelector(".navbar ul");

    burgerNav.addEventListener("click", function () {
      menuToShow.classList.toggle("open");
    })

    //menu colors
    var menuOptions = document.querySelectorAll(".menu_img");

    for (var i = 0; i<menuOptions.length; i++){
      menuOptions[i].addEventListener("mouseover", function(){
        this.firstElementChild.style.color="#fb9c06";
        this.firstElementChild.style.fontWeight="bold";
      });
      menuOptions[i].addEventListener("mouseout", function(){
        this.firstElementChild.style.color="#b8b6b6";
        this.firstElementChild.style.fontWeight="normal";
      });
    }

    //animations on sections
    $(".to_animate").css("opacity", 0);
    $(".rabbit_div").waypoint(function(direction){
      $(".rabbit_div").addClass("animated fadeInDownBig");
      $(".orange_div").addClass("animated fadeInUpBig");
    },{
    offset: "40%"
  });

  $(".col-4").waypoint(function(direction){
    $(".col-4").addClass("animated fadeInLeft")
  }, {
    offset: "60%"
  });

  $(".col-3").waypoint(function(direction){
    $(".col-3").addClass("animated fadeIn")
  }, {
    offset: "70%"
  }

  );


});//end of DOM
