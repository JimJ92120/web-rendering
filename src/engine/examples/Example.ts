import { vec2, vec4 } from "@/engine/types";

import Scene from "@/engine/components/Scene";
import Program from "@/engine/components/Program";
import Shader from "@/engine/components/Shader";
import Buffer from "@/engine/components/Buffer";

export function run(canvasId: string) {
  console.log("running...");

  const scene = new Scene(canvasId);

  const dimensions: vec2 = [800, 500];
  const clearColor: vec4 = [0.0, 1.0, 1.0, 1.0];

  scene.resize(dimensions);
  scene.clearColor(clearColor);

  const { canvas, context } = scene;

  const program = new Program(context);

  const a_position = "a_position";
  const u_resolution = "u_resolution";
  const u_time = "u_time";

  const POSITION_SOURCE = `#version 300 es
    precision highp float;

    uniform vec2 ${u_resolution};
    uniform float ${u_time};
    
    in vec2 ${a_position};

    void main() {
      gl_Position = vec4(${a_position}, 0.0, 1.0);
      gl_PointSize = 100.0;
    }
  `;
  const COLOR_SOURCE = `#version 300 es
    precision highp float;

    uniform vec2 ${u_resolution};
    uniform float ${u_time};

    out vec4 fragColor;

    void main() {  
      fragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
  `;

  const positionShader = new Shader(
    context,
    context.VERTEX_SHADER,
    POSITION_SOURCE
  );
  const textureShader = new Shader(
    context,
    context.FRAGMENT_SHADER,
    COLOR_SOURCE
  );

  [positionShader, textureShader].map((shader) => {
    shader.compile();
    context.attachShader(program.program, shader.shader);
  });

  program.link();
  context.useProgram(program.program);

  const vertexSize = 2;
  /* eslint-disable */
  const vertices = new Float32Array([
    0.0, 0.0,
  ]);
  /* eslint-enable */

  const buffer = new Buffer(context);

  buffer.load(vertices);

  const positionAttribute: number = context.getAttribLocation(
    program.program,
    a_position
  );

  context.enableVertexAttribArray(positionAttribute);

  context.vertexAttribPointer(
    positionAttribute,
    vertexSize,
    context.FLOAT,
    false,
    0,
    0
  );

  const u_resolutionAttribute: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_resolution);
  const u_timeAttribute: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_time);

  context.uniform2f(u_resolutionAttribute, canvas.width, canvas.height);

  let loop = 0.0;
  const animate: FrameRequestCallback = () => {
    scene.clearColor(clearColor);

    context.uniform1f(u_timeAttribute, loop);
    context.drawArrays(context.POINTS, 0, vertices.length / vertexSize);

    loop = requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  setTimeout(() => {
    if (loop) {
      cancelAnimationFrame(loop);

      loop = 0.0;
    }
  }, 5000);
}
