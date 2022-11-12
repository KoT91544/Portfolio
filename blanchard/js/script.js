document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".header__burger").addEventListener("click", function() {
    document.querySelector(".header__menu").classList.add("menu__active");
    document.body.classList.add("hidden");
  })

  document.querySelector(".menu__close").addEventListener("click", function() {
    document.querySelector(".header__menu").classList.remove("menu__active");
    document.body.classList.remove("hidden");
  })

  document.querySelector(".form-btn__open").addEventListener("click", function() {
    document.querySelector(".header__form").classList.add("form__active");
    this.classList.add("active");
    document.querySelector(".header__burger").classList.add("header__none");
    document.querySelector(".header__logo").classList.add("header__none");
    document.querySelector(".header__search").classList.add("header__search-active")
  })
  document.querySelector('.form__close').addEventListener('click', function () {
    document.querySelector('.header__form').classList.remove('form__active');
    document.querySelector(".form-btn__open").classList.remove("active")
    document.querySelector(".header__burger").classList.remove("header__none");
    document.querySelector(".header__logo").classList.remove("header__none");
    document.querySelector(".header__search").classList.remove("header__search-active")
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".header__form");
    if (!target.closest(".header__search")) {
    form.classList.remove("form__active");
    document.querySelector(".header__burger").classList.remove("header__none");
    document.querySelector(".header__logo").classList.remove("header__none");
    document.querySelector(".header__search").classList.remove("header__search-active")
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
    }
  })

  document.querySelectorAll(".categories__item-btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".categories__item-dropdown");
    let icon = this.children[0]
    // let icon = document.querySelector(".categories__item-icon");
    
    document.querySelectorAll(".categories__item-btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });
    
    document.querySelectorAll(".categories__item-dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-list--item");
      }
    })

    document.querySelectorAll(".categories__item-icon").forEach(el => {
      if (el != icon) {
        el.classList.remove("active-list--item__icon");
      }
    })

    dropdown.classList.toggle("active-list--item");
    btn.classList.toggle("active--btn")
    icon.classList.toggle("active-list--item__icon")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".categories__item")) {
    document.querySelectorAll(".categories__item-dropdown").forEach(el => {
        el.classList.remove("active-list--item");
    })
     document.querySelectorAll(".categories__item-btn").forEach(el => {
        el.classList.remove("active--btn");
    });
    document.querySelectorAll(".categories__item-icon").forEach(el => {
      el.classList.remove("active-list--item__icon");
    })
  }
})
});



new SimpleBar(document.querySelector(".dropdown__list-first"), {
 
  autoHide: false,
  scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(".dropdown__list-second"), {
 
  autoHide: false,
  scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(".dropdown__list-third"), {
 
  autoHide: false,
  scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(".dropdown__list-fourth"), {
 
  autoHide: false,
  scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(".dropdown__list-fifth"), {
 
  autoHide: false,
  scrollbarMaxSize: 25,
});

const container = document.querySelector(".hero__content")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev"
  // },
  // pagination: {
  //   el: '.swiper-bullet-pagination',
  //   type: 'bullets',
  //   clickable: true
  // }

});

el1 = document.querySelector(".checkboxs__item-first");
el2 = document.querySelector(".checkboxs__item-second");
el3 = document.querySelector(".checkboxs__item-third");

el1.addEventListener("click", function() {
  if (document.querySelector(".checkboxs__input-first").hasAttribute("checked")) {
    document.querySelector(".checkboxs__input-first").removeAttribute("checked");
  }
  else {
    document.querySelector(".checkboxs__input-first").setAttribute("checked", "");
  }
});

el2.addEventListener("click", function() {
  if (document.querySelector(".checkboxs__input-second").hasAttribute("checked")) {
    document.querySelector(".checkboxs__input-second").removeAttribute("checked");
  }
  else {
    document.querySelector(".checkboxs__input-second").setAttribute("checked", "");
  }
});

el3.addEventListener("click", function() {
  if (document.querySelector(".checkboxs__input-third").hasAttribute("checked")) {
    document.querySelector(".checkboxs__input-third").removeAttribute("checked");
  }
  else {
    document.querySelector(".checkboxs__input-third").setAttribute("checked", "");
  }
});


const gallerySlider = new Swiper(".gallery__swiper", {
// slidesPerView: 3,
slidesPerGroup: 3,
spaceBetween: 30,
pagination: {
  el: ".gallery__swiper-pagination",
  type: "fraction"
},
navigation: {
  nextEl: ".swiper-btn__next",
  prevEl: ".swiper-btn__prev"
},

breakpoints: {
  320: {  
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 38
  },

  767: {
    slidesPerView: 2,
    spaceBetween: 38
  },
  
  1000: {
    slidesPerView: 2,
    spaceBetween: 30
  },

  1850: {
    slidesPerView: 3,
    spaceBetween: 50
  }
},

a11y: {
  prevSlideMessage: 'Предыдущий',
  nextSlideMessage: 'Следующий',
}
});

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
searchEnabled: false
});

$( function() {
$( "#accordion" ).accordion();
});

document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn)
{
  tabsBtn.addEventListener('click', function(e)
  {
  const index = e.currentTarget.dataset.index;
  document.querySelectorAll('.tabs__btn').forEach(function(btn)
  {
  btn.classList.remove('is-active')});
  e.currentTarget.classList.add('is-active');
  document.querySelectorAll('.tabs__item').forEach(function(tabsBtn){
      tabsBtn.classList.remove('active__img')});
      document.querySelector(`[data-target="${index}"]`).classList.add('active__img');
  });
});

const eventsSwiper = new Swiper('.events__swiper', {
slidesPerView: 3,
slidesPerGroup: 3,
// autoHeight: true,
calculateHeight: true,

navigation: {
  nextEl: '.events-btns-next',
  prevEl: '.events-btns-prev',
},

pagination: {
  el: '.events__pagination',
  clickable: true,
},

breakpoints: {
  1: {  
    slidesPerView: 1,
    slidesPerGroup: 1,
  },

  615: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 15
  },
  
  768: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 34
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 27
  },

  1850: {
    spaceBetween: 50
  }
},
});

tippy('.description__tooltip1', {
theme: "style",
content: 'Пример современных тенденций - современная методология разработки',
});

tippy('.description__tooltip2', {
theme: "style",
content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});

tippy('.description__tooltip3', {
theme: "style",
content: 'В стремлении повысить качество',
});

const projectsSwiper = new Swiper('.projects-swiper', {
slidesPerView: 3,
spaceBetween: 50,

navigation: {
  nextEl: '.projects-btns-next',
  prevEl: '.projects-btns-prev',
},

breakpoints: {
  320: {  
    slidesPerView: 1,
  },

  682: {
    slidesPerView: 2,
    spaceBetween: 15,
  },

  768: {
    slidesPerView: 2,
    spaceBetween: 34
  },

  1024: {
    slidesPerView: 2,
    spaceBetween: 50
  },
  
  1850: {
    slidesPerView: 3,
    spaceBetween: 50
  }
},
});

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new JustValidate('.form__form', {
rules: {
    name: {
        required: true,
        minLenght: 2,
        maxLenght: 10
    },
    tel: {
        required: true,
        function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10 
        }
    }
},
messages: {
    name: {
        required: 'Недопустимый формат'
    },
    tel: {
        required: 'Недопустимый формат',
        function: 'Недопустимый формат'
    },
},
});

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
  center: [55.758620371156155, 37.6176917552948],
  zoom: 14
  });


  myMap.behaviors.disable('scrollZoom')

  var MyPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: "/img/map/map-placemark.svg",
    iconImageSize: [20, 20]
  })

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(MyPlacemark); 
}

$("a.nav__link").on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top
  }, 800);
});

