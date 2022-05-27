import Material from "@/engine/components/Material";
import Buffer from "@/engine/components/Buffer";

export default class TriangleMaterial extends Material {
  draw() {
    const positionBuffer = new Buffer(this.context, this.vertices);
    const colorBuffer = new Buffer(this.context, this.colors);

    [positionBuffer, colorBuffer].map((buffer) => buffer.load());

    this.context.drawArrays(
      this.context.TRIANGLES,
      0,
      this.vertices.data.length / this.vertices.size
    );
  }
}
