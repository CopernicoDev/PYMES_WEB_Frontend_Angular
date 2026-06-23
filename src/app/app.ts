import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * 🏠 Componente Raíz (Root Component)
 * 
 * Este es el componente base de TODA la aplicación. 
 * Angular inyecta este componente dentro de la etiqueta <app-root> en el index.html.
 */
@Component({
  selector: 'app-root', // La etiqueta HTML personalizada para este componente
  
  // imports: Lista de dependencias. Aquí necesitamos RouterOutlet para
  // poder mostrar las rutas dinámicas (páginas hijas) dentro de este componente.
  imports: [RouterOutlet], 
  
  templateUrl: './app.html', // El archivo HTML con la estructura visual
  styleUrls: ['./app.css'],  // Los estilos exclusivos de este componente
})
export class App {
  // 🚥 Signals (Señales)
  // Angular 16+ introdujo los Signals. Son variables reactivas.
  // Cuando el valor de 'title' cambie, Angular actualizará la interfaz 
  // automáticamente de forma muy eficiente, sin tener que revisar toda la app.
  title = signal('ITSup');
}
