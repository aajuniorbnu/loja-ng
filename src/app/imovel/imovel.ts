import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imovel',
  imports: [FormsModule],
  templateUrl: './imovel.html',
  styleUrl: './imovel.css',
})
export class ImovelComponent {
valor: number | null = null;
quantidadeMetro: number | null =  null;
valorMetroQuadrado: number | null = null;

calcular():  void{

  if(this.valor === null){
    alert("O valor do imovel deve ser preenhido");
    return;
  }

    if (this.quantidadeMetro === null || this.quantidadeMetro <= 0) {
      alert('A quantidade de metros quadrados deve ser preenchida e maior que zero.');
      return;
    }
 
    this.valorMetroQuadrado = this.valor / this.quantidadeMetro;
  }
 
  get resumo(): string {
    return `${this.valor} reais — ${this.quantidadeMetro} m²`;
  }

}
