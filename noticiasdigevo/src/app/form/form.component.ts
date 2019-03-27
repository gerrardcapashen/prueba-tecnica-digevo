import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from '../interfaces/noticia';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
	noticia: Noticia = {
		titulo: null,
		descripcion: null
	};

	id: any;
	editing: boolean = false;
	noticias: Noticia;

	constructor(private noticiasService: NoticiasService, private activatedRoute: ActivatedRoute, private router: Router) {
		this.id = this.activatedRoute.snapshot.params['id'];
		if(this.id){
			this.editing = true;
			this.noticiasService.getOne(this.id).subscribe((data: Noticia) => { 
				this.noticia = data;
			}, (error) => {
				console.log(error);
			});
		}else{
			this.editing = false;
		}
	}

	ngOnInit() {
	}

	grabarNoticia(){
		if (this.editing){
			this.noticiasService.put(this.noticia).subscribe((data) => {
				alert('Noticia actualizada');
				console.log(data);
				this.router.navigate(['/home']);
			}, (error) => {
				console.log(error);
				alert('Ocurrió un error');
			});
		}else{
			this.noticiasService.save(this.noticia).subscribe((data) => {
				alert('Noticia grabada');
				console.log(data);
				this.router.navigate(['/home']);
			}, (error) => {
				console.log(error);
				alert('Ocurrió un error');
			});
		}
	}
}
