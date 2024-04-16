

const iconbox = document.querySelector('.iconbox')
const menulist = document.querySelector('.menulist')

iconbox.addEventListener('click', function () {
    menulist.classList.toggle('show')
    document.body.classList.toggle("overflow-hidden")
});











// $('.nav-slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 200,
//     autoplay: true,
//     slidesToShow: 0,
//     slidesToScroll: 0,
//     nextArrow: "",
//     prevArrow: "",
//     responsive: [
//         {
//             breakpoint: 1440,
//             settings: {
//                 slidesToShow: 0,
//                 slidesToScroll: 0,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 0,
//                 slidesToScroll: 0,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 1050,
//             settings: {
//                 slidesToShow: 0,
//                 slidesToScroll: 0,
//             }
//         },

//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 0,
//                 slidesToScroll: 0,
//                 dots: true,

//             }
//         },

//     ]
// });