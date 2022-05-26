import { BufferData } from "./types";

import Components from "../components";

export default class EngineObject {
  context: WebGL2RenderingContext;
  colors: BufferData;
  vertices: BufferData;

  constructor(
    context: WebGL2RenderingContext,
    vertices: BufferData,
    colors: BufferData
  ) {
    this.context = context;
    this.vertices = vertices;
    this.colors = colors;
  }

  draw() {
    this.initBuffers();

    this.context.drawArrays(
      this.context.POINTS,
      0,
      this.vertices.data.length / this.vertices.size
    );
  }

  initBuffers() {
    const bufferPosition: WebGLBuffer = Components.Buffer.create(this.context);

    this.context.bindBuffer(this.context.ARRAY_BUFFER, bufferPosition);
    this.context.bufferData(
      this.context.ARRAY_BUFFER,
      this.vertices.data,
      this.context.STATIC_DRAW
    );
    this.context.vertexAttribPointer(
      this.vertices.attribute,
      this.vertices.size,
      this.context.FLOAT,
      false,
      0,
      0
    );
    this.context.enableVertexAttribArray(this.vertices.attribute);

    const bufferColor2: WebGLBuffer = Components.Buffer.create(this.context);

    this.context.bindBuffer(this.context.ARRAY_BUFFER, bufferColor2);
    this.context.bufferData(
      this.context.ARRAY_BUFFER,
      this.colors.data,
      this.context.STATIC_DRAW
    );
    this.context.vertexAttribPointer(
      this.colors.attribute,
      this.colors.size,
      this.context.FLOAT,
      false,
      0,
      0
    );
    this.context.enableVertexAttribArray(this.colors.attribute);
  }
}
