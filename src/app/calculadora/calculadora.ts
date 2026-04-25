import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
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


