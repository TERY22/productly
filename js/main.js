$((function(){$(".slider").slick({slidesToShow:3,slidesToScroll:3,arrows:!1,dots:!0,responsive:[{breakpoint:1175,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".menu__burger").on("click",(function(){$(".menu__list").toggleClass("active")}))}));