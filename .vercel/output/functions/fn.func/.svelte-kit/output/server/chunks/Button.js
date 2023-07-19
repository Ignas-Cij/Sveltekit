import { c as create_ssr_component, h as add_attribute } from "./index.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: ".button.svelte-1u1by5h{display:inline-block;padding:1rem 1.875rem;background:var(--darkblue-color);border-radius:0.625rem;text-decoration:none;color:var(--white-color);margin:10px 0}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css);
  return `<a${add_attribute("href", href, 0)} class="button svelte-1u1by5h">${slots.default ? slots.default({}) : ``}
</a>`;
});
export {
  Button as B
};
