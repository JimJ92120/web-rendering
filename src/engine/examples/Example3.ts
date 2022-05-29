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

  const u_resolution = "u_resolution";
  const u_time = "u_time";

  const a_index = "a_index";
  const u_count = "u_count";
  const u_pixelSize = "u_pixelSize";

  const POSITION_SOURCE = `#version 300 es
    precision highp float;

    #define PI radians(180.0)

    uniform vec2 ${u_resolution};
    uniform vec3 ${u_time};
    uniform float ${u_count};
    uniform float ${u_pixelSize};

    in float ${a_index};

    out float index;

    void main() {
      // receives 12 + 3 at the end for needs to overlap
      // 13rd: hours
      // 14th: minutes
      // 15th: seconds
      float needles = 3.0;
      float currentCount = ${u_count} - needles;

      float radius = 0.75;
      float aspect = ${u_resolution}.y / ${u_resolution}.x;
      vec2 scale = vec2(aspect, 1.0);

      float u;

      if (${a_index} == 14.0) {
        float seconds = ${u_time}[2];
        float rotation = 15.0;

        u = (60.0 - seconds) / 60.0;
      } else if (${a_index} == 13.0) {
        float minutes = ${u_time}[1];
        float rotation = 15.0;

        u = (60.0 - minutes + rotation) / 60.0;
      } else if (${a_index} == 12.0) {
        float hours = ${u_time}[0];
        float minutes = ${u_time}[1];
        float maxHours = 12.0;

        if (${u_time}[0] > maxHours) {
          hours = hours - maxHours;
        }

        float rotation = 3.0;
        float minutesRotation = minutes / 60.0;

        u = (12.0 - hours + rotation - minutesRotation) / currentCount;
      } else {
        float rotation = -5.0;
        float currentIndex = ${a_index} - 1.0 + rotation;
        u = (currentCount - currentIndex) / currentCount;
      }
      
      // else starts 1/4 off
      float angle = u * PI * 2.0;
      vec2 position = vec2(cos(angle), sin(angle)) * radius;
      
      gl_Position = vec4(position * scale, 0.0, 1.0);

      float sizeRatio;
      if (${a_index} == 14.0) {
        sizeRatio = 2.0;
      } else if (${a_index} == 13.0) {
        sizeRatio = 3.0;
      } else if (${a_index} == 12.0) {
        sizeRatio = 4.0;
      } else if (mod(${a_index} - needles, 3.0) == 0.0) {
        sizeRatio = 1.5;
      } else {
        float mod = mod(${a_index} - needles, 3.0);

        sizeRatio = mod * 0.5;
      }

      gl_PointSize = ${u_pixelSize} * sizeRatio;
      index = ${a_index};
    }
  `;
  const COLOR_SOURCE = `#version 300 es
    precision highp float;

    uniform vec2 ${u_resolution};
    uniform vec3 ${u_time};

    in float index;

    out vec4 fragColor;

    void main() {
      if (index == 14.0) {
        fragColor = vec4(0.0, 0.0, 10.0, 1.0);
      } else if (index == 13.0) {
        fragColor = vec4(0.0, 1.0, 0.0, 1.0);
      } else if (index == 12.0) {
        fragColor = vec4(1.0, 0.0, 1.0, 1.0);
      } else {
        fragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }
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

  const verticesCount = 15;
  const vertexSize = 1;
  const pixelSize = 10.0;
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

  const u_countLocation: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_count);
  const u_pixelSizeLocation: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_pixelSize);

  context.uniform2f(u_resolutionLocation, canvas.width, canvas.height);
  context.uniform3f(u_timeLocation, 1.0, 0.0, 1.0);
  context.uniform1f(u_countLocation, verticesCount);
  context.uniform1f(u_pixelSizeLocation, pixelSize);

  // let loop = 0.0;
  const animate: FrameRequestCallback = () => {
    scene.clearColor(clearColor);

    const now = new Date();
    context.uniform3f(
      u_timeLocation,
      now.getHours(),
      now.getMinutes(),
      now.getSeconds()
    );

    context.drawArrays(context.POINTS, 0, vertices.length / vertexSize);

    // loop = requestAnimationFrame(animate);
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  // setTimeout(() => {
  //   if (loop) {
  //     cancelAnimationFrame(loop);

  //     loop = 0.0;
  //   }
  // }, 5000);
}
