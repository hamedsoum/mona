import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MAFormComponent} from './ma-form.component';

describe('MAFormComponent', () => {
    let component: MAFormComponent;
    let fixture: ComponentFixture<MAFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MAFormComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(MAFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
