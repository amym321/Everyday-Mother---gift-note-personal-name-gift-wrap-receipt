

(function( jQuery ){
  // var $module = jQuery('#m-1635176999266').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    jQuery(function() {
  var $module = jQuery('#m-1586535057830').children('.module');
});jQuery(function() {
    var $module = jQuery('#m-1586539819233').children('.module');
    $module.gfV1Countdown({
        id: "1586539819233",
        idSlug: "1586539819233"
    });
});
(function( jQuery ){
  // var $module = jQuery('#m-1635177015230').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
        jQuery(function() {
            var $module = jQuery('#m-1539548742822').children('.module');
        
            var token_test = '2269641474.1677ed0.63eaaf968720481a866e9263fc8639e1';
            var token = $module.data('token') != '' ? $module.data('token') : token_test;
            var num_photos = parseInt($module.data('photos')) > 1 ? parseInt($module.data('photos')) : 1;
            var num_columns = parseInt($module.data('columns')) > 1 ? parseInt($module.data('columns')) : num_photos;
            var padding = parseInt($module.data('padding')) > 0 ? parseInt($module.data('padding')) : 0;

            var instaTag = jQuery.trim($module.data('hashtag')) != '' ? jQuery.trim($module.data('hashtag')) : '';

            if(instaTag != '') {
                var instaUrl = 'https://api.instagram.com/v1/tags/' + instaTag + '/media/recent';
            } else {
                var instaUrl = 'https://api.instagram.com/v1/users/self/media/recent';
            }

            jQuery.ajax({
                url: instaUrl,
                dataType: 'jsonp',
                type: 'GET',
                data: {
                    access_token: token, 
                    count: num_photos
                },
                success: function(data) {
                    var html = '';
                    if(data.data != undefined) {
                        for(var i = 0; i < data.data.length; i++) {
                            if(i % num_columns == 0) {
                                html += '<div class="gf_clearfix"></div>';
                            }
                            html += '<li><a href="' + data.data[i].link + '" target="_blank" style="padding: ' + padding + 'px;">';
                                html+= '<img src="'+ data.data[i]['images'].standard_resolution.url + '" alt="' + data.data[i].caption + '" />';
                            html += '</a></li>';
                        }
                        $module.html(html).hide();
                        $module.find('li').css('width', (100/num_columns)+'%');

                        $module.closest('.module-wrap').css('marginLeft', padding * -1);
                        $module.closest('.module-wrap').css('marginRight', padding * -1);
                    }
                    $module.fadeIn();
                },
                error: function(data){
                    console.log(data);
                }
            });
        });
    jQuery(function() {
  var $module = jQuery('#m-1586530537163').children('.module');
  $module.gfV1Instagram();
});