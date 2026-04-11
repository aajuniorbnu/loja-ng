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
}



}
