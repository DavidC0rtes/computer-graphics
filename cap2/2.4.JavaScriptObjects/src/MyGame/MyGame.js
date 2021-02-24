function MyGame(htmlCanvasID) {
	this.mShader = null;
	gEngine.Core.initializeWebGL(htmlCanvasID);

	this.mShader = new SimpleShader("VertexShader", "FragmentShader");

	// Step C1: clear the canvas
	gEngine.Core.clearCanvas([0, 0.8, 0, 1]);

	// Step C2: activate the proper shader
	this.mShader.activateShader();

	// Step C3: Draw with the currently activated geometry and the activated shader
	var gl = gEngine.Core.getGL();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
