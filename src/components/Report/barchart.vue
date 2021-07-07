<template>
    <VueBarGraph :points="[3, 5, 2, 5, 4]" :showYAxis="true" :showXAxis="true" />
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import VueBarGraph from "vue-bar-graph";
import {Vue} from "vue"
export default {
    components:
    {
        VueBarGraph,
    },
}
</script>
