import { Component, OnInit } from '@angular/core';

const centrosDeEstudiosHardcodeado = [
  {
    nombre: 'Mayo Clinic',
    direccion: '5777 E. Mayo Bldv. Phoenix',
    pais: 'Estados Unidos',
    provincia: 'Arizona',
    telefono: '480-515-6296 / 480-342-2000'
  }
]

const centrosDeAtencionHardcodeado = [
  {
    nombre: 'Fleni',
    direccion: 'Montañeses 2325',
    pais: 'Argentina',
    provincia: 'Distrito Federal',
    telefono: '011 5777 3200',
    profesional: 'Dr. Acosta'
  }
]
@Component({
  selector: 'app-CUT02',
  templateUrl: './CUT02.component.html',
  styles: []
})
export class CUT02Component implements OnInit {

  centrosDeEstudios = centrosDeEstudiosHardcodeado
  centrosDeEstudiosColumns: string[] = ['nombre', 'direccion', 'pais', 'provincia', 'telefono']

  centrosDeAtencion = centrosDeAtencionHardcodeado
  centrosDeAtencionColumns: string[] = ['nombre', 'direccion', 'pais', 'provincia', 'telefono', 'profesional']



  constructor() { }

  ngOnInit() {
  }

}

