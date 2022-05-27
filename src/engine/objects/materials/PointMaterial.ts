import Material from "@/engine/components/Material";

export default class PointMaterial extends Material {
  draw() {
    this.buffers.map((buffer) => buffer.load());

    this.scene.context.drawArrays(
      this.scene.context.POINTS,
      0,
      this.vertices.data.length / this.vertices.size
    );
  }
}
