import { Component } from '@angular/core';
import { Alumno } from 'src/models/Alumno.Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista_Herrera';
  isHead = true;
  isBody = true;

  alumnos: Alumno[] = 
  [
    new Alumno (1, 'Luis', 'Marcelo', 'Alarcón', 'Calderón', 10, 'luis.alarcon@gmail.com', false),
    new Alumno (2, 'Fanny', 'Isabel', 'Altamirano', 'Narváez', 12, 'fanny.altamirano@gmail.com', true),
    new Alumno (3, 'Janeth', 'Alexandra', 'Arias', 'Mendoza', 15, 'janeth.arias@gmail.com', true),
    new Alumno (4, 'Juan', 'José', 'Borja', 'Téllez', 8, 'juan.borja@gmail.com', true),
    new Alumno (5, 'Fabián', 'Roberto', 'Cueva', 'Astudillo', 10, 'fabian.cuerva@gmail.com', true),
    new Alumno (6, 'Sindy', 'Pamela', 'Erazo', 'Bustamante', 12, 'sindy.erazo@gmail.com', false),
    new Alumno (7, 'Andrés', 'Fernando', 'García', 'Pinos', 17, 'andres.garcia@gmail.com', true),
    new Alumno (8, 'Mercedes', 'Ivonne', 'Hernández', 'Carillo', 15, 'merced.hern@gmail.com', false),
    new Alumno (9, 'Santiago', 'Enrique', 'Jaramillo', 'Reyes', 9, 'santi.jaramillo@gmail.com', true),
    new Alumno (10, 'Madeline', 'Erika', 'Palma', 'Morales', 14, 'madeline.palma@gmail.com', true),
  ]
}
