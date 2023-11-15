# GamesForAll

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Refactorizar nuestro código para modularizarlo y añadir lazy loading (carga perezosa)
1. Lo primero que hay que tener en cuenta es cuáles son las funcionalidades de la aplicación. En el caso del ejemplo de "Games for all" o ludoteca, he creado intencionalmente cada función de la app en carpetas separadas: usuarios, juegos y alquileres.
2. Una vez aclarado esto, vamos a crear un módulo (con su módulo de routing) para cada funcionalidad, siendo el comando tal que así:

	ng g m vistas/usuarios/usuarios --flat --routing
Se le indica la ruta y el nombre del módulo, las banderas son --flat para que no cree los módulos en una carpeta nueva y --routing para que cree el módulo de enrutamiento asociado directamente al módulo (en este caso usuarios).
Esto crea dos archivos:

	usuarios.module.ts
	usuarios-routing.module.ts
3. Refactorizando las rutas.
* En el app-routing cortamos el bloque de rutas de usuarios y lo copiamos en usuasios-routing, dejando el primer path vacío ( "" ).
* En el app-routing añadimos en lugar del bloque que hemos quitado el siguiente:
	{path: 'usuarios', loadchildren: () => import('./vistas/usuarios/usuarios.module').then(m => m.usuarios.module)},
4. Refactorizando las declaraciones de los componentes.
Los componentes dentro de usuarios (usuarios.component, listadoUsuarios.component, DetalleUsuario.component) se eliminan del array declarations de app.module y se declaran en usuarios.module (ponerlos en el array declarations e importarlos)
Eliminamos las importaciones que no se usan en app.module.
5. Refactorizando módulos. En caso necesario, hay módulos (como FormsModule) que tendremos que importar en el nuevo módulo (array imports)