const fragmentShader = `
varying float vDistance;

void main() {
  vec3 color = vec3(1.0, 1.0, 1.0);
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 0.8 - strength;
  strength = pow(strength, 1.9);

  color = mix(color, vec3(1.0, 1.0, 1.0), vDistance * 0.5);
  color = mix(vec3(0.1), color, strength);
  gl_FragColor = vec4(color, strength);
}
`

export default fragmentShader
