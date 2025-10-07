import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Componente1 } from './componentes/componente1/componente1';
import { Componente2 } from './componentes/componente2/componente2';
import { Componente3 } from './componentes/componente3/componente3';
import { Componente4 } from './componentes/componente4/componente4';

export const routes: Routes = [
  { path: 'uno',component: Componente1 },
  { path: 'dos',component: Componente2 },
  { path: 'tres',component: Componente3 },
  { path: 'cuatro',component: Componente4 }

];