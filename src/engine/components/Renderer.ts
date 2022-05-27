import Material from "@/engine/components/Material";

import Program from "@/engine/components/Program";
import Shader from "@/engine/components/Shader";
import Scene from "@/engine/components/Scene";

export default class Renderer {
  materials: Material[] = [];
  program: Program;
  scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;

    this.setProgram();
  }

  addMaterials(newMaterials: Material[]) {
    const materials: Material[] = this.materials;

    this.materials = [...materials, ...newMaterials];
  }

  attachShaders(shaders: Shader[]) {
    shaders.map(({ shader }) =>
      this.scene.context.attachShader(this.program.program, shader)
    );
    this.program.link();
  }

  render() {
    this.useProgram();
    this.materials.map((material) => material.draw());
  }

  setProgram() {
    this.program = new Program(this.scene.context);
  }

  useProgram() {
    this.scene.context.useProgram(this.program.program);
  }
}
