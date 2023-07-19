import { c as create_ssr_component, f as each, e as escape, v as validate_component } from "../../../chunks/index.js";
import { C as Card } from "../../../chunks/Card.js";
const Carousel_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.embla.svelte-7qko34.svelte-7qko34{overflow:unset}.embla__container.svelte-7qko34.svelte-7qko34{display:flex;-moz-column-gap:18px;column-gap:18px}.embla__slide.svelte-7qko34.svelte-7qko34{min-width:386px;padding:0 12px}.embla__slide.svelte-7qko34 .wrap.svelte-7qko34:before{content:"";position:absolute;top:50%;transform:translateY(-50%);right:0;width:74%;height:1px;background:var(--blue-color)}.embla__slide.svelte-7qko34 .wrap span.svelte-7qko34{background:var(--blue-color);border-radius:23px;padding:10px 18px;font-weight:500}',
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slides = [] } = $$props;
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0)
    $$bindings.slides(slides);
  $$result.css.add(css$1);
  return `<div class="embla svelte-7qko34"><div class="embla__container svelte-7qko34">${each(slides, (slide) => {
    return `<div class="embla__slide svelte-7qko34"><div class="wrap mb-4 relative svelte-7qko34"><span class="inline-block svelte-7qko34">${escape(slide.year)}</span></div>
                <p class="bigger mb-2">${escape(slide.title)}</p>
                <p>${escape(slide.description)}</p>
            </div>`;
  })}</div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.top-block.svelte-1osg1hq.svelte-1osg1hq{background:var(--blue-color);position:relative}.top-block.svelte-1osg1hq.svelte-1osg1hq:before{content:"";position:absolute;left:0;bottom:0;width:100%;height:240px;background:var(--white-color);z-index:1}.top-block.svelte-1osg1hq .image.svelte-1osg1hq:before{content:"";position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(-33px);width:91%;height:100%;background:var(--darkblue-color);border-radius:0.375rem;z-index:1}.top-block.svelte-1osg1hq .image img.svelte-1osg1hq{position:relative;z-index:2}.approach-section.svelte-1osg1hq .gap72.svelte-1osg1hq{-moz-column-gap:72px;column-gap:72px}.approach-section.svelte-1osg1hq .boxes .box img.svelte-1osg1hq{max-width:48px}.tabs-section.svelte-1osg1hq.svelte-1osg1hq{background:var(--blue-color)}.tabs-section.svelte-1osg1hq .tabs ul.svelte-1osg1hq{border-left:3px solid rgba(140, 152, 164, 0.1);position:relative}.tabs-section.svelte-1osg1hq .tabs ul .indicator.svelte-1osg1hq{position:absolute;top:0;left:-3px;width:3px;background:var(--darkblue-color);padding:0;transition:var(--tr-all)}.tabs-section.svelte-1osg1hq .tabs ul li.svelte-1osg1hq{padding:8px 19px;color:var(--grey-color);cursor:pointer;transition:var(--tr-all)}.tabs-section.svelte-1osg1hq .tabs ul li.svelte-1osg1hq.active{color:var(--darkblue-color)}.tabs-section.svelte-1osg1hq .tab-contents .content.svelte-1osg1hq{display:none}.tabs-section.svelte-1osg1hq .tab-contents .content.svelte-1osg1hq.active{display:block}.tabs-section.svelte-1osg1hq .tab-contents .content .single.svelte-1osg1hq:not(:last-child){margin-bottom:60px}.tabs-section.svelte-1osg1hq .tab-contents .content .single img.svelte-1osg1hq{max-width:175px}.tabs-section.svelte-1osg1hq .tab-contents .content .single .title h3.svelte-1osg1hq{margin-top:35px;margin-bottom:23px}.tabs-section.svelte-1osg1hq .tab-contents .content .single .text.svelte-1osg1hq{margin-bottom:50px}.tabs-section.svelte-1osg1hq .tab-contents .content .single .row .col h3.svelte-1osg1hq{margin-bottom:16px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let template1Slides = [
    {
      year: "2005",
      title: "Baltvesta founded",
      description: "The company was established with a vision of providing exceptional investment opportunities to clients"
    },
    {
      year: "2007",
      title: "First metal processing investment",
      description: "Baltvesta invested in a metal processing company, laying the foundation for its current investment focus"
    },
    {
      year: "2010",
      title: "Expansion into new markets",
      description: "With a growing reputation for success, Baltvesta expanded its investments beyond Lithuania and into other European countries"
    },
    {
      year: "2015",
      title: "Launch of Umega",
      description: "Baltvesta launched its own metal processing company, Umega, to further solidify its position in the industry"
    }
  ];
  $$result.css.add(css);
  return `<main class="page-about"><section class="top-block svelte-1osg1hq"><div class="container mx-auto"><div class="pt-48 relative"><div class="lines absolute w-full h-full flex justify-between"><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span></div>
                <div class="relative px-3"><h1 class="text-center relative w-full">Our Passion for Growth
                        <br>and Development</h1>
                    <p class="text-center">At Baltvesta, we are driven by a passion to achieve long-term growth and <br>development
                        through strategic investments and partnerships.</p>
                    <div class="image relative mt-28 svelte-1osg1hq"><img class="rounded-md svelte-1osg1hq" src="/images/about.jpg" alt=""></div></div></div></div></section>
    <section class="text-block pt-20 pb-14"><div class="container mx-auto"><span class="inline-block">Our story</span>
            <div class="text my-5 w-10/12 pr-16"><h3>Our story began with a passion for investing and a commitment to creating value for our clients.
                    Founded
                    in Lithuania, we have since expanded our reach to other European countries, bringing our expertise
                    and
                    experience to diverse markets. Our success is rooted in our disciplined investment approach, which
                    emphasizes long-term value creation and careful risk management.</h3></div></div></section>
    <section class="carousel-section pt-14 pb-32"><div class="container mx-auto"><h5 class="mb-16">From Our Roots to the Present:
                <br>Our Journey in Investing</h5>
            ${validate_component(Carousel, "Carousel").$$render($$result, { slides: template1Slides }, {}, {})}</div></section>
    <section class="approach-section pt-28 pb-11 svelte-1osg1hq"><div class="container mx-auto"><div class="flex gap72 svelte-1osg1hq"><div class="w-4/12 px-3"><span class="inline-block mb-6">OUR APPROACH</span>
                    <h5>Disciplined investment approach that is rooted in our core principles of integrity,
                        transparency, and long-term value creation.</h5></div>
                <div class="boxes w-8/12 grid grid-cols-2 gap-x-6 gap-y-6"><div class="box px-3"><img class="mb-3.5 svelte-1osg1hq" src="/images/kringel.svg" alt="">
                        <h6 class="mb-3.5">Disciplined Approach</h6>
                        <p>Our disciplined approach focuses on long-term value creation by investing in fundamentally
                            sound businesses and partnering with portfolio companies to drive growth and
                            profitability.</p></div>
                    <div class="box px-3"><img class="mb-3.5 svelte-1osg1hq" src="/images/kringel.svg" alt="">
                        <h6 class="mb-3.5">Disciplined Approach</h6>
                        <p>Our disciplined approach focuses on long-term value creation by investing in fundamentally
                            sound businesses and partnering with portfolio companies to drive growth and
                            profitability.</p></div>
                    <div class="box px-3"><img class="mb-3.5 svelte-1osg1hq" src="/images/kringel.svg" alt="">
                        <h6 class="mb-3.5">Disciplined Approach</h6>
                        <p>Our disciplined approach focuses on long-term value creation by investing in fundamentally
                            sound businesses and partnering with portfolio companies to drive growth and
                            profitability.</p></div>
                    <div class="box px-3"><img class="mb-3.5 svelte-1osg1hq" src="/images/kringel.svg" alt="">
                        <h6 class="mb-3.5">Disciplined Approach</h6>
                        <p>Our disciplined approach focuses on long-term value creation by investing in fundamentally
                            sound businesses and partnering with portfolio companies to drive growth and
                            profitability.</p></div></div></div></div></section>
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
    <section class="tabs-section svelte-1osg1hq"><div class="container mx-auto"><div class="pt-28 pb-20 relative px-3"><div class="lines absolute w-full h-full flex justify-between"><span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span></div>
                <div class="relative"><span class="inline-block mb-6">our operating businesses</span>
                    <h2>Forward Thinking
                        <br>Businesses</h2>
                    <div class="flex pt-28"><div class="w-3/12 tabs"><ul class="svelte-1osg1hq"><span class="indicator svelte-1osg1hq"></span>
                                <li class="svelte-1osg1hq">Metal processing</li>
                                <li class="svelte-1osg1hq">Real estate</li>
                                <li class="svelte-1osg1hq">Pharmacy</li>
                                <li class="svelte-1osg1hq">Financial services</li></ul></div>
                        <div class="w-1/12"></div>
                        <div class="w-8/12 tab-contents"><div class="content svelte-1osg1hq"><div class="single svelte-1osg1hq"><img src="/images/tabimg.svg" alt="" class="svelte-1osg1hq">
                                    <div class="title"><h3 class="svelte-1osg1hq">United by passion
                                            <br>for crafting things that last</h3></div>
                                    <div class="text svelte-1osg1hq"><p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&amp;D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists in
                                            industrial metal: we carry out R&amp;D, provide processing services and build a
                                            range of proprietary products for industrial and agricultural customers.</p>
                                        <p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&amp;D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.</p>
                                        <a href="">Discover more</a></div>
                                    <div class="row grid grid-cols-3"><div class="col"><h3 class="svelte-1osg1hq">3</h3>
                                            <p>Unique metal processing companies</p></div>
                                        <div class="col"><h3 class="svelte-1osg1hq">1,390</h3>
                                            <p>Employers</p></div>
                                        <div class="col"><h3 class="svelte-1osg1hq">12 ml. eur</h3>
                                            <p>Annual income</p></div></div></div>
                                <div class="single svelte-1osg1hq"><img src="/images/tabimg.svg" alt="" class="svelte-1osg1hq">
                                    <div class="title"><h3 class="svelte-1osg1hq">United by passion
                                            <br>for crafting things that last</h3></div>
                                    <div class="text svelte-1osg1hq"><p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&amp;D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists in
                                            industrial metal: we carry out R&amp;D, provide processing services and build a
                                            range of proprietary products for industrial and agricultural customers.</p>
                                        <p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&amp;D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.</p>
                                        <a href="">Discover more</a></div>
                                    <div class="row grid grid-cols-3"><div class="col"><h3 class="svelte-1osg1hq">3</h3>
                                            <p>Unique metal processing companies</p></div>
                                        <div class="col"><h3 class="svelte-1osg1hq">1,390</h3>
                                            <p>Employers</p></div>
                                        <div class="col"><h3 class="svelte-1osg1hq">12 ml. eur</h3>
                                            <p>Annual income</p></div></div></div>
                                <div class="single svelte-1osg1hq"><img src="/images/tabimg.svg" alt="" class="svelte-1osg1hq">
                                    <div class="title"><h3 class="svelte-1osg1hq">United by passion
                                            <br>for crafting things that last</h3></div>
                                    <div class="text svelte-1osg1hq"><p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&amp;D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists in
                                            industrial metal: we carry out R&amp;D, provide processing services and build a
                                            range of proprietary products for industrial and agricultural customers.</p>
                                        <p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&amp;D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.</p>
                                        <a href="">Discover more</a></div>
                                    <div class="row grid grid-cols-3"><div class="col"><h3 class="svelte-1osg1hq">3</h3>
                                            <p>Unique metal processing companies</p></div>
                                        <div class="col"><h3 class="svelte-1osg1hq">1,390</h3>
                                            <p>Employers</p></div>
                                        <div class="col"><h3 class="svelte-1osg1hq">12 ml. eur</h3>
                                            <p>Annual income</p></div></div></div></div>
                            <div class="content svelte-1osg1hq"><div class="single svelte-1osg1hq"><img src="/images/tabimg.svg" alt="" class="svelte-1osg1hq">
                                    <div class="title"><h3 class="svelte-1osg1hq">United by passion
                                            <br>for crafting things that last</h3></div>
                                    <div class="text svelte-1osg1hq"><p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&amp;D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists in
                                            industrial metal: we carry out R&amp;D, provide processing services and build a
                                            range of proprietary products for industrial and agricultural customers.</p>
                                        <p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&amp;D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.</p>
                                        <a href="">Discover more</a></div>
                                    <div class="row grid grid-cols-3"><div class="col"><h3 class="svelte-1osg1hq">3</h3>
                                            <p>Unique metal processing companies</p></div>
                                        <div class="col"><h3 class="svelte-1osg1hq">1,390</h3>
                                            <p>Employers</p></div>
                                        <div class="col"><h3 class="svelte-1osg1hq">12 ml. eur</h3>
                                            <p>Annual income</p></div></div></div>
                                <div class="single svelte-1osg1hq"><img src="/images/tabimg.svg" alt="" class="svelte-1osg1hq">
                                    <div class="title"><h3 class="svelte-1osg1hq">United by passion
                                            <br>for crafting things that last</h3></div>
                                    <div class="text svelte-1osg1hq"><p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&amp;D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists in
                                            industrial metal: we carry out R&amp;D, provide processing services and build a
                                            range of proprietary products for industrial and agricultural customers.</p>
                                        <p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&amp;D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.</p>
                                        <a href="">Discover more</a></div>
                                    <div class="row grid grid-cols-3"><div class="col"><h3 class="svelte-1osg1hq">3</h3>
                                            <p>Unique metal processing companies</p></div>
                                        <div class="col"><h3 class="svelte-1osg1hq">1,390</h3>
                                            <p>Employers</p></div>
                                        <div class="col"><h3 class="svelte-1osg1hq">12 ml. eur</h3>
                                            <p>Annual income</p></div></div></div>
                                <div class="single svelte-1osg1hq"><img src="/images/tabimg.svg" alt="" class="svelte-1osg1hq">
                                    <div class="title"><h3 class="svelte-1osg1hq">United by passion
                                            <br>for crafting things that last</h3></div>
                                    <div class="text svelte-1osg1hq"><p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&amp;D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists in
                                            industrial metal: we carry out R&amp;D, provide processing services and build a
                                            range of proprietary products for industrial and agricultural customers.</p>
                                        <p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&amp;D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.</p>
                                        <a href="">Discover more</a></div>
                                    <div class="row grid grid-cols-3"><div class="col"><h3 class="svelte-1osg1hq">3</h3>
                                            <p>Unique metal processing companies</p></div>
                                        <div class="col"><h3 class="svelte-1osg1hq">1,390</h3>
                                            <p>Employers</p></div>
                                        <div class="col"><h3 class="svelte-1osg1hq">12 ml. eur</h3>
                                            <p>Annual income</p></div></div></div></div></div></div></div></div></div></section>
</main>`;
});
export {
  Page as default
};
