import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  base_url = environment.base_url;

  constructor(
    private http: HttpClient
  ) { }

  //Formas de pagamento
  getForma(queryParams = {}): Promise<any> {
    return this.http.get(`${this.base_url}/finance/payment-forms`, { params: queryParams }).toPromise();
  }
  getFormaById(id): Promise<any> {
    return this.http.get(`${this.base_url}/finance/payment-forms/${id}`).toPromise();
  }
  createForma(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/finance/payment-forms`, dados).toPromise();
  }
  updateForma(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/finance/payment-forms/${id}`, dados).toPromise();
  }
  deleteForma(id): Promise<any> {
    return this.http.delete(`${this.base_url}/finance/payment-forms/${id}`).toPromise();
  }


  //caixa
  getCaixa(queryParams = {}): Promise<any> {
    return this.http.get(`${this.base_url}/finance/caixa`, { params: queryParams }).toPromise();
  }
  getCaixaById(id): Promise<any> {
    return this.http.get(`${this.base_url}/finance/caixa/${id}`).toPromise();
  }
  createCaixa(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/finance/caixa`, dados).toPromise();
  }
  updateCaixa(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/finance/caixa/${id}`, dados).toPromise();
  }
  deleteCaixa(id): Promise<any> {
    return this.http.delete(`${this.base_url}/finance/caixa/${id}`).toPromise();
  }

  ///receitas
  getReceitas(queryParams = {}): Promise<any> {
    return this.http.get(`${this.base_url}/finance/receita`, { params: queryParams }).toPromise();
  }
  getReceitaById(id): Promise<any> {
    return this.http.get(`${this.base_url}/finance/receita/${id}`).toPromise();
  }
  createReceita(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/finance/receita`, dados).toPromise();
  }
  updateReceita(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/finance/receita/${id}`, dados).toPromise();
  }
  deleteReceita(id): Promise<any> {
    return this.http.delete(`${this.base_url}/finance/receita/${id}`).toPromise();
  }

  paymentReceita(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/finance/receita/payment`, dados).toPromise();
  }

  //receitas categorias
  getReceitaCategorias(queryParams = {}): Promise<any> {
    return this.http.get(`${this.base_url}/finance/receita/categoria`, { params: queryParams }).toPromise();
  }
  getReceitaCategoriaById(id): Promise<any> {
    return this.http.get(`${this.base_url}/finance/receita/categoria/${id}`).toPromise();
  }
  createReceitaCategoria(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/finance/receita/categoria`, dados).toPromise();
  }
  updateReceitaCategoria(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/finance/receita/categoria/${id}`, dados).toPromise();
  }
  deleteReceitaCategoria(id): Promise<any> {
    return this.http.delete(`${this.base_url}/finance/receita/categoria/${id}`).toPromise();
  }


  ///Contas
  getContas(queryParams = {}): Promise<any> {
    return this.http.get(`${this.base_url}/finance/conta`, { params: queryParams }).toPromise();
  }
  getContaById(id): Promise<any> {
    return this.http.get(`${this.base_url}/finance/conta/${id}`).toPromise();
  }
  createConta(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/finance/conta`, dados).toPromise();
  }
  updateConta(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/finance/conta/${id}`, dados).toPromise();
  }
  deleteConta(id): Promise<any> {
    return this.http.delete(`${this.base_url}/finance/conta/${id}`).toPromise();
  }

  paymentConta(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/finance/conta/payment`, dados).toPromise();
  }

  //contas categorias
  getContaCategorias(queryParams = {}): Promise<any> {
    return this.http.get(`${this.base_url}/finance/conta/categoria`, { params: queryParams }).toPromise();
  }
  getContaCategoriaById(id): Promise<any> {
    return this.http.get(`${this.base_url}/finance/conta/categoria/${id}`).toPromise();
  }
  createContaCategoria(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/finance/conta/categoria`, dados).toPromise();
  }
  updateContaCategoria(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/finance/conta/categoria/${id}`, dados).toPromise();
  }
  deleteContaCategoria(id): Promise<any> {
    return this.http.delete(`${this.base_url}/finance/conta/categoria/${id}`).toPromise();
  }

}
