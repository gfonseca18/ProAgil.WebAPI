import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any = [];
  imagemAltura = 50;
  imagemMargem = 2;
  mostrarImagem = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }
  alternarImagem(){
    this.mostrarImagem = !this.mostrarImagem;
  }
  getEventos(){
    this.http.get('http://localhost:5000/') .subscribe(response => {
      this.eventos = response;
    }, error => {
      console.log(error);  
    });
  }

}
