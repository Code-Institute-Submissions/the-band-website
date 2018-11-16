$(document).ready(function(){
    
    $(".fa").mouseenter(function(){
        $(this).addClass("fa-font-size");
    });
    
    $(".fa").mouseleave(function(){
        $(this).removeClass("fa-font-size");
    });
    
    // toggle painel  
   
    $('.toggle-panel').each(function(){
        var link_text = $(this).attr('data-link-text');
        var content = $(this).html();
        
        $(this).html('<div class="toggle-panel-content-container"><div class="toggle-panel-content">'+content+'</div></div>');
        
    	$(this).append('<div class="toggle-panel-trigguer">'+ link_text+'</div>');
    });
    
    $('.toggle-panel-trigguer').click(function(){
        var new_height = null;
        var selected_panel = $(this).closest('.toggle-panel');
        var selected_content = selected_panel.find('.toggle-panel-content-container');
        
        selected_panel.toggleClass('open');
        if(selected_panel.hasClass('open')){
            new_height = selected_panel.find('.toggle-panel-content').outerHeight(true);
        } else{
            new_height = 0;
        }
        
        selected_content.animate({'height':new_height + 'px'},1000);
    });
    
     //Use smooth scrolling when clicking on navigation
     
     var topoffset = 45;
         
  $('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
   
       
});

