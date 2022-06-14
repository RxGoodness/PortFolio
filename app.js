// Picture carousel
var container3 = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("testimonial");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display ="none";
  }
  container3++;
  if (container3 > slides.length) {container3 = 1}
    slides[container3 - 1].style.display = "block";
    setTimeout(SlideShow, 3000); //pics change in every 3 seconds
}
  
  // Sticky menu background
  window.addEventListener('scroll', moveDown);
  
  function moveDown() {
    if (window.scrollY > 150) {
      document.querySelector('.navbar').style.opacity = 0.8;
    } else {
      document.querySelector('.navbar').style.opacity = 1;
    }
  }


  
  // Smooth Scrolling
  $('.navbar a, .btn-1').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
      
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 110
        },
       600
      );
    }
  });