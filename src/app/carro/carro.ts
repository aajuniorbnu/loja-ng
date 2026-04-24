import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carro',
  imports: [FormsModule],
  templateUrl: './carro.html',
  styleUrl: './carro.css',
})
export class CarroComponent {
  modeloCarro: string = '';
  marcaCarro: string = 'fiat';
  quilometragemAnterior: number | null = 69500;
  precoPorLitro: number | null = 6.58;
  valorTotalAbastecimento: number | null = 300;
  quilometragemAtual: number | null = 70000;

  litrosAbastecidos: number | null = null;
  quilometrosRodados: number | null = null;
  mediaConsumo: number | null = null;

  private readonly formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  private readonly formatadorNumero = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  constructor() {
    this.calcularValores();
  }

  calcularValores(): void {
    if (
      this.precoPorLitro === null ||
      this.precoPorLitro <= 0 ||
      this.valorTotalAbastecimento === null ||
      this.valorTotalAbastecimento <= 0 ||
      this.quilometragemAnterior === null ||
      this.quilometragemAtual === null
    ) {
      this.litrosAbastecidos = null;
      this.quilometrosRodados = null;
      this.mediaConsumo = null;
      return;
    }

    // Calcular litros abastecidos
    this.litrosAbastecidos = this.valorTotalAbastecimento / this.precoPorLitro;

    // Calcular quilômetros rodados
    this.quilometrosRodados = this.quilometragemAtual - this.quilometragemAnterior;

    // Calcular média de consumo
    if (this.litrosAbastecidos > 0) {
      this.mediaConsumo = this.quilometrosRodados / this.litrosAbastecidos;
    } else {
      this.mediaConsumo = null;
    }
  }

  get valorTotalAbastecimentoFormatado(): string {
    return this.valorTotalAbastecimento === null ? '' : this.formatadorMoeda.format(this.valorTotalAbastecimento);
  }

  get precoPorLitroFormatado(): string {
    return this.precoPorLitro === null ? '' : this.formatadorMoeda.format(this.precoPorLitro);
  }

  get litrosAbastecidosFormatado(): string {
    return this.litrosAbastecidos === null ? '' : this.formatadorNumero.format(this.litrosAbastecidos);
  }

  get mediaConsumoFormatado(): string {
    return this.mediaConsumo === null ? '' : this.formatadorNumero.format(this.mediaConsumo);
  }

  get nomeMarca(): string {
    const marcas: { [key: string]: string } = {
      fiat: 'Fiat',
      ford: 'Ford',
      volkswagen: 'Volkswagen',
      chevrolet: 'Chevrolet',
    };
    return marcas[this.marcaCarro] || '';
  }
}
