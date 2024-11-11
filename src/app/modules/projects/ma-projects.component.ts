import {Component, Input} from '@angular/core';

@Component({
  selector: 'ma-projects',
  standalone: true,
  imports: [],
  templateUrl: './ma-projects.component.html',
  styleUrl: './ma-projects.component.scss'
})
export class MAProjectsComponent {

  @Input() styleClass? : string;

  public create(): void {
    console.log("Create new Project");
  }

}
