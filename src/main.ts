import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 * 🚀 Punto de Entrada Principal (Main Entry Point)
 * 
 * Este es el primer archivo que se ejecuta en el navegador.
 * Llama a 'bootstrapApplication', que le dice a Angular: 
 * "Arranca la aplicación usando el componente <App> como raíz, 
 * y aplícale toda la configuración global que está en 'appConfig'".
 */
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
