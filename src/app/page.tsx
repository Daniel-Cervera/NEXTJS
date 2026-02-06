import Image from "next/image";
import { redirect } from 'next/navigation';

// Es importante para que el sistema genere la ruta en el sitio web 
// Crear los directorios de la siguiente forma
// Primero el componente llamado 'dashboard' 
// Segundo el llamado 'counter'


// Con este server component hacemos que nuestros usarios
// sean redirijidos al igual como podemos ver que nos genera
// los codigos de estado HTTP 303/307 son principalmente codigos de reedireccion

// 303 : 'See Other' 'Ver Otro'
// Este estandar HTTP indica que el recurso que vemos
// se encuentra en otra parte. Esto se usa para prevenir que el contenido
// sea reenviado cuando el usario recarga la pagina.
// Caracteristica: El metodo solicitado cambia a GET (independientemente del metodo orginal)
// Ejemplo : Si un usuario envia un formulario de registro (POST) y quieres enviarlo
// a una pagina de 'Exito'(GET), usas 303. Esto asegura que si el usario refresca
// la pagina de exito, no reenvie el formulario.


// 307 : 'Temporary redirect' 'Redireccionamiento Temporal'
// Indica que el recurso solicitado se ha movido temporalmente a una URL diferente
// , pero mantiene el metodo (POST, PUT, DELETE) y el cuerpo de la peticion se 
// se conserven. Es el sustituto moderno y estricto de codigo 302.
// Caracteristica: El cliente (nevegador) no debe cambiar el metodo de la solicitud al redirigir.
// Ejemplo: Redirecciones temporales de API o paginas de error.


redirect('/dashboard/counter'); 

