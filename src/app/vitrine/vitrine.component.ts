import { Component, OnInit } from '@angular/core';
import { Vitrine } from './vitrine.model';
import { ActivatedRoute } from '@angular/router';
import { VitrineService } from '../service/vitrine.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit{
  lista: Vitrine[] = [];

  constructor(private vitrineService: VitrineService,
    private rotas: ActivatedRoute) {}

    ngOnInit(): void {
        this.carregar();
      }     
           
  
    public carregar(){
      this.vitrineService.listar().subscribe(
        (vitrine: Vitrine[]) => {
          this.lista = vitrine;
        },
      )
    }
  }
  


