

const iconbox = document.querySelector('.iconbox')
const menulist = document.querySelector('.menulist')

iconbox.addEventListener('click', function () {
    menulist.classList.toggle('show')
    document.body.classList.toggle("overflow-hidden")
});


// ............counter-value.............................

const buttonInc = document.querySelector("#increment");
const buttonDec = document.querySelector("#decrement");
const counter = document.querySelector("#counter");

let model = new Proxy(
    { value: 0 },
    {
        set(obj, prop, newval) {
            obj[prop] = newval;

            if (prop === "value") {
                counter.innerText = obj[prop];
            }
        }
    }
);

buttonInc.addEventListener("click", () => {
    model.value += 1;
});

buttonDec.addEventListener("click", () => {

    model.value -= 1;
});










$('.responsive1').slick({
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: ".next-arrow",
    prevArrow: ".prew-arrow",
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,

            }

        },

    ]
});
$('.responsive2').slick({
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: ".next1-arrow",
    prevArrow: ".prew1-arrow",
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,

            }

        },

    ]
});