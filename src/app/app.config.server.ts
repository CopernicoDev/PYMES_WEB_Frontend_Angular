import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

/**
 * 🖥️ Configuración del Servidor de Angular (SSR - Server Side Rendering)
 * 
 * Mientras que app.config.ts define cómo funciona la app en el navegador,
 * este archivo define cómo funciona cuando se renderiza en el servidor (Node.js).
 */
const serverConfig: ApplicationConfig = {
  providers: [
    // Habilita el renderizado en el servidor y le inyecta las rutas
    // específicas que el servidor necesita conocer.
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

// Fusionamos la configuración del cliente (appConfig) con la del servidor (serverConfig)
// Así el servidor Node.js tiene acceso a TODA la configuración de la app,
// más las cosas específicas de backend.
export const config = mergeApplicationConfig(appConfig, serverConfig);
