import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  imports: [DatePipe],
  templateUrl: './componente1.html',
  styleUrl: './componente1.css'
})


export class Componente1 {
 hoy: Date = new Date();
  diasRestantes: number;

  constructor() {
    const finAnio = new Date(this.hoy.getFullYear(), 11, 31); // diciembre = 11
    this.diasRestantes = Math.ceil((finAnio.getTime() - this.hoy.getTime()) / (1000 * 60 * 60 * 24));
}
}
