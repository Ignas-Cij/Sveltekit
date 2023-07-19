import { c as create_ssr_component, v as validate_component, a as createEventDispatcher } from "../../chunks/index2.js";
import { B as Button } from "../../chunks/Button.js";
const app = "";
const style = "";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".header.svelte-1511gsy.svelte-1511gsy{position:fixed;width:100%;top:0;z-index:9999;padding-top:25px;transition:var(--tr-all)}.header.svelte-1511gsy .logo.svelte-1511gsy{max-width:183px}.header.svelte-1511gsy ul.svelte-1511gsy{gap:34px}.header.svelte-1511gsy.svelte-1511gsy.scrolled{padding-top:13.5px;padding-bottom:13.5px;background:var(--blue-color)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header id="header" class="header svelte-1511gsy"><div class="container mx-auto"><div class="flex justify-between items-center"><a href="/"><img class="logo svelte-1511gsy" src="/images/logo.svg" alt=""></a>
            <ul class="flex svelte-1511gsy"><li><a href="/about">About us</a></li>
                <li><a href="">Investments</a></li>
                <li><a href="">Exits</a></li>
                <li><a href="">Contact us</a></li></ul></div></div>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".cta.svelte-lvjm5r.svelte-lvjm5r{background:var(--blue-color)}.footer.svelte-lvjm5r.svelte-lvjm5r{background:var(--darkblue-color);padding:55px 0 36px 0}.footer.svelte-lvjm5r .svelte-lvjm5r{color:var(--white-color)}.logo.svelte-lvjm5r.svelte-lvjm5r{max-width:183px}ul.svelte-lvjm5r.svelte-lvjm5r{gap:34px}ul.svelte-lvjm5r li a.svelte-lvjm5r{color:var(--white-color)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="cta svelte-lvjm5r"><div class="container mx-auto"><div class="top py-24"><div class="w-full flex"><div class="w-6/12"><h2 class="mb-5">Experience the Power of
                        Strategic Investing</h2>
                    <p>Contact us today to learn more about how we can help you maximize your investment potential.</p></div>
                <div class="w-2/12"></div>
                <div class="w-3/12 flex justify-center items-center">${validate_component(Button, "Button").$$render($$result, { href: "https://example.com" }, {}, {
    default: () => {
      return `Get in touch
                    `;
    }
  })}</div>
                <div class="w-1/12"></div></div></div></div></div>
<footer class="footer svelte-lvjm5r"><div class="container mx-auto svelte-lvjm5r"><div class="top mb-24 svelte-lvjm5r"><div class="flex justify-between items-center svelte-lvjm5r"><img class="logo svelte-lvjm5r" src="/images/logowhite.svg" alt="">
                <ul class="flex svelte-lvjm5r"><li class="svelte-lvjm5r"><a href="" class="svelte-lvjm5r">About us</a></li>
                    <li class="svelte-lvjm5r"><a href="" class="svelte-lvjm5r">Investments</a></li>
                    <li class="svelte-lvjm5r"><a href="" class="svelte-lvjm5r">Exits</a></li>
                    <li class="svelte-lvjm5r"><a href="" class="svelte-lvjm5r">Contact us</a></li></ul></div></div>
        <div class="bottom svelte-lvjm5r"><div class="flex justify-between items-center svelte-lvjm5r"><div class="w-6/12 svelte-lvjm5r"><p class="svelte-lvjm5r">© 2021. All rights reserved.</p></div></div></div></div>
</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
