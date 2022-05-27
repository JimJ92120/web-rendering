import { vec2, vec4 } from "@/engine/types";

import Material from "@/engine/components/Material";
import Renderer from "@/engine/Renderer";

import BigPoint from "@/engine/objects/shaders/vertex/BigPoint";
import StandardColor from "@/engine/objects/shaders/fragment/StandardColor";
import Points from "@/engine/objects/materials/Points";
import Triangles from "@/engine/objects/materials/Triangles";

export function run(canvasId: string) {
  console.log("running...");

  const renderer = new Renderer(canvasId);

  const dimensions: vec2 = [800, 500];
  const clearColor: vec4 = [1.0, 0.0, 0.0, 1.0];

  renderer.resize(dimensions);
  renderer.clearColor(clearColor);

  const bigPoint = BigPoint(renderer.context);
  const standardColor = StandardColor(renderer.context);

  renderer.attachShaders([bigPoint, standardColor]);

  const points: Material = Points(renderer.context, renderer.program, [
    bigPoint,
    standardColor,
  ]);
  const triangles: Material = Triangles(renderer.context, renderer.program, [
    bigPoint,
    standardColor,
  ]);

  renderer.addMaterials([triangles, points]);

  renderer.render();
}
