import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, k as renderHead, l as renderSlot, n as renderComponent, h as createAstro, o as renderScript } from '../chunks/astro/server_D0TiO_d6.mjs';
import 'piccolore';
/* empty css                                 */
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef } from 'react';
export { renderers } from '../renderers.mjs';

const WHATSAPP_NUMBER = "56982610309";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const CONTACT_EMAIL = "club.deportivo.samurai@gmail.com";
const INSTAGRAM_HANDLE = "@karate.samurai.jka";
const INSTAGRAM_URL = "https://www.instagram.com/karate.samurai.jka/";
const HONBU_ADDRESS = "Los Baños #55, sector Recreo, Viña del Mar";
const HONBU_MAPS_URL = "https://maps.app.goo.gl/TuLinkAqui";

const $$WhatsAppButton = createComponent(($$result, $$props, $$slots) => {
  const href = `${WHATSAPP_BASE}?text=Hola%2C+quiero+informaci%C3%B3n+sobre+las+clases`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp" class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 jka-transition"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-7 h-7" aria-hidden="true"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path> <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.849L0 24l6.335-1.496A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 0 1-5.001-1.366l-.358-.214-3.762.888.948-3.667-.234-.376A9.817 9.817 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"></path> </svg> </a>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/layout/WhatsAppButton.astro", void 0);

const $$Astro$4 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Dojo Samurai JKA Chile | Karate Shotokan Tradicional desde 1976",
    description = "Academia de karate Shotokan JKA en Vi\xF1a del Mar. 50 a\xF1os de historia, instructores certificados JKA, formaci\xF3n para ni\xF1os, j\xF3venes y adultos. Primera clase gratis."
  } = Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">${renderHead()}</head> <body class="bg-white font-body text-ink antialiased"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, {})} </body></html>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/layouts/BaseLayout.astro", void 0);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Programas", href: "#programas" },
    { label: "Horarios", href: "#horarios" },
    { label: "Sedes", href: "#sedes" },
    { label: "Contacto", href: "#contacto" }
  ];
  const ctaHref = `${WHATSAPP_BASE}?text=Hola%2C+quiero+agendar+mi+clase+gratis`;
  return renderTemplate`${maybeRenderHead()}<header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-100 transition-all duration-300"> <nav class="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto"> <a href="#inicio" class="font-h-display text-xl font-black tracking-tighter text-jka-red">
SAMURAI JKA CHILE
</a> <div class="hidden md:flex items-center gap-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-neutral-600 font-bold hover:text-jka-red jka-transition text-xs uppercase tracking-wider border-b-2 border-transparent hover:border-jka-red py-1"> ${link.label} </a>`)} </div> <div class="flex items-center gap-4"> <a${addAttribute(ctaHref, "href")} target="_blank" rel="noreferrer" class="bg-jka-red text-white px-6 py-3 rounded shadow-lg font-bold text-xs uppercase tracking-wider hover:bg-jka-red-dark jka-transition">
Clase Gratis
</a> <button id="nav-toggle" class="md:hidden flex flex-col gap-1.5 p-2" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu"> <span class="w-6 h-0.5 bg-ink block jka-transition" id="bar-1"></span> <span class="w-6 h-0.5 bg-ink block jka-transition" id="bar-2"></span> <span class="w-6 h-0.5 bg-ink block jka-transition" id="bar-3"></span> </button> </div> </nav> <div id="mobile-menu" class="hidden md:hidden px-6 pb-6 border-t border-neutral-100" aria-hidden="true"> <div class="flex flex-col gap-4 pt-4"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-neutral-600 font-bold hover:text-jka-red jka-transition text-sm uppercase tracking-wider"> ${link.label} </a>`)} </div> </div> </header> ${renderScript($$result, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/layout/NavBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/layout/NavBar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-surface border-t border-border" id="contacto"> <div class="max-w-7xl mx-auto px-6 py-16"> <div class="grid grid-cols-1 md:grid-cols-4 gap-12"> <div class="col-span-1 md:col-span-2"> <p class="font-h-display text-2xl text-ink mb-4 tracking-tighter">SAMURAI JKA CHILE</p> <p class="text-muted text-sm max-w-xs leading-relaxed mb-6">
Promoviendo el Karate-Do tradicional de la Japan Karate Association en Viña del Mar.
          Formación integral desde 1976.
</p> <div class="flex gap-3"> <a${addAttribute(INSTAGRAM_URL, "href")} target="_blank" rel="noreferrer" class="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-muted hover:text-jka-red hover:border-jka-red jka-transition" aria-label="Instagram"> <span class="material-symbols-outlined text-lg">photo_camera</span> </a> </div> </div> <div> <p class="font-bold text-xs uppercase tracking-widest text-ink mb-4">Contacto</p> <ul class="space-y-3 text-sm"> <li> <a${addAttribute(`${WHATSAPP_BASE}?text=Hola%2C+tengo+una+consulta`, "href")} target="_blank" rel="noreferrer" class="text-muted hover:text-jka-red jka-transition flex items-center gap-2"> <span class="material-symbols-outlined text-base">chat</span>
WhatsApp
</a> </li> <li> <a${addAttribute(`mailto:${CONTACT_EMAIL}`, "href")} class="text-muted hover:text-jka-red jka-transition flex items-center gap-2"> <span class="material-symbols-outlined text-base">mail</span> ${CONTACT_EMAIL} </a> </li> <li class="text-muted flex items-start gap-2"> <span class="material-symbols-outlined text-base mt-0.5">location_on</span> <span>${HONBU_ADDRESS}</span> </li> </ul> </div> <div> <p class="font-bold text-xs uppercase tracking-widest text-ink mb-4">Institución</p> <ul class="space-y-3 text-sm"> <li> <a href="https://www.jkachile.com/" target="_blank" rel="noreferrer" class="text-muted hover:text-jka-red jka-transition">
JKA Chile
</a> </li> <li> <a href="https://www.jka.or.jp/en/" target="_blank" rel="noreferrer" class="text-muted hover:text-jka-red jka-transition">
Japan Karate Association
</a> </li> <li> <a${addAttribute(INSTAGRAM_URL, "href")} target="_blank" rel="noreferrer" class="text-muted hover:text-jka-red jka-transition"> ${INSTAGRAM_HANDLE} </a> </li> </ul> </div> </div> <div class="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"> <p class="text-xs text-muted">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Samurai JKA Chile. Todos los derechos reservados.
</p> <p class="text-xs text-muted">
Karate Shotokan JKA · Viña del Mar · Chile
</p> </div> </div> </footer>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/layout/Footer.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const primaryCta = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hola, quiero agendar mi clase gratis")}`;
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-[650px] md:min-h-[800px] flex items-center bg-black overflow-hidden" id="inicio"> <!-- Imagen de fondo --> <div class="absolute inset-0 z-0"> <img src="/images/hero.jpg" alt="Clase grupal de karate en Samurai JKA Chile" class="w-full h-full object-cover opacity-30" loading="eager"> <div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div> </div> <div class="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> <!-- Contenido izquierdo --> <div> <div class="flex flex-wrap items-center gap-3 mb-6"> <span class="bg-jka-red text-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm">
Tradición JKA Chile
</span> <span class="flex items-center gap-2 text-white text-[11px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20"> <span class="w-2 h-2 bg-jka-red rounded-full animate-pulse"></span>
Últimos cupos del mes
</span> </div> <h1 class="font-h-display text-6xl md:text-8xl text-white mb-6 leading-[0.9] tracking-tight">
Karate Tradicional en Viña del Mar desde 1976
</h1> <p class="text-xl text-neutral-200 mb-10 max-w-lg leading-relaxed font-medium">
Formamos carácter, disciplina y salud bajo la guía del
<strong>Sensei Raúl Puchi Zarecht</strong>, 6to Dan y Vice Chairman de JKA Chile.
</p> <div class="flex flex-col sm:flex-row items-start gap-5"> <div class="w-full sm:w-auto"> <a${addAttribute(primaryCta, "href")} target="_blank" rel="noreferrer" class="block bg-jka-red text-white px-10 py-5 rounded-md font-bold text-center jka-transition hover:bg-jka-red-dark shadow-2xl text-xl hover:scale-[1.02] active:scale-95">
Agenda tu clase gratis
</a> <div class="flex items-center justify-center sm:justify-start gap-2 mt-3 px-2"> <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span> <span class="text-[10px] text-white/70 uppercase font-bold tracking-widest">
Respuesta en menos de 5 minutos
</span> </div> </div> <a href="#horarios" class="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-md font-bold text-center jka-transition hover:bg-white/20 text-lg w-full sm:w-auto">
Ver horarios
</a> </div> <!-- Stats --> <div class="mt-12 flex flex-wrap items-center gap-10 border-t border-white/10 pt-8"> <div class="flex items-center gap-3"> <span class="material-symbols-outlined text-jka-red text-4xl">verified</span> <div> <span class="text-white font-bold block text-2xl font-h-display tracking-wide">+100</span> <span class="text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold">Alumnos activos</span> </div> </div> <div> <span class="text-white font-bold block text-2xl font-h-display tracking-wide">1ª Clase</span> <span class="text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold">Sin costo</span> </div> <div class="hidden sm:block"> <span class="text-white font-bold block text-2xl font-h-display tracking-wide">+50 Años</span> <span class="text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold">De trayectoria</span> </div> <div class="hidden sm:block"> <span class="text-white font-bold block text-2xl font-h-display tracking-wide">13 Dojos</span> <span class="text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold">En Chile</span> </div> </div> </div> <!-- Imagen derecha (Sensei) --> <div class="hidden lg:block relative group"> <div class="relative p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg shadow-2xl overflow-hidden"> <img src="/images/sensei-puchi.jpg" alt="Shihan Raúl Puchi Zarecht, 6to Dan JKA" class="aspect-[4/5] object-cover w-full rounded group-hover:scale-105 transition-transform duration-700" loading="eager"> <div class="absolute -bottom-2 -left-2 bg-jka-red text-white p-6 rounded shadow-2xl"> <p class="font-h-display text-3xl leading-tight">
HONBU DOJO<br>VIÑA DEL MAR
</p> <p class="text-white/70 text-xs mt-1 uppercase tracking-widest">Desde 1976</p> </div> </div> </div> </div> </section>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/sections/HeroSection.astro", void 0);

const $$Astro$3 = createAstro();
const $$BenefitCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BenefitCard;
  const { icon, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-8 bg-surface rounded-2xl hover:shadow-xl jka-transition group border border-transparent hover:border-jka-red/10"> <div class="w-20 h-20 bg-jka-red text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 jka-transition"> <span class="material-symbols-outlined text-5xl">${icon}</span> </div> <h3 class="font-bold text-ink mb-4 text-xl">${title}</h3> <p class="text-sm text-muted leading-relaxed">${description}</p> </div>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/ui/BenefitCard.astro", void 0);

const $$BenefitsSection = createComponent(($$result, $$props, $$slots) => {
  const benefits = [
    {
      id: "1",
      icon: "verified_user",
      title: "Metodolog\xEDa Comprobada",
      description: "T\xE9cnica JKA reconocida mundialmente. Mejora tu enfoque y autocontrol con un m\xE9todo probado por d\xE9cadas."
    },
    {
      id: "2",
      icon: "groups",
      title: "Atenci\xF3n Personalizada",
      description: "Grupos segmentados por edad y nivel para un progreso seguro, t\xE9cnico y adaptado a cada etapa."
    },
    {
      id: "3",
      icon: "workspace_premium",
      title: "Certificaci\xF3n JKA",
      description: "Grados oficiales con validez internacional en cualquier dojo JKA del mundo. Respaldo de Jap\xF3n."
    },
    {
      id: "4",
      icon: "shield_with_heart",
      title: "Formaci\xF3n Integral",
      description: "M\xE1s que defensa personal: disciplina, respeto y desarrollo humano sostenido a lo largo del tiempo."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-white"> <div class="max-w-7xl mx-auto px-6 text-center mb-16"> <span class="text-jka-red font-bold text-xs uppercase tracking-widest mb-4 block">
¿Por qué elegir Samurai JKA?
</span> <h2 class="font-h-display text-5xl text-ink uppercase mb-4 tracking-tight">
Formación de Excelencia
</h2> <p class="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
No es solo deporte. Es un camino de vida basado en el respeto y la disciplina técnica.
</p> </div> <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> </section>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/sections/BenefitsSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProgramCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProgramCard;
  const { program } = Astro2.props;
  const { ageRange, label, name, features, imageUrl, whatsappMessage, featured } = program;
  const href = `${WHATSAPP_BASE}?text=${encodeURIComponent(whatsappMessage)}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "bg-white rounded-3xl overflow-hidden jka-transition border group flex flex-col",
    featured ? "border-2 border-jka-red shadow-2xl scale-105 z-10 relative" : "border-border shadow-sm hover:shadow-2xl"
  ], "class:list")}> ${featured && renderTemplate`<div class="absolute top-4 right-4 z-20"> <span class="bg-jka-red text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
Más Popular
</span> </div>`} <div class="h-64 overflow-hidden"> <img${addAttribute(imageUrl, "src")}${addAttribute(`Programa de karate ${name}`, "alt")} class="w-full h-full object-cover group-hover:scale-110 jka-transition" loading="lazy"> </div> <div${addAttribute(["p-10 flex-grow flex flex-col", featured && "bg-white"], "class:list")}> <div class="mb-6"> <div class="flex justify-between items-start mb-4"> <span${addAttribute([
    "px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full text-jka-red",
    featured ? "bg-jka-red/10" : "bg-surface"
  ], "class:list")}> ${ageRange} </span> <span class="text-jka-red font-bold text-[10px] uppercase tracking-wider">${label}</span> </div> <h3 class="font-h-display text-4xl text-ink">${name}</h3> </div> <ul class="text-muted text-sm space-y-3 mb-10 flex-grow"> ${features.map((feature) => renderTemplate`<li${addAttribute([
    "flex items-center gap-2",
    featured && "font-bold text-ink"
  ], "class:list")}> <span${addAttribute([
    "material-symbols-outlined text-lg",
    featured ? "text-jka-red" : "text-green-500"
  ], "class:list")}>
check_circle
</span> ${feature} </li>`)} </ul> <div class="space-y-3"> <a${addAttribute(href, "href")} target="_blank" rel="noreferrer" class="block w-full bg-jka-red text-white text-center py-4 rounded-xl font-bold hover:bg-jka-red-dark jka-transition shadow-xl text-sm uppercase tracking-wider">
Ver cupos disponibles
</a> <p class="text-center text-[10px] text-muted uppercase font-bold tracking-widest">
Sin compromiso
</p> </div> </div> </div>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/ui/ProgramCard.astro", void 0);

const $$ProgramsSection = createComponent(($$result, $$props, $$slots) => {
  const programs = [
    {
      id: "infantil",
      ageRange: "Desde 5 a\xF1os",
      label: "Formaci\xF3n desde peque\xF1os",
      name: "Infantil",
      features: [
        "Mejora psicomotricidad",
        "Disciplina y enfoque",
        "Respeto y valores"
      ],
      imageUrl: "/images/programs/infantil.jpg",
      whatsappMessage: "Hola, quiero informaci\xF3n sobre el programa de Karate Infantil"
    },
    {
      id: "juvenil",
      ageRange: "13 a 17 a\xF1os",
      label: "Confianza y car\xE1cter",
      name: "Juveniles",
      features: [
        "Fortalece autoestima",
        "Condici\xF3n f\xEDsica ideal",
        "Defensa personal real"
      ],
      imageUrl: "/images/programs/juvenil.jpg",
      whatsappMessage: "Hola, quiero informaci\xF3n sobre el programa de Karate Juvenil"
    },
    {
      id: "adultos",
      ageRange: "Adultos & Senior",
      label: "Salud + disciplina",
      name: "Adultos",
      features: [
        "Salud cardiovascular",
        "Eliminaci\xF3n de estr\xE9s",
        "Entrenamiento funcional"
      ],
      imageUrl: "/images/programs/adultos.jpg",
      whatsappMessage: "Hola, quiero informaci\xF3n sobre el programa de Karate para Adultos",
      featured: true
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-surface" id="programas"> <div class="max-w-7xl mx-auto px-6"> <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"> <div class="max-w-xl"> <h2 class="font-h-display text-5xl text-ink uppercase tracking-tight">
Programas por Edades
</h2> <p class="text-muted text-lg mt-4">
Encuentra el camino diseñado para tu etapa de vida y objetivos personales.
</p> </div> <div class="bg-white px-6 py-4 rounded-xl border border-jka-red/10 shadow-sm flex items-center gap-3"> <span class="w-3 h-3 bg-jka-red rounded-full animate-ping"></span> <span class="text-xs font-bold uppercase tracking-widest text-jka-red">
Primera clase gratis en Honbu Dojo
</span> </div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-center"> ${programs.map((program) => renderTemplate`${renderComponent($$result, "ProgramCard", $$ProgramCard, { "program": program })}`)} </div> </div> </section>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/sections/ProgramsSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$ScheduleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ScheduleCard;
  const { schedule } = Astro2.props;
  const { timeOfDay, icon, featured, slots } = schedule;
  const href = `${WHATSAPP_BASE}?text=${encodeURIComponent(`Hola, consulto por el horario de ${timeOfDay}`)}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "rounded-3xl p-8 jka-transition group",
    featured ? "border-2 border-jka-red bg-jka-red/5 relative shadow-2xl scale-105" : "border-2 border-neutral-100 hover:border-jka-red/30"
  ], "class:list")}> ${featured && renderTemplate`<div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-jka-red text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-tighter whitespace-nowrap shadow-lg">
Más Solicitado
</div>`} <div class="flex items-center gap-3 mb-8"> <span class="material-symbols-outlined text-jka-red">${icon}</span> <span class="text-ink font-bold text-lg uppercase font-h-display tracking-widest">${timeOfDay}</span> </div> <div class="space-y-6 mb-10"> ${slots.map((slot) => renderTemplate`<div${addAttribute(["pb-3 border-b", featured ? "border-jka-red/10" : "border-neutral-50"], "class:list")}> <div class="flex justify-between items-center"> <span class="font-bold">${slot.group}</span> <span${addAttribute(["font-medium", featured ? "text-neutral-600" : "text-neutral-500"], "class:list")}> ${slot.time} </span> </div> ${slot.spotsLeft !== void 0 && renderTemplate`<span class="text-[10px] text-jka-red font-bold uppercase tracking-widest mt-1 block">
Quedan ${slot.spotsLeft} cupos
</span>`} </div>`)} </div> <a${addAttribute(href, "href")} target="_blank" rel="noreferrer"${addAttribute([
    "flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-xs uppercase jka-transition",
    featured ? "bg-jka-red text-white hover:bg-jka-red-dark shadow-xl" : "bg-surface text-ink group-hover:bg-jka-red group-hover:text-white group-hover:shadow-lg"
  ], "class:list")}>
Reservar cupo
</a> </div>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/ui/ScheduleCard.astro", void 0);

const $$ScheduleSection = createComponent(($$result, $$props, $$slots) => {
  const schedules = [
    {
      id: "manana",
      timeOfDay: "Ma\xF1ana",
      icon: "wb_sunny",
      slots: [
        { group: "Adultos", time: "10:00 - 11:30", spotsLeft: 5 }
      ]
    },
    {
      id: "tarde",
      timeOfDay: "Tarde",
      icon: "light_mode",
      featured: true,
      slots: [
        { group: "Infantil", time: "16:30 - 17:30", spotsLeft: 2 },
        { group: "Adultos", time: "18:30 - 20:00", spotsLeft: 3 }
      ]
    },
    {
      id: "noche",
      timeOfDay: "Noche",
      icon: "dark_mode",
      slots: [
        { group: "Adultos", time: "20:00 - 21:30", spotsLeft: 4 }
      ]
    },
    {
      id: "sabados",
      timeOfDay: "S\xE1bados",
      icon: "calendar_month",
      slots: [
        { group: "Infantil", time: "10:30 - 11:30" },
        { group: "Adultos", time: "11:30 - 13:00", spotsLeft: 2 }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-white" id="horarios"> <div class="max-w-7xl mx-auto px-6"> <div class="text-center mb-16"> <span class="text-jka-red font-bold text-xs uppercase tracking-widest mb-4 block">
Flexibilidad horaria
</span> <h2 class="font-h-display text-5xl text-ink uppercase tracking-tight">
Horarios Disponibles
</h2> <p class="text-muted max-w-lg mx-auto text-lg mt-4">
Clases de Lunes a Sábado en el Honbu Dojo. Reserva tu cupo hoy mismo.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center"> ${schedules.map((schedule) => renderTemplate`${renderComponent($$result, "ScheduleCard", $$ScheduleCard, { "schedule": schedule })}`)} </div> </div> </section>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/sections/ScheduleSection.astro", void 0);

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function NewsCarousel({ initialData }) {
  const items = initialData.data;
  const [activeIndex, setActiveIndex] = useState(0);
  const prev = () => setActiveIndex((i) => i === 0 ? items.length - 1 : i - 1);
  const next = () => setActiveIndex((i) => i === items.length - 1 ? 0 : i + 1);
  const active = items[activeIndex];
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden border border-border shadow-sm", children: [
      /* @__PURE__ */ jsx("div", { className: "h-64 md:h-auto overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: active.imageUrl,
          alt: active.title,
          className: "w-full h-full object-cover",
          loading: "lazy"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-10 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block bg-jka-red/10 text-jka-red px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full mb-4", children: active.category }),
          /* @__PURE__ */ jsx("h3", { className: "font-h-display text-3xl text-ink mb-3", children: active.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted text-sm leading-relaxed", children: active.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-muted font-bold uppercase tracking-widest", children: formatDate(active.date) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: prev,
                "aria-label": "Noticia anterior",
                className: "w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-jka-red hover:text-jka-red transition-colors",
                children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-base", children: "chevron_left" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: next,
                "aria-label": "Siguiente noticia",
                className: "w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-jka-red hover:text-jka-red transition-colors",
                children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-base", children: "chevron_right" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-6", children: items.map((_, i) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setActiveIndex(i),
        "aria-label": `Ir a noticia ${i + 1}`,
        className: `w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-jka-red w-6" : "bg-border"}`
      },
      i
    )) })
  ] });
}

const mockNewsResponse = {
  data: [
    {
      id: "1",
      title: "Examen de grado marzo 2026",
      description: "Alumnos de todos los niveles rindieron sus exámenes de Kyu en el Honbu Dojo bajo la supervisión de Sensei Puchi.",
      date: "2026-03-15",
      imageUrl: "/images/placeholder-exam.jpg",
      category: "Exámenes"
    },
    {
      id: "2",
      title: "Seminario con instructor internacional",
      description: "Recibimos la visita de un instructor de nivel internacional en nuestro Honbu Dojo. Una jornada histórica para la escuela.",
      date: "2026-02-20",
      imageUrl: "/images/placeholder-seminar.jpg",
      category: "Seminarios"
    },
    {
      id: "3",
      title: "Nuevo curso juvenil introductorio",
      description: "Abrimos inscripciones para el nuevo grupo juvenil desde cero. Jóvenes entre 13 y 17 años, Martes y Jueves 18:00 hrs.",
      date: "2026-02-01",
      imageUrl: "/images/placeholder-youth.jpg",
      category: "Cursos"
    },
    {
      id: "4",
      title: "Karate inclusivo en Colegio Renacer",
      description: "Expandimos nuestro programa de karate inclusivo al Colegio Renacer bajo la coordinación de Ivette Mancilla.",
      date: "2026-01-10",
      imageUrl: "/images/placeholder-inclusive.jpg",
      category: "Inclusión"
    }
  ],
  total: 4,
  page: 1
};
const mockSchoolsResponse = {
  data: [
    { id: "1", name: "Colegio Saint Dominic", logoUrl: "/images/schools/saint-dominic.png", city: "Viña del Mar" },
    { id: "2", name: "Scuola Italiana Valparaíso", logoUrl: "/images/schools/scuola-italiana-vpo.png", city: "Valparaíso" },
    { id: "3", name: "Scuola Italiana Viña del Mar", logoUrl: "/images/schools/scuola-italiana-vdm.png", city: "Viña del Mar" },
    { id: "4", name: "Colegio Blanca Vergara", logoUrl: "/images/schools/blanca-vergara.png", city: "Viña del Mar" },
    { id: "5", name: "Colegio San Ignacio", logoUrl: "/images/schools/san-ignacio.png", city: "Viña del Mar" },
    { id: "6", name: "Escuela Villa Independencia", logoUrl: "/images/schools/villa-independencia.png", city: "Viña del Mar" },
    { id: "7", name: "Colegio Renacer", logoUrl: "/images/schools/renacer.png", city: "Viña del Mar" }
  ],
  total: 7,
  page: 1
};

const $$NewsSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-surface"> <div class="max-w-7xl mx-auto px-6"> <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"> <div> <span class="text-jka-red font-bold text-xs uppercase tracking-widest mb-4 block">
Actualidad
</span> <h2 class="font-h-display text-5xl text-ink uppercase tracking-tight">
Lo Último del Dojo
</h2> </div> <p class="text-muted max-w-sm text-base leading-relaxed">
Exámenes, seminarios, nuevos cursos y vida de la comunidad Samurai JKA.
</p> </div> ${renderComponent($$result, "NewsCarousel", NewsCarousel, { "client:load": true, "initialData": mockNewsResponse, "client:component-hydration": "load", "client:component-path": "/Users/zabroso/proyectos/dojo-samurai-page/src/components/ui/NewsCarousel.tsx", "client:component-export": "default" })} </div> </section>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/sections/NewsSection.astro", void 0);

const $$Astro = createAstro();
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { testimonial } = Astro2.props;
  const { quote, author, role, avatarUrl } = testimonial;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white p-10 rounded-3xl shadow-sm relative group hover:shadow-xl jka-transition border border-border/50"> <div class="absolute top-8 right-8 text-jka-red/10 text-8xl font-serif select-none group-hover:text-jka-red/20 jka-transition leading-none">
"
</div> <p class="text-lg text-ink leading-relaxed italic relative z-10 mb-8">
"${quote}"
</p> <div class="flex items-center gap-4"> <img${addAttribute(avatarUrl, "src")}${addAttribute(author, "alt")} class="w-14 h-14 rounded-full object-cover bg-neutral-200" loading="lazy"> <div> <p class="text-ink font-extrabold text-sm">${author}</p> <p class="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">${role}</p> </div> </div> </div>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/ui/TestimonialCard.astro", void 0);

const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      id: "1",
      quote: "Mi hijo ha ganado una confianza incre\xEDble. Los instructores tienen una paciencia y t\xE9cnica de primer nivel.",
      author: "Carolina Mendez",
      role: "Apoderada \xB7 Programa Infantil",
      avatarUrl: "/images/testimonials/carolina.jpg"
    },
    {
      id: "2",
      quote: "Buscaba una actividad para desestresarme y encontr\xE9 un dojo con una m\xEDstica \xFAnica. El nivel t\xE9cnico es alt\xEDsimo.",
      author: "Rodrigo Palma",
      role: "Alumno Adulto \xB7 42 a\xF1os",
      avatarUrl: "/images/testimonials/rodrigo.jpg"
    },
    {
      id: "3",
      quote: "Entrenar JKA es distinto a todo. Se nota la trayectoria y el v\xEDnculo directo con la tradici\xF3n de Jap\xF3n.",
      author: "Daniela Fuentes",
      role: "Cintur\xF3n Marr\xF3n \xB7 7 a\xF1os practicando",
      avatarUrl: "/images/testimonials/daniela.jpg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-surface"> <div class="max-w-7xl mx-auto px-6"> <div class="text-center mb-16"> <span class="text-jka-red font-bold text-xs uppercase tracking-widest block mb-4">
Lo que dicen de nosotros
</span> <h2 class="font-h-display text-5xl text-ink mb-4">
Impacto en Nuestra Comunidad
</h2> <div class="flex items-center justify-center gap-2"> <div class="flex text-yellow-400"> ${Array.from({ length: 5 }).map(() => renderTemplate`<span class="material-symbols-outlined text-xl">star</span>`)} </div> <span class="font-black text-ink">4.9/5 en Google</span> </div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-10"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "TestimonialCard", $$TestimonialCard, { "testimonial": testimonial })}`)} </div> </div> </section>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/sections/TestimonialsSection.astro", void 0);

function SchoolsCarousel({ initialData }) {
  const schools = initialData.data;
  const trackRef = useRef(null);
  const scroll = (direction) => {
    if (!trackRef.current) return;
    const amount = 200;
    trackRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: trackRef,
        className: "flex items-center gap-12 overflow-x-auto scrollbar-hide py-4 px-2",
        style: { scrollbarWidth: "none" },
        children: schools.map((school) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex-shrink-0 flex flex-col items-center gap-3 group",
            title: school.name,
            children: /* @__PURE__ */ jsxs("div", { className: "h-12 w-32 flex items-center justify-center opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: school.logoUrl,
                  alt: school.name,
                  className: "max-h-full max-w-full object-contain",
                  loading: "lazy",
                  onError: (e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling;
                    if (fallback) fallback.style.display = "flex";
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "hidden w-full h-full items-center justify-center bg-surface rounded border border-border",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted font-bold text-center px-2 leading-tight", children: school.name })
                }
              )
            ] })
          },
          school.id
        ))
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => scroll("left"),
        "aria-label": "Anterior",
        className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 bg-white border border-border rounded-full flex items-center justify-center shadow-sm hover:border-jka-red hover:text-jka-red transition-colors",
        children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-base", children: "chevron_left" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => scroll("right"),
        "aria-label": "Siguiente",
        className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 bg-white border border-border rounded-full flex items-center justify-center shadow-sm hover:border-jka-red hover:text-jka-red transition-colors",
        children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-base", children: "chevron_right" })
      }
    )
  ] });
}

const $$InstitutionsSection = createComponent(($$result, $$props, $$slots) => {
  const institutionalTestimonials = [
    {
      id: "1",
      quote: "Implementar JKA en nuestro colegio no solo mejor\xF3 la disciplina en el aula, sino que fortaleci\xF3 el v\xEDnculo entre los estudiantes. Es formaci\xF3n val\xF3rica pura.",
      author: "Prof. Roberto Lagos",
      role: "Coordinador ACLE \xB7 Colegio Saint Dominic",
      icon: "school"
    },
    {
      id: "2",
      quote: "Trabajamos el karate como un eje de desarrollo social. Hemos visto una reducci\xF3n significativa en conflictos escolares en los grupos que practican.",
      author: "Clara Mart\xEDnez",
      role: "Psicopedagoga Institucional",
      icon: "psychology"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-white" id="instituciones"> <div class="max-w-7xl mx-auto px-6"> <div class="text-center mb-20"> <span class="text-jka-red font-extrabold text-xs uppercase tracking-[0.2em] mb-4 block">
Compromiso Social e Institucional
</span> <h2 class="font-h-display text-5xl md:text-6xl text-ink uppercase mb-6 tracking-tight">
Impacto en Instituciones
</h2> <p class="text-muted max-w-3xl mx-auto text-lg leading-relaxed">
Trabajamos con colegios y comunidades formando disciplina, respeto e inclusión real
        a través del Karate-Do.
</p> </div> <!-- Karate Inclusivo --> <div class="mb-24 bg-jka-red/5 border-2 border-jka-red/10 rounded-3xl p-8 md:p-16 relative overflow-hidden group"> <div class="absolute -top-10 -right-10 opacity-5 group-hover:rotate-12 transition-transform duration-700"> <span class="material-symbols-outlined text-[200px] text-jka-red">diversity_1</span> </div> <div class="relative z-10 flex flex-col lg:flex-row gap-12 items-center"> <div class="lg:w-2/3"> <div class="flex items-center gap-4 mb-6"> <div class="bg-jka-red text-white p-3 rounded-2xl shadow-lg"> <span class="material-symbols-outlined text-3xl">accessibility_new</span> </div> <h3 class="font-h-display text-4xl md:text-5xl text-ink uppercase">
Karate como herramienta de inclusión
</h3> </div> <p class="text-xl text-ink/80 leading-relaxed font-medium mb-8">
En Samurai JKA Chile creemos que el Karate-Do es para todos. Contamos con
            programas especializados que integran a niños y jóvenes con
<strong class="text-jka-red">Síndrome de Down</strong> y
<strong class="text-jka-red">otras condiciones</strong>, enfocándonos en su
            desarrollo social, emocional y personal.
</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div class="flex items-center gap-3 bg-white p-4 rounded-xl border border-jka-red/10 shadow-sm"> <span class="material-symbols-outlined text-jka-red">favorite</span> <span class="text-sm font-bold uppercase tracking-wider text-neutral-700">
Progreso Emocional
</span> </div> <div class="flex items-center gap-3 bg-white p-4 rounded-xl border border-jka-red/10 shadow-sm"> <span class="material-symbols-outlined text-jka-red">group_add</span> <span class="text-sm font-bold uppercase tracking-wider text-neutral-700">
Integración Social
</span> </div> </div> </div> <div class="lg:w-1/3 w-full"> <div class="bg-white p-8 rounded-2xl shadow-xl border border-border relative"> <div class="absolute -top-4 -right-4 bg-jka-red text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">
Testimonio
</div> <p class="text-ink italic leading-relaxed mb-6">
"El cambio en la motricidad y la seguridad de mi hijo ha sido asombroso.
              No es solo ejercicio, es sentirse parte de una familia que lo respeta y lo desafía."
</p> <div class="flex items-center gap-4"> <div class="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center border border-border"> <span class="material-symbols-outlined text-muted">person</span> </div> <div> <p class="text-sm font-black text-ink uppercase">Apoderada</p> <p class="text-[10px] text-muted font-bold uppercase tracking-widest">
Programa Karate Inclusivo
</p> </div> </div> </div> </div> </div> </div> <!-- Testimonios institucionales + logos --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20"> <div class="space-y-8"> <h4 class="font-h-display text-3xl uppercase text-ink tracking-tight border-l-4 border-jka-red pl-4">
Voces Institucionales
</h4> ${institutionalTestimonials.map((t) => renderTemplate`<div class="bg-surface p-8 rounded-2xl border border-border/50 relative"> <span class="material-symbols-outlined absolute top-6 right-6 text-jka-red/10 text-5xl"> ${t.icon} </span> <p class="text-lg text-ink/80 italic mb-6">"${t.quote}"</p> <div class="flex items-center gap-4"> <div class="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center"> <span class="material-symbols-outlined text-muted">person_4</span> </div> <div> <p class="text-sm font-black text-ink">${t.author}</p> <p class="text-[10px] text-muted font-bold uppercase tracking-widest">${t.role}</p> </div> </div> </div>`)} </div> <div class="flex flex-col justify-center"> <span class="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-10 block text-center">
Instituciones que confían en nosotros
</span> ${renderComponent($$result, "SchoolsCarousel", SchoolsCarousel, { "client:load": true, "initialData": mockSchoolsResponse, "client:component-hydration": "load", "client:component-path": "/Users/zabroso/proyectos/dojo-samurai-page/src/components/ui/SchoolsCarousel.tsx", "client:component-export": "default" })} </div> </div> </div> </section>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/sections/InstitutionsSection.astro", void 0);

const $$LocationSection = createComponent(($$result, $$props, $$slots) => {
  const waHref = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hola, quiero conocer el dojo")}`;
  const MAPS_EMBED_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.0!2d-71.583348!3d-33.023214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDAxJzIzLjYiUyA3McKwMzUnMDAuMSJX!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl";
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-ink text-white overflow-hidden relative" id="sedes"> <div class="relative z-10 max-w-7xl mx-auto px-6"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"> <div> <span class="text-jka-red font-extrabold text-xs uppercase tracking-widest mb-4 block">
Entrena en un dojo profesional en Viña del Mar
</span> <h2 class="font-h-display text-6xl uppercase mb-8">Honbu Dojo Recreo</h2> <div class="space-y-6 mb-12"> <div class="flex items-start gap-5"> <div class="bg-jka-red p-3 rounded-lg shrink-0"> <span class="material-symbols-outlined text-white">location_on</span> </div> <div> <p class="text-2xl font-bold">${HONBU_ADDRESS}</p> <p class="text-neutral-400 text-sm">A pasos de Av. España, Viña del Mar</p> </div> </div> <div class="flex items-start gap-5"> <div class="bg-white/10 p-3 rounded-lg shrink-0"> <span class="material-symbols-outlined text-white">check_circle</span> </div> <div> <p class="text-lg font-bold">Instalaciones de primer nivel</p> <p class="text-neutral-400 text-sm">
2 salas de entrenamiento, duchas con agua caliente, lockers,
                sala de apoderados con visión al dojo en tiempo real y administradora presente.
</p> </div> </div> <div class="flex items-start gap-5"> <div class="bg-white/10 p-3 rounded-lg shrink-0"> <span class="material-symbols-outlined text-white">videocam</span> </div> <div> <p class="text-lg font-bold">Sistema de vigilancia inteligente</p> <p class="text-neutral-400 text-sm">
Cámaras de seguridad en todas las áreas. Los apoderados pueden supervisar
                a sus hijos sin interrumpir el flujo de la clase.
</p> </div> </div> </div> <div class="flex flex-col sm:flex-row gap-5"> <a${addAttribute(HONBU_MAPS_URL, "href")} target="_blank" rel="noreferrer" class="bg-jka-red text-white px-10 py-5 rounded-xl font-bold text-center jka-transition hover:bg-jka-red-dark shadow-2xl text-base">
Ver en Google Maps
</a> <a${addAttribute(waHref, "href")} target="_blank" rel="noreferrer" class="border border-white/20 text-white px-10 py-5 rounded-xl font-bold text-center jka-transition hover:bg-white/10 text-base">
Consultar por WhatsApp
</a> </div> </div> <div class="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5"> <iframe${addAttribute(MAPS_EMBED_SRC, "src")} width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ubicación Samurai Honbu Dojo, Los Baños 55, Recreo, Viña del Mar"></iframe> </div> </div> </div> </section>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/sections/LocationSection.astro", void 0);

const $$CTABanner = createComponent(($$result, $$props, $$slots) => {
  const href = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hola, quiero mi clase gratis")}`;
  return renderTemplate`${maybeRenderHead()}<section class="py-28 bg-jka-red text-white text-center relative overflow-hidden"> <div class="max-w-4xl mx-auto px-6 relative z-10"> <h2 class="font-h-display text-6xl md:text-8xl mb-8 leading-[0.9] uppercase tracking-tight">
Agenda tu primera clase gratis hoy
</h2> <p class="text-2xl mb-12 opacity-90 font-bold tracking-tight">
Cupos limitados en Honbu Dojo, Viña del Mar.
</p> <div class="flex flex-col items-center gap-6"> <a${addAttribute(href, "href")} target="_blank" rel="noreferrer" class="inline-block bg-white text-jka-red px-16 py-6 rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 active:scale-95 jka-transition shadow-2xl animate-pulse-soft">
¡Quiero mi clase gratis!
</a> <div class="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-[0.2em] opacity-80"> <span class="flex items-center gap-2"> <span class="material-symbols-outlined text-sm">verified</span>
Sin compromiso
</span> <span class="flex items-center gap-2"> <span class="material-symbols-outlined text-sm">bolt</span>
Respuesta en minutos
</span> <span class="flex items-center gap-2"> <span class="material-symbols-outlined text-sm">workspace_premium</span>
Afiliados JKA
</span> </div> </div> </div> </section>`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/components/sections/CTABanner.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "BenefitsSection", $$BenefitsSection, {})} ${renderComponent($$result2, "ProgramsSection", $$ProgramsSection, {})} ${renderComponent($$result2, "ScheduleSection", $$ScheduleSection, {})} ${renderComponent($$result2, "NewsSection", $$NewsSection, {})} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, {})} ${renderComponent($$result2, "InstitutionsSection", $$InstitutionsSection, {})} ${renderComponent($$result2, "LocationSection", $$LocationSection, {})} ${renderComponent($$result2, "CTABanner", $$CTABanner, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/zabroso/proyectos/dojo-samurai-page/src/pages/index.astro", void 0);

const $$file = "/Users/zabroso/proyectos/dojo-samurai-page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
