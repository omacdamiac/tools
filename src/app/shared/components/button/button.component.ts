import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() texto!: string;
  @Input() color!: string;
  @Input() class!: string;
  @Input() load!: boolean;
  @Output() evento = new EventEmitter<string>();

  action() {
    this.evento.emit('Button');
  }
  // MÉTODO PARA LAS PRUEBAS
  processButton(): void {
    this.texto = this.texto.toUpperCase();
  }
}
