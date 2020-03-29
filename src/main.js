import 'bootstrap'
import $ from 'jquery'
import './styles/base/base.scss'


$('.toggle-bag').on('click', () => {
  $('.cart__sidebar').toggleClass('active')
});

$('.close__sidebar').on('click', () => {
  $('.cart__sidebar').toggleClass('active')
});