import Shader from "@/engine/components/base/Shader";

const SOURCE = `
  #version 100
  precision mediump float;

  varying lowp vec4 vertexColor;

  void main() {
    vec3 color = vec3(0.5, 0.5, 0.5) + vec3(vertexColor);

    gl_FragColor = vec4(color, vertexColor[3]);
  }
`;

export default function IncreaseColor(context: WebGL2RenderingContext): Shader {
  return new Shader(context, context.FRAGMENT_SHADER, SOURCE, "a_vertexColor");
}
