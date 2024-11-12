import { Component } from '@angular/core';
import { SelectComponent } from '../../../../shared/components/select/select.component';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './query.component.html',
  styleUrl: './query.component.scss'
})
export class QueryComponent {

}
