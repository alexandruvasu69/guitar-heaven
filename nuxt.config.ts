// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@vueuse/nuxt",
        "@nuxtjs/supabase",
        "nuxt-icons",
        "@nuxtjs/color-mode",
    ],
    supabase: {
        redirect: false,
    },
    colorMode: {
        preference: "system", // default value of $colorMode.preference
        fallback: "light", // fallback value if not system preference found
        hid: "nuxt-color-mode-script",
        globalName: "__NUXT_COLOR_MODE__",
        componentName: "ColorScheme",
        classPrefix: "",
        classSuffix: "-mode",
        storageKey: "nuxt-color-mode",
    },
    css: ["~/assets/scss/index.scss"],
});
