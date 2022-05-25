function isCompiled(
  context: WebGL2RenderingContext,
  shader: WebGLShader
): boolean {
  return context.getShaderParameter(shader, context.COMPILE_STATUS);
}

export function create(
  context: WebGL2RenderingContext,
  type: number
): WebGLShader {
  const shader: WebGLShader | null = context.createShader(type);

  if (!shader) {
    throw new Error("shader not found.");
  }

  return shader;
}

export function compile(
  context: WebGL2RenderingContext,
  shader: WebGLShader,
  source: string
) {
  context.shaderSource(shader, source);
  context.compileShader(shader);

  if (!isCompiled(context, shader)) {
    context.deleteShader(shader);

    throw new Error("shader not compiled.");
  }
}
