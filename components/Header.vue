<template>
    <div ref="nav" :class="[$style.nav, { [$style.nav_collapsed]: y > navHeight }]" :style="`--padding-nav: ${PADDING_HEADER}px`">
        <div :class="$style.nav_bar">
            <NuxtLink :class="$style.logo" to="/">
                Guitar Heaven
            </NuxtLink>
            <form :class="$style.search_container" @submit.prevent>
                <input type="search" placeholder="Cautati" :class="$style.search">
            </form>
            <div :class="$style.utilities">
                <NuxtLink to="/favourites">
                    <NuxtIcon name="heart" :class="$style.favorties" filled />
                </NuxtLink>
                <NuxtIcon name="shopping-cart" :class="$style.cart" filled />
            </div>
        </div>
        <div v-if="y<navHeight" :class="$style.categories">
            <p>Toate categoriile</p>
            <p>Chitare acustice</p>
            <p>Chitare electrice</p>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, defineExpose, onBeforeUnmount } from "vue";
import { useElementSize, useWindowScroll } from "@vueuse/core";
import { PADDING_HEADER } from "../utils/constans";

const nav = ref();
const { height } = useElementSize(nav);
const navHeight = ref(0);

const { y } = useWindowScroll();

watch(height, () => {
    const style = window.getComputedStyle(nav.value);
    navHeight.value = height.value + parseInt(style.paddingBlockStart) + parseInt(style.paddingBlockEnd);
});

onBeforeUnmount(() => {
    localStorage.setItem("scrollPosition", y.value.toString());
});

defineExpose({
    navHeight,
});

</script>

<style lang="scss" module>
@use "../assets/scss/library" as *;

.nav {
    height: fit-content;
    padding: var(--padding-nav);
    display: grid;
    inset-block-start: 0;
    inset-inline: 0;
    z-index: 100;

    background-color: var(--bg-color);   
}

.nav_collapsed {
    position: fixed;
    animation: slideDown 0.5s forwards;
}

@keyframes slideDown {
    from {
        top: -50px;
    }
    to {
        top: 0;
    }
}

.nav_bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search_container {
    width: 100%;
    
}

.search {
    max-width: 30rem;
    width: 100%;
    padding-block: 0.3rem;
    padding-inline: 0.6rem;
    border-radius: 1rem;
    border: none;
    align-self: center;
    background-color: lightgrey;
    appearance: none;
    cursor: text;

    &[type="number"] {
        // Disable ugly caret buttons on FF
        // The Chrome ones are fine, since they only appear on hover
        appearance: textfield;
    }

    &[type="search"]::-webkit-search-cancel-button {
        appearance: none;
    }
}

.logo {
    font-size: 1.3rem;
    text-decoration: none;
    color: var(--text-color);
    height: fit-content;
}

.utilities {
    display: flex;
    gap: 0.5rem;
}

.favorties,
.cart {
    display: grid;
    place-content: center;
    font-size: 1.35rem;
    padding: 0.25rem;
    margin-bottom: none !important;

    &:hover {
        cursor: pointer;
        svg {
            fill: red;
        }
    }
}

.categories {
    display: flex;
    justify-content: space-around;
    padding-block-start: 1rem;
}
</style>
