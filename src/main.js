import 'bootstrap'
import $ from 'jquery'
import './styles/base/base.scss'


$('.toggle-bag').on('click', () => {
  $('.cart__sidebar').toggleClass('active')
});

$('.sidebar__close').on('click', () => {
  $('.cart__sidebar').toggleClass('active')
});

window.addEventListener('resize', () => {
  document.querySelector(':root').style
    .setProperty('--vh', window.innerHeight/100 + 'px');
})

document.querySelector(':root').style
  .setProperty('--vh', window.innerHeight/100 + 'px');