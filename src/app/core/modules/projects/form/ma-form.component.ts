import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MAProject, MAProjectCreate} from '../../../domaines/ma-project';
import {MAProjectLocalStorageService} from '../../../services/ma-project-local-storage.service';
import {finalize, Subscription} from 'rxjs';
import {isEqual} from 'lodash';
import {SHUtils} from '../../../../../../../sh-ng-lib/dist/sh-base';
import {InputTextComponent} from '../../../shared/components/input/input-text/input-text.component';

@Component({
    selector: 'ma-form',
    standalone: true,
    imports: [ReactiveFormsModule, InputTextComponent],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})
export class MAFormComponent implements OnInit, OnDestroy {

    @Input() styleClass?: string;

    @Input() project?: MAProject;
    @Input() projectID?: string;

    @Output() saveEvent = new EventEmitter<MAProject>();

    formGroup?: FormGroup;

    loading?: boolean;

    error: any;

    subscription = new Subscription();

    constructor(private projectLocalStorageService: MAProjectLocalStorageService) {
    }

    ngOnInit(): void {
        if (!!this.project) this.retrieve();
        this.buildFields();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public save(event: Event): void {
        event.preventDefault();
        if (this.isCreateMode()) this.create();
        else this.update();
    }

    private isCreateMode(): boolean {
        return SHUtils.isEmpty(this.project);
    }

    private buildCreate(): MAProjectCreate {
        const formData = this.formGroup!.value;

        console.log('Form data ===>', formData);
        return {
            name: formData.name.trim(),
            key: formData.name.trim(),
            description: formData.description.trim(),
            starred: formData.name,
            type: formData.type,
            lead: formData.lead
        };
    }

    private create(): void {
        console.log('Form group ===>', this.formGroup);

        if (!this.formGroup!.valid) return;

        this.loading = true;
        this.error = null;

        const projectCreate = this.buildCreate();

        console.log('projectCreate ===>', projectCreate);

        this.subscription.add(this.projectLocalStorageService.create(projectCreate)
            .pipe(finalize(() => this.loading = false))
            .subscribe(
                {
                    next: (response: MAProject) => {
                        console.log('Project created');
                        this.saveEvent.emit(response);
                    },
                    error: error => this.error = error
                }
            ));
    }

    private update(): void {

        if (!this.formGroup?.valid) return;
        console.debug('Updating project [projectID: ' + this.projectID + '] ...');

        const updateData: Map<string, any> = this.buildUpdate();

        if (updateData.size === 0) {
            console.debug('Project not updated. No change detect ...');
        }

        this.loading = true;
        this.error = null;

        this.subscription.add(
            this.projectLocalStorageService.update(this.project!.id, updateData)
                .subscribe(
                    {
                        next: (response: MAProject) => {
                            console.debug('Project successfully updated :-) [id: ' + this.project!.id + ']');
                            this.saveEvent.emit(response);
                        },
                        error: error => this.error = error
                    }
                )
        );
    }

    private buildUpdate(): Map<string, any> {

        const formData = this.formGroup!.value;
        let fieldValueData: Map<string, any> = new Map();

        if (!isEqual(formData.name, this.project?.name)) fieldValueData.set('name', formData.name);
        if (!isEqual(formData.key, this.project?.key)) fieldValueData.set('key', formData.key);
        if (!isEqual(formData.description, this.project?.description)) fieldValueData.set('description', formData.description);
        if (!isEqual(formData.starred, this.project?.starred)) fieldValueData.set('starred', formData.starred);
        if (!isEqual(formData.type, this.project?.type)) fieldValueData.set('type', formData.type);
        if (!isEqual(formData.lead, this.project?.lead)) fieldValueData.set('lead', formData.lead);

        return fieldValueData;
    }

    private retrieve(): void {
        this.subscription.add(this.projectLocalStorageService.retrieve(this.projectID!).subscribe(
            {
                next: (response: MAProject) => {
                    console.log('Project retrieved');
                    this.project = response;
                },
                error: error => this.error = error
            }
        ));
    }

    private buildFields(): void {
        this.formGroup = new FormGroup({
            email: new FormControl('email', [Validators.required, Validators.email]),
            name: new FormControl(this.project?.name, [Validators.required]),
            key: new FormControl(this.project?.key, [Validators.required]),
            description: new FormControl(this.project?.description),
            starred: new FormControl(this.project?.starred),
            type: new FormControl(this.project?.type, [Validators.required]),
            lead: new FormControl(this.project?.lead, [Validators.required])
        });
    }
}
