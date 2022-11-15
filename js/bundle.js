(()=>{const e=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;document.addEventListener("DOMContentLoaded",(function(){const s=document.querySelectorAll(".jsOpenModal"),t=document.querySelector(".jsModalClose"),a=document.querySelector(".jsModalBack"),c=document.querySelector(".jsCloseWord"),i=document.querySelector(".jsModal"),l=i?.querySelector(".jsOverlay"),n=document.querySelector(".jsModalFirstKnow"),r=document.querySelector(".jsModalSuccess");function o(e){e.preventDefault(),M?.value&&(M.value=" "+M.value,M.value=M.value.trim()),n&&r&&(n.classList.remove("unvisible"),r.classList.add("unvisible")),i?.classList.add("active"),l?.classList.add("active"),c?.classList?.add("unvisible"),a.classList.remove("unvisible")}function d(e){e.preventDefault(),i?.classList.remove("active"),l?.classList.remove("active")}s?.forEach((function(e){e?.addEventListener("click",o)})),t?.addEventListener("click",d),l?.addEventListener("click",d),a?.addEventListener("click",d),c?.addEventListener("click",d),document.body.addEventListener("keyup",(function(e){"Escape"==e.code&&(document.querySelector(".modal.active")?.classList.remove("active"),document.querySelector(".overlay.active")?.classList.remove("active"))}),!1);const u=document.querySelectorAll(".jsMenuLink"),v=document.querySelectorAll(".jsMenuContentItem"),L=document.querySelector(".jsLeftArrow"),m=document.querySelector(".jsRightArrow"),b=document.querySelector(".jsDigit");function E(e){e.preventDefault(),[...u].find((e=>e.classList.contains("active")))?.classList.remove("active");const s=this.dataset.menu;v?.forEach(((e,t)=>{e.dataset?.menu===s?(e?.classList.add("active"),b.innerHTML=t+1,t>0&&L.classList.remove("jsDisable"),0===t&&L.classList.add("jsDisable"),t<5&&m.classList.remove("jsDisable"),5===t&&m.classList.add("jsDisable")):e?.classList.contains("active")&&e.classList.remove("active"),this.classList.add("active")}))}u?.forEach((e=>{e.addEventListener("click",E)})),L?.addEventListener("click",(function(e){e.preventDefault(),e.currentTarget.classList.contains("jsDisable")||v?.forEach(((e,s)=>{e?.classList.contains("active")&&s>0&&(b.innerHTML=s,e.classList.remove("active"),v?.[s-1].classList.add("active"),u?.[s].classList.remove("active"),u?.[s-1].classList.add("active"),1===s&&L.classList.add("jsDisable"),5===s&&m.classList.remove("jsDisable"))}))})),m?.addEventListener("click",(function(e){if(e.preventDefault(),e.currentTarget.classList.contains("jsDisable"))return;let s=null;v?.forEach(((e,t)=>{e?.classList.contains("active")&&t<5&&(s=t+1,e.classList.remove("active"),u?.[t].classList.remove("active"),4===t&&m.classList.add("jsDisable"),0===t&&L.classList.remove("jsDisable"))})),s&&(v?.[s].classList.add("active"),u?.[s].classList.add("active"),b.innerHTML=s+1)}));const h=document.querySelector(".menuContent");let f=null,S=null;h?.addEventListener("touchstart",(function(e){const s=e.touches[0];f=s.clientX,S=s.clientY})),h?.addEventListener("touchend",(function(e){const s=e.changedTouches[0].clientX,t=e.changedTouches[0].clientY,a=s-f,c=t-S;Math.abs(a)>Math.abs(c)&&(f<s&&(L.classList.contains("jsDisable")||v?.forEach(((e,s)=>{e?.classList.contains("active")&&s>0&&(b.innerHTML=s,e.classList.remove("active"),v?.[s-1].classList.add("active"),u?.[s].classList.remove("active"),u?.[s-1].classList.add("active"),1===s&&L.classList.add("jsDisable"),5===s&&m.classList.remove("jsDisable"))}))),f>s&&function(){if(m.classList.contains("jsDisable"))return;let e=null;v?.forEach(((s,t)=>{s?.classList.contains("active")&&t<5&&(e=t+1,s.classList.remove("active"),u?.[t].classList.remove("active"),4===t&&m.classList.add("jsDisable"),0===t&&L.classList.remove("jsDisable"))})),e&&(v?.[e].classList.add("active"),u?.[e].classList.add("active"),b.innerHTML=e+1)}()),f=null}));const y=document.querySelector("#consent"),j=document.querySelector("#modal-consent"),q=document.querySelector(".jsForm"),D=document.querySelector(".jsModalForm"),p=document.querySelector(".jsSuccessWindow"),g=q?.querySelector(".email"),M=D?.querySelector(".email");y?.addEventListener("change",(function(s){const t=this.parentElement.parentElement.parentElement.querySelector(".btnSubmit");e.test(g?.value)?g?.classList?.remove("emailError"):g?.classList?.add("emailError"),t&&(t.disabled=!this.checked||!e.test(g?.value))})),j?.addEventListener("change",(function(s){const t=this.parentElement.parentElement.parentElement.querySelector(".btnSubmit");e.test(M?.value)?M?.classList?.remove("emailError"):M?.classList?.add("emailError"),t&&(t.disabled=!this.checked||!e.test(M?.value))}));const k=(e,s=500)=>{let t;return(...a)=>{t&&clearTimeout(t),t=setTimeout((()=>{e.apply(null,a)}),s)}};function T(){p?.classList.toggle("unvisible"),q?.classList.toggle("unvisible")}async function w(s){try{s.preventDefault();const t=this.querySelector(".email");if(t?.value.length<2||!e.test(t?.value))return void t.classList.add("emailError");const i="https://docs.google.com/forms/u/0/d/e/1FAIpQLSePNhSya-JPbAQHCN91X95hJRVfaitw8x25yjfQM5Qs_vH47w/formResponse?&submit=Submit",l=new FormData;l.append("entry.568783889",t?.value),await fetch(i,{method:"POST",body:l,mode:"no-cors"})&&(this.classList.contains("jsModalForm")&&n&&r&&(n.classList.toggle("unvisible"),r.classList.toggle("unvisible"),c?.classList?.remove("unvisible"),a.classList.add("unvisible")),this.classList.contains("jsForm")&&(T(),setTimeout(T,3e3))),this.reset()}catch(e){console.log("Виникла помилка при відправці email!"),console.log(e)}}g?.addEventListener("focusout",(()=>{e.test(g?.value)?g?.classList.add("blurSucces"):g.classList.add("emailError")})),g?.addEventListener("focus",(()=>g?.classList.remove("blurSucces"))),g?.addEventListener("input",k((()=>{const s=q.querySelector(".btnSubmit");e.test(g?.value)?g.classList.remove("emailError"):g.classList.add("emailError"),y.checked?y.classList.remove("error"):y.classList.add("error"),s&&e.test(g?.value)&&y.checked?s.disabled=!1:s.disabled=!0}))),M?.addEventListener("focusout",(()=>{e.test(M?.value)?M?.classList.add("blurSucces"):M.classList.add("emailError")})),M?.addEventListener("focus",(()=>M?.classList.remove("blurSucces"))),M?.addEventListener("input",k((()=>{const s=D.querySelector(".btnSubmit");e.test(M?.value)?M.classList.remove("emailError"):M.classList.add("emailError"),j.checked?j.classList.remove("error"):j.classList.add("error"),s&&e.test(M?.value)&&j.checked?s.disabled=!1:s.disabled=!0}))),document.querySelectorAll(".email").forEach((e=>e.addEventListener("change",(s=>{e.classList.remove("emailError")})))),q?.addEventListener("submit",w),D?.addEventListener("submit",w)}))})();
//# sourceMappingURL=bundle.js.map