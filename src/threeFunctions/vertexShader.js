const vertexShader = `
uniform float uTime;
uniform float uRadius;

varying float vDistance;

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  float t = tan(angle);
  return mat3(
    0, 1, 0,
    0.0, 0, s,
    1, 0.0, 0
  );
}


void main() {
  float distanceFactor = pow(uRadius - distance(position, vec3(0.0)), 0.7);
  float size = distanceFactor * 8.0;
  vec3 particlePosition = position * rotation3dY(uTime * 0.05 * distanceFactor);

  vDistance = distanceFactor;

  vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  gl_PointSize = size + 4.0;
  // point size
  // Size attenuation;

  gl_PointSize *= (1.0/- viewPosition.z );
  // point growth with scroll
}

`

export default vertexShader
