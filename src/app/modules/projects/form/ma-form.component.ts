import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAProject, MAProjectCreate} from '../../../core/domaines/ma-project';
import {MAProjectLocalStorageService} from '../../../core/services/ma-project-local-storage.service';
import {finalize, Subscription} from 'rxjs';
import {isEqual} from 'lodash';

@Component({
    selector: 'ma-form',
    standalone: true,
    imports: [],
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

    private buildCreate(): MAProjectCreate {
        const formData = this.formGroup!.value;
        return {
            name: formData.name.trim(),
            key: formData.name.trim(),
            description: formData.name.trim(),
            starred: formData.name,
            type: formData.type,
            lead: formData.lead
        };
    }

    private create(): void {
        if (!this.formGroup!.valid) return;

        this.loading = true;
        this.error = null;

        const projectCreate = this.buildCreate();
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

        const updateData: { [key: string]: any } = this.buildUpdate();

        if (updateData.size === 0) {
            console.debug('Project not updated. No change detect ...');
        }

        this.loading = true;
        this.error = null;

        this.subscription.add(
            this.projectLocalStorageService.update(this.project!.id, updateData).subscribe
        );
    }

    private buildUpdate(): { [key: string]: any } {

        const formData = this.formGroup!.value;
        let fieldValueData: { [key: string]: any } = {};

        if (!isEqual(formData.name, this.project?.name)) fieldValueData['name'] = formData.name;
        if (!isEqual(formData.key, this.project?.key)) fieldValueData['key'] = formData.key;
        if (!isEqual(formData.description, this.project?.description)) fieldValueData['description'] = formData.description;
        if (!isEqual(formData.starred, this.project?.starred)) fieldValueData['starred'] = formData.starred;
        if (!isEqual(formData.type, this.project?.type)) fieldValueData['type'] = formData.type;
        if (!isEqual(formData.lead, this.project?.lead)) fieldValueData['lead'] = formData.lead;

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
            name: new FormControl(this.project?.name, [Validators.required]),
            key: new FormControl(this.project?.key, [Validators.required]),
            description: new FormControl(this.project?.description),
            starred: new FormControl(this.project?.starred),
            type: new FormControl(this.project?.type, [Validators.required]),
            lead: new FormControl(this.project?.lead, [Validators.required])
        });
    }
}
