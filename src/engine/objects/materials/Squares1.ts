import { BufferData } from "@/engine/components/types";

import Material from "@/engine/components/Material";

import Points from "@/engine/objects/materials/base/Points";
import Renderer from "@/engine/components/Renderer";
import Shader from "@/engine/components/Shader";

export default function Squares1(
  renderer: Renderer,
  shaders: [Shader, Shader]
): Material {
  const vertexPositionAttribute: number = renderer.context.getAttribLocation(
    renderer.program.program,
    shaders[0].attribute
  );
  const vertexColorAttribute: number = renderer.context.getAttribLocation(
    renderer.program.program,
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
      0.0, 1.0, 0.0, 1.0,
      0.0, 0.0, 1.0, 1.0,
      0.0, 1.0, 0.5, 1.0,
      0.0, 0.5, 1.0, 1.0,
    ]),
    /* eslint-enable */
  };

  const squares = new Points(renderer.context, positionData, colorsData);

  return squares;
}
