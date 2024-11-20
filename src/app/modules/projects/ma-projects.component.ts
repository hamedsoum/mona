import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ma-projects',
  standalone: true,
  imports: [],
  templateUrl: './ma-projects.component.html',
  styleUrl: './ma-projects.component.scss'
})
export class MAProjectsComponent {

  @Input() styleClass? : string;

  constructor(private router: Router) {
  }

  public goToForm(): void {
    this.router.navigateByUrl('projects/form').then();
  }
}
