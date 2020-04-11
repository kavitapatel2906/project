

             
// portfolio js//
    var grid = jQuery('.grid').imagesLoaded(function () {
        grid.isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-sizer',
                gutter: 30
            }
        });

        // bind filter button click
        $('.filters-button-group').on('click', '.button', function () {
            var filterValue = $(this).attr('data-filter');
            grid.isotope({filter: filterValue});
            grid.on('arrangeComplete', function () {
                $(".grid-item:visible a[rel^='prettyPhoto']").prettyPhoto({
                    slideshow: false, /* false OR interval time in ms */
                    overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
                    default_width: 1280,
                    default_height: 720,
                    deeplinking: false,
                    social_tools: false,
                    iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                    changepicturecallback: function () {
                        if (!is_touch_device()) {
                            var ua = navigator.userAgent.toLowerCase();
                            if (!(ua.indexOf("safari/") !== -1 && ua.indexOf("windows") !== -1 && ua.indexOf("chrom") === -1))
                            {
                                $("html").getNiceScroll().remove();
                                $("html").css("cssText", "overflow: hidden !important");
                            }
                        }
                    },
                    callback: function () {
                        if (!is_touch_device()) {
                            var ua = navigator.userAgent.toLowerCase();
                            if (!(ua.indexOf("safari/") !== -1 && ua.indexOf("windows") !== -1 && ua.indexOf("chrom") === -1))
                            {
                                $("html").niceScroll({cursorcolor: "#b1b1b1", scrollspeed: 100, mousescrollstep: 80, cursorwidth: "12px", cursorborder: "none", cursorborderradius: "0px"});
                            }
                        }
                    }
                });

            });
        });


        // change is-checked class on buttons
        $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });


        //Fix for portfolio item text
        $('.portfolio-text-holder').each(function () {
            $(this).find('p').css('margin-top', $(this).height() / 2);
        });

        //Fix for portfolio hover text fade in/out
        $('.grid-item a').hover(function () {
            $(this).find('.portfolio-text-holder').fadeIn('fast');
        }, function () {
            $(this).find('.portfolio-text-holder').fadeOut('fast');
        });
    });
// $(function(){
//         $("#bt1").click(function(){
//             $(this).attr("disabled", "disabled");
//             $("#bt2").removeAttr("disabled");
//         });

//         $("#bt2").click(function () {
//             $(this).attr("disabled", "disabled");
//             $("#bt1").removeAttr("disabled");
//         });
//     });
 $(function() {
          $( '.btn' ).on( 'click', function() {
                $( this ).parent().find( '.btn.active' ).removeClass( 'active' );
                $( this ).addClass( 'active' );
          });
    });


function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

        