$(document).ready(function(){
   $(window).scroll( function(){
			
      $('.project_img img').each( function(i){
         
         var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
         var bottom_of_window = $(window).scrollTop() + $(window).height();
         
         if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1'},700);
         }

      });

         var scrollPosition = $(this).scrollTop();
         var targetElement = $('.contect_inner');
         var targetPosition = targetElement.offset().top;

         if (scrollPosition > targetPosition - $(window).height() / 2) {
            targetElement.addClass('active');
         }
   
   });

   // 팝업 모달창

   var imageBtn = $('.detail_area a');
   var popup = $('.modal_popup');
   var closeBtn = popup.find('.close_btn');
   var htmlAndBody = $('html, body');
   var focusTarget;

   imageBtn.on('click', function(e) {
      e.preventDefault();
      var popupImg = popup.find(' .modal_inner > img');
      var image = $(this).find(' > img');
      var src = image.attr('src');
      var alt = image.attr('alt');
      focusTarget = $(this);
      popupImg.attr('src', src).attr('alt', alt);
      createPopup();
   });

   popup.on('click', function(){
      removePopup();
   });
   
   closeBtn.on('click', function(e){
      e.preventDefault();
      removePopup();
   });

   // 팝업 생성 함수
   function createPopup(){
      popup.addClass('activeOn');
      htmlAndBody.css('overflow-y', 'hidden');
      setTimeout(function(){
         closeButton.focus();
      }, 50);
   }
   // 팝업 제거 함수
   function removePopup(){
         popup.removeClass('activeOn');
         focusTarget.focus();
         htmlAndBody.css('overflow-y', 'visible');
   }
   


});