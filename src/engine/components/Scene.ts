import { vec2, vec4 } from "@/engine/types";

export default class Scene {
  canvas: HTMLCanvasElement;
  context: WebGL2RenderingContext;

  constructor(canvasId: string) {
    this.setCanvas(canvasId);
    this.setContext();
  }

  clearColor(color: vec4) {
    this.context.clearColor(color[0], color[1], color[2], color[3]);
    this.context.clear(this.context.COLOR_BUFFER_BIT);
  }

  resize(size: vec2) {
    this.canvas.width = size[0];
    this.canvas.height = size[1];
    this.context.viewport(0, 0, size[0], size[1]);
  }

  setCanvas(canvasId: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

    if (!canvas) {
      throw new Error("canvas not found.");
    }

    this.canvas = canvas;
  }

  setContext() {
    const context: WebGL2RenderingContext | null =
      this.canvas.getContext("webgl2");

    if (!context) {
      throw new Error("context not found.");
    }

    this.context = context;
  }
}
