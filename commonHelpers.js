import{S as f,i as a}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(o){return o.map(({webformatURL:s,largeImageURL:i,tags:r,likes:e,views:t,comments:n,downloads:p})=>`
    <li class="gallery-item">
      <div class="gallery">
       <a class="gallery-link" href="${i}">
       <img class="gallery-image"
         src="${s}"
         alt="${r}"
        />
       </a>
       
      <ul class="card-description">
        <li class="description">Likes <span class="accent">${e} </span></li>
        <li class="description">Views <span class="accent">${t} </span></li>
        <li class="description">Comments <span class="accent">${n} </span></li>
        <li class="description">Downloads <span class="accent">${p} </span></li>
      </ul>
      </div>
    </li>
    `).join("")}function m(o=""){const s="https://pixabay.com/api/",i="43327574-10248a7b3676c40030810dfc2",r=new URLSearchParams({key:i,q:o,image_typ:"photo",orientation:"horizontal",safesearch:!0,per_page:20});return fetch(`${s}?${r}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const c=document.querySelector(".form-inline"),l=document.querySelector(".js-list"),g=document.querySelector(".loader");c.addEventListener("submit",y);function u(){g.classList.toggle("is-visible")}const h=new f(".images a",{captionsData:"alt",captionDelay:250});function y(o){o.preventDefault(),l.innerHTML="";const{query:s}=o.currentTarget.elements;let i=s.value.trim();if(i===""){a.error({title:"Error",message:"The field cannot be empty!!!",position:"topRight"}),c.reset();return}u(),m(i).then(r=>{r.hits.length===0?a.warning({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(l.insertAdjacentHTML("beforeend",d(r.hits)),h.refresh())}).catch(r=>{a.error({title:"Error",message:"An error occurred while fetching data. Please try again later.",position:"topRight"})}).finally(()=>u()),c.reset()}
//# sourceMappingURL=commonHelpers.js.map
