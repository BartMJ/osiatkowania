 window.addEventListener('scroll', function() {
     const parallax = document.querySelector('#para')

//     // console.log(parallax)
     let scrollPosition = window.pageYOffset
     parallax.style.transform = 'translateY(' + scrollPosition * 0.8 + 'px'
    
   })



  document.getElementById('myModal').addEventListener('click', closeModal)

  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal(event) {
    console.log(event.target)
    if(event.target.id === 'myModal' || event.target.className === 'close') {
      document.getElementById("myModal").style.display = "none";
    }
  }
  
  var slideIndex = 1;
  
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
  
  //   var captionText = document.getElementById("caption");
   
    // When going to the end of gallery
    if (n > slides.length) {slideIndex = 1}
    // When going to the beginning of gallery
    if (n < 1) {slideIndex = slides.length}
    // Disappear all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    slides[slideIndex-1].style.display = "block";
    
    
  }
  