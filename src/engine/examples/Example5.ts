/* eslint camelcase: "off" */

import { vec2, vec4 } from "@/engine/types";

import Scene from "@/engine/components/Scene";
import Program from "@/engine/components/Program";
import Shader from "@/engine/components/Shader";
import EngineBuffer from "@/engine/components/Buffer";

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
  const clearColor: vec4 = [0.0, 0.0, 0.0, 1.0];

  scene.resize(dimensions);
  scene.clearColor(clearColor);

  const { canvas, context } = scene;

  const program = new Program(context);

  const u_resolution = "u_resolution";
  const u_time = "u_time";
  const u_verticesCount = "u_verticesCount";

  const a_index = "a_index";
  const u_loopTime = "u_loopTime";

  const POSITION_SOURCE = `#version 300 es
    precision highp float;

    uniform vec2 ${u_resolution};
    uniform float ${u_time};
    uniform float ${u_verticesCount};
    uniform float ${u_loopTime};

    in float ${a_index};

    float random(float p) {
      vec2 p2 = fract(vec2(p * 5.3983, p * 5.4427));
      p2 += dot(p2.yx, p2.xy + vec2(21.5351, 14.3137));
      return fract(p2.x * p2.y * 95.4337);
    }

    const float SPEED = 1000.0;
    const float POINT_SIZE = 0.5;
    
    void main() {
      float indexRatio = ${a_index} / ${u_verticesCount};

      // to left
      // float x = fract(${u_loopTime} / SPEED + indexRatio) * -2.0 + 1.0;
      // to right
      // float x = fract(${u_loopTime} / SPEED + indexRatio) * 2.0 - 1.0;
      //
      float x = random(indexRatio) * 2.0 - 1.0;

      // to top
      // float y = fract(${u_loopTime} / SPEED + indexRatio) * 2.0 - 1.0;
      // to bottom
      float y = fract(${u_loopTime} / SPEED + indexRatio) * -2.0 + 1.0;

      gl_Position = vec4(x, y, 0, 1);
      gl_PointSize = POINT_SIZE;
    }
  `;
  const COLOR_SOURCE = `#version 300 es
    precision highp float;

    uniform vec2 ${u_resolution};
    uniform float ${u_time};
    uniform float ${u_verticesCount};
    uniform float ${u_loopTime};

    out vec4 fragColor;

    void main() {  
      fragColor = vec4(1.0, 1.0, 1.0, 1.0);
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

  [positionShader, textureShader].map((shader): void => {
    shader.compile();
    context.attachShader(program.program, shader.shader);
  });

  program.link();
  context.useProgram(program.program);

  const verticesCount = 1000;
  const vertexSize = 1;
  /* eslint-disable */
  const vertices = new Float32Array([...Array(verticesCount).keys()].map((index) => Number(index)));
  /* eslint-enable */

  const buffer = new EngineBuffer(context);

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
  const u_loopTimeLocation: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_loopTime);

  context.uniform2f(u_resolutionLocation, canvas.width, canvas.height);
  context.uniform1iv(u_timeLocation, new Float32Array(getTimeArray()));
  context.uniform1f(u_verticesCountLocation, verticesCount);

  let loop = 0.0;

  const animate: FrameRequestCallback = () => {
    scene.clearColor(clearColor);

    context.uniform1f(u_loopTimeLocation, loop);
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
