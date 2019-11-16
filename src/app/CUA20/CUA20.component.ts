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
  selector: 'app-CUA20',
  templateUrl: './CUA20.component.html',
  styleUrls: []
})
export class CUA20Component implements OnInit {

  centrosDeEstudios = centrosDeEstudiosHardcodeado
  centrosDeEstudiosColumns: string[] = ['nombre', 'direccion', 'pais', 'provincia', 'telefono', 'acciones']

  centrosDeAtencion = centrosDeAtencionHardcodeado
  centrosDeAtencionColumns: string[] = ['nombre', 'direccion', 'pais', 'provincia', 'telefono', 'profesional', 'acciones']

  constructor() { }

  ngOnInit() {
  }

}
