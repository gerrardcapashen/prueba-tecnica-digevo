import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { Noticia } from '../interfaces/noticia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	API_ENDPOINT = 'http://localhost:8000/api';
	noticias: Noticia[];
	constructor(private noticiaService: NoticiasService) {
		this.getNoticias();
	}

	ngOnInit() {
	}

	getNoticias(){
		this.noticiaService.get().subscribe((data: Noticia[]) => {
			this.noticias = data;
		}, (error) => {
			console.log(error);
			alert('Ocurrió un error');
		});
	}

	delete(id){
		if (confirm('Eliminar esta noticia?')) {
			this.noticiaService.delete(id).subscribe((data) => {
				alert('Noticia eliminada');
				console.log(data);
				this.getNoticias();
			}, (error) => {
				console.log(error);
				alert('Ocurrió un error');
			});
		}
	}
}
