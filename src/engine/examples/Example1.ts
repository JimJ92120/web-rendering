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

  const a_index = "a_index";
  const u_count = "u_count";
  const u_pixelSize = "u_pixelSize";
  const u_resolution = "u_resolution";
  const u_startColor = "u_startColor";

  const POSITION_SOURCE = `#version 300 es
    precision highp float;
  
    uniform float ${u_count};
    uniform float ${u_pixelSize};
    uniform vec2 ${u_resolution};
    uniform vec3 ${u_startColor};
  
    in float ${a_index};

    out float index;

    void main() {
      vec2 position = ${u_resolution} * (${a_index} / ${u_count}) * (${a_index} / ${u_count});
      vec2 zeroToOne = position.xy / ${u_resolution};
      vec2 zeroToTwo = zeroToOne * 2.0;
      vec2 clipSpace = (zeroToTwo - 1.0);

      gl_Position = vec4(clipSpace, 0, 1);
      gl_PointSize = ${u_pixelSize};

      index = a_index;
    }
  `;
  const COLOR_SOURCE = `#version 300 es
    precision highp float;

    uniform float ${u_count};
    uniform vec3 ${u_startColor};

    in float index;
    in vec3 vertexColor;

    out vec4 fragColor;

    void main() {
      vec3 color;

      if (${u_startColor} == vec3(0.0)) {
        color = vec3(index / ${u_count});
      } else {
        color = ${u_startColor} * (index / ${u_count});
      }

      fragColor = vec4(color, 1.0);
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

  const count = 10.0;
  const pixelSize = 10.0;
  const startColor = [0.0, 1.0, 1.0];
  const vertexSize = 1;
  /* eslint-disable */
  const vertices = new Float32Array([...Array(count).keys()].map((index) => index + 1));
  /* eslint-enable */

  const buffer = new Buffer(context);

  buffer.load(vertices);

  const positionAttribute: number = context.getAttribLocation(
    program.program,
    a_index
  );
  const resolutionAttribute: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_resolution);
  const pixelSizeAttribute: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_pixelSize);
  const verticesCountAttribute: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_count);
  const startColorAttribute: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_startColor);

  context.enableVertexAttribArray(positionAttribute);
  context.uniform2f(resolutionAttribute, canvas.width, canvas.height);
  context.uniform1f(pixelSizeAttribute, pixelSize);
  context.uniform1f(verticesCountAttribute, count);
  context.uniform3fv(startColorAttribute, startColor);

  context.vertexAttribPointer(
    positionAttribute,
    vertexSize,
    context.FLOAT,
    false,
    0,
    0
  );

  let loop: number | null;
  const maxPixelSize = 50.0;
  let direction = 0;
  let currentPixelSize = pixelSize;

  const animate: FrameRequestCallback = () => {
    scene.clearColor(clearColor);

    if (direction === 0) {
      ++currentPixelSize;
    } else if (direction === 1) {
      --currentPixelSize;
    }

    if (currentPixelSize <= pixelSize) {
      direction = 0;
    } else if (currentPixelSize >= maxPixelSize) {
      direction = 1;
    }

    context.uniform1f(pixelSizeAttribute, currentPixelSize);
    context.drawArrays(context.POINTS, 0, vertices.length / vertexSize);

    loop = requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  setTimeout(() => {
    if (loop) {
      cancelAnimationFrame(loop);

      loop = null;
    }
  }, 5000);
}
