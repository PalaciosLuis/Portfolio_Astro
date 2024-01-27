/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot, s as spreadAttributes } from '../astro_19PJ_ULA.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';

const $$Astro$m = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    {
      title: "Experiencia",
      url: "/#experiencia"
    },
    {
      title: "Proyectos",
      url: "/#proyectos"
    },
    {
      title: "Sobre m\xED",
      url: "/#sobre-mi"
    },
    {
      title: "Contacto",
      url: "/#contacto"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`
    flex justify-center items-center
    mx-auto
    py-2
    sticky top-0
    w-full xl:w-[1120px]
    z-10
`, "class")}> <nav${addAttribute(`
    border border-black rounded-full
    px-3 py-1
    flex flex-row items-center
    bg-neutral-200 dark:bg-black/50
    backdrop-blur-2xl
    `, "class")}> ${navItems.map((link) => renderTemplate`<a class="hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base"${addAttribute(link.url, "href")}> ${link.title} </a>`)} </nav> </header> `;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/Header.astro", void 0);

const $$Astro$l = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="rounded-lg shadow m-4 bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10"> <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> <span class="text-sm sm:text-center text-yellow-200/90">© 2024 <a target="_blank" href="https://www.linkedin.com/in/luis-palacios-sernaque/" class="hover:underline">Luis Palacios</a>. Casi todos los derechos reservados.
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90  sm:mt-0"> <li> <a href="#" class="hover:underline me-4 md:me-6">Sobre mi</a> </li> <li> <a href="#" class="hover:underline me-4 md:me-6">Contacto</a> </li> </ul> </div> </footer>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/Footer.astro", void 0);

const $$Astro$k = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="relative text-black dark:text-white"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/layouts/Layout.astro", void 0);

const $$Astro$j = createAstro();
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${maybeRenderHead()}<div> <span class="relative flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span> <div class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/Badge.astro", void 0);

const $$Astro$i = createAstro();
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path></svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$h = createAstro();
const $$SocialIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$SocialIcon;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`rounded-full border
    border-white/10
    flex justify-center
    items-center
    gap-x-2 py-1 px-2
    text-xs lg:text-base
    md:py-2 md:px4
    bg-white/5
    hover:scale-110  
    hover:bg-white/10
    transition`, "class")}${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/SocialIcon.astro", void 0);

const $$Astro$g = createAstro();
const $$Github = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path></svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/Github.astro", void 0);

const $$Astro$f = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/Mail.astro", void 0);

const $$Astro$e = createAstro();
const $$ExperienceItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="absolute w-3 h-3 bg-gray-200
    rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-200/80 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-sky-400 dark:text-gray-500">${date}</time> <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mt-2"> ${title} </h3> <p class="mb-4 text-base font-normal dark:text-gray-120 text-pretty"> ${description} </p> ${link && renderTemplate`<a${addAttribute(link, "href")} class="bg-white/5 
    border dark:border-white/10 border-gray-300
    rounded-full
    inline-flex justify-center items-center gap-x-2
    py-1 px-2 md:py-2 md:px-4
    text-xs md:text-base
    transition
    hover:scale-110 hover:bg-white/10">
Saber más...${" "} <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a>`}`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/ExperienceItem.astro", void 0);

const $$Astro$d = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCIE = [
    {
      date: "2023-2024",
      title: "Desarrolador Web Junior",
      description: "Encargado de desarrollar y mantener el sitio web de la empresa, as\xED como tambi\xE9n de la creaci\xF3n de contenido para las redes sociales."
    },
    {
      date: "2023-2023",
      title: "Practicante Analista de Sistemas",
      description: "Encargado de liderar al equipo en el modelado del negocio, analisis de procesos y analisis de requerimientos de un sistema de gesti\xF3n de inventario para un colegio,aplicando metodolog\xEDas \xE1giles (AUP)."
    },
    {
      date: "2022-2023",
      title: "Atencion al cliente",
      description: "Encargado de atender a los clientes, brindarles informaci\xF3n sobre los productos y servicios de la empresa, as\xED como tambi\xE9n de la venta de los mismos."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200 ml-3"> ${EXPERIENCIE.map((experiencie) => renderTemplate`<li class="mb-10 ms-4"> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experiencie })} </li>`)} </ol>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/Experience.astro", void 0);

const $$Astro$c = createAstro();
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} w-full mx-auto lg:w-[740px] pb-24`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/SectionContainer.astro", void 0);

const $$Astro$b = createAstro();
const $$ExperiencieJob = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ExperiencieJob;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path><path d="M4 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path></svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/ExperiencieJob.astro", void 0);

const $$Astro$a = createAstro();
const $$JavaScript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$JavaScript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M7.5 8h3v8l-2 -1"></path><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path></svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/JavaScript.astro", void 0);

const $$Astro$9 = createAstro();
const $$Html = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/Html.astro", void 0);

const $$Astro$8 = createAstro();
const $$Bootstrap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Bootstrap;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 204" xmlns="http://www.w3.org/2000/svg" width="256" height="204" preserveAspectRatio="xMidYMid"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"></path></svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/Bootstrap.astro", void 0);

const $$Astro$7 = createAstro();
const $$Css = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Css;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/Css.astro", void 0);

const $$Astro$6 = createAstro();
const $$Java = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Java;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 346"> <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"></path> <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"></path> <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"></path> <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"></path> <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"></path> </svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/Java.astro", void 0);

const $$Astro$5 = createAstro();
const $$MySQL = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MySQL;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252"> <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B"></path> <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B"></path> </svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/MySQL.astro", void 0);

const $$Astro$4 = createAstro();
const $$AstroIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AstroIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="currentColor" viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" width="256" height="366" preserveAspectRatio="xMidYMid"><path fill="#fff" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"></path><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"></path></svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/AstroIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$Tailwind = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 154" width="256" height="154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="a"><stop stop-color="#2298BD" offset="0%"></stop><stop stop-color="#0ED7B5" offset="100%"></stop></linearGradient></defs><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#a)"></path></svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/Tailwind.astro", void 0);

const $$Astro$2 = createAstro();
const $$TypeScript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TypeScript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"></path><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"></path></svg>`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/icons/TypeScript.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  const TAGS = {
    ASTRO: {
      name: "Astro",
      class: "bg-black text-yellow-500",
      icon: $$AstroIcon
    },
    JAVASCRIPT: {
      name: "JavaScript",
      class: "bg-black text-yellow-500",
      icon: $$JavaScript
    },
    HTML: {
      name: "Html",
      class: "bg-black text-orange-500",
      icon: $$Html
    },
    BOOTSTRAP: {
      name: "Bootstrap",
      class: "bg-black text-purple-500",
      icon: $$Bootstrap
    },
    CSS: {
      name: "Css",
      class: "bg-black text-blue-500",
      icon: $$Css
    },
    JAVA: {
      name: "Java",
      class: "bg-black text-red-500",
      icon: $$Java
    },
    MYSQL: {
      name: "MySql",
      class: "bg-black text-blue-500",
      icon: $$MySQL
    },
    TAILWIND: {
      name: "Tailwind",
      class: "bg-black text-blue-500",
      icon: $$Tailwind
    },
    TYPESCRIPT: {
      name: "TypeScript",
      class: "bg-black text-blue-500",
      icon: $$TypeScript
    }
  };
  const PROJECTS = [
    {
      title: "Clon web de Los Premios Esland",
      description: "Proyecto realizado con la comunidad de Minidudev",
      image: "/projects/proj004.webp",
      link: "https://www.google.com",
      tags: [TAGS.ASTRO, TAGS.TYPESCRIPT, TAGS.JAVASCRIPT, TAGS.TAILWIND]
    },
    {
      title: "Landig Page viva-rentable.com",
      description: "Proyecto realizado para una empresa de que muestra oportunidades de inveriones en Per\xFA",
      image: "/projects/proj001.webp",
      link: "https://www.google.com",
      tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.BOOTSTRAP]
    },
    {
      title: "Landing page Playas de Per\xFA",
      description: "Proyecto realizado para mejorar mis habilidades en CSS y HTML",
      image: "/projects/proj002.webp",
      link: "https://www.google.com",
      tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT]
    },
    {
      title: "ArepaJuegos - CRUD de videojuegos",
      description: "Proyecto del instituto para la materia de programaci\xF3n orientada a objetos",
      image: "/projects/proj003.webp",
      link: "https://www.google.com",
      tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVA, TAGS.MYSQL, TAGS.BOOTSTRAP]
    }
  ];
  return renderTemplate`${PROJECTS.map(({ image, title, description, tags }) => renderTemplate`${maybeRenderHead()}<article class="pb-[80px]"><h3 class="text-2xl font-semibold text-yellow-200 mb-2">${title}</h3><p class="text-lg mb-4 text-pretty">${description}</p><ul class="flex gap-x-2 flex-row">${tags.map((tag) => renderTemplate`<li><span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`, "class")}>${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })}${tag.name}</span></li>`)}</ul><img class="rounded shadow-2xl shadow-white/10"${addAttribute(image, "src")}${addAttribute(`captura de pantalla del proyecto ${image}`, "alt")}></article>`)}`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/components/Projects.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolios de Luis Palacios - Desarrollador web y Analista de sistemas con 1 a\xF1o de experiencia .", "description": "Portfolios de Luis Palacios - Desarrollador web y Analista de sistemas con 1 a\xF1o de experiencia ." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32" }, { "default": ($$result3) => renderTemplate` <img class="rounded-full size-12 mb-4" src="data:image/jpeg;base64,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" alt="lgoo for portfolio"> <h1 class="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
Hola, soy Luis Palacios <a href="https://linkedin.com/in/midudev" target="_blank" rel="noopener" class="flex justify-center items-center hover:scale-105 transition"> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponible para trabajar` })} </a> </h1> <h2 class="text-xl lg:text-2xl text-wrap max-w-[700px]"> <span>+1 Año de experiencia.</span> <span class="text-yellow-200/90">
Desarrolador Web y Analista de Sistemas</span> <span class="text-red-200/90"> de Lima, Perú 🇵🇪.</span><span class="opacity-75">
Especializado en crear aplicaciones únicas.
</span> </h2> <nav class="flex gap-4 mt-8 flex-wrap"> ${renderComponent($$result3, "SocialIcon", $$SocialIcon, { "href": "https://www.linkedin.com/in/luis-palacios-sernaque/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedIn", $$LinkedIn, { "class": "size-4 md:size-6" })}
LinkedIn
` })} ${renderComponent($$result3, "SocialIcon", $$SocialIcon, { "href": "https://github.com/PalaciosLuis" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GithubIcon", $$Github, { "class": "size-4 md:size-6" })}
Github
` })} ${renderComponent($$result3, "SocialIcon", $$SocialIcon, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$Mail, { "class": "size-4 md:size-6" })}
palaciossernaqueluisjavier@gmail.com
` })} </nav> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80"> ${renderComponent($$result3, "ExperiencieJob", $$ExperiencieJob, { "class": "size-10" })}
Experiencia laboral
</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80"> ${renderComponent($$result3, "JavaScript", $$JavaScript, { "class": "size-10" })}
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} </main> ` })}`;
}, "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/pages/index.astro", void 0);

const $$file = "C:/Users/Luis Palacios/Desktop/Porfolio_LPS/pale-photon/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
