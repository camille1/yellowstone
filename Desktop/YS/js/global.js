//Facebook Like
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "http://connect.facebook.net/fr_FR/all.js#xfbml=1&appId=607103426040114";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Googleplus

(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = 'https://apis.google.com/js/platform.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
  
//Twitter 
  
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
  
  
//Menu Responsive

$(document).ready(function(){ 
	var touch 	= $('#touch-menu');
	var menu 	= $('.menu');
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
});

 // Slideshow	
    $(function () {

     // Slideshow 4
      $("#slider4").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });

    });
	
//Ile sauvage

jQuery(function($){
	$( '.map').append( '<div class="overlay">').append('<div class="tooltip">Test</div>')
	$( '.map .tooltip').hide();
	var regions = [
		{name : 'La montagne', slug: 'montagne'},
		{name : 'La foret', slug: 'foret'},
		{name : 'La plage', slug: 'plage'},

	];
	
	//Tooltip qui suit la souris
	$(document).mousemove(function(e){
		$( '.map .tooltip').css({
			top:e.pageY-$( '.map .tooltip').height()-20,
			left:e.pageX-$( '.map .tooltip').width()/2-10
		})
	});	
	//On passe sur une région
	
	$( '.map area').mouseover(function(){
		var index= $(this).index();
		var left= -index * 410 - 410;
		$( '.map .tooltip').html(regions[index].name).stop().fadeTo(500,0.7);
		$( '.map .overlay').css({
			backgroundPosition : left+"px 0px"
		})
	});
	//On sort de la map
	$( 'map').mouseout(function(){
		$( '.map .overlay').css({
			backgroundPosition : "410px 0px"
		})
		$( '.map .tooltip').stop().fadeTo(500,0);
	})
	});

//Ile sauvage
	
	