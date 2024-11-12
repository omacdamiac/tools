import { Component } from '@angular/core';
import { SelectComponent } from '../../shared/components/select/select.component';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-analizer-conversation',
  standalone: true,
  imports: [SelectComponent, NgFor, MatIconModule, RouterLink],
  templateUrl: './analizer-conversation.component.html',
  styleUrl: './analizer-conversation.component.scss',
})
export class AnalizerConversationComponent {
  title: string = 'Analizador de Conversaciones';
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
