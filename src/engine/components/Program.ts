function isLinked(
  context: WebGL2RenderingContext,
  program: WebGLProgram
): boolean {
  return context.getProgramParameter(program, context.LINK_STATUS);
}

export function create(context: WebGL2RenderingContext): WebGLProgram {
  const program: WebGLProgram | null = context.createProgram();

  if (!program) {
    throw new Error("program not created.");
  }

  return program;
}

export function link(context: WebGL2RenderingContext, program: WebGLProgram) {
  context.linkProgram(program);

  if (!isLinked(context, program)) {
    throw new Error("program not linked.");
  }
}
