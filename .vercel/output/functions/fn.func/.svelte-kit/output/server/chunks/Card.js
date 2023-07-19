import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute } from "./index2.js";
import { B as Button } from "./Button.js";
const Card_svelte_svelte_type_style_lang = "";
const css = {
  code: '.card.svelte-fextpo{position:relative;margin-bottom:100px}.card.svelte-fextpo:before{content:"";position:absolute;top:0;left:0;height:100%;width:75%;background:var(--blue-color);z-index:-1;border-radius:0.375rem}.card.svelte-fextpo:nth-of-type(odd){flex-direction:row-reverse}.card.svelte-fextpo:nth-of-type(odd):before{left:unset;right:0}.card.svelte-fextpo:last-of-type{margin-bottom:0}.left-side.svelte-fextpo{padding:0 75px}',
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { labelForText = "" } = $$props;
  let { text = "" } = $$props;
  let { imageUrl = "" } = $$props;
  let { buttonUrl = "" } = $$props;
  let { buttonText = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.labelForText === void 0 && $$bindings.labelForText && labelForText !== void 0)
    $$bindings.labelForText(labelForText);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0)
    $$bindings.imageUrl(imageUrl);
  if ($$props.buttonUrl === void 0 && $$bindings.buttonUrl && buttonUrl !== void 0)
    $$bindings.buttonUrl(buttonUrl);
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0)
    $$bindings.buttonText(buttonText);
  $$result.css.add(css);
  return `<div class="card flex items-center py-16 svelte-fextpo"><div class="w-6/12 left-side svelte-fextpo"><span class="inline-block mb-7">${escape(label)}</span>
        <h3 class="mb-5">${escape(title)}</h3>
        <div class="text mb-5"><p>${escape(description)}</p></div>
        <label class="">${escape(labelForText)}
            <div class="text mt-2.5 mb-5"><p>${escape(text)}</p></div></label>

        ${validate_component(Button, "Button").$$render($$result, { href: buttonUrl }, {}, {
    default: () => {
      return `${escape(buttonText)}`;
    }
  })}</div>
    <div class="w-6/12"><img class="rounded-md"${add_attribute("src", imageUrl, 0)} alt=""></div>

</div>`;
});
export {
  Card as C
};
