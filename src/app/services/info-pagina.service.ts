import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any [] = [];

  constructor( private http: HttpClient) {
    
    this.cargarInfo();
    this.cargarEquipo();

   }

   private cargarInfo () {
    // console.log('Servicio de infoPagina corriendo');
    // Necesito algo que me permita leer mi archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      // console.log(resp);
      // tslint:disable-next-line: no-string-literal
      // console.log(resp['email']);
    });
   }

   private cargarEquipo(){
    this.http.get('https://portafolio-angular-18aa2.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
      
      this.equipo = resp;
      console.log(resp);
      // tslint:disable-next-line: no-string-literal
      // console.log(resp['email']);
    });
   }

}
