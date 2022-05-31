<template>
  <div class="example">
    <div class="example__buttons">
      <button id="start" @click="startExample">Start</button>
    </div>
    <div>
      <canvas id="frame" height="500" width="800"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExampleView",
  data() {
    return {
      example: {
        run: function (canvasId: string) {
          //
        },
      },
      loop: 0,
    };
  },
  async created() {
    const { id: exampleId } = this.$route.params;
    this.setxample(Number(exampleId));

    this.$watch(
      () => this.$route.params,
      async (toParams: any) => {
        this.setxample(Number(toParams.id));
      }
    );
  },
  methods: {
    setxample: async function (exampleId: number) {
      try {
        this.example = await import(`@/engine/examples/Example${exampleId}`);
      } catch (error) {
        console.error(error);

        throw new Error("no example found.");
      }
    },
    startExample: async function () {
      this.example.run("frame");
    },
  },
});
</script>

<style lang="scss">
#frame {
  background-color: #000;
}
.example__buttons {
  margin-bottom: 1rem;

  & button {
    margin: 0 1em;
  }
}
</style>
