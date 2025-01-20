import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  base_url = environment.base_url;

  constructor(
    private http: HttpClient
  ) { }
  // Sale Resource
  getCount(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/sale/count`, { params: queryParams }).toPromise();
  }

  getListing(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/sale`, { params: queryParams }).toPromise();
  }
  createRegistro(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/sale`, dados).toPromise();
  }
  getById(id): Promise<any> {
    return this.http.get(`${this.base_url}/sale/${id}`).toPromise();
  }
  updateRegistro(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/sale/${id}`, dados).toPromise();
  }
  deleteById(id): Promise<any> {
    return this.http.delete(`${this.base_url}/sale/${id}`).toPromise();
  }

  // Finalizar Venda
  finishSale(dados): Promise<any> {
    return this.http.post(`${this.base_url}/sale/finish`, dados).toPromise();
  }

  //itens Vendas Resource
  createItem(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/sale/item`, dados).toPromise();
  }
  getItemById(id): Promise<any> {
    return this.http.get(`${this.base_url}/sale/item/${id}`).toPromise();
  }
  updateItem(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/sale/item/${id}`, dados).toPromise();
  }
  deleteItem(id): Promise<any> {
    return this.http.delete(`${this.base_url}/sale/item/${id}`).toPromise();
  }

  // nota fiscal
  emitirNFCe(sale_id: string, data: any): Promise<any> {
    return this.http.post(`${this.base_url}/sale/emite_nfce/${sale_id}`, data).toPromise();
  }
  emitirCupom(sale_id: string, data: any): Promise<any> {
    return this.http.post(`${this.base_url}/sale/emite_cupom/${sale_id}`, data).toPromise();
  }

  getVendasVendedor() {
    return this.http.get(`${this.base_url}/sale/vendedor`).toPromise();
  }

}
