import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lanchonete',
  imports: [FormsModule],
  templateUrl: './lanchonete.html',
  styleUrl: './lanchonete.css',
})
export class LanchoneteComponent {
  nomeProduto: string = '';
  quantidade: number | null = null;
  precoUnitario: number | null = null;
  valorPedido: number | null = null;

  private readonly formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  calcularValorPedido(): void {
    if (!this.nomeProduto.trim()) {
      alert('Informe o nome do produto.');
      return;
    }

    if (this.quantidade === null || this.quantidade <= 0) {
      alert('Informe uma quantidade maior que zero.');
      return;
    }

    if (this.precoUnitario === null || this.precoUnitario < 0) {
      alert('Informe um preco unitario valido.');
      return;
    }

    this.valorPedido = this.quantidade * this.precoUnitario;
  }

  get valorPedidoFormatado(): string {
    return this.valorPedido === null ? '' : this.formatadorMoeda.format(this.valorPedido);
  }

  get precoUnitarioFormatado(): string {
    return this.precoUnitario === null ? '' : this.formatadorMoeda.format(this.precoUnitario);
  }
}
