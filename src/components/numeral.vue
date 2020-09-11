<template>
  <span>{{ numeral(number).format(format) }}</span>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import numeral from "numeral";

export default Vue.extend({
  name: "Numeral",
  props: {
    number: {
      type: Number,
      required: true
    } as PropOptions<number | string>,
    format: String as PropOptions<string | undefined>
  },
  computed: {
    numeral() {
      return numeral;
    }
  }
});
</script>
