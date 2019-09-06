// header实现
var time1;     
$('.solve').hover(function () {
    setTimeout (function () {
        $('.menu').stop(false, true).slideDown();
    }, 300)
},function () {
    time1 = setTimeout (function () {
        $('.menu').stop(false, true).slideUp();
    }, 400)
})
$('.menu').hover(function () {
    setTimeout (function () {
        window.clearTimeout(time1);  
        $('.menu').show();
},100)
    },function () {
    setTimeout (function () {
        $('.menu').hide()
}, 1000)
    })