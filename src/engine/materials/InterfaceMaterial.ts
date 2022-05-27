import { BufferData } from "./types";

export default interface InterfaceMaterial {
  context: WebGL2RenderingContext;
  colors: BufferData;
  vertices: BufferData;

  draw(): void;
}
