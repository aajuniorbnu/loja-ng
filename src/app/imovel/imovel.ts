import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-imovel',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './imovel.html',
  styleUrl: './imovel.css',
})
export class ImovelComponent {
  valor: number | null = null;
  quantidadeMetro: number | null = null;
  valorMetroQuadrado: number | null = null;

  private readonly formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  private readonly formatadorNumero = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  calcular(): void {
    if (this.valor === null || this.valor < 0) {
      alert('Informe um valor de imóvel válido.');
      return;
    }

    if (this.quantidadeMetro === null || this.quantidadeMetro <= 0) {
      alert('A quantidade de metros quadrados deve ser preenchida e maior que zero.');
      return;
    }

    this.valorMetroQuadrado = this.valor / this.quantidadeMetro;
  }

  get valorFormatado(): string {
    return this.valor === null ? '' : this.formatadorMoeda.format(this.valor);
  }

  get valorMetroQuadradoFormatado(): string {
    return this.valorMetroQuadrado === null ? '' : this.formatadorMoeda.format(this.valorMetroQuadrado);
  }

  get resumo(): string {
    if (this.valor === null || this.quantidadeMetro === null) {
      return '';
    }
    return `${this.formatadorMoeda.format(this.valor)} — ${this.formatadorNumero.format(this.quantidadeMetro)} m²`;
  }
}
