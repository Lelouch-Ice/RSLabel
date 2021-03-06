//This file is automatically rebuilt by the Cesium build process.
export default "float czm_alphaWeight(float a)\n\
{\n\
float z = (gl_FragCoord.z - czm_viewportTransformation[3][2]) / czm_viewportTransformation[2][2];\n\
return pow(a + 0.01, 4.0) + max(1e-2, min(3.0 * 1e3, 0.003 / (1e-5 + pow(abs(z) / 200.0, 4.0))));\n\
}\n\
";
