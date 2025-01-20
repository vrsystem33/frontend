import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url = environment.base_url;

  constructor(
    private http: HttpClient
  ) { }


  getListing(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/user`, { params: queryParams }).toPromise();
  }
  getListingVendedor(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/user/vendedor`, { params: queryParams }).toPromise();
  }  
  createRegistro(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/user`, dados).toPromise();
  }
  getById(id): Promise<any> {
    return this.http.get(`${this.base_url}/user/${id}`).toPromise();
  }
  updateRegistro(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/user/${id}`, dados).toPromise();
  }
  deleteById(id): Promise<any> {
    return this.http.delete(`${this.base_url}/user/${id}`).toPromise();
  }


  //permissions
  getListingPermissions(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/user/permission`, { params: queryParams }).toPromise();
  }
  createPermission(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/user/permission`, dados).toPromise();
  }
  getPermissionById(id): Promise<any> {
    return this.http.get(`${this.base_url}/user/permission/${id}`).toPromise();
  }
  updatePermission(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/user/permission/${id}`, dados).toPromise();
  }
  deletePermissionById(id): Promise<any> {
    return this.http.delete(`${this.base_url}/user/permission/${id}`).toPromise();
  }

}
