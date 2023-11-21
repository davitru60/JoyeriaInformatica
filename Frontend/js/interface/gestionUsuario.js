import { constantes } from './../utilities/constantes.js';
document.addEventListener("DOMContentLoaded", function () {
    let rellenar = document.getElementById("rellenarTabla")
    rellenar.innerHTML = rellenarConUsuario
    
    function rellenarConUsuario() {

        let tabla = ""
        //Esto rellenará con lo que saque de la llamada asincrona
        tabla = `<tr>
        <td>Mike</td>
        <td>System Architect</td>
        <td>Edinburgh</td>
        <td>61</td>
        <td>2011-04-25</td>
        <td>
            <button class="btn btn-primary btn-sm"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
        </td>
    </tr>

    <tr>
        <td>Tiger Nixon</td>
        <td>System Architect</td>
        <td>Edinburgh</td>
        <td>61</td>
        <td>2011-04-25</td>
        <td>
            <button class="btn btn-primary btn-sm"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
        </td>
    </tr>`

    return tabla
    }
})
