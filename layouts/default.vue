<template>
    <Header ref="header" />
    <div class="page-content" :style="`margin-block-start: ${marginContent}px !important;`">
        <slot />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useElementSize } from "@vueuse/core";
import { PADDING_HEADER } from "../utils/constans";
import { watch } from "vue";

const header = ref();



const { height } = useElementSize(header);
const marginContent = ref();

// onMounted(() => {
//     marginContent.value = height.value + (PADDING_HEADER);
//     console.log(marginContent.value)
// })

watch(height, (newVal) => {
    marginContent.value = newVal + (PADDING_HEADER * 2);
});

</script>

<style lang="scss">
@use "../assets/scss/library" as *;
</style>