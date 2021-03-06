"use strict";
var gSquareVertexBuffer = null;

function initSquareBuffer() {
	var verticesOfSquare = [
		0.5, 0.5, 0.0,
		-0.5, 0.5, 0.0,
		0.5, -0.5, 0.0,
		-0.5, -0.5, 0.0
	];
	// Step A: Create a buffer on the gGL context for our vertex positions
	gSquareVertexBuffer = gGL.createBuffer();

	// Step B: Activate vertexBuffe
	gGL.bindBuffer(gGL.ARRAY_BUFFER, gSquareVertexBuffer);

	// Step C: Loads verticesOfSquare into the vertexBuffer
	gGL.bufferData(gGL.ARRAY_BUFFER, new Float32Array(verticesOfSquare), gGL.STATIC_DRAW);
}
