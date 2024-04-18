
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

// timer//
function countdown(endDate) {
    //  current date and time
    const now = new Date().getTime();

    //difference between the end date and the current date
    const difference = endDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = difference % 1000;

    return {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
}

const endDate = new Date("2024-05-01").getTime();
setInterval(function () {
    const remainingTime = countdown(endDate);
    document.querySelector(
        ".timer"
    ).innerHTML = `${remainingTime.days}: ${remainingTime.hours}: ${remainingTime.minutes}: ${remainingTime.seconds}`;
}, 1000);

// slider////////////////

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