import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Pessoa } from '../../Models/Pessoa';
import { PessoasService } from '../../Services/pessoas.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css'
})
export class PessoasComponent implements OnInit{

  formulario: any;
  tituloFormulario!: string;
  pessoas!: Pessoa[];
  pessoaId!: number;
  nomePessoa!: string;
  modalRef!: BsModalRef;

  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;

  constructor(private pessoasService: PessoasService, private modalService: BsModalService){}
  
  ngOnInit(): void{
    
    this.pessoasService.BuscaPessoas().subscribe(result => {
      this.pessoas = result;
    });
  }

  ExibirFormularioCadastro(): void{

    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.tituloFormulario = 'Cadastro Pessoa';

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade: new FormControl(null),
      profissao: new FormControl(null),
    });
  }
  
  EnviarFormulario(): void {

    const pessoa : Pessoa = this.formulario.value;

    if(pessoa.pessoaId > 0){
      this.pessoasService.AtualizaPessoa(pessoa).subscribe(result =>{
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;

        alert('Pessoa atualizada com sucesso!')
        
        this.pessoasService.BuscaPessoas().subscribe(registros =>{
          this.pessoas = registros;
        });
      });
    } else {
      this.pessoasService.CadastraPessoa(pessoa).subscribe(result => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
  
        alert('Pessoa inserida com sucesso!')
        this.pessoasService.BuscaPessoas().subscribe(registros =>{
          this.pessoas = registros;
        });
      });
    }
  }

  AtualizaPessoaFormulario(pessoaId: number): void{
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.pessoasService.BuscaPessoaId(pessoaId).subscribe(result => {
      this.tituloFormulario = `Atualizar ${result.nome} ${result.sobrenome}`;

      this.formulario = new FormGroup({
        pessoaId: new FormControl(result.pessoaId),
        nome: new FormControl(result.nome),
        sobrenome: new FormControl(result.sobrenome),
        idade: new FormControl(result.idade),
        profissao: new FormControl(result.profissao)
      });
    });
  }

  Voltar(): void{
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
    window.location.reload();
  }  
  
  ConfirmaExclusaoFormulario(pessoaId:number, nomePessoa:string, conteudoModal: TemplateRef<any>) : void { 
    this.modalRef = this.modalService.show(conteudoModal);
    this.pessoaId = pessoaId;
    this.nomePessoa = nomePessoa;
  }

  ExcluiPessoa (pessoaId:number) : void {
    this.pessoasService.ExcluiPessoa(pessoaId).subscribe(result => {
      this.modalRef.hide();
      alert('Pessoa excluida com sucesso!');
      this.pessoasService.BuscaPessoas().subscribe(registros =>{
        this.pessoas = registros;
      });
    });
  }
}
