import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ApoioGeralService } from './apoio-geral.service';
import { environment } from 'src/environments/environment';
import { Cargo } from '../models/negocio/cargo';


@Injectable({
  providedIn: 'root'
})
export class CargoService {

  apiConexao = 'http://localhost:8080';

  constructor(
    private apoioService: ApoioGeralService,
    private http: HttpClient
  ) { }


  listar() {
    return this.http.get<Array<any>>(this.apiConexao + '/cargo/listar');
  }

  buscarId(id: any): Promise<any> {
    return this.http.get(`${environment.apiUrl}/cargo/buscarPorId/${id}`)
      .toPromise()
      .catch(erro => Promise.reject(erro));
  }

  incluir(cargo: Cargo): Promise<any> {
    return this.http.post(`${environment.apiUrl}/cargo/incluir`, cargo)
      .toPromise()
      .catch(erro => Promise.reject(erro));
  }


  alterar(cargo: Cargo): Promise<any> {
    return this.http.put(`${environment.apiUrl}/cargo/incluir`, cargo)
      .toPromise()
      .catch(erro => Promise.reject(erro));
  }



}
