import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  constructor(
    private service: CargoService
  ) { }

  listaItens: any[];
  cargo: any;

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
    // this.listaItens = [];
    this.listaItens.push(this.cargo);
  }
  editar(id){

  }
  excluir(cargo){

  }
}
