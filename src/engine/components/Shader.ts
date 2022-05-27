export default class Shader {
  attribute: string;
  context: WebGL2RenderingContext;
  shader: WebGLShader;
  source: string;
  type: number;

  constructor(
    context: WebGL2RenderingContext,
    type: number,
    source: string,
    attribute: string
  ) {
    this.context = context;
    this.source = source;
    this.type = type;
    this.attribute = attribute;

    this.create();
    this.compile();
  }

  create() {
    const shader: WebGLShader | null = this.context.createShader(this.type);

    if (!shader) {
      throw new Error("shader not found.");
    }

    this.shader = shader;
  }

  compile() {
    this.context.shaderSource(this.shader, this.source);
    this.context.compileShader(this.shader);

    if (!this.isCompiled()) {
      this.context.deleteShader(this.shader);

      throw new Error("shader not compiled.");
    }
  }

  isCompiled(): boolean {
    return this.context.getShaderParameter(
      this.shader,
      this.context.COMPILE_STATUS
    );
  }
}
