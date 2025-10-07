import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // necesario para *ngIf, etc
import { FormsModule } from '@angular/forms'; // necesario para ngModel
import { FacturaService } from '../../services/factura';


@Component({
  selector: 'app-componente3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './componente3.html',
  styleUrls: ['./componente3.css']
})
export class Componente3 {
  a = 10;
  b = 25;
  total: number = 0;

  constructor(private facturaService: FacturaService) {
    this.calcular();
  }

  calcular() {
    this.total = this.facturaService.calcularTotal(this.a, this.b);
  }
}
