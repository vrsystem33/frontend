import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  base_url = environment.base_url;

  constructor(
    private http: HttpClient
  ) { }


  getListing(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/company`, { params: queryParams }).toPromise();
  }
  createRegistro(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/company`, dados).toPromise();
  }
  getById(id): Promise<any> {
    return this.http.get(`${this.base_url}/company/${id}`).toPromise();
  }
  updateRegistro(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/company/${id}`, dados).toPromise();
  }
  deleteById(id): Promise<any> {
    return this.http.delete(`${this.base_url}/company/${id}`).toPromise();
  }

}
