var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var growshrink = document.getElementById('growshrink');
var circButt = document.getElementById('circButt');
var rectButt = document.getElementById('rectButt');
var stop = document.getElementById('stop');
var clear = document.getElementById('clear');

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
    }
    shrinking();
}

var circBounce = function() {
    var currX = 250;
    var currY = 250;
    var angle = Math.PI / 8;
    
    var dX = Math.cos(angle) * 8;
    var dY = Math.sin(angle) * 8;

    stopIt();

    var bouncing = function () {
	
	ctx.clearRect( 0, 0, 500, 500 );

	ctx.beginPath();
	ctx.arc( currX, currY, 33, 0, 2*Math.PI );
	ctx.fill();

	if( currX <= 33 || currX >= 467 ) {
	    dX *= -1;
	}
	if( currY <= 33 || currY >= 467 ) {
	    dY *= -1;
	}
	currX += dX;
	currY += dY;

	requestID = window.requestAnimationFrame(bouncing);

    }
    bouncing();
}

var rectBounce = function() {

    stopIt();

    var currX = 250;
    var currY = 250;
    
    var angle = Math.PI / 6;
    
    var dX = Math.cos(angle) * 8;
    var dY = Math.sin(angle) * 8;

    var bouncing = function() {
		
	ctx.clearRect( 0, 0, 500, 500 );

	ctx.beginPath();
	ctx.rect( currX, currY, 100, 50 );
	ctx.fill();

	if( currX <= 0 || currX >= 400 ) {
	    dX *= -1;
	}
	if( currY <= 0 || currY >= 450 ) {
	    dY *= -1;
	}
	currX += dX;
	currY += dY;

	requestID = window.requestAnimationFrame(bouncing);
    }
    bouncing();
	
}

var stopIt = function() {
    window.cancelAnimationFrame(requestID);
}

var clearIt = function() {
    window.cancelAnimationFrame(requestID);
    ctx.clearRect( 0, 0, 500, 500 );
}

growshrink.addEventListener( 'click', grow );
circButt.addEventListener( 'click', circBounce );
rectButt.addEventListener( 'click', rectBounce );
stop.addEventListener( 'click', stopIt );
clear.addEventListener( 'click', clearIt );
