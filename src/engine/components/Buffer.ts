export function create(context: WebGL2RenderingContext): WebGLBuffer {
  const buffer: WebGLBuffer | null = context.createBuffer();

  if (!buffer) {
    throw new Error("buffer not created.");
  }

  return buffer;
}
