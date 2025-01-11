import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAProjectRecordComponent } from './ma-project-record.component';

describe('MARecordComponent', () => {
  let component: MAProjectRecordComponent;
  let fixture: ComponentFixture<MAProjectRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MAProjectRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAProjectRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
