import { vec2, vec4 } from "@/types";

import Material from "@/engine/components/Material";
import Renderer from "@/engine/components/Renderer";

import VertexShader from "@/engine/objects/shaders/VertexShader";
import FragmentShader from "@/engine/objects/shaders/FragmentShader";
import Squares1 from "@/engine/objects/materials/Squares1";
import Squares2 from "@/engine/objects/materials/Squares2";

export function run(canvasId: string) {
  console.log("running...");

  const renderer = new Renderer(canvasId);

  const dimensions: vec2 = [800, 500];
  const clearColor: vec4 = [1.0, 0.0, 0.0, 1.0];

  renderer.resize(dimensions);
  renderer.clearColor(clearColor);

  const vertexShader = VertexShader(renderer);
  const fragmentShader = FragmentShader(renderer);

  renderer.attachShader(vertexShader);
  renderer.attachShader(fragmentShader);

  renderer.program.link();

  const squares1: Material = Squares1(renderer, [vertexShader, fragmentShader]);
  const squares2: Material = Squares2(renderer, [vertexShader, fragmentShader]);

  renderer.useProgram();

  [squares1, squares2].map((material) => material.draw());
}
