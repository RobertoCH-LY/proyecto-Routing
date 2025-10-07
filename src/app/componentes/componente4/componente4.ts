import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  imports: [],
  templateUrl: './componente4.html',
  styleUrl: './componente4.css'
})
export class Componente4 {
  datos = {
    correo: '',
    contraseña: ''
  };
  enviado = false;

  enviar() {
    this.enviado = true;
  }
}
