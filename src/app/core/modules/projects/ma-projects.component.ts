import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAProject, MAProjectPartial, MAProjectSearch} from '../../domaines/ma-project';
import {MAProjectLocalStorageService} from '../../services/ma-project-local-storage.service';
import {finalize} from 'rxjs';
import {SHSearchResult} from '@sh/base';
import {MAButtonComponent} from '../components/buttons/ma-button.component';
import {TableComponent} from "../../shared/components/table/table.component";
import {TableOptions} from "../../shared/components/table/table";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {NgClass} from "@angular/common";
import {LoaderComponent} from "../../shared/components/loader/loader.component";
import {faRefresh} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'ma-projects',
    standalone: true,
    imports: [MAButtonComponent, TableComponent, FaIconComponent, NgClass, LoaderComponent],
    templateUrl: './ma-projects.component.html',
    styleUrl: './ma-projects.component.scss'
})
export class MAProjectsComponent implements OnInit {

    readonly ICON_STAR = faStar;
    readonly ICON_REFRESH = faRefresh;

    @Input() styleClass?: string;

    projects: MAProjectPartial[] = [];

    error: any;
    loading: boolean = false;
    loadingStarred: boolean = false;

    tableOptions!: TableOptions[];

    constructor(private router: Router, private projectLocalStorageService: MAProjectLocalStorageService) {
    }

    ngOnInit(): void {
        this.buildTableOptions();
        this.search();
    }

    public goToForm(): void {
        this.router.navigateByUrl('projects/form').then();
    }

    private buildTableOptions(): void {
        this.tableOptions = [
            {
                field: 'star',
                header: 'star'
            },
            {
                field: 'name',
                header: 'Name'
            },
            {
                field: 'key',
                header: 'Key'
            },
            {
                field: 'type',
                header: 'Type'
            },
            {
                field: 'lead',
                header: 'Lead'
            },
            {
                field: 'more',
                header: 'More actions'
            }
        ]
    }

    public refresh(): void {
        this.search()
    }

    private search(): void {

        this.error = null;
        this.loading = true;

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

    public onStarred(projectID: string, starred: boolean): void {
        this.loadingStarred = true;
        this.projectLocalStorageService.update(projectID, new Map([["starred", !starred]]))
            .pipe(finalize(() => this.loadingStarred = false))
            .subscribe(
                {
                    next: (updatedProject: MAProject) => {
                        this.projects.map(p => {
                            if (p.id === updatedProject.id) p.starred = updatedProject.starred;
                        })
                        this.projects = [...this.projects];
                        console.log(this.projects)
                    },
                    error: error => this.error = error
                }
            );
    }
}
