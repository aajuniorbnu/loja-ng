import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"pacientes", loadComponent: () => import('./paciente/paciente').then(x => x.PacienteComponent)}, 
    {path:"calculadora", loadComponent: () => import('./calculadora/calculadora').then(x => x.Calculadora)},
    {path:"carro",loadComponent: () => import('./carro/carro').then(x=> x.CarroComponent)},
    {path:"imovel", loadComponent: () => import('./imovel/imovel').then(x => x.ImovelComponent)},
    {path:"lanchonete", loadComponent: () => import('./lanchonete/lanchonete').then(x => x.LanchoneteComponent)},
    {path:"clientes", loadComponent: () => import('./clientes/clientes').then(x => x.Clientes)},
    {path:"produtos", loadComponent: () => import('./produtos/produtos').then(x => x.Produtos)},
    {path:"colaborador", loadComponent: () => import('./colaborador/colaborador').then(x => x.Colaborador)},
];
