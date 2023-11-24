import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vitrine } from '../vitrine/vitrine.model';

@Injectable({
  providedIn: 'root'
})
export class VitrineService {
  constructor(private http : HttpClient) {}

  public gravar(obj : Vitrine){          
    this.http.post<String>("http://localhost:8081/api/produto", obj)
    .subscribe();        
  }
  
  public alterar(obj : Vitrine){          
    this.http.put<String>("http://localhost:8081/api/produto", obj)
    .subscribe();        
  }

  public carregar(id_produto: number): Observable<Vitrine>{
    return this.http.get<Vitrine>("http://localhost:8081/api/produto/"+id_produto);         
  }

  public remover(id_produto: number) {
    return this.http.delete<String>("http://localhost:8081/api/produto/"+id_produto).subscribe();    
  }

  public listar(): Observable<Vitrine[]>{
    return this.http.get<Vitrine[]>("http://localhost:8081/api/produto/lista");         
  }

}
