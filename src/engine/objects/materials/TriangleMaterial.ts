import Material from "@/engine/components/Material";

export default class TriangleMaterial extends Material {
  draw() {
    this.scene.context.drawArrays(
      this.scene.context.TRIANGLES,
      0,
      this.vertices.data.length / this.vertices.size
    );
  }
}
