$svg = $('#animDiv>svg');

$(function() {
    FadeOut();
});


// Hide logo
function FadeOut() {
    $svg.delay(1000).fadeOut('3000', function() {
        $svg.addClass('hidden', function() {
            $svg.fadeIn();
            DrawLogo();
        });
    });
}


// Draw logo stroke & bg
function DrawLogo() {

    $svg.drawsvg({
        duration: 4000,
        callback: function() {
            HideBg();
        }
    }).drawsvg("animate");


    $('#bg').animate({
        'fill-opacity': '1',
    }, 1000, function() {
        $('#bg').delay(3000).fadeOut(2000);
    });
}

function HideBg() {


    $('#img').addClass('show-fill', function() {
        // $('#bg').fadeOut('10000', function() {
            ShowText();
        // });
    });


}

function ShowText() {

    $('#text-1').addClass('show-fill', function() {
        $('#text-2').addClass('show-fill');
    });


    //     $('#text-1').animate({
    //             'fill-opacity': '1'
    //         },
    //         1000,
    //         function() {
    //             $('#text-2').addClass('show-fill');
    //         });
}





// Extend jQuery addClass function to accept callback function
var oAddClass = $.fn.addClass;
$.fn.addClass = function() {
    for (var i in arguments) {
        var arg = arguments[i];
        if (!!(arg && arg.constructor && arg.call && arg.apply)) {
            arg();
            delete arg;
        }
    }
    return oAddClass.apply(this, arguments);
};

// function animate() {

//     $('#animDiv>svg').fadeOut('2000', function() {
//         $('#path1').add('#path2').addClass('hidden');

//         $('#animDiv>svg').fadeIn('100', function() {
//             $svg.drawsvg('animate');
//             FillLogo();
//         });
//     });
// }

// setTimeout(animate, 3500);



// $(function() {

//     var $svg = $('#animDiv>svg'),
//         $anim = $svg.drawsvg({
//         duration: 10000,
//         callback: function() {
//             animate();
//         }
//     });

// $('#path1').add('#path2').addClass('hidden');

// $('#animDiv>svg').fadeIn('100', function() {
//     $svg.drawsvg('animate');
//     FillLogo();
// });