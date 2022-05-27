import { BufferData } from "@/engine/types";

import Buffer from "@/engine/components/base/Buffer";
import Program from "@/engine/components/base/Program";
import Shader from "@/engine/components/base/Shader";
import Scene from "@/engine/components/base/Scene";

export default abstract class Material {
  scene: Scene;
  buffers: [Buffer, Buffer];
  colors: BufferData;
  program: Program;
  shaders: [Shader, Shader];
  shadersAttributes: [number, number];
  vertices: BufferData;

  constructor(
    scene: Scene,
    shaders: [Shader, Shader],
    vertices: BufferData,
    colors: BufferData
  ) {
    this.scene = scene;
    this.vertices = vertices;
    this.colors = colors;
    this.shaders = shaders;

    this.setProgram();
    this.attachShaders();
    this.setShadersAttributes();
    this.setBuffers();
  }

  abstract draw(): void;

  attachShaders() {
    this.shaders.map(({ shader }) =>
      this.scene.context.attachShader(this.program.program, shader)
    );
    this.program.link();
  }

  render() {
    this.useProgram();
    this.draw();
  }

  setBuffers() {
    const positionBuffer = new Buffer(
      this.scene.context,
      this.vertices,
      this.shadersAttributes[0]
    );
    const colorBuffer = new Buffer(
      this.scene.context,
      this.colors,
      this.shadersAttributes[1]
    );

    this.buffers = [positionBuffer, colorBuffer];
  }

  setProgram() {
    this.program = new Program(this.scene.context);
  }

  setShadersAttributes() {
    const positionAttribute: number = this.scene.context.getAttribLocation(
      this.program.program,
      this.shaders[0].attribute
    );
    const colorAttribute: number = this.scene.context.getAttribLocation(
      this.program.program,
      this.shaders[1].attribute
    );

    this.shadersAttributes = [positionAttribute, colorAttribute];
  }

  useProgram() {
    this.scene.context.useProgram(this.program.program);
  }
}
