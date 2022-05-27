import { BufferData } from "./types";

export default class Buffer {
  buffer: WebGLBuffer;
  bufferData: BufferData;
  context: WebGL2RenderingContext;

  constructor(context: WebGL2RenderingContext, bufferData: BufferData) {
    this.bufferData = bufferData;
    this.context = context;

    this.setBuffer();
  }

  load() {
    this.context.bindBuffer(this.context.ARRAY_BUFFER, this.buffer);
    this.context.bufferData(
      this.context.ARRAY_BUFFER,
      this.bufferData.data,
      this.context.STATIC_DRAW
    );
    this.context.vertexAttribPointer(
      this.bufferData.attribute,
      this.bufferData.size,
      this.context.FLOAT,
      false,
      0,
      0
    );
    this.context.enableVertexAttribArray(this.bufferData.attribute);
  }

  setBuffer() {
    const buffer: WebGLBuffer | null = this.context.createBuffer();

    if (!buffer) {
      throw new Error("buffer not created.");
    }

    this.buffer = buffer;
  }
}
