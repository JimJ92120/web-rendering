import Renderer from "@/engine/Renderer";
import Shader from "@/engine/components/Shader";

const SOURCE = `
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

export default function VertexShader(renderer: Renderer): Shader {
  return new Shader(
    renderer.context,
    renderer.context.VERTEX_SHADER,
    SOURCE,
    "a_vertexPosition"
  );
}
