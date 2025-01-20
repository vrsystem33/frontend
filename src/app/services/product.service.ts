import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  base_url = environment.base_url;

  constructor(
    private http: HttpClient
  ) { }

  getCounts(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/product/counts`, { params: queryParams }).toPromise();
  }

  getCount(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/product/count`, { params: queryParams }).toPromise();
  }

  getListing(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/product`, { params: queryParams }).toPromise();
  }
  createRegistro(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/product`, dados).toPromise();
  }
  getById(id): Promise<any> {
    return this.http.get(`${this.base_url}/product/${id}`).toPromise();
  }
  updateRegistro(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/product/${id}`, dados).toPromise();
  }
  deleteById(id): Promise<any> {
    return this.http.delete(`${this.base_url}/product/${id}`).toPromise();
  }

  //movimentação
  createMovimento(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/product/movimenta`, dados).toPromise();
  }
  removeMovimento(id): Promise<any> {
    return this.http.delete(`${this.base_url}/product/movimenta/${id}`).toPromise();
  }


  //categorias
  getListingCategories(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/product/categoria`, { params: queryParams }).toPromise();
  }
  createRegistroCategory(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/product/categoria`, dados).toPromise();
  }
  getByIdCategory(id): Promise<any> {
    return this.http.get(`${this.base_url}/product/categoria/${id}`).toPromise();
  }
  updateCategory(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/product/categoria/${id}`, dados).toPromise();
  }
  deleteByIdCategory(id): Promise<any> {
    return this.http.delete(`${this.base_url}/product/categoria/${id}`).toPromise();
  }

  // Galeria
  checkFoto(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/product/galeria/${id}`, {'id_galeria': dados}).toPromise();
  }
  
  deleteFoto(id): Promise<any> {
    return this.http.delete(`${this.base_url}/product/galeria/${id}`).toPromise();
  }
  
  deleteFotoPrincipal(uuid: string): Promise<any> {
    return this.http.delete(`${this.base_url}/product/galeria/${uuid}/foto-principal`).toPromise();
  }

  //utils
  searchProduct(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/product/searchProduct`, { params: queryParams }).toPromise();
  }
}
