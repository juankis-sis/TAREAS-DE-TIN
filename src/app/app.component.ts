import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
  <img [src] = "imagenURL"/>
  <br/>

  <button [class.activo] = "isActive" >Mi Boton </button>

  `,
  styles: [`
     .activo{
       background: green;
     } 
    
  
  `]
})
export class AppComponent {
 
  isActive = true;

  imagenURL = "http://lorempixel.com/400/200";
  botonStatus = false;

  nombre ='Luis';
  mensaje='curso de angular';

  getNombre(){
    return this.nombre;
  }

}
