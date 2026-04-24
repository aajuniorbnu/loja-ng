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
  formaPagamento: string = 'pix';
  valorPedidoOriginal: number | null = null;
  valorPedidoFinal: number | null = null;

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

    this.valorPedidoOriginal = this.quantidade * this.precoUnitario;
    this.aplicarRegrasPagamento();
  }

  private aplicarRegrasPagamento(): void {
    if (this.valorPedidoOriginal === null) return;

    if (this.formaPagamento === 'pix') {
      // 10% de desconto
      this.valorPedidoFinal = this.valorPedidoOriginal * 0.9;
    } else if (this.formaPagamento === 'cc') {
      // 15% de acréscimo
      this.valorPedidoFinal = this.valorPedidoOriginal * 1.15;
    }
  }

  get valorPedidoOriginalFormatado(): string {
    return this.valorPedidoOriginal === null ? '' : this.formatadorMoeda.format(this.valorPedidoOriginal);
  }

  get valorPedidoFinalFormatado(): string {
    return this.valorPedidoFinal === null ? '' : this.formatadorMoeda.format(this.valorPedidoFinal);
  }

  get precoUnitarioFormatado(): string {
    return this.precoUnitario === null ? '' : this.formatadorMoeda.format(this.precoUnitario);
  }

  get descricaoFormaPagamento(): string {
    if (this.formaPagamento === 'pix') return 'Pix (10% de desconto)';
    if (this.formaPagamento === 'cc') return 'Cartão de Crédito (15% de acréscimo)';
    return '';
  }
}
