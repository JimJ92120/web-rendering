import { vec2, vec4 } from "@/engine/types";

import Scene from "@/engine/components/Scene";
import Program from "@/engine/components/Program";
import Shader from "@/engine/components/Shader";
import Buffer from "@/engine/components/Buffer";

// ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___
// *** ***   * *** *** * * *** *** *** *** ***
// *** * *   *   *   * * * *   *     * * * * *
// *** * *   * *** *** *** *** ***   * *** ***
// *** * *   * *     *   *   * * *   * * *   *
// *** ***   * *** ***   * *** ***   * *** ***

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

  const a_index = "a_index";
  const u_verticesCount = "u_verticesCount";
  const u_pixelSize = "u_pixelSize";
  const u_lineWidth = "u_lineWidth";

  const POSITION_SOURCE = `#version 300 es
    precision highp float;

    uniform vec2 ${u_resolution};
    uniform int ${u_time}[6];
    uniform float ${u_verticesCount};
    uniform float ${u_pixelSize};
    uniform float ${u_lineWidth};

    in float ${a_index};

    int [15]getNumberArray(int number) {
      int numberArray[15];

      if (number == 0) {
        numberArray = int[15](
          1, 1, 1,
          1, 0, 1,
          1, 0, 1,
          1, 0, 1,
          1, 1, 1
        );
      } else if (number == 1) {
        numberArray = int[15](
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1
        );
      } else if (number == 2) {      
        numberArray = int[15](
          1, 1, 1,
          0, 0, 1,
          1, 1, 1,
          1, 0, 0,
          1, 1, 1
        );
      } else if (number == 3) {
        numberArray = int[15](
          1, 1, 1,
          0, 0, 1,
          1, 1, 1,
          0, 0, 1,
          1, 1, 1
        );
      } else if (number == 4) {
        numberArray = int[15](
          1, 0, 1,
          1, 0, 1,
          1, 1, 1,
          0, 0, 1,
          0, 0, 1
        );
      } else if (number == 5) {
        numberArray = int[15](
          1, 1, 1,
          1, 0, 0,
          1, 1, 1,
          0, 0, 1,
          1, 1, 1
        );
      } else if (number == 6) {
        numberArray = int[15](
          1, 0, 0,
          1, 0, 0,
          1, 1, 1,
          1, 0, 1,
          1, 1, 1
        );
      } else if (number == 7) {
        numberArray = int[15](
          1, 1, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1
        );
      } else if (number == 8) {
        numberArray = int[15](
          1, 1, 1,
          1, 0, 1,
          1, 1, 1,
          1, 0, 1,
          1, 1, 1
        );
      } else if (number == 9) {
        numberArray = int[15](
          1, 1, 1,
          1, 0, 1,
          1, 1, 1,
          0, 0, 1,
          1, 1, 1
        );
      } else {
        numberArray = int[15](
          0, 0, 0,
          0, 0, 0,
          0, 0, 0,
          0, 0, 0,
          0, 0, 0
        );
      }

      return numberArray;
    }

    void main() {
      // pixels array size
      float pixelsSize = 15.0;
    
      // position of the digit to draw in u_verticesCount
      float digitPosition = floor(${a_index} / pixelsSize);
    
      // number to draw
      int numberToDraw = u_time[int(digitPosition)];
    
      // pixels array to draw
      int pixels[15] = getNumberArray(numberToDraw);
    
      // current pixel in pixels array to draw
      int currentPixelIndex = int(${a_index} - pixelsSize * digitPosition);

      if (pixels[currentPixelIndex] == 0) {
        return;
      }

      // to adapt to screen ratio
      float aspect = ${u_resolution}.y / ${u_resolution}.x;
      vec2 scale = vec2(aspect, 1.0);

      // default offset
      vec2 positionOffset = vec2(-0.9, 0.25);
      // spacing between pixels
      float spacingSize = 0.075;
      vec2 spacingOffset = vec2(spacingSize, -spacingSize);

      if (${a_index} > pixelsSize - 1.0) {
        positionOffset = (positionOffset - vec2(
          (-(3.0 * spacingSize) - spacingSize) * digitPosition,
          -(5.0 * spacingSize) * digitPosition
        ));
      }

      float currentPixelRow = floor(${a_index} / ${u_lineWidth});
      float currentPixelColumn = mod(${a_index}, ${u_lineWidth});
      vec2 position = vec2(currentPixelColumn, currentPixelRow) * spacingOffset + positionOffset;

      gl_Position = vec4(position * scale, 0.0, 1.0);
      gl_PointSize = ${u_pixelSize};
    }
  `;
  const COLOR_SOURCE = `#version 300 es
    precision highp float;

    uniform vec2 ${u_resolution};
    uniform int ${u_time}[6];
    uniform float ${u_verticesCount};
    uniform float ${u_pixelSize};

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

  [positionShader, textureShader].map((shader) => {
    shader.compile();
    context.attachShader(program.program, shader.shader);
  });

  program.link();
  context.useProgram(program.program);

  const numberSize = 15.0;
  const verticesCount = numberSize * 6;
  const vertexSize = 1;
  const pixelSize = 15.0;
  const lineWidth = 3.0;
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
  const u_pixelSizeLocation: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_pixelSize);
  const u_lineWidthLocation: WebGLUniformLocation | null =
    context.getUniformLocation(program.program, u_lineWidth);

  context.uniform2f(u_resolutionLocation, canvas.width, canvas.height);
  context.uniform1iv(u_timeLocation, new Float32Array(getTimeArray()));
  context.uniform1f(u_verticesCountLocation, verticesCount);
  context.uniform1f(u_pixelSizeLocation, pixelSize);
  context.uniform1f(u_lineWidthLocation, lineWidth);

  const animate: FrameRequestCallback = () => {
    scene.clearColor(clearColor);

    context.uniform1iv(u_timeLocation, new Float32Array(getTimeArray()));
    context.drawArrays(context.POINTS, 0, vertices.length / vertexSize);

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
}
