import { BufferData } from "@/engine/types";

import Material from "@/engine/components/Material";
import Buffer from "@/engine/components/Buffer";

export default class PointsMaterial extends Material {
  draw() {
    this.setBuffer(this.vertices);
    this.setBuffer(this.colors);
    const positionBuffer = new Buffer(this.context, this.vertices);
    const colorBuffer = new Buffer(this.context, this.colors);

    [positionBuffer, colorBuffer].map((buffer) => buffer.load());

    this.context.drawArrays(
      this.context.POINTS,
      0,
      this.vertices.data.length / this.vertices.size
    );
  }

  setBuffer(bufferData: BufferData) {
    const buffer = new Buffer(this.context, bufferData);

    buffer.load();
  }
}
