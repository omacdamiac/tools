import { Component } from '@angular/core';
import { SelectComponent } from '../../../../shared/components/select/select.component';

@Component({
  selector: 'app-parameter',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.scss'
})
export class ParameterComponent {

}
