(()=>{"use strict";const e=/^[a-zA-Z].{2,20}$/,t=/^[a-zA-Z].{2,30}$/,n=/^[\w]{2,15}[@]{1}[a-z]{4,}[.]{1}[a-z]{2,3}$/,s=/^[a-zA-Z0-9*#\$]{6,12}$/;document.addEventListener("DOMContentLoaded",(function(){const a=document.getElementById("nombre"),i=document.getElementById("ap1"),l=document.getElementById("ap2"),d=document.getElementById("email"),o=document.getElementById("contra"),r=document.getElementById("contra-confirmar"),c=document.getElementById("foto"),m=document.getElementById("btn"),u=document.getElementById("btn-contra"),v=document.getElementById("btn-contra-confirmar"),y=document.getElementById("eye-icon"),f=document.getElementById("eye-icon-confirmar"),L=document.getElementById("mensajeNombre"),p=document.getElementById("mensajeAp1"),E=document.getElementById("mensajeAp2"),g=document.getElementById("mensajeEmail"),b=document.getElementById("mensajeContrasena"),B=document.getElementById("mensajeContrasenaConf");function I(){if(c.files.length>0)return foto.files[0].name}m.addEventListener("click",(async()=>{await async function(){var e=function(){var e=document.querySelectorAll(".form-check-input"),t=["Colaborador"];e.forEach((function(e){e.checked&&t.push(e.value)}));var n=I();return{nombre:a.value,ape1:i.value,ape2:l.value,email:d.value,contrasena:r.value,foto:n,roles:t}}();try{const t=await fetch("http://127.0.0.1:8000/api/registrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(t.ok){const e=await t.json();console.log("Respuesta del servidor:",e)}else{const e=document.createElement("div");e.classList.add("alert","alert-danger","mt-3"),e.textContent="Falta algún dato. Verifique que esté todo";const t=document.querySelector(".row");t.insertBefore(e,t.firstChild),setTimeout((()=>{e.remove()}),2e3)}}catch(e){console.error("Error en la respuesta del servidor:",respuesta.status)}}()})),a.addEventListener("input",(function(t){t.preventDefault();var n=a.value;e.test(n)?(a.classList.remove("is-invalid"),a.classList.add("is-valid")):(a.classList.add("is-invalid"),L.textContent="El nombre es inválido. Debe contener entre 2 y 20 caracteres")})),i.addEventListener("input",(function(e){e.preventDefault();var n=i.value;t.test(n)?(i.classList.remove("is-invalid"),i.classList.add("is-valid")):(i.classList.add("is-invalid"),p.textContent="El apellido no es válido. Debe contener entre 2 y 20 caracteres")})),l.addEventListener("input",(function(e){e.preventDefault();var n=l.value;t.test(n)?(l.classList.remove("is-invalid"),l.classList.add("is-valid")):(l.classList.add("is-invalid"),E.textContent="El apellido no es válido. Debe contener entre 2 y 20 caracteres")})),d.addEventListener("input",(function(e){e.preventDefault();var t=d.value;n.test(t)?(d.classList.remove("is-invalid"),d.classList.add("is-valid")):(d.classList.add("is-invalid"),g.textContent="El correo es inválido. Antes del @ tener entre 2 y 15 caracteres teniendo minisculas, mayusculas y _")})),o.addEventListener("input",(function(e){e.preventDefault();var t=o.value;s.test(t)?(o.classList.remove("is-invalid"),o.classList.add("is-valid")):(o.classList.add("is-invalid"),b.textContent="La contraseña es inválida. Debe tener entre 6 y 12 caracteres y contener solo letras, números, *, # o $")})),r.addEventListener("input",(function(e){e.preventDefault();var t=o.value,n=r.value;t!=n?(r.classList.add("is-invalid"),B.textContent="Las contraseñas no coinciden."):""===n.trim()?r.classList.add("is-invalid"):(r.classList.remove("is-invalid"),r.classList.add("is-valid"))})),u.addEventListener("click",(function(){"password"===o.type?(o.type="text",y.classList.remove("bi-eye-slash-fill"),y.classList.add("bi-eye-fill")):(o.type="password",y.classList.remove("bi-eye-fill"),y.classList.add("bi-eye-slash-fill"))})),v.addEventListener("click",(function(){"password"===r.type?(r.type="text",f.classList.remove("bi-eye-slash-fill"),f.classList.add("bi-eye-fill")):(r.type="password",f.classList.remove("bi-eye-fill"),f.classList.add("bi-eye-slash-fill"))}))}))})();