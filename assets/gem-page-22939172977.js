

        jQuery(function() {
            var $hero = jQuery('#m-1526610100755');
            var $module = jQuery('#m-1526610100755').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            var height = $.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    console.log('>> background image: ' + backgroundImage);

                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    (function( jQuery ){
  // var $module = jQuery('#m-1635175290059').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
(function( jQuery ){
  // var $module = jQuery('#m-1635175332488').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
        jQuery(function() {
            var $hero = jQuery('#m-1526610100753');
            var $module = jQuery('#m-1526610100753').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            var height = $.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    console.log('>> background image: ' + backgroundImage);

                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    jQuery(function() {
  var $module = jQuery('#m-1586610217904').children('.module');
  $module.gfV1Instagram();
});