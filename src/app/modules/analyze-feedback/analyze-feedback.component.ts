import { Component } from '@angular/core';
import { SelectComponent } from '../../shared/components/select/select.component';

@Component({
  selector: 'app-analyze-feedback',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './analyze-feedback.component.html',
  styleUrl: './analyze-feedback.component.scss'
})
export class AnalyzeFeedbackComponent {
title: string = "Análisi de Feedback"
}
