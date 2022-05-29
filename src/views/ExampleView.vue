<template>
  <div class="example">
    <h1>Example {{ $route.params.id }}</h1>
    <div>
      <canvas id="frame"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExampleView",
  data() {
    return {
      example: function () {
        //
      },
    };
  },
  async created() {
    const { id: exampleId } = this.$route.params;
    this.runExample(Number(exampleId));

    this.$watch(
      () => this.$route.params,
      async (toParams: any) => {
        this.runExample(Number(toParams.id));
      }
    );
  },
  methods: {
    runExample: async function (exampleId: number) {
      try {
        const example = await import(`@/engine/examples/Example${exampleId}`);

        example.run("frame");
      } catch (error) {
        console.error(error);

        throw new Error("no example found.");
      }
    },
  },
});
</script>

<style lang="scss">
#frame {
  background-color: lightblue;
}
</style>
