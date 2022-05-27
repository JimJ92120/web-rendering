import { BufferData } from "@/engine/types";

import Material from "@/engine/components/Material";
import Program from "@/engine/components/Program";
import Shader from "@/engine/components/Shader";

import PointMaterial from "@/engine/components/materials/PointMaterial";

export default function Points(
  context: WebGL2RenderingContext,
  program: Program,
  shaders: [Shader, Shader]
): Material {
  const vertexPositionAttribute: number = context.getAttribLocation(
    program.program,
    shaders[0].attribute
  );
  const vertexColorAttribute: number = context.getAttribLocation(
    program.program,
    shaders[1].attribute
  );
  const positionData: BufferData = {
    attribute: vertexPositionAttribute,
    size: 2,
    /* eslint-disable */
    data: new Float32Array([
      0.0, 0.5,
      0.0, -0.5,
      -0.5, 0.0,
      0.5, 0.0,
    ]),
    /* eslint-enable */
  };
  const colorsData: BufferData = {
    attribute: vertexColorAttribute,
    size: 4,
    /* eslint-disable */
    data: new Float32Array([
      1.0, 1.0, 1.0, 1.0,
      0.0, 0.0, 0.0, 1.0,
      0.0, 1.0, 0.0, 1.0,
      0.0, 0.0, 1.0, 1.0,
    ]),
    /* eslint-enable */
  };

  return new PointMaterial(context, positionData, colorsData);
}
