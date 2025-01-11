import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MAFooterComponent} from './ma-footer.component';


describe('MAMAFooterComponent', () => {
  let component: MAFooterComponent;
  let fixture: ComponentFixture<MAFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MAFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
