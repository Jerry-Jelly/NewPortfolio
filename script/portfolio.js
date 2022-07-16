$(document).ready(function(){

  //INDEX
    //손
    $('.m_img').animate({'opacity':'1'},500);

    //나타내기
    $('h1').animate({'opacity':'1'},500);
    $('.m_txt li > p:first-child').animate({'opacity':'1'},1000);
    $('.m_txt li > p:nth-child(2)').animate({'opacity':'1'},1500);
    $('.m_txt li > p:nth-child(3)').animate({'opacity':'1'},2000);
    $('.m_txt li > p:nth-child(4)').animate({'opacity':'1'},2500);

    $('.m_btn > li:first-child').animate({'margin-top':'0'},800).animate({'opacity':'1'},300);
    $('.m_btn > li:nth-child(2)').animate({'margin-top':'0'},1300).animate({'opacity':'1'},300);
    $('.m_btn > li:last-child').animate({'margin-top':'0'},1800).animate({'opacity':'1'},300);

    //버튼 클릭
    // $('.m_btn > li:first-child > a').click(function(){
    //     $('.m_inner').animate({'margin-top':'801px'},1000);
    //     $('.circle').animate({'margin-top':'801px'},1000);
    // });

    //qr코드
    $('.qr_code').hide();
    $('.fa-comment').mouseenter(function(){
      $('.qr_code').stop().fadeIn();
    });
    $('.fa-comment').mouseleave(function(){
      $('.qr_code').stop().fadeOut();
    });




  // RESUME
    //프로필 이미지
    $('.profile').animate({'margin-top':'146px'},300).animate({'opacity':'1'},800);

    $(window).scroll(function(){
      let sPos = $(this).scrollTop(); 

        if(sPos>=300){
          $('.sk_con_left p:nth-child(2)').animate({'opacity':'1'});
          $('.sk_con_left p:nth-child(3)').animate({'opacity':'1'}, 500);
          $('.sk_con_left p:nth-child(4)').animate({'opacity':'1'}, 1000);
          $('.sk_con_left p:nth-child(5)').animate({'opacity':'1'}, 1500);
          $('.sk_con_left p:nth-child(6)').animate({'opacity':'1'}, 2000);
          $('.sk_con_left p:nth-child(7)').animate({'opacity':'1'}, 2500);
          $('.sk_con_left > p:last-child').animate({'opacity':'1'}, 3000);
    
          $('.bar01').animate({'width':'392px'}, 2500, 'easeOutExpo');
          $('.score01').animate({'opacity':'1'}, 2500);
    
          $('.bar02').animate({'width':'369px'}, 2500, 'easeOutExpo');
          $('.score02').animate({'opacity':'1'}, 3500);
    
          $('.bar03').animate({'width':'239px'}, 2500, 'easeOutExpo');
          $('.score03').animate({'opacity':'1'}, 4000);
    
          $('.bar04').animate({'width':'351px'}, 2500, 'easeOutExpo');
          $('.score04').animate({'opacity':'1'}, 4500);
    
          $('.bar05').animate({'width':'338px'}, 2500, 'easeOutExpo');
          $('.score05').animate({'opacity':'1'}, 5000);
    
          $('.bar06').animate({'width':'430px'}, 2500, 'easeOutExpo');
          $('.score06').animate({'opacity':'1'}, 5000);
        }

        if(sPos>=250){$('.con01').animate({'opacity':'1'},1500);};

        if(sPos>=500){
          $('.con02 > li:first-child').stop().animate({'margin-left':'0px'},500)
          $('.con02 > li:last-child').stop().animate({'margin-right':'0px'},1000)
        };
        
        if(sPos>=850){
          $('.con03 > li:first-child').stop().animate({'margin-left':'0px'},1000)
          $('.con03 > li:last-child').stop().animate({'margin-right':'0px'},500)
        };
        
        if(sPos>=1150){
          $('.con04 > li:first-child').stop().animate({'margin-left':'0px'},500)
          $('.con04 > li:last-child').stop().animate({'margin-right':'0px'},1000)
        };

        if(sPos>=1650){
          $('.con05 > li:first-child').stop().animate({'margin-left':'0px'},1000)
          $('.con05 > li:last-child').stop().animate({'margin-right':'0px'},500)
        };

    });





  //CONTACT
    $('.title').hide();
    $('.title').slideDown();
    $('.con > ul > li:first-child').animate({'opacity':'1'},1000);
    $('.con > ul > li:last-child').animate({'opacity':'1'},1500);
    $('fieldset').animate({'opacity':'1'},1800);





  //WORKS
    $('.con01').animate({'opacity':'1'},1000);
});