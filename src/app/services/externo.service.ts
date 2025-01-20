import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExternoService {

  base_url = environment.base_url;

  constructor(
    private http: HttpClient
  ) { }

  // externos resource
  getListing(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/externos`, { params: queryParams }).toPromise();
  }
  createRegistro(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/externos`, dados).toPromise();
  }
  getById(id): Promise<any> {
    return this.http.get(`${this.base_url}/externos/${id}`).toPromise();
  }
  updateRegistro(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/externos/${id}`, dados).toPromise();
  }
  deleteById(id): Promise<any> {
    return this.http.delete(`${this.base_url}/externos/${id}`).toPromise();
  }

  // Finalizar envio
  finishSale(dados): Promise<any> {
    return this.http.post(`${this.base_url}/externos/finish`, dados).toPromise();
  }

  //itens
  createItem(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/externos/item`, dados).toPromise();
  }
  getItemById(id): Promise<any> {
    return this.http.get(`${this.base_url}/externos/item/${id}`).toPromise();
  }
  updateItem(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/externos/item/${id}`, dados).toPromise();
  }
  deleteItem(id): Promise<any> {
    return this.http.delete(`${this.base_url}/externos/item/${id}`).toPromise();
  }

  // Vendedor
  getVendedorItens() {
    return this.http.get(`${this.base_url}/externos/vendedor-itens`).toPromise();
  }
  getMovimentacaoVendedor() {
    return this.http.get(`${this.base_url}/externos/vendedor-movimentacao`).toPromise();
  }
}
