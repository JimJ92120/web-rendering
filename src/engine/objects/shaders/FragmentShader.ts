import Renderer from "@/engine/Renderer";
import Shader from "@/engine/components/Shader";

const SOURCE = `
  #version 100
  precision mediump float;

  varying lowp vec4 vertexColor;

  void main() {
    gl_FragColor = vertexColor;
  }
`;

export default function VertexShader(renderer: Renderer): Shader {
  return new Shader(
    renderer.context,
    renderer.context.FRAGMENT_SHADER,
    SOURCE,
    "a_vertexColor"
  );
}
