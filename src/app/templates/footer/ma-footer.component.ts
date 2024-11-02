import {Component, Input} from '@angular/core';

@Component({
  selector: 'ma-footer',
  standalone: true,
  imports: [],
  templateUrl: './ma-footer.component.html',
  styleUrl: './ma-footer.component.scss'
})
export class MAFooterComponent {

  @Input() styleClass?: string;

}
