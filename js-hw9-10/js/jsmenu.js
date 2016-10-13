// function slide(el) {
//   var top = 0;
//   var time = 0;
//
//   var timeanimation = setInterval(function() {
//     if (time>0){
//       clearInterval(timeanimation);
//     }
//
//     top +=200;
//     time += 500;
//     el.style.top = top + 'px';
//   }, 500);
// };

// var menu = document.querySelector('.dropdown');
// var submenu = document.querySelector('.subList');
// menu.addEventListener('click', function(){
//   slide(submenu);
// });


// var menu = document.getElementById('open1');
// var title = menu.querySelector('.menu');
//
// title.onclick = function (e) {
//   e.preventDefault();
//   menu.classList.toggle('open');
// }


document.getElementById('open1').onmouseover= function(event) {
    var target = event.target; // где был клик?
    if (target.className == 'menu') {
        var s=target.getElementsByClassName('subList');
        // closeMenu();
        s[0].style.display='block';
    }
}
