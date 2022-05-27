import { vec2, vec4 } from "@/types";
import InterfaceMaterial from "@/engine/materials/InterfaceMaterial";
import EngineShader from "@/engine/textures/EngineShader";

import Components from "@/engine/components";

import { VERTEX_SHADER_SOURCE } from "./textures/VertexShader";
import { FRAGMENT_SHADER_SOURCE } from "./textures/FragmentShader";
import Squares1 from "./objects/materials/Squares1";
import Squares2 from "./objects/materials/Squares2";

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
  const vertexShader = new EngineShader(
    context,
    context.VERTEX_SHADER,
    VERTEX_SHADER_SOURCE
  );
  const fragmentShader = new EngineShader(
    context,
    context.FRAGMENT_SHADER,
    FRAGMENT_SHADER_SOURCE
  );

  const program: WebGLProgram = Components.Program.create(context);

  context.attachShader(program, vertexShader.shader);
  context.attachShader(program, fragmentShader.shader);

  Components.Program.link(context, program);
  context.useProgram(program);

  // buffers
  const a_vertexColor: number = context.getAttribLocation(
    program,
    "a_vertexColor"
  );
  const a_vertexPosition: number = context.getAttribLocation(
    program,
    "a_vertexPosition"
  );

  const squares1: InterfaceMaterial = Squares1(
    context,
    a_vertexPosition,
    a_vertexColor
  );
  const squares2: InterfaceMaterial = Squares2(
    context,
    a_vertexPosition,
    a_vertexColor
  );

  [squares1, squares2].map((material) => material.draw());
}
