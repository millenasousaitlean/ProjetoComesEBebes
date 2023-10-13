import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from 'src/app/model/categorias';
import { ConteudoSite } from 'src/app/model/conteudo-site';
import { DestaquesPromocionais } from 'src/app/model/destaques-promocionais';
import { Produtos } from 'src/app/model/produtos';

@Injectable({
  providedIn: 'root'
})
export class InfoSiteService {

  readonly baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {}


  // PRODUTOS
  getAllProduts(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(`${this.baseUrl}/produtos`)
  }


  // CATEGORIAS

  getAllCategorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(`${this.baseUrl}/categorias`)
  }

  // MARCAS

  // INFOS SITE

  getAllDestaquesPromo(): Observable<ConteudoSite> {
    return this.http.get<ConteudoSite>(`${this.baseUrl}/conteudoSite`)
  }

}
