import { BufferData } from "./types";

import EngineObject from "./EngineObject";

export default function Squares2(
  context: WebGL2RenderingContext,
  vertexPositionAttribute: number,
  vertexColorAttribute: number
): EngineObject {
  const positionData: BufferData = {
    attribute: vertexPositionAttribute,
    size: 2,
    /* eslint-disable */
    data: new Float32Array([
      0.5, 0.5,
      -0.5, 0.5,
    ]),
    /* eslint-enable */
  };
  const colorsData: BufferData = {
    attribute: vertexColorAttribute,
    size: 4,
    /* eslint-disable */
    data: new Float32Array([
      Math.random(), Math.random(), Math.random(), 1.0,
      Math.random(), Math.random(), Math.random(), 1.0,
    ]),
    /* eslint-enable */
  };

  const squares = new EngineObject(context, positionData, colorsData);

  return squares;
}
