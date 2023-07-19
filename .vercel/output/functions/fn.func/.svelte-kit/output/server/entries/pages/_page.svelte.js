import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { B as Button } from "../../chunks/Button.js";
import { C as Card } from "../../chunks/Card.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.top-block.svelte-1f5kpr2.svelte-1f5kpr2{background:var(--blue-color)}.top-block.svelte-1f5kpr2 .smaller.svelte-1f5kpr2{max-width:268px;left:0;bottom:0;transform:translateX(-18.3%) translateY(36.6%)}.top-block.svelte-1f5kpr2 .image-container.svelte-1f5kpr2:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:var(--darkblue-color);transform:translateX(9.21%) translateY(9.5%);border-radius:0.375rem}.since-block.svelte-1f5kpr2 .sign.svelte-1f5kpr2{max-width:48px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="home-page"><section class="top-block svelte-1f5kpr2"><div class="container mx-auto"><div class="flex items-center py-48 relative"><div class="lines absolute w-full h-full flex justify-between"><span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span></div>
        <div class="w-5/12 px-3 relative"><div class="title"><h1>test</h1></div>
          <div class="text">test
          </div></div>
        <div class="w-1/12 px-3"></div>
        <div class="w-6/12 px-3 relative"><div class="image-container svelte-1f5kpr2"><img class="rounded-md withbg relative" src="" alt=""></div>
          <img class="rounded-md absolute z-1 smaller svelte-1f5kpr2" src="" alt=""></div></div></div></section>
  <section class="since-block svelte-1f5kpr2"><div class="container mx-auto"><div class="w-12/12 py-32"><span class="inline-block"></span>
        <div class="text my-5"></div>
        ${validate_component(Button, "Button").$$render($$result, { href: "https://example.com" }, {}, {
    default: () => {
      return `About us
        `;
    }
  })}
        <div class="grid grid-cols-3 gap-20 mt-20"><div class="w-full"><img class="sign mb-5 svelte-1f5kpr2" src="/images/Frame.svg" alt="">
            <h4 class="mb-5">Industry Expertise</h4>
            <p>Deep industry expertise in metal processing and real estate, allowing identification of
              high-potential companies and maximizing their potential.</p></div>
          <div class="w-full"><img class="sign mb-5 svelte-1f5kpr2" src="/images/Frame1.svg" alt="">
            <h4 class="mb-5">Strategic Partnership</h4>
            <p>Collaborative approach to investing, working closely with portfolio company executives to
              provide strategic guidance and operational support.</p></div>
          <div class="w-full"><img class="sign mb-5 svelte-1f5kpr2" src="/images/Frame2.svg" alt="">
            <h4 class="mb-5">Exceptional Returns</h4>
            <p>Dedicated to delivering exceptional returns with integrity, transparency, and a long-term
              investment approach.</p></div></div></div></div></section>
  <section class="cards-block"><div class="container mx-auto"><div class="w-12/12 py-32"><span class="inline-block">Investment FOCUS</span>
        <div class="mb-24"><h2 class="my-5">Building the Future Through <br>Strategic Investments: Our <br>Areas of Expertise
          </h2></div>
        ${validate_component(Card, "Card").$$render(
    $$result,
    {
      label: "Metal processing",
      title: "Investing in the Future of Metal Processing",
      description: "We believe in the importance of technological innovation and sustainable practices in the metal processing industry. Our investments aim to support companies that share these values and strive to achieve excellence in their field.",
      operatingBusiness: "Custom Operating Business",
      labelForText: "Operating business:",
      text: "Umega Group, a company dedicated to technological innovation and sustainable practices in the industry.",
      imageUrl: "/images/card.jpg",
      buttonUrl: "example.com",
      buttonText: "Learn more"
    },
    {},
    {}
  )}
        ${validate_component(Card, "Card").$$render(
    $$result,
    {
      label: "Real estate manaManagement & devedevelopment",
      title: "Building a Sustainable Future for Real Estate",
      description: "Our investments in commercial real estate aim to promote sustainable and innovative approaches to construction and urban development. We are committed to creating long-term value for our investors, while contributing to the well-being of local communities.",
      operatingBusiness: "Custom Operating Business",
      labelForText: "Operating business:",
      text: "We are currently running two commercial real estate projects to expand our portfolio and maximize returns for our investors.",
      imageUrl: "/images/card2.jpg",
      buttonUrl: "example.com",
      buttonText: "Learn more"
    },
    {},
    {}
  )}</div></div></section>
  <section class="investments-block mb-40"><div class="container mx-auto"><span class="block text-center">EXITS
            </span>
      <h2 class="text-center my-5">Uncovering the Best
        <br>Investments Across Europe</h2>
      <div class="grid grid-cols-3 gap-20 mt-20"><div class="w-full"><h4 class="mb-5">Pharmacy</h4>
          <div class="mb-4"><p>Investing in life-saving drugs and therapies through innovative pharmaceutical companies.</p></div>
          <a href="" class="simple-link">Learn more</a></div>
        <div class="w-full"><h4 class="mb-5">Real estate</h4>
          <div class="mb-4"><p>Investing in sustainable and profitable commercial real estate properties for stable
              returns.</p></div>
          <a href="" class="simple-link">Learn more</a></div>
        <div class="w-full"><h4 class="mb-5">Financial services</h4>
          <div class="mb-4"><p>Investing in innovative and responsible financial services companies for evolving customer
              needs.</p></div>
          <a href="" class="simple-link">Learn more</a></div></div></div></section>
</main>`;
});
export {
  Page as default
};
