$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');


        if($(window).scrollTop() > 68){
           $('header .header-2').addClass('header-active');
        }
        else{
        $('header .header-2').removeClass('header-active');
        }

        $('section').each(function(){

            let height = $(this).height();
            let offset = $(this).offset().top -200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top >= offset  && top < offset +height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
                
            }
        });

    });

    $('.home-slider').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true
    });

    
    
    $('#_2 img').click(function(){

        $(this).addClass('image-active').siblings().removeClass('image-active');
        
        let image =$(this).attr('src');

        $('#_1 img').attr('src',image);
    
        
    });

});
    
$('#_4 img').click(function(){

    $(this).addClass('image-active').siblings().removeClass('image-active');
    
    let image =$(this).attr('src');

    $('#_3 img').attr('src',image);


});
    
$('#_6 img').click(function(){

    $(this).addClass('image-active').siblings().removeClass('image-active');
    
    let image =$(this).attr('src');

    $('#_5 img').attr('src',image);  
    
    
});
    
$('#_8 img').click(function(){

    $(this).addClass('image-active').siblings().removeClass('image-active');
    
    let image =$(this).attr('src');

    $('#_7 img').attr('src',image);    

    
}); 

    $('.gallery .btn').click(function(){

        let filter = $(this).attr('data-filter');
        if(filter =='all'){
            $('.gallery .box').show(400);
        }else{
            $('.gallery .box').not('.'+filter).hide(200);
            $('.gallery .box').filter('.'+filter).show(400);   
        }

        $(this).addClass('button-active').siblings().removeClass('button-active');
    });





