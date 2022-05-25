<template>
  <div class="example">
    <h1>This is a page example</h1>
    <div>
      <canvas id="frame"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as Engine from "@/engine";

export default defineComponent({
  name: "ExampleView",
  mounted: () => {
    Engine.run("frame");
  },
});
</script>

<style lang="scss">
#frame {
  background-color: lightblue;
}
</style>
