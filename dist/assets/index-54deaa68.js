(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=document.getElementById("nav-toggler"),r=document.getElementById("nav"),a=document.querySelector("[data-back]");let c=r.getAttribute("data-visible");i.addEventListener("click",()=>{c==="false"&&(r.classList.replace("-translate-x-full","translate-x-0"),document.body.style.overflowY="hidden",r.setAttribute("data-visible","true"))});a.addEventListener("click",()=>{r.classList.replace("translate-x-0","-translate-x-full"),document.body.style.overflowY="auto",r.setAttribute("data-visible","false")});