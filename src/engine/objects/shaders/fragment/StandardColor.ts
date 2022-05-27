import Shader from "@/engine/components/Shader";

const SOURCE = `
  #version 100
  precision mediump float;

  varying lowp vec4 vertexColor;

  void main() {
    gl_FragColor = vertexColor;
  }
`;

export default function StandardColor(context: WebGL2RenderingContext): Shader {
  return new Shader(context, context.FRAGMENT_SHADER, SOURCE, "a_vertexColor");
}
