import { vec2, vec4 } from "@/types";

import Components from "./components";

import { VERTEX_SHADER_SOURCE } from "./shaders/VertexShader";
import { FRAGMENT_SHADER_SOURCE } from "./shaders/FragmentShader";

export function run(canvasId: string) {
  console.log("running...");

  const canvas: HTMLCanvasElement = Components.Canvas.create(canvasId);
  const context: WebGL2RenderingContext = Components.Context.create(canvas);
  const dimensions: vec2 = [800, 500];
  const clearColor: vec4 = [1.0, 0.0, 0.0, 1.0];

  Components.Canvas.resize(canvas, dimensions);
  Components.Context.resize(context, dimensions);
  Components.Context.clearColor(context, clearColor);

  // shaders
  const vertexShader: WebGLShader = Components.Shader.create(
    context,
    context.VERTEX_SHADER
  );
  const fragmentShader: WebGLShader = Components.Shader.create(
    context,
    context.FRAGMENT_SHADER
  );

  Components.Shader.compile(context, vertexShader, VERTEX_SHADER_SOURCE);
  Components.Shader.compile(context, fragmentShader, FRAGMENT_SHADER_SOURCE);

  const program: WebGLProgram = Components.Program.create(context);

  context.attachShader(program, vertexShader);
  context.attachShader(program, fragmentShader);
  Components.Program.link(context, program);
  context.useProgram(program);

  // buffers
  const bufferPosition: WebGLBuffer = Components.Buffer.create(context);
  /* eslint-disable */
  const vertices: Float32Array = new Float32Array([
    0.0, 0.5,
    0.0, -0.5,
    -0.5, 0.0,
    0.5, 0.0,
  ]);
  /* eslint-enable */
  const vertexSize = 2;
  const a_vertexPosition: number = context.getAttribLocation(
    program,
    "a_vertexPosition"
  );

  context.bindBuffer(context.ARRAY_BUFFER, bufferPosition);
  context.bufferData(context.ARRAY_BUFFER, vertices, context.STATIC_DRAW);
  context.vertexAttribPointer(
    a_vertexPosition,
    vertexSize,
    context.FLOAT,
    false,
    0,
    0
  );
  context.enableVertexAttribArray(a_vertexPosition);

  const bufferColor: WebGLBuffer = Components.Buffer.create(context);
  /* eslint-disable */
  const vertexColors: Float32Array = new Float32Array([
    0.0, 1.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 1.0,
    0.0, 1.0, 0.5, 1.0,
    0.0, 0.5, 1.0, 1.0,
  ]);
  /* eslint-enable */
  const vertexColorSize = 4;
  const a_vertexColor: number = context.getAttribLocation(
    program,
    "a_vertexColor"
  );

  context.bindBuffer(context.ARRAY_BUFFER, bufferColor);
  context.bufferData(context.ARRAY_BUFFER, vertexColors, context.STATIC_DRAW);
  context.vertexAttribPointer(
    a_vertexColor,
    vertexColorSize,
    context.FLOAT,
    false,
    0,
    0
  );
  context.enableVertexAttribArray(a_vertexColor);

  // draw
  context.drawArrays(context.POINTS, 0, vertices.length / vertexSize);
}
