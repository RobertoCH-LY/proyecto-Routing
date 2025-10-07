import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  calcularTotal(a: number, b: number): number {
    return a * b;
  }
}
