uniform float uBigWavesElevation;
uniform vec2 uBigWavesFrequency;
uniform float uTime;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation = sin(modelPosition.x * uBigWavesFrequency.x) * sin(modelPosition.y * uBigWavesFrequency.y) * uBigWavesElevation;
  
  modelPosition.z += elevation;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}