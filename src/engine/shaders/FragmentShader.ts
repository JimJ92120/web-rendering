export const FRAGMENT_SHADER_SOURCE = `
  #version 100
  precision mediump float;

  varying lowp vec4 vertexColor;

  void main() {
    gl_FragColor = vertexColor;
  }
`;
