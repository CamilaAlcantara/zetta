import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from 'src/app/models/negocio/cargo';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { TipoMensagem } from 'src/app/models/enum/tipoMensagem';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  constructor(
    private service: CargoService,
    private mensagem: MensagemComponent

  ) { }

  listaItens: any[];
  cargo: Cargo;
  cargoDescricao: any;

  ngOnInit() {
    this.listaItens = [];

    this.pesquisar();
  }


  pesquisar(){
    this.service.listar()
    .subscribe(response =>{
      this.listaItens = response;
    })
  }

  adicionar(){

    this.cargo = new Cargo();
    this.cargo.nome = this.cargoDescricao;
    this.cargo.ativo = true;

    this.service.incluir(this.cargo)
    .then(response=>{
      this.listaItens = response;
      this.mensagem.showTopCenter('Cargo cadastrado com sucesso', TipoMensagem.sucesso);
    })
  }
  editar(id){

  }
  excluir(cargo){

  }
}
