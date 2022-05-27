import { BufferData } from "./types";

import Components from "../components";

import InterfaceMaterial from "./InterfaceMaterial";

export default class Points implements InterfaceMaterial {
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
    this.setBuffer(this.vertices);
    this.setBuffer(this.colors);

    this.context.drawArrays(
      this.context.POINTS,
      0,
      this.vertices.data.length / this.vertices.size
    );
  }

  setBuffer(bufferData: BufferData) {
    const buffer: WebGLBuffer = Components.Buffer.create(this.context);

    this.context.bindBuffer(this.context.ARRAY_BUFFER, buffer);
    this.context.bufferData(
      this.context.ARRAY_BUFFER,
      bufferData.data,
      this.context.STATIC_DRAW
    );
    this.context.vertexAttribPointer(
      bufferData.attribute,
      bufferData.size,
      this.context.FLOAT,
      false,
      0,
      0
    );
    this.context.enableVertexAttribArray(bufferData.attribute);
  }
}
