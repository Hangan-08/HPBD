$(document).ready(function () {
    // window.addEventListener("scroll", function () {
    //     let header = document.querySelector('.leng');
    
    //     header.classList.toggle("scrolling_active", window.scrollY > 300);
    //   });
    $(function() {
      AOS.init();
    });
    $('#exampleModal3').on('shown.bs.modal', function () {
        $('#video2')[0].play();
      })
      $('#exampleModal3').on('hidden.bs.modal', function () {
        $('#video2')[0].pause();
      });
      $('#exampleModal').on('shown.bs.modal', function () {
        $('#video1')[0].play();
      })
      $('#exampleModal').on('hidden.bs.modal', function () {
        $('#video1')[0].pause();
      })
 })