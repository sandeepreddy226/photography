 let slideIndex = 0;

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("carousel-item");

      if (n >= slides.length) {
        slideIndex = 0;
      }

      if (n < 0) {
        slideIndex = slides.length - 1;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }

      slides[slideIndex].classList.add("active");
    }

     $(document).ready(function(){
    // Synchronize carousel slides
    $('#textCarousel').on('slide.bs.carousel', function (e) {
      var slideFrom = $(this).find('.active').index();
      var slideTo = $(e.relatedTarget).index();
      $('#imageCarousel').carousel(slideTo);
    });

    // Synchronize button click
    $('#syncButton').on('click', function() {
      $('#textCarousel').carousel('next');
      $('#imageCarousel').carousel('next');
    });

    // Synchronize arrow button click
    $('#imageCarousel .carousel-control-prev').on('click', function() {
      $('#textCarousel').carousel('prev');
      $('#imageCarousel').carousel('prev');
    });

    $('#imageCarousel .carousel-control-next').on('click', function() {
      $('#textCarousel').carousel('next');
      $('#imageCarousel').carousel('next');
    });
  });