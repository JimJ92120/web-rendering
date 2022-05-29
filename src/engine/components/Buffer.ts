export default class Buffer {
  buffer: WebGLBuffer;
  context: WebGL2RenderingContext;

  constructor(context: WebGL2RenderingContext) {
    this.context = context;

    this.setBuffer();
  }

  load(bufferData: Float32Array) {
    this.context.bindBuffer(this.context.ARRAY_BUFFER, this.buffer);
    this.context.bufferData(
      this.context.ARRAY_BUFFER,
      bufferData,
      this.context.STATIC_DRAW
    );
  }

  setBuffer() {
    const buffer: WebGLBuffer | null = this.context.createBuffer();

    if (!buffer) {
      throw new Error("buffer not created.");
    }

    this.buffer = buffer;
  }
}
