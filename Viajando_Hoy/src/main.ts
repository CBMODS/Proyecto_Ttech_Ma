// Importaciones necesarias
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

// Arranca la aplicación
platformBrowserDynamic().bootstrapModule(AppComponent)
  .catch(err => console.error(err));
