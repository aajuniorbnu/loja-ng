import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  imports: [FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {

  produtos: string[] = ["Mouse", "Teclado", "Monitor"];

  quantidades: number[] = [10, 5, 3];
  valores: number[] = [59.9, 120, 850];


  nome: string = "";
  quantidade: number = 0;
  valor: number = 0;

  indiceParaEditar: number = -1;

  salvar(): void {
    if (this.indiceParaEditar === -1) {
      this.cadastrar();
    } else {
      this.editar();
    }

    this.nome = '';
    this.quantidade = 0;
    this.valor = 0;
  }

  cadastrar(): void {
    this.produtos.push(this.nome);
    this.quantidades.push(this.quantidade);
    this.valores.push(this.valor);

    alert('Produto salvo com sucesso!');
  }
   editar(): void {
    this.produtos[this.indiceParaEditar] = this.nome;
    this.quantidades[this.indiceParaEditar] = this.quantidade;
    this.valores[this.indiceParaEditar] = this.valor;

    alert('Produto editado com sucesso!');

    this.indiceParaEditar = -1;
  }

  apagar(nomeProduto: string): void {
    let indiceProduto = this.produtos.indexOf(nomeProduto);

    this.produtos.splice(indiceProduto, 1);
    this.quantidades.splice(indiceProduto, 1);
    this.valores.splice(indiceProduto, 1);
  }

  preencherCamposParaEditar(
    nomeProduto: string,
    quantidadeProduto: number,
    valorProduto: number
  ): void {
    this.indiceParaEditar = this.produtos.indexOf(nomeProduto);

    this.nome = nomeProduto;
    this.quantidade = quantidadeProduto;
    this.valor = valorProduto;
  }
}
