import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FiscalFService {

  base_url = environment.base_url;

  constructor(
    private http: HttpClient
  ) { }


  getListingEmitente(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/fiscal/emitente`, { params: queryParams }).toPromise();
  }
  createEmitente(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/fiscal/emitente`, dados).toPromise();
  }
  getEmitenteById(id): Promise<any> {
    return this.http.get(`${this.base_url}/fiscal/emitente/${id}`).toPromise();
  }
  updateEmitente(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/fiscal/emitente/${id}`, dados).toPromise();
  }
  deleteEmitente(id): Promise<any> {
    return this.http.delete(`${this.base_url}/fiscal/emitente/${id}`).toPromise();
  }

  //config NFe e NFCe
  getEmitenteConfig(queryParams): Promise<any> {
    return this.http.get(`${this.base_url}/fiscal/emitente/config`, { params: queryParams }).toPromise();
  }
  createEmitenteConfig(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/fiscal/emitente/config`, dados).toPromise();
  }
  updateEmitenteConfig(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/fiscal/emitente/config/${id}`, dados).toPromise();
  }

  //config NFSe
  getEmitenteConfigNfs(queryParams): Promise<any> {
    return this.http.get(`${this.base_url}/fiscal/emitente/config-nfs`, { params: queryParams }).toPromise();
  }
  createEmitenteConfigNfs(dados: any): Promise<any> {
    return this.http.post(`${this.base_url}/fiscal/emitente/config-nfs`, dados).toPromise();
  }
  updateEmitenteConfigNfs(id, dados): Promise<any> {
    return this.http.put(`${this.base_url}/fiscal/emitente/config-nfs/${id}`, dados).toPromise();
  }

  //monitor fiscal
  getListingMonitor(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/fiscal/monitor-fiscal`, { params: queryParams }).toPromise();
  }
  startMonitor(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/fiscal/monitor-fiscal/search`, { params: queryParams }).toPromise();
  }

  //manifestação
  manifestarNFe(dados): Promise<any> {
    return this.http.post(`${this.base_url}/fiscal/monitor-fiscal/manifestar`, dados).toPromise();
  }

  //imports nfe
  getDadosXML(dados): Promise<any> {
    return this.http.post(`${this.base_url}/fiscal/monitor-fiscal/getDadosXML`, dados).toPromise();
  }
  importDadosXML(dados): Promise<any> {
    return this.http.post(`${this.base_url}/fiscal/monitor-fiscal/importXML`, dados).toPromise();
  }



  //referencias
  getListingReferences(queryParams: any = {}): Promise<any> {
    return this.http.get(`${this.base_url}/fiscal/references`, { params: queryParams }).toPromise();
  }

}
