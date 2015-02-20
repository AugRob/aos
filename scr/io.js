// Requires jQuery 2.x.x+

function output( printOut ) {
    $( 'body' ).append("<p>" + printOut + "</p>");
}

function input( toWriteOut ) {
    if (toWriteOut != undefined) {
        print(toWriteOut);
    }
    
    
    
}

var newline = function() {
    $( "body" ).append("<br />");
}