import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Categorias } from 'src/app/model/categorias';
import { Produtos } from 'src/app/model/produtos';
import { InfoSiteService } from 'src/app/service/site/info-site.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

 
allProdutos: Produtos[] = [];
allProdutosFiltrados: Produtos[] = [];
allCategorias: Categorias[] = [];

valorInput: string = "";


  showFiller = false;


  constructor(
    public router: Router,
    private infosSiteService: InfoSiteService
  ){}


  ngOnInit(): void {
    this.getInfos()
  }

  getInfos(): void{
    this.infosSiteService.getAllProduts().subscribe((data) => {
      this.allProdutos = data
      this.allProdutosFiltrados = data
      this.infosSiteService.getAllCategorias().subscribe((data) => {
        this.allCategorias = data
        for (let i = 0; i < this.allProdutos.length; i++) {
          this.allProdutos.forEach(produto => {
            const findMarca = this.allCategorias.find(categoria => categoria.id === produto.categoria);
            if (findMarca) {
              produto.categoria = findMarca.nome
            }
          })
        } 
      })
    })


  }

  pressionaTecla(): void {
    this.allProdutosFiltrados = this.allProdutos.filter((produto) => {
      return produto.nome.toLowerCase().startsWith(this.valorInput.toLowerCase())
    })

  }

  



}
