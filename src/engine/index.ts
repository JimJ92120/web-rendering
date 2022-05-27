import { vec2, vec4 } from "@/engine/types";

import Scene from "@/engine/components/base/Scene";

import BigPoint from "@/engine/objects/shaders/vertex/BigPoint";
import IncreaseColor from "@/engine/objects/shaders/fragment/IncreaseColor";
import StandardColor from "@/engine/objects/shaders/fragment/StandardColor";
import SmallPoint from "@/engine/objects/shaders/vertex/SmallPoint";

import PointMaterial from "@/engine/objects/materials/PointMaterial";
import TriangleMaterial from "@/engine/objects/materials/TriangleMaterial";

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

  const triangles: TriangleMaterial = new TriangleMaterial(
    scene,
    [smallPoint, increaseColor],
    {
      size: 2,
      /* eslint-disable */
      data: new Float32Array([
        0.0, 0.0,
        -0.5, -1.0,
        0.5, -1.0,
        0.0, 0.0,
        -0.5, 1.0,
        0.5, 1.0,
      ]),
      /* eslint-enable */
    },
    {
      size: 4,
      /* eslint-disable */
      data: new Float32Array([
        1.0, 0.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        1.0, 0.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
      ]),
      /* eslint-enable */
    }
  );
  const points: PointMaterial = new PointMaterial(
    scene,
    [bigPoint, standardColor],
    {
      size: 2,
      /* eslint-disable */
      data: new Float32Array([
        0.0, 0.5,
        0.0, -0.5,
        -0.5, 0.0,
        0.5, 0.0,
      ]),
      /* eslint-enable */
    },
    {
      size: 4,
      /* eslint-disable */
      data: new Float32Array([
        1.0, 1.0, 1.0, 1.0,
        0.0, 0.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
      ]),
      /* eslint-enable */
    }
  );

  triangles.render();
  points.render();
}
