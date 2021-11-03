let inputStar = document.querySelectorAll('.rating-star')
inputStar.forEach(function(elemento){
   elemento.addEventListener('click', function(event){
      
      let bgdStar = event.target.parentNode
      let paiBgdStar = bgdStar.parentNode
      paiBgdStar.classList.add('background')
   })
})