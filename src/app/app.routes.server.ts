import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * 🛣️ Rutas del Servidor (Server Routes)
 * 
 * Angular 17+ permite decidir CÓMO se renderiza cada ruta en el servidor.
 */
export const serverRoutes: ServerRoute[] = [
  {
    // '**' significa "para todas las rutas de la aplicación"
    path: '**',
    
    // RenderMode.Prerender significa que Angular construirá el HTML de estas páginas
    // EN TIEMPO DE COMPILACIÓN (cuando haces 'ng build').
    // Esto es como un Generador de Sitios Estáticos (SSG), ideal para SEO porque
    // los motores de búsqueda reciben HTML listo y súper rápido.
    renderMode: RenderMode.Prerender
  }
];
