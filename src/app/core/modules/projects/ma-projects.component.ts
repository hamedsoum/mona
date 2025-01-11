import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAProjectPartial, MAProjectSearch} from '../../domaines/ma-project';
import {MAProjectLocalStorageService} from '../../services/ma-project-local-storage.service';
import {finalize} from 'rxjs';
import {SHSearchResult} from '../../../../../../sh-ng-lib/dist/sh-base';
import {MAButtonComponent} from '../components/buttons/ma-button.component';

@Component({
    selector: 'ma-projects',
    standalone: true,
    imports: [MAButtonComponent],
    templateUrl: './ma-projects.component.html',
    styleUrl: './ma-projects.component.scss'
})
export class MAProjectsComponent implements OnInit {

    @Input() styleClass?: string;

    projects?: MAProjectPartial[];

    error: any;
    loading: boolean = false;

    constructor(private router: Router, private projectLocalStorageService: MAProjectLocalStorageService) {
    }

    ngOnInit(): void {
        this.search();
    }

    public goToForm(): void {
        this.router.navigateByUrl('projects/form').then();
    }

    private search(): void {

        this.error = null;

        const search: MAProjectSearch = {};
        this.projectLocalStorageService.search(search)
            .pipe(finalize(() => this.loading = false))
            .subscribe(
                {
                    next: (response: SHSearchResult<MAProjectPartial>) => {
                        this.projects = response.data;
                    },
                    error: error => this.error = error
                }
            );
    }
}
