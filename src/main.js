import './main.css'
import galery from './galery.js'
import Alpine from 'alpinejs'

window.addEventListener('DOMContentLoaded', () => {
  console.log('--- Bootstrapping js Started ----');  
  Alpine.start()
});

document.addEventListener('alpine:init', () => {
  const galeryElement = document.querySelector('#galery');
  if(galeryElement !== null){
    Alpine.data('galery', galery)
  }
})