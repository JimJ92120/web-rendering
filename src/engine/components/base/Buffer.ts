import { BufferData } from "@/engine/types";

export default class Buffer {
  attribute: number;
  buffer: WebGLBuffer;
  bufferData: BufferData;
  context: WebGL2RenderingContext;

  constructor(
    context: WebGL2RenderingContext,
    bufferData: BufferData,
    attribute: number
  ) {
    this.bufferData = bufferData;
    this.context = context;
    this.attribute = attribute;

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
      this.attribute,
      this.bufferData.size,
      this.context.FLOAT,
      false,
      0,
      0
    );
    this.context.enableVertexAttribArray(this.attribute);
  }

  setBuffer() {
    const buffer: WebGLBuffer | null = this.context.createBuffer();

    if (!buffer) {
      throw new Error("buffer not created.");
    }

    this.buffer = buffer;
  }
}
