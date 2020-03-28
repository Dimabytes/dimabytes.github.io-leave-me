import './index.scss'
import $ from 'jquery'
import {slick, getSlick} from '../slick.min'

$('.card-title').slick({
  dots: false,
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 0,
  fade: true,
  cssEase: 'linear'
});


$('.card-title').hover(function () {
  console.log($(this))
    $(this).slick('slickNext')
})