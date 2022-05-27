import { vec2, vec4 } from "@/engine/types";

import Material from "@/engine/components/Material";
import Renderer from "@/engine/components/Renderer";
import Scene from "@/engine/components/Scene";

import BigPoint from "@/engine/objects/shaders/vertex/BigPoint";
import IncreaseColor from "@/engine/objects/shaders/fragment/IncreaseColor";
import StandardColor from "@/engine/objects/shaders/fragment/StandardColor";

import Points from "@/engine/objects/materials/Points";
import Triangles from "@/engine/objects/materials/Triangles";
import SmallPoint from "@/engine/objects/shaders/vertex/SmallPoint";

export function run(canvasId: string) {
  console.log("running...");

  const scene = new Scene(canvasId);

  const dimensions: vec2 = [800, 500];
  const clearColor: vec4 = [1.0, 0.0, 0.0, 1.0];

  scene.resize(dimensions);
  scene.clearColor(clearColor);

  const bigPoint = BigPoint(scene.context);
  const smallPoint = SmallPoint(scene.context);
  const increaseColor = IncreaseColor(scene.context);
  const standardColor = StandardColor(scene.context);

  const renderer = new Renderer(scene);
  renderer.attachShaders([bigPoint, increaseColor]);
  const triangles: Material = Triangles(scene.context, renderer.program, [
    bigPoint,
    increaseColor,
  ]);

  const renderer2 = new Renderer(scene);
  renderer2.attachShaders([bigPoint, standardColor]);
  const points: Material = Points(scene.context, renderer2.program, [
    bigPoint,
    standardColor,
  ]);

  const renderer3 = new Renderer(scene);
  renderer3.attachShaders([smallPoint, increaseColor]);
  const points2: Material = Points(scene.context, renderer3.program, [
    smallPoint,
    increaseColor,
  ]);

  renderer.addMaterials([triangles]);
  renderer2.addMaterials([points]);
  renderer3.addMaterials([points2]);

  renderer.render();
  renderer2.render();
  renderer3.render();
}
