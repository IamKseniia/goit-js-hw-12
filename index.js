import{a as b,S as v,i as m}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function f(s,t,i){const a={key:"47705803-9103fa890a87563702eb048db",q:s.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:i};return(await b.get("https://pixabay.com/api/",{params:a})).data}function g(s){return s.map(({webformatURL:t,largeImageURL:i,tags:a,likes:e,views:o,comments:l,downloads:L})=>`<li class="list-item">
        <a href="${i}" alt="${a}" title="">
          <img src="${t}" alt="${a}" class="img-item">
          <div class="list-container">
            <p class="item"><span class="item-text">Likes</span> <span>${e}</span></p>
            <p class="item"><span class="item-text">Wiews</span> <span>${o}</span></p>
            <p class="item"><span class="item-text">Comments</span> <span>${l}</span></p>
            <p class="item"><span class="item-text">Downlods</span> <span>${L}</span></p>
          </div>
        </a>
      </li>`).join("")}const y=new v(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"}),w=document.querySelector(".form"),u=document.querySelector(".gallery"),r=document.querySelector(".loader"),n=document.querySelector(".load-btn");let d=1,p=1;const h=15;let c;w.addEventListener("submit",$);n.addEventListener("click",M);function $(s){s.preventDefault(),d=1,c=s.target.elements.search.value.trim(),console.log(c),u.innerHTML="",r.innerHTML="",n.classList.add("hidden"),c&&(r.classList.remove("hidden"),f(c,d,h).then(t=>{console.log(t);const{hits:i,totalHits:a}=t;p=Math.ceil(a/h),i.length?(console.log(i),u.innerHTML=g(i),y.refresh(),p===1?n.classList.add("hidden"):n.classList.remove("hidden")):(m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"red"}),r.innerHTML="<h1>Error..</h1>",n.classList.add("hidden"))}).catch(t=>{console.log(t.message),m.show({message:`${t.message}`,position:"center",color:"red"})}).finally(()=>{s.target.elements.search.value="",r.classList.add("hidden")}))}async function M(){d+=1,n.classList.add("hidden"),r.classList.remove("hidden");try{const{hits:s,totalHits:t}=await f(c,d,h);u.insertAdjacentHTML("beforeend",g(s)),p=Math.ceil(t/h),d>p?(n.classList.add("hidden"),m.show({message:"We're sorry, but you've reached the end of search results.",position:"center",color:"red"})):n.classList.remove("hidden"),setTimeout(()=>{const a=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})},0),y.refresh()}catch(s){console.log(s.message),m.show({message:`${s.message}`,position:"center",color:"red"})}finally{n.disabled=!1,r.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
