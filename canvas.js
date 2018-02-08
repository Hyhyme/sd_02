var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var stop = document.getElementById('stop');

ctx.fillStyle = "coral"

var requestID;
var r;

var grow = function() {
    r = 0;
    
    stopIt();
    
    var growing = function() {
	
	ctx.clearRect( 0, 0, 500, 500 );
	
	ctx.beginPath();
	ctx.arc( 250, 250, r, 0, 2*Math.PI );
	ctx.fill();
	if( r < 250 ) {
	    requestID = window.requestAnimationFrame(growing);
	    r++;
	} else {
	    window.cancelAnimationFrame(requestID);
	    shrink();
    }
	
	console.log(r);
    }
    growing();	
}


var shrink = function() {

    stopIt();
    
    var shrinking = function() {
	
	ctx.clearRect( 0, 0, 500, 500 );
	
	ctx.beginPath();
	ctx.arc( 250, 250, r, 0, 2*Math.PI );
	ctx.fill();
	if( r > 0 ) {
	    requestID = window.requestAnimationFrame(shrinking);
	    r--;
	} else {
	    window.cancelAnimationFrame(requestID);
	    grow();
    }
	
	console.log(r);
    }
    shrinking();
}

var stopIt = function() {
    window.cancelAnimationFrame(requestID);
}

c.addEventListener( 'click', grow );
stop.addEventListener( 'click', stopIt );
    
