export const VERTEX_SHADER_SOURCE = `
  #version 100
  precision highp float;

  attribute vec2 a_vertexPosition;
  attribute vec4 a_vertexColor;

  varying lowp vec4 vertexColor;

  void main() {
    gl_Position = vec4(a_vertexPosition, 0.0, 1.0);
    gl_PointSize = 100.0;

    vertexColor = a_vertexColor;
  }
`;
