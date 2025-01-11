import {Component, Input} from '@angular/core';

@Component({
  selector: 'ma-footer',
  templateUrl: './ma-footer.component.html',
  styleUrl: './ma-footer.component.scss'
})
export class MAFooterComponent {

  @Input() styleClass?: string;

}
