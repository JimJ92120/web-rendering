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
  const u_loopTime = "u_loopTime";
  const u_verticesCount = "u_verticesCount";
  const u_pointSize = "u_pointSize";

  const a_index = "a_index";

  const POSITION_SOURCE = `#version 300 es
    precision highp float;

    uniform vec2 ${u_resolution};
    uniform float ${u_loopTime};
    uniform float ${u_verticesCount};
    uniform float ${u_pointSize};

    in float ${a_index};

    out float index;
    out vec2 pixelPosition;

    vec2 getPointDimension (float pointSize, vec2 resolution) {
      return pointSize / resolution * 2.0;
    }

    void positionToResolution(inout vec2 position, vec2 pointDimension) {
      position = position * pointDimension - 1.0 + pointDimension / 2.0;
    }

    void main() {
      vec2 pointDimension = getPointDimension(${u_pointSize}, ${u_resolution});

      // vec2 position = vec2(pow(${a_index}, 2.0));

      vec2 limit = ${u_resolution} / ${u_pointSize};

      // draw from bottom to top
      float x = mod(${a_index}, limit[0]);
      float y = floor(${a_index} / limit[0]);
    
      vec2 position = vec2(x, y);

      positionToResolution(position, pointDimension);

      gl_Position = vec4(position, 0.0, 1.0);
      gl_PointSize = ${u_pointSize};

      index = ${a_index};
      pixelPosition = vec2(x, y);
    }
  `;
  const COLOR_SOURCE = `#version 300 es
    precision highp float;

    uniform vec2 ${u_resolution};
    uniform float ${u_loopTime};
    uniform float ${u_verticesCount};
    uniform float ${u_pointSize};

    in float index;
    in vec2 pixelPosition;

    out vec4 fragColor;

    // float plot(vec2 st) {
    //   return smoothstep(0.02, 0.0, abs(st.y - st.x));
    // }

    float plot(vec2 st, float pct) {
      return smoothstep(pct-0.02, pct, st.y) - smoothstep(pct, pct+0.02, st.y);
    }

    void main() {
      // vec2 st = gl_FragCoord.xy / ${u_resolution};
      vec2 st = pixelPosition / ${u_resolution};

      // float y = fract(st.x * pixelPosition[1]);
      float y = fract(st.x);

      vec3 color = vec3(y);
      vec3 plotColor = vec3(1.0, 0.0, 0.0);

      // float pct = plot(st);
      float pct = plot(st, y);
      color = (0.75 - pct) * color + pct * plotColor;

      fragColor = vec4(color, 1.0) / fract(${u_loopTime} / 5000.0);
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

  const pointSize = 50;
  const verticesCount = (dimensions[0] * dimensions[1]) / pointSize;
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
  const u_loopTimeLocation: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_loopTime);
  const u_verticesCountLocation: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_verticesCount);
  const u_pointSizeLocation: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_pointSize);

  context.uniform2f(u_resolutionLocation, canvas.width, canvas.height);
  context.uniform1f(u_verticesCountLocation, verticesCount);
  context.uniform1f(u_pointSizeLocation, pointSize);

  let loop = 0.0;

  const animate: FrameRequestCallback = () => {
    scene.clearColor(clearColor);

    context.uniform1f(u_loopTimeLocation, loop);
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
