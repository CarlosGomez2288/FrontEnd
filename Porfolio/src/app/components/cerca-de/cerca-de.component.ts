import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/personas.model';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-cerca-de',
  templateUrl: './cerca-de.component.html',
  styleUrls: ['./cerca-de.component.css']
})

export class CercaDeComponent implements OnInit {
  Persona: persona = new persona('','');
  constructor(
    public personaService:PersonaService
    ) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{
      this.Persona = data})
  }

}
