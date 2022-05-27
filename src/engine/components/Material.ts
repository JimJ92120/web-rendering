import { BufferData } from "./types";

export default abstract class Material {
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

  abstract draw(): void;
}
