(()=>{"use strict";const o="http://127.0.0.1:8000/api/";document.addEventListener("DOMContentLoaded",(function(){!async function(){const n=await async function(){const n=o;try{const o=sessionStorage.getItem("token"),t=await fetch(n+"componente",{headers:{Authorization:"Bearer "+o}});if(t.ok)return(await t.json()).componente;window.location.href="../html/pagina403.html"}catch(o){console.error("Error al obtener los componentes:",o)}}(),t=$("#componentes").DataTable();t.clear().draw(),n.forEach((n=>{const e=t.row.add([n.id_comp,n.nombre,n.hw,n.cantidad,`<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal${n.id_comp}"><i class="fas fa-edit"></i> Editar</button>`+(0===n.cantidad?`<button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal${n.id_comp}"><i class="fas fa-trash-alt"></i> Eliminar</button>`:"")]).draw(),a=`\n            <div class="modal" id="myModal${n.id_comp}">\n                <div class="modal-dialog modal-md">\n                    <div class="modal-content">\n                        <div class="modal-header">\n                            <h4 class="modal-title">Detalles del componente</h4>\n                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\n                        </div>\n                        <div class="modal-body">\n                            <form>\n                                <div class="mb-3">\n                                    <label for="ubicacion" class="form-label">ID Componente:</label>\n                                    <input type="text" class="form-control" id="idComponente" value="${n.id_comp}" readonly>\n                                </div>\n                                <div class="mb-3">\n                                    <label for="ubicacion" class="form-label">Nombre:</label>\n                                    <input type="text" class="form-control" id="nombre" value="${n.nombre}">\n                                </div>\n                                <div class="mb-3">\n                                    <label for="hwDropdown" class="form-label">Seleccionar si es de tipo hw</label>\n                                    <select class="form-select" id="hwDropdown" required>\n                                        <option value="1">1</option>\n                                        <option value="0">0</option>\n                                    </select>\n                      </div>\n                          \n                            </form>\n                        </div>\n                        <div class="modal-footer">\n                            <button type="button" class="btn btn-success" data-bs-dismiss="modal" id="modificarBtn${n.id_comp}">Modificar</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `,i=`\n        <div class="modal" id="deleteModal${n.id_comp}">\n        <div class="modal-dialog modal-md">\n            <div class="modal-content">\n    \n                <div class="modal-header">\n                    <h4 class="modal-title">Confirmar eliminación</h4>\n                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\n                </div>\n    \n    \n                <div class="modal-body">\n                    <p>¿Estás seguro de que deseas eliminar este componente?</p>\n                </div>\n    \n                <div class="modal-footer">\n                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="confirmarEliminacionBtn${n.id_comp}">Confirmar eliminación</button>\n                </div>\n    \n            </div>\n        </div>\n    </div>`;document.body.insertAdjacentHTML("beforeend",a),document.body.insertAdjacentHTML("beforeend",i),e.nodes().to$().data("componentes",n),async function(n){const t=document.getElementById(`confirmarEliminacionBtn${n}`);t&&t.addEventListener("click",(async()=>{try{await async function(n){const t=o;try{const o=sessionStorage.getItem("token"),e=await fetch(t+"componente/"+n,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o}});if(e.ok){const o=await e.json();console.log("Componente eliminado correctamente:",o)}else console.error("No se pudo eliminar el componente")}catch(o){console.error("Error al eliminar el componente:",o)}}(n),window.location.href="clasificador.html";const t=document.getElementById(`deleteModal${n}`);new bootstrap.Modal(t).hide()}catch(o){console.error("Error al confirmar la eliminación:",o)}}))}(n.id_comp),async function(n){const t=document.getElementById(`modificarBtn${n}`);t&&t.addEventListener("click",(async()=>{try{const t=document.getElementById(`myModal${n}`),e=t.querySelector("#nombre").value,a=t.querySelector("#hwDropdown"),i={nombre:e,hw:a.options[a.selectedIndex].value};await async function(n,t){const e=o;try{const o=sessionStorage.getItem("token"),a=await fetch(e+"componente/"+n,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON.stringify(t)});if(a.ok){const o=await a.json();console.log("Componente modificado correctamente:",o)}else console.error("No se pudo modificar el componente")}catch(o){}}(n,i),window.location.href="clasificador.html",new bootstrap.Modal(t).hide()}catch(o){console.error("Error al confirmar la modificación:",o)}}))}(n.id_comp)}))}()}))})();