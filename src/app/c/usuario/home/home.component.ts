import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorias } from 'src/app/model/categorias';
import { ConteudoSite } from 'src/app/model/conteudo-site';
import { DestaquesPromocionais } from 'src/app/model/destaques-promocionais';
import { Marcas } from 'src/app/model/marcas';
import { Produtos } from 'src/app/model/produtos';
import { InfoSiteService } from 'src/app/service/site/info-site.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  allProdutos: Produtos[] = [];
  allCategorias: Categorias[] = [];
  allMarcas: Marcas[] = [];
  allImagensDestaques: DestaquesPromocionais[] = []

  constructor(
    public router: Router,
    private infosSiteService: InfoSiteService
  ){}

  ngOnInit(): void {
   this.getInfos()
   console.log(this.allImagensDestaques);
   
  }

  getInfos(){
    this.infosSiteService.getAllProduts().subscribe((data) => {
      this.allProdutos = data
      this.infosSiteService.getAllDestaquesPromo().subscribe((data) => {
        this.allImagensDestaques = data.destaquesPromocionais
      })
    })
  }






}
