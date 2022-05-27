import { BufferData } from "../../materials/types";

import InterfaceMaterial from "../../materials/InterfaceMaterial";

import Points from "../../materials/Points";

export default function Squares1(
  context: WebGL2RenderingContext,
  vertexPositionAttribute: number,
  vertexColorAttribute: number
): InterfaceMaterial {
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

  const squares = new Points(context, positionData, colorsData);

  return squares;
}
