import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NFeService {

  base_url = `${environment.base_url}/fiscal/nfe`;

  constructor(
    private http: HttpClient
  ) { }

  getListing(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}`, { params: queryParams }).toPromise();
  }
  createRegistro(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}`, dados).toPromise();
  }
  getById(id): Promise<any> {
    return this.http.get(`${this.base_url}/${id}`).toPromise();
  }
  updateRegistro(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/${id}`, dados).toPromise();
  }
  deleteById(id): Promise<any> {
    return this.http.delete(`${this.base_url}/${id}`).toPromise();
  }
  finishSale(dados): Promise<any> {
    return this.http.post(`${this.base_url}/finish`, dados).toPromise();
  }

  //itens
  getListingItens(uuid): Promise<any> {
    return this.http.get(`${this.base_url}/item/list/${uuid}`).toPromise();
  }
  createItem(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/item`, dados).toPromise();
  }
  getItemById(id): Promise<any> {
    return this.http.get(`${this.base_url}/item/${id}`).toPromise();
  }
  updateItem(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/item/${id}`, dados).toPromise();
  }
  deleteItem(id): Promise<any> {
    return this.http.delete(`${this.base_url}/item/${id}`).toPromise();
  }


  //pagamentos
  createPayment(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/payment`, dados).toPromise();
  }
  deletePayment(id): Promise<any> {
    return this.http.delete(`${this.base_url}/payment/${id}`).toPromise();
  }

  //references
  createReference(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/reference`, dados).toPromise();
  }
  deleteReference(id): Promise<any> {
    return this.http.delete(`${this.base_url}/reference/${id}`).toPromise();
  }

  ///nota fiscal
  sendNFe(nota_id: string, data: any): Promise<any> {
    return this.http.post(`${this.base_url}/emitir/${nota_id}`, data).toPromise();
  }
  cancelarNFe(nota_id: string, data: any = {}): Promise<any> {
    return this.http.post(`${this.base_url}/cancelar/${nota_id}`, data).toPromise();
  }
}
