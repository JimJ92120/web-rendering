import { vec2 } from "@/types";

export function create(canvasId: string): HTMLCanvasElement {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

  if (!canvas) {
    throw new Error("canvas not found.");
  }

  return canvas;
}

export function resize(canvas: HTMLCanvasElement, size: vec2) {
  canvas.width = size[0];
  canvas.height = size[1];
}
