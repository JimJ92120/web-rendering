import { vec2, vec4 } from "@/engine/types";

import Scene from "@/engine/components/Scene";
import Program from "@/engine/components/Program";
import Shader from "@/engine/components/Shader";
import Buffer from "@/engine/components/Buffer";

function getTimeArray(): number[] {
  const _now = new Date();
  const timeToArray: number[] = [
    _now.getHours(),
    _now.getMinutes(),
    _now.getSeconds(),
  ].reduce((accumulator: number[], currentValue: number) => {
    let timeSplit: string[] = currentValue.toString().split("");

    if (timeSplit.length === 1) {
      timeSplit = ["0", timeSplit[0]];
    }

    return [...accumulator, ...[Number(timeSplit[0]), Number(timeSplit[1])]];
  }, []);

  return timeToArray;
}

export function run(canvasId: string) {
  console.log("running...");

  const scene = new Scene(canvasId);

  const dimensions: vec2 = [800, 500];
  const clearColor: vec4 = [0.0, 1.0, 1.0, 1.0];

  scene.resize(dimensions);
  scene.clearColor(clearColor);

  const { canvas, context } = scene;

  const program = new Program(context);

  const u_resolution = "u_resolution";
  const u_time = "u_time";
  const u_verticesCount = "u_verticesCount";

  const a_index = "a_index";

  const POSITION_SOURCE = `#version 300 es
    precision highp float;

    uniform vec2 ${u_resolution};
    uniform int ${u_time}[6];
    uniform float ${u_verticesCount};

    in float ${a_index};

    void main() {
      gl_Position = vec4(${a_index}, 0.0, 0.0, 1.0);
      gl_PointSize = 100.0;
    }
  `;
  const COLOR_SOURCE = `#version 300 es
    precision highp float;

    uniform vec2 ${u_resolution};
    uniform int ${u_time}[6];
    uniform float ${u_verticesCount};

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

  const verticesCount = 1;
  const vertexSize = 1;
  /* eslint-disable */
  const vertices = new Float32Array([...Array(verticesCount).keys()].map((index) => Number(index)));
  /* eslint-enable */

  const buffer = new Buffer(context);

  buffer.load(vertices);

  const indexAttribute: number = context.getAttribLocation(
    program.program,
    a_index
  );

  context.enableVertexAttribArray(indexAttribute);

  context.vertexAttribPointer(
    indexAttribute,
    vertexSize,
    context.FLOAT,
    false,
    0,
    0
  );

  const u_resolutionLocation: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_resolution);
  const u_timeLocation: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_time);
  const u_verticesCountLocation: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_verticesCount);

  context.uniform2f(u_resolutionLocation, canvas.width, canvas.height);
  context.uniform1iv(u_timeLocation, new Float32Array(getTimeArray()));
  context.uniform1f(u_verticesCountLocation, verticesCount);

  let loop = 0.0;

  const animate: FrameRequestCallback = () => {
    scene.clearColor(clearColor);

    context.uniform1iv(u_timeLocation, new Float32Array(getTimeArray()));
    context.drawArrays(context.POINTS, 0, vertices.length / vertexSize);

    loop = requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  // setTimeout(() => {
  //   if (loop) {
  //     cancelAnimationFrame(loop);

  //     loop = 0.0;
  //   }
  // }, 5000);
}
