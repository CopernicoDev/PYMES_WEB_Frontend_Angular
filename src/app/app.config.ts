// src/app/app.config.ts
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

/**
 * ⚙️ Archivo de Configuración Principal de la Aplicación Angular
 *
 * Aquí definimos los "proveedores" (providers) globales de la aplicación.
 * Son servicios o configuraciones que estarán disponibles en toda la app.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Captura los errores globales del navegador para que no rompan la app en silencio.
    provideBrowserGlobalErrorListeners(),

    // Configura el enrutador de Angular con las rutas que definimos en app.routes.ts
    provideRouter(routes),

    // 🆕 Registra HttpClient para poder hacer peticiones HTTP al backend.
    // withFetch() usa la API Fetch moderna del navegador en lugar de XMLHttpRequest.
    // Esto es necesario para que funcione bien con SSR (Server-Side Rendering).
    provideHttpClient(withFetch()),

    // Activa "Client Hydration" para SSR.
    provideClientHydration(withEventReplay())
  ]
};
