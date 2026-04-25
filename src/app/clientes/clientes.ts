import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  //Lista clientes
  clientes: string[] = ["Jorge Silva","Abacat Batatinha", "Ronalado Souza"]
  cpfs: string[] = ["123.456.789-00", "987.654.321-00", "111.222.333-44"]

  //variavel para armazenar o que o usuario digitar no imput
  nome: string = "";
  cpf: string = "";
  //variavel para armazenar o indice do cliente a ser editado 
  clienteParaEditar: string = "";
  indiceParaEditar: number = -1;
  salvar(): void{
    if (this.indiceParaEditar === -1){
      this.cadastrar();
    }else{
      this.editar();
    }
    this.nome = "";
    this.cpf = "";
    
  }
  cadastrar(): void{
    this.clientes.push(this.nome);
    this.cpfs.push(this.cpf);
  
    alert("Cliente salvo com sucesso!");

  }
  editar():void{
    this.clientes[this.indiceParaEditar] = this.nome;
    this.cpfs[this.indiceParaEditar] = this.cpf;
    alert("Cliente editado com sucesso!");
    //resetar os campos
this.indiceParaEditar = -1;
  }
 apagar(nomeCliente: string): void{
  
   let indiceNomeCliente = this.clientes.indexOf(nomeCliente);

   this.clientes.splice(indiceNomeCliente, 1);
   this.cpfs.splice(indiceNomeCliente, 1);
 }
 preencherCamposParaEditar(nomeCliente: string,cpfCliente:string): void{
  //descobrir o indice do cliente na lista de clientes ,armazenando no indice para sabermos
  //depois onde deve ser alterado na lista
  this.indiceParaEditar = this.clientes.indexOf(nomeCliente);
  //preencher o campo nome
  this.nome = nomeCliente;
  this.cpf = cpfCliente;
 }
}
