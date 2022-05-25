import { vec2, vec4 } from "@/types";

export function create(canvas: HTMLCanvasElement): WebGL2RenderingContext {
  const context: WebGL2RenderingContext | null = canvas.getContext("webgl2");

  if (!context) {
    throw new Error("context not found.");
  }

  return context;
}
export function resize(context: WebGL2RenderingContext, size: vec2) {
  context.viewport(0, 0, size[0], size[1]);
}

export function clearColor(context: WebGL2RenderingContext, color: vec4) {
  context.clearColor(color[0], color[1], color[2], color[3]);
  context.clear(context.COLOR_BUFFER_BIT);
}
