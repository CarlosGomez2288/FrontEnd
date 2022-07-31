import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private educacionServi: EducacionService, private tokenServi: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenServi.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionServi.lista().subscribe(
      data => {
        this.educacion = data;
      }
    )
  }

  delete(id?: number): void {
    if (id != undefined) {
      this.educacionServi.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("Error en borrar")
        }
      )
    }
  }
}
