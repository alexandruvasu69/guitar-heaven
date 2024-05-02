<template>
    <div :class="$style.nav" :style="`padding: ${PADDING_HEADER}px`">
        <NuxtLink :class="$style.logo" to="/">
            Guitar Heaven
        </NuxtLink>
        <div :class="$style.utilities">
            <NuxtIcon name="heart" :class="$style.favorties" filled />
            <NuxtIcon name="shopping-cart" :class="$style.cart" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { PADDING_HEADER } from "../utils/constans";

</script>

<style lang="scss" module>
@use "../assets/scss/library" as *;

.nav {
    position: fixed;
    inset-block-start: 0;
    inset-inline: 0;
    z-index: 100;
    width: 100vw;
    height: fit-content;
    // padding-inline: 1rem;
    // padding-block: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-color);
}

.logo {
    font-size: 1.3rem;
    text-decoration: none;
    color: var(--text-color);

    @include min-width(md) {
        color: red;
    }

}

.utilities {
    display: flex;
    gap: 0.5rem;
}

.favorties,
.cart {
    display: grid;
    place-content: center;
    // color: var(--contrast-color);
    font-size: 1.35rem;
    padding: 0.25rem;

    &:hover {
        cursor: pointer;
    }
}
</style>
