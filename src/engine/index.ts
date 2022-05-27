import { vec2, vec4 } from "@/engine/types";

import Material from "@/engine/components/Material";
import Renderer from "@/engine/Renderer";

import VertexShader from "@/engine/objects/shaders/VertexShader";
import FragmentShader from "@/engine/objects/shaders/FragmentShader";
import Squares1 from "@/engine/objects/materials/Points1";
import Squares2 from "@/engine/objects/materials/Points2";

export function run(canvasId: string) {
  console.log("running...");

  const renderer = new Renderer(canvasId);

  const dimensions: vec2 = [800, 500];
  const clearColor: vec4 = [1.0, 0.0, 0.0, 1.0];

  renderer.resize(dimensions);
  renderer.clearColor(clearColor);

  const vertexShader = VertexShader(renderer.context);
  const fragmentShader = FragmentShader(renderer.context);

  renderer.attachShaders([vertexShader, fragmentShader]);

  const points1: Material = Squares1(renderer.context, renderer.program, [
    vertexShader,
    fragmentShader,
  ]);
  const points2: Material = Squares2(renderer.context, renderer.program, [
    vertexShader,
    fragmentShader,
  ]);

  renderer.addMaterials([points1, points2]);

  renderer.render();
}
