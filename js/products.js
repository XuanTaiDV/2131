$('#gallery-images').ready(function(){

    // Show images in div have class name is all and hide other classes
    $('.all').show();
    $('.culture').hide();
    $('.team').hide();
    $('.work-space').hide();

    $('#all').click(function(){
        $('.all').show();
        $('.culture').hide();
        $('.team').hide();
        $('.work-space').hide();
    });
    
    $('#culture').click(function(){
        $('.culture').show();
        $('.all').hide();
        $('.team').hide();
        $('.work-space').hide();
    });
    
    $('#team').click(function(){
        $('.team').show();
        $('.all').hide();
        $('.culture').hide();
        $('.work-space').hide();
    });
    
    $('#work-space').click(function(){
        $('.work-space').show();
        $('.all').hide();
        $('.team').hide();
        $('.culture').hide();
    });

    $('.numpercent').animateNumber({ number: 165 });
});