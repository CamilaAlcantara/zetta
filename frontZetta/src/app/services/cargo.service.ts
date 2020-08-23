import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ApoioGeralService } from './apoio-geral.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  apiConexao = 'http://localhost:8080/';

  constructor(
    private apoioService: ApoioGeralService,
    private http: HttpClient
  ) { }


  listar() {
    return this.http.get<Array<any>>(this.apiConexao + 'cargo/listar');
  }





}
