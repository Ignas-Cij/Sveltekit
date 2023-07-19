import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import "../../chunks/Button.js";
import { C as Card } from "../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="home-page">






























































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
