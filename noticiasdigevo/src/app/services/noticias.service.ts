import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Noticia } from '../interfaces/noticia';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { }

  get(){
  	return this.httpClient.get(this.API_ENDPOINT + '/noticias');
  }

  getOne(id){
  	if(id)
  		return this.httpClient.get(this.API_ENDPOINT + '/noticias/'+ id );
  	else
  		this.get();
  }

  save(noticia: Noticia){
  	const headers = new HttpHeaders({'Content-Type': 'application/json'});
  	return this.httpClient.post(this.API_ENDPOINT + '/noticias', noticia, {headers: headers});
  }

  put(noticia){
  	const headers = new HttpHeaders({'Content-Type': 'application/json'});
  	return this.httpClient.put(this.API_ENDPOINT + '/noticias/' + noticia.id, noticia, {headers: headers});
  }

  delete(id){
  	const headers = new HttpHeaders({'Content-Type': 'application/json'});
  	return this.httpClient.delete(this.API_ENDPOINT + '/noticias/' + id);
  }
}
