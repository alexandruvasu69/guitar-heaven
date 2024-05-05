<template>
    <Header ref="headerRef" />
    <div class="page-content" :style="`--padding-content: ${initialHeight}px;`" :class="headerHeight ? $style.container : $style.containerNone">
        <slot />
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useWindowScroll } from "@vueuse/core";
import { useElementSize } from "@vueuse/core";

const headerRef = ref(null);

const { y } = useWindowScroll();
const { height } = useElementSize(headerRef);

const initialHeight = ref(0);

// onMounted(() => {
//     console.log(window.getComputedStyle(headerRef?.value));
// });


const headerHeight = computed(() => y.value<headerRef.value?.navHeight ? 0 : headerRef.value?.navHeight);

const checkSticky = () => {
    if(y.value < headerRef.value?.navHeight) {
        initialHeight.value = headerRef.value?.navHeight;
    }
};

watch(y, () => {
    checkSticky();
    console.log(initialHeight.value);
});



</script>

<style lang="scss" module>
@use "../assets/scss/library" as *;

.container {
    padding-block-start: var(--padding-content) !important;
}

.container-none {
    padding-block-start: none !important;
}
</style>