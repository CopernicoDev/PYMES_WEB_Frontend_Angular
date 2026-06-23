import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

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
    // Si quisieras añadir animaciones de transición entre páginas, podrías hacer:
    // provideRouter(routes, withViewTransitions())
    provideRouter(routes),
    
    // Activa "Client Hydration" (Hidratación del Cliente).
    // Como tu app usa SSR (Server-Side Rendering), el servidor envía un HTML inicial 
    // rápido de cargar. La "hidratación" es el proceso donde Angular toma ese HTML 
    // estático en el navegador y lo "despierta" (le añade interactividad, eventos, etc).
    // withEventReplay() asegura que si el usuario hace clic en algo ANTES de que Angular 
    // termine de cargar, ese clic no se pierda, sino que se reproduzca al terminar.
    provideClientHydration(withEventReplay())
  ]
};
