import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base_url = environment.base_url;

  constructor(
    private http: HttpClient
  ) { }

  login(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/oauth/login`, dados).toPromise();
  }

  getUserByToken(queryParams: any = {}): Observable<any> {
    return this.http.get<any>(`${this.base_url}/oauth/me`, { params: queryParams });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.base_url}/oauth/logout`, {});
  }
}
