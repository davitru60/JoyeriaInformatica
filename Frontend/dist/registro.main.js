(()=>{"use strict";const e=/^[a-zA-Z].{2,20}$/,t=/^[a-zA-Z].{2,30}$/,n=/^[\w]{2,15}[@]{1}[a-z]{4,}[.]{1}[a-z]{2,3}$/,s=/^[a-zA-Z0-9*#\$]{6,12}$/;document.addEventListener("DOMContentLoaded",(function(){const a=document.getElementById("nombre"),i=document.getElementById("ap1"),d=document.getElementById("ap2"),l=document.getElementById("email"),o=document.getElementById("contra"),r=document.getElementById("contra-confirmar"),c=(document.getElementById("foto"),document.getElementById("btn")),m=document.getElementById("btn-contra"),v=document.getElementById("btn-contra-confirmar"),u=document.getElementById("eye-icon"),y=document.getElementById("eye-icon-confirmar"),L=document.getElementById("mensajeNombre"),p=document.getElementById("mensajeAp1"),f=document.getElementById("mensajeAp2"),E=document.getElementById("mensajeEmail"),g=document.getElementById("mensajeContrasena"),b=document.getElementById("mensajeContrasenaConf");c.addEventListener("click",(async()=>{await async function(){var e={nombre:a.value,ape1:i.value,ape2:d.value,email:l.value,contrasena:r.value};try{const t=await fetch("http://127.0.0.1:8000/api/registrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(t.ok){const e=await t.json(),n=document.createElement("div");n.classList.add("alert","alert-success","mt-3"),n.textContent="Usuario creado con éxito",console.log(e);const s=document.querySelector(".row");s.insertBefore(n,s.firstChild),setTimeout((()=>{n.remove()}),2e3)}else if(422==t.status){const e=await t.json(),n=document.createElement("div");n.classList.add("alert","alert-danger","mt-3"),n.innerText=e.errors.map((e=>`- ${e}`)).join("\n");const s=document.querySelector(".row");s.insertBefore(n,s.firstChild),setTimeout((()=>{n.remove()}),2e3)}}catch(e){console.error("Error en la respuesta del servidor:",respuesta.status)}}()})),a.addEventListener("input",(function(t){t.preventDefault();var n=a.value;e.test(n)?(a.classList.remove("is-invalid"),a.classList.add("is-valid")):(a.classList.add("is-invalid"),L.textContent="El nombre es inválido. Debe contener entre 2 y 20 caracteres")})),i.addEventListener("input",(function(e){e.preventDefault();var n=i.value;t.test(n)?(i.classList.remove("is-invalid"),i.classList.add("is-valid")):(i.classList.add("is-invalid"),p.textContent="El apellido no es válido. Debe contener entre 2 y 20 caracteres")})),d.addEventListener("input",(function(e){e.preventDefault();var n=d.value;t.test(n)?(d.classList.remove("is-invalid"),d.classList.add("is-valid")):(d.classList.add("is-invalid"),f.textContent="El apellido no es válido. Debe contener entre 2 y 20 caracteres")})),l.addEventListener("input",(function(e){e.preventDefault();var t=l.value;n.test(t)?(l.classList.remove("is-invalid"),l.classList.add("is-valid")):(l.classList.add("is-invalid"),E.textContent="El correo es inválido. Antes del @ tener entre 2 y 15 caracteres teniendo minisculas, mayusculas y _")})),o.addEventListener("input",(function(e){e.preventDefault();var t=o.value;s.test(t)?(o.classList.remove("is-invalid"),o.classList.add("is-valid")):(o.classList.add("is-invalid"),g.textContent="La contraseña es inválida. Debe tener entre 6 y 12 caracteres y contener solo letras, números, *, # o $")})),r.addEventListener("input",(function(e){e.preventDefault();var t=o.value,n=r.value;t!=n?(r.classList.add("is-invalid"),b.textContent="Las contraseñas no coinciden."):""===n.trim()?r.classList.add("is-invalid"):(r.classList.remove("is-invalid"),r.classList.add("is-valid"))})),m.addEventListener("click",(function(){"password"===o.type?(o.type="text",u.classList.remove("bi-eye-slash-fill"),u.classList.add("bi-eye-fill")):(o.type="password",u.classList.remove("bi-eye-fill"),u.classList.add("bi-eye-slash-fill"))})),v.addEventListener("click",(function(){"password"===r.type?(r.type="text",y.classList.remove("bi-eye-slash-fill"),y.classList.add("bi-eye-fill")):(r.type="password",y.classList.remove("bi-eye-fill"),y.classList.add("bi-eye-slash-fill"))}))}))})();