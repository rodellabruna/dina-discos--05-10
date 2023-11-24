import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { CestaComponent } from './cesta/cesta.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { LoginComponent } from './login/login.component';
import { ProdutoBuscaComponent } from './produto-busca/produto-busca.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  {path:'',component:VitrineComponent},
  {path:'vitrine',component:VitrineComponent},
  {path:'cesta',component:CestaComponent},
  {path:'esqueci',component:EsqueciComponent},
  {path:'login',component:LoginComponent},
  {path:'produto-busca',component:ProdutoBuscaComponent},
  {path:'sobre',component:SobreComponent},
  {path:'produto-detalhe',component:ProdutoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
