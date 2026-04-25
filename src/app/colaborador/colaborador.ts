import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colaboradores',
  imports: [FormsModule],
  templateUrl: './colaborador.html',
  styleUrl: './colaborador.css',
})
export class Colaborador {

  nomes: string[] = ['João', 'Maria'];
  datasNascimento: string[] = ['1998-04-10', '2000-08-15'];
  valoresHora: number[] = [25, 30];
  qtdHoras: number[] = [160, 150];
  valoresValeRefeicao: number[] = [500, 450];
  valoresValeTransporte: number[] = [220, 200];
  descontosPlanoSaude: number[] = [300, 500];

  nome: string = "";
  dataNascimento: string = "";
  valorHora: number = 0;
  quantidadeHoras: number = 0;
  valorValeRefeicao: number = 0;
  valorValeTransporte: number = 0;
  valorDescontoPlanoSaude: number = 0;

  indiceParaEditar: number = -1;

  salvar(): void {
    if (this.indiceParaEditar === -1) {
      this.cadastrar();
    } else {
      this.editar();
    }

    this.limparCampos();
  }

  cadastrar(): void {
    this.nomes.push(this.nome);
    this.datasNascimento.push(this.dataNascimento);
    this.valoresHora.push(this.valorHora);
    this.qtdHoras.push(this.quantidadeHoras);
    this.valoresValeRefeicao.push(this.valorValeRefeicao);
    this.valoresValeTransporte.push(this.valorValeTransporte);
    this.descontosPlanoSaude.push(this.valorDescontoPlanoSaude);

    alert('Colaborador salvo com sucesso!');
  }

  editar(): void {
    this.nomes[this.indiceParaEditar] = this.nome;
    this.datasNascimento[this.indiceParaEditar] = this.dataNascimento;
    this.valoresHora[this.indiceParaEditar] = this.valorHora;
    this.qtdHoras[this.indiceParaEditar] = this.quantidadeHoras;
    this.valoresValeRefeicao[this.indiceParaEditar] = this.valorValeRefeicao;
    this.valoresValeTransporte[this.indiceParaEditar] = this.valorValeTransporte;
    this.descontosPlanoSaude[this.indiceParaEditar] = this.valorDescontoPlanoSaude;

    alert('Colaborador editado com sucesso!');

    this.indiceParaEditar = -1;
  }

  apagar(nomeColaborador: string): void {
    let indiceColaborador = this.nomes.indexOf(nomeColaborador);

    this.nomes.splice(indiceColaborador, 1);
    this.datasNascimento.splice(indiceColaborador, 1);
    this.valoresHora.splice(indiceColaborador, 1);
    this.qtdHoras.splice(indiceColaborador, 1);
    this.valoresValeRefeicao.splice(indiceColaborador, 1);
    this.valoresValeTransporte.splice(indiceColaborador, 1);
    this.descontosPlanoSaude.splice(indiceColaborador, 1);
  }

  preencherCamposParaEditar(
    nomeColaborador: string,
    dataNascimentoColaborador: string,
    valorHoraColaborador: number,
    quantidadeHorasColaborador: number,
    valeRefeicaoColaborador: number,
    valeTransporteColaborador: number,
    planoSaudeColaborador: number
  ): void {
    this.indiceParaEditar = this.nomes.indexOf(nomeColaborador);

    this.nome = nomeColaborador;
    this.dataNascimento = dataNascimentoColaborador;
    this.valorHora = valorHoraColaborador;
    this.quantidadeHoras = quantidadeHorasColaborador;
    this.valorValeRefeicao = valeRefeicaoColaborador;
    this.valorValeTransporte = valeTransporteColaborador;
    this.valorDescontoPlanoSaude = planoSaudeColaborador;
  }

  calcularIdade(dataNascimento: string): number {
    let hoje = new Date();
    let nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  }

  calcularSalarioBruto(valorHora: number, quantidadeHoras: number): string {
    let salarioBruto = valorHora * quantidadeHoras;
    return salarioBruto.toFixed(2);
  }

  calcularINSS(salarioBruto: number): string {
    let valorINSS = 0;

    if (salarioBruto <= 1412) {
      valorINSS = salarioBruto * 0.075;
    } else if (salarioBruto <= 2666.68) {
      valorINSS = salarioBruto * 0.09;
    } else if (salarioBruto <= 4000.03) {
      valorINSS = salarioBruto * 0.12;
    } else {
      valorINSS = salarioBruto * 0.14;
    }

    return valorINSS.toFixed(2);
  }

  calcularIR(salarioBruto: number): string {

    let aliquota = this.obterAliquota(salarioBruto);

    let valorIR = salarioBruto * aliquota;

    return valorIR.toFixed(2);
  }

  private obterAliquota(salarioBruto: number) {
    if (salarioBruto <= 2259.20) {
      return 0;
    } else if (salarioBruto <= 2826.65) {
      return 0.075;
    } else if (salarioBruto <= 3751.05) {
      return 0.15;
    } else if (salarioBruto <= 4664.68) {
      return 0.225;
    } else {
      return 0.275;
    }
  }

  calcularSalarioLiquido(
    valorHora: number,
    quantidadeHoras: number,
    valeRefeicao: number,
    valeTransporte: number,
    planoSaude: number
  ): string {
    let salarioBruto = valorHora * quantidadeHoras;
    let inss = Number(this.calcularINSS(salarioBruto));
    let ir = Number(this.calcularIR(salarioBruto));

    let salarioLiquido =
      salarioBruto - inss - ir - valeRefeicao - valeTransporte - planoSaude;

    return salarioLiquido.toFixed(2);
  }

  limparCampos(): void {
    this.nome = "";
    this.dataNascimento = "";
    this.valorHora = 0;
    this.quantidadeHoras = 0;
    this.valorValeRefeicao = 0;
    this.valorValeTransporte = 0;
    this.valorDescontoPlanoSaude = 0;
  }
}