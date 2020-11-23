/**************   burger ***************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  let user_logo = document.querySelector('.logo');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
  user_logo.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    let user_logo = document.querySelector('.logo');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
    user_logo.classList.remove('active');
  }
});

$('.main-menu a').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
});