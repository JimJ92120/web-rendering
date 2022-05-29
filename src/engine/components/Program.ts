export default class Program {
  context: WebGL2RenderingContext;
  program: WebGLProgram;

  constructor(context: WebGL2RenderingContext) {
    this.context = context;

    this.setProgram();
  }

  isLinked(): boolean {
    return this.context.getProgramParameter(
      this.program,
      this.context.LINK_STATUS
    );
  }

  link() {
    this.context.linkProgram(this.program);

    if (!this.isLinked()) {
      const message: string | null = this.context.getProgramInfoLog(
        this.program
      );
      this.context.deleteProgram(this.program);

      throw new Error(message || "program not linked.");
    }
  }

  setProgram() {
    const program: WebGLProgram | null = this.context.createProgram();

    if (!program) {
      throw new Error("program not created.");
    }

    this.program = program;
  }
}
