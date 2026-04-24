import { Component, signal } from '@angular/core';
import { LanchoneteComponent } from './lanchonete/lanchonete';
import { CarroComponent } from './carro/carro';
import { ImovelComponent } from './imovel/imovel';
import { PacienteComponent } from "./paciente/paciente";

@Component({
  selector: 'app-root',
  imports: [LanchoneteComponent, CarroComponent, ImovelComponent, PacienteComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loja-ng');

  numero1: number =0;
  numero2: number=0;

  apresentarMensagem() : void{
    alert("Abacate");
  } 
  somar(): void{
    let resultado :number =this.numero1 + this.numero2 ;
    alert(`O resultado da soma é: ${resultado}`);
  }
  subtrair(): void{
    let resultado :number =this.numero1 - this.numero2 ;
    alert(`O resultado da subtração é: ${resultado}`);
  }
  multiplicar(): void{
    let resultado :number =this.numero1 * this.numero2 ;
    alert(`O resultado da multiplicação é: ${resultado}`);
  }
  dividir(): void{
   
      let resultado :number =this.numero1 / this.numero2 ;
      alert(`O resultado da divisão é: ${resultado}`);
   
  }
}
