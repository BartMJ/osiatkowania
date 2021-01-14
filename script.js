window.addEventListener('scroll', function() {
    const parallax = document.querySelector('#para')

    // console.log(parallax)
    let scrollPosition = window.pageYOffset

    parallax.style.transform = 'translateY(' + scrollPosition * 0.8 + 'px'
    
  })

