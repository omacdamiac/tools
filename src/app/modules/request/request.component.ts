import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SelectComponent } from '../../shared/components/select/select.component';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [RouterOutlet, SelectComponent, NgFor, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss'
})
export class RequestComponent {
title:string = "Creación de request"
lista: any = [
  { id: 1, name: 'Creador/a' },
  { id: 1, name: 'Estado' },
  { id: 1, name: 'Fecha inicial' },
  { id: 1, name: 'Fecha final' },
];
cards: any = [
  { id: 1, name: 'Uno' },
  { id: 1, name: 'Dos' },
  { id: 1, name: 'tres' },
];

evento() {
  console.log('EVENTO');
  return;
}
}
