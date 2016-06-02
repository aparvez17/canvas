var canvas = document.getElementById('node_canvas');
var context = canvas.getContext('2d');
var nodes = [];
var screenWidth = screen.width;
var gridSize = 20;
var height = 500;

for(x=0; x < screenWidth/gridSize; x++){
	for(y=0; y < height/gridSize; y++){
		nodes.push([x*gridSize,y*gridSize]);
		drawNode(x*gridSize,y*gridSize)
	}
}

function drawNode(coord){
	context.beginPath();
	context.arc(coord[0], coord[1], 1.5, 0, 2 * Math.PI, true);
	context.fillStyle = '#ffffff';
	context.fill();
}
