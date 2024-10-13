import { tryUseNuxt, useNuxt } from "@nuxt/kit";

export const defineHostedPlugin = () => {
    const nuxt = tryUseNuxt()
    if (!nuxt) throw Error(`Unable to get nuxt content. This is meant to be run from another nuxt project`)
    console.log(nuxt)
}