$(document).ready(function(){
 $('.js--sec-status').waypoint(function(direction){ /*The direction helps to decide if the user is scrolling up or down*/
     if(direction == "down"){ /*IF THE DIRECTION BEING SCROLLED IN THE PAGE IS DOWN THEN DO THAT BELLOW*/
         $('nav').addClass('main-nav'); /* with this line we do not need to set the name of nav class to sticky in html, we have only to have the class in CSS together with the properties, we set nav class =  sticky before only to exemplify the sticky navigation, and make it appear in the page /// THIS CLASS MAKE THE STICKY NAVIGATON APPEAR WHEN THE DIRECTION IS DOWS*/
     }else{
         $('nav').removeClass('main-nav');
     } 
     }, {
        offset: '60px;'
    });
    
    //make the menu works
    
         
     $('.js--more').click(function(){ 
     var opt = $('.js--options');
     if(opt.css('display')=='none'){
         
         $(opt).css('display', 'block'); 
         
     }else{
         $(opt).css('display', 'none');  
     }
    });
    
    
    
    //scrolling
    
   
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
            
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
    
     //make box images show text
    
     $('.box-f1').hover(function(){
          var box = $('.box-f2');
        if(box.css('background-image')!=='none'){
           $('.text-box').css('display', 'block');
        $(box).css('background-image', 'none'); 
         }else{
              $('.text-box').css('display', 'none');
         $(box).css('background-image', ' url(/Resources/img/O94uGN-FGB8.jpg)');  
     } 
     });
    

    //make box2 images show text
    
     $('.box-f2').hover(function(){
          var box3 = $('.box-f3');
        if(box3.css('background-image')!=='none'){
           $('blockquote').css('display', 'block');
        $(box3).css('background-image', 'none'); 
         }else{
              $('blockquote').css('display', 'none');
         $(box3).css('background-image', ' url(/Resources/img/DSC00365.JPG)');  
     } 
     });
    
    //make animate animations
    
 
$('.js--wp-1').waypoint(function(direction){  /*we selected the first waypoint, the row with columns in the features, we selected the action to the first scrolling to that element*/
        $('.js--wp-1').addClass('animate__animated animate__fadeIn'); /*here we define that a class animate fadeIn is added to that element (to the row), this class is from the CSS framework animate.style and it do a fade in to the element. We must specify the name of the class or I mean the  action, and to  know that it can be copy in the site. (animate__fadeIn', animate__fadeOut)*/
    },{
        offset: '50%;'      /*this make the animation  happens when is missing 50% to reach the top the element*/
    })

    //animation for the hey! make me your friend
    $('.js--wp-2').waypoint(function(direction){  /*we selected the first waypoint, the row with columns in the features, we selected the action to the first scrolling to that element*/
        $('.js--wp-2').addClass('animate__animated animate__fadeInLeft'); /*here we define that a class animate fadeIn is added to that element (to the row), this class is from the CSS framework animate.style and it do a fade in to the element. We must specify the name of the class or I mean the  action, and to  know that it can be copy in the site. (animate__fadeIn', animate__fadeOut)*/
    },{
        offset: '50%;'      /*this make the animation  happens when is missing 50% to reach the top the element*/
    })
    
    
     //animation for remember
    $('.js--wp-3').waypoint(function(direction){  /*we selected the first waypoint, the row with columns in the features, we selected the action to the first scrolling to that element*/
        $('.js--wp-3').addClass('animate__animated animate__fadeInRight'); /*here we define that a class animate fadeIn is added to that element (to the row), this class is from the CSS framework animate.style and it do a fade in to the element. We must specify the name of the class or I mean the  action, and to  know that it can be copy in the site. (animate__fadeIn', animate__fadeOut)*/
    },{
        offset: '50%;'      /*this make the animation  happens when is missing 50% to reach the top the element*/
    })
    
     //animation for phone
    $('.js--wp-4').waypoint(function(direction){  /*we selected the first waypoint, the row with columns in the features, we selected the action to the first scrolling to that element*/
        $('.js--wp-4').addClass('animate__animated animate__fadeInDown'); /*here we define that a class animate fadeIn is added to that element (to the row), this class is from the CSS framework animate.style and it do a fade in to the element. We must specify the name of the class or I mean the  action, and to  know that it can be copy in the site. (animate__fadeIn', animate__fadeOut)*/
    },{
        offset: '50%;'      /*this make the animation  happens when is missing 50% to reach the top the element*/
    })
    
    
     //animation for images
    $('.js--wp-1-1').waypoint(function(direction){  /*we selected the first waypoint, the row with columns in the features, we selected the action to the first scrolling to that element*/
        $('.js--wp-1-1').addClass('animate__animated animate__pulse'); /*here we define that a class animate fadeIn is added to that element (to the row), this class is from the CSS framework animate.style and it do a fade in to the element. We must specify the name of the class or I mean the  action, and to  know that it can be copy in the site. (animate__fadeIn', animate__fadeOut)*/
    },{
        offset: '50%;'      /*this make the animation  happens when is missing 50% to reach the top the element*/
    })
   
    
});

