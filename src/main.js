import 'bootstrap'
import $ from 'jquery'

$('.toggle-bag').on('click', () => {
  $('.cart__sidebar').toggleClass('active')
});

$('.sidebar__close').on('click', () => {
  $('.cart__sidebar').toggleClass('active')
});