import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAProjectsComponent } from './ma-projects.component';

describe('ProjectsComponent', () => {
  let component: MAProjectsComponent;
  let fixture: ComponentFixture<MAProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MAProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
