var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var Xrange = [];
var Yrange = [];
randFS(1, -47, -25);
var prevX = Math.floor(Math.random()*(50)+58);
var prevY = Math.floor(Math.random()*(50)+50);
var iX = 0;
var size;

function drawBackground() {
	var prevX = Math.floor(Math.random()*(50)+58);
	var prevY = Math.floor(Math.random()*(50)+50);
	for(var i=0;i<2000;i++){
		ctx.strokeStyle ="#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);
		ctx.beginPath();
		newX = Math.floor(Math.random()*(1408)+1);
		newY = Math.floor(Math.random()*(400)+1);
		size = Math.floor(Math.random()*1.5+1);
		ctx.arc(newX, newY, size, 0 ,2*Math.PI);
		ctx.fillStyle ="#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);
		ctx.fill();
		ctx.moveTo(prevX, prevY);
		// ctx.lineTo(newX, newY);
		// ctx.stroke();
		prevX = newX;
		prevY = newY;
	}
}
drawBackground();

var offset = 50;
function draw() {
	for(var i=0;i<3000;i++){
		ctx.strokeStyle ="#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);
		ctx.beginPath();
		var index = iX;
		if (i % 10 == 0) {
			offset == 100;
		}
		else {
			offset = 50;
		}
		if (Xrange[index].length == 0 || Yrange[index].length == 0) {
			iX +=1;
		}
		if (Xrange[index].length == undefined) {
			newX = Math.floor(Math.random()*(offset)+Xrange[index]);
		}
		if (Yrange[index].length == undefined) {
			newY = Math.floor(Math.random()*(offset)+Yrange[index]);
		}
		if (Xrange[index].length !== undefined) {
			var a = Math.floor(Math.random() * Xrange[index].length);
			newX = Math.floor(Math.random()*(offset)+Xrange[index][a]);
			Xrange[index].splice(a,1);
		}
		if (Yrange[index].length != undefined) {
			var b = Math.floor(Math.random() * Yrange[index].length);
			newY = Math.floor(Math.random()*(offset)+Yrange[index][b]);
			if (Yrange[index].length > 3 || Xrange[index].length == undefined) {
				Yrange[index].splice(b,1);
			}
		}
		if ((Yrange[index].length != undefined && Yrange[index].length > 3) && Xrange[index].length != undefined) {
			var c = Math.floor(Math.random() * Yrange[index].length);
			newX = Math.floor(Math.random()*(offset)+Xrange[index][c]);
			newY = Math.floor(Math.random()*(offset)+Yrange[index][c]);
			Xrange[index].splice(c,1);
			Yrange[index].splice(c,1);
		}
		size = Math.floor(Math.random()*2+1);
		ctx.arc(newX, newY, size, 0 ,2*Math.PI);
		ctx.fillStyle ="#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);
		ctx.fill();
		ctx.moveTo(prevX, prevY);
		ctx.lineTo(newX, newY);
		ctx.stroke();
		prevX = newX;
		prevY = newY;
	}
	if (iX > Xrange.length) {
		iX = 0;
		prevX = Math.floor(Math.random()*(50)+58);
		prevY = Math.floor(Math.random()*(50)+50);
	}
}
draw(40);

function rangeArr(array, p1, inc, p2) {
	var temp = [];
	if (typeof p2 == "undefined" && typeof inc == "undefined") {
		array.push(p1);
	}
	else {
		if (p2 > p1) {
			for (var i = p1; i <= p2; i+=inc) {
				temp.push(i);
			}
			array.push(temp);
		}
		else {
			for (var i = p1; i >= p2; i-=inc) {
				temp.push(i);
			}
			array.push(temp);
		}
	}
}

function randFS(inc, Xshift, Yshift) {
	//F
	rangeArr(Xrange,58+Xshift);
	rangeArr(Yrange,50+Yshift, inc, 250+Yshift);
	//F
	rangeArr(Xrange,58+Xshift, inc, 254+Xshift);
	rangeArr(Yrange,50+Yshift);
	//F
	rangeArr(Xrange,58+Xshift, inc, 146+Xshift);
	rangeArr(Yrange,150+Yshift);
	//E
	rangeArr(Xrange,322+Xshift);
	rangeArr(Yrange,50+Yshift, inc, 250+Yshift);
	//E
	rangeArr(Xrange,322+Xshift, inc, 498+Xshift);
	rangeArr(Yrange,50+Yshift);
	//E
	rangeArr(Xrange,322+Xshift, inc, 410+Xshift);
	rangeArr(Yrange,150+Yshift);
	//E
	rangeArr(Xrange,322+Xshift, inc, 498+Xshift);
	rangeArr(Yrange,250+Yshift);
	//L
	rangeArr(Xrange,586+Xshift);
	rangeArr(Yrange,50+Yshift, inc, 250+Yshift);
	//L
	rangeArr(Xrange,586+Xshift, inc, 762+Xshift);
	rangeArr(Yrange,250+Yshift);
	//I
	rangeArr(Xrange,874+Xshift);
	rangeArr(Yrange,50+Yshift, inc, 250+Yshift);
	//I
	rangeArr(Xrange,830+Xshift, inc, 918+Xshift);
	rangeArr(Yrange,50+Yshift);
	//I
	rangeArr(Xrange,830+Xshift, inc, 918+Xshift);
	rangeArr(Yrange,250+Yshift);
	//X
	rangeArr(Xrange,1004+Xshift, .5, 1204+Xshift);
	rangeArr(Yrange,50+Yshift, .5, 250+Yshift);
	//X
	rangeArr(Xrange,1204+Xshift, .5, 1004+Xshift);
	rangeArr(Yrange,50+Yshift, .5, 250+Yshift);
}