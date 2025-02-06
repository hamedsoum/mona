import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidatorFn, Validators} from '@angular/forms';

@Component({
    selector: 'ma-input-text',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './input-text.component.html',
    styleUrl: './input-text.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputTextComponent),
            multi: true
        }
    ]
})
export class InputTextComponent implements OnInit {

    @Input() styleClass?: string;
    @Input() labelStyleClass?: string;

    @Input() label?: string;
    @Input() placeholder?: string;

    @Input() email: boolean = false;

    @Input() required?: boolean;

    @Input() type?: string;

    @Input() fieldName?: string;

    control!: FormControl;

    onTouched: any;
    onChange: any;

    ngOnInit(): void {
        // SHUtils.notEmpty(this.control, 'control');

        const validators: ValidatorFn[] = [];

        if (this.required) {
            validators.push(Validators.required);
        }

        if (this.email) {
            validators.push(Validators.email);
        }

        this.control = new FormControl(this.fieldName, validators);

    }

    writeValue(value: any): void {
        this.control.setValue(value);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
        this.control.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        isDisabled ? this.control.disable() : this.control.enable();
    }
}
