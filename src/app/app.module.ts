import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './c/usuario/home/home.component';
import { HomeCrudComponent } from './c/crud/home-crud/home-crud.component';
import { InternaCrudComponent } from './c/crud/interna-crud/interna-crud.component';
import { InternaCategoriaComponent } from './c/usuario/interna-categoria/interna-categoria.component';
import { InternaBuscaComponent } from './c/usuario/interna-busca/interna-busca.component';
import { InternaProdutoComponent } from './c/usuario/interna-produto/interna-produto.component';
import { LoginSignUpComponent } from './c/usuario/login-sign-up/login-sign-up.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TabelaComponent } from './shared/tabela/tabela.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeCrudComponent,
    InternaCrudComponent,
    InternaCategoriaComponent,
    InternaBuscaComponent,
    InternaProdutoComponent,
    LoginSignUpComponent,
    SidenavComponent,
    NavBarComponent,
    FooterComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatBadgeModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
