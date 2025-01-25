import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
    selector: 'ma-input-text',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './input-text.component.html',
    styleUrl: './input-text.component.scss'
})
export class InputTextComponent implements OnInit {

    @Input() styleClass?: string;
    @Input() labelStyleClass?: string;

    @Input() label?: string;
    @Input() placeholder?: string;

    @Input() control?: FormControl;

    ngOnInit(): void {
        this.control = new FormControl('', [Validators.required]);
    }
}
