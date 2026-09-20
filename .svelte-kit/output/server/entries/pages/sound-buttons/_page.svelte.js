import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".audio-players.svelte-1dzdldf{margin:1.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="audio-players svelte-1dzdldf" data-svelte-h="svelte-amhjzw"><div><p>Westminster Chime</p> <audio controls src="/westminster.mp3"></audio></div> <br> <br> <div><p>Single Siren</p> <audio controls src="/Siren_Single.mp3"></audio></div> <br> <br> <div><p>Multiple Sirens</p> <audio controls src="/Siren_Multiple.mp3"></audio></div> </div>`;
});
export {
  Page as default
};
