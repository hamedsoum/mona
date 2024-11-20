import {Injectable} from '@angular/core';import {SHBaseService, SHPKDTOAuditFull, SHPKDTOAuditFullState, SHSearchResult, SHUtils} from '@sh/base';import {MAProject, MAProjectCreate, MAProjectPartial, MAProjectSearch} from '../domaines/ma-project';import {SHLocalStorageService} from '@sh/core';import {Observable, of} from 'rxjs';import {MA_LOCAL_STORAGE_PROJECTS} from '../constants/ma-constant';import {randomUUID} from 'node:crypto';import {get} from 'lodash';import {NEYMAR_JR} from '../mock/sh-mock.constant';@Injectable({providedIn: 'root'})export class MAProjectLocalStorageService extends SHBaseService<MAProject, MAProjectPartial, MAProjectSearch> {    constructor(private localeStorageService: SHLocalStorageService) {        super();    }    public create(body: MAProjectCreate): Observable<MAProject> {        const newProject = this.toProject(body);        const projects = this.getProjects();        projects.push(newProject);        return of(newProject);    }    public find(search: MAProjectSearch): Observable<MAProjectPartial[]> {        let internalObjects = this.getProjects().map(project => this.toPartial(project));        if (!SHUtils.isEmpty(search.starred)) internalObjects = [...internalObjects.filter(object => object.starred === search.starred!)];        if (!SHUtils.isEmpty(search.query)) internalObjects = [...internalObjects.filter(object => object.name.includes(search.query!.trim()))];        //TODO: Handle filter here        return of(internalObjects);    }    public purge(projectID: string): Observable<void> {        const project = this.getProject(projectID);        const projects = this.getProjects();        const internalProjectID = projects.findIndex(p => p === project);        projects.splice(internalProjectID, 1);        this.setProjects(projects);        return of();    }    public retrieve(projectID: string): Observable<MAProject> {        return of(this.getProject(projectID));    }    public search(search: MAProjectSearch): Observable<SHSearchResult<MAProjectPartial>> {        let internalObjects = this.getProjects().map(project => this.toPartial(project));        if (!SHUtils.isEmpty(search.starred)) internalObjects = [...internalObjects.filter(object => object.starred === search.starred!)];        if (!SHUtils.isEmpty(search.query)) internalObjects = [...internalObjects.filter(object => object.name.includes(search.query!.trim()))];        return of({                total: internalObjects.length,                data: internalObjects,                pagination: {                    page: 0,                    size: 10                }            }        );    }    public setAsDeleted(projectID: string): Observable<SHPKDTOAuditFull> {        const project = this.getProject(projectID);        project.deleted = true;        project.deletedOn = new Date().toISOString();        const projects = this.getProjects();        const internalProjectID = projects.findIndex(p => p === project);        projects[internalProjectID] = project;        this.setProjects(projects);        return of({            createdBy: '',            createdOn: new Date().toISOString(),            id: randomUUID(),            state: SHPKDTOAuditFullState.DELETED,            deletedOn: new Date().toISOString()        });    }    public update(projectID: string, fieldValueData: Map<string, any>): Observable<MAProject> {        const projects = this.getProjects();        const project: any = this.getProject(projectID);        let isObjectUpdated: boolean = false;        fieldValueData.forEach((value, key) => {            if (!SHUtils.isEmpty(get(project, key))) {                project[key] = value;                isObjectUpdated = true;            }        });        if (isObjectUpdated) {            const internalProjectID = projects.findIndex(p => p === project);            projects[internalProjectID] = project;            this.setProjects(projects);        }        return of(project);    }    private toPartial(project: MAProject): MAProjectPartial {        return {            key: project.key,            lead: project.lead,            logo: project.logo,            name: project.name,            starred: project.starred,            type: project.type        };    }    private toProject(projectCreate: MAProjectCreate): MAProject {        return {            activeUpdatedBy: undefined,            createdBy: NEYMAR_JR,            createdOn: new Date().toISOString(),            id: randomUUID(),            key: projectCreate.key,            lead: NEYMAR_JR,            name: projectCreate.name,            state: SHPKDTOAuditFullState.ACTIVE,            type: projectCreate.type        };    }    private getProjects(): MAProject[] {        return this.localeStorageService.getObject(MA_LOCAL_STORAGE_PROJECTS) ? this.localeStorageService.getObject(MA_LOCAL_STORAGE_PROJECTS) : [];    }    private getProject(projectID: string): MAProject {        SHUtils.notEmpty(projectID, 'projectID');        const projects = this.getProjects();        if (SHUtils.isEmpty(projects)) throw Error('Project list is empty');        else {            const project = projects?.find(item => item.id === projectID);            if (SHUtils.isEmpty(project)) throw Error(`'Cannot retrieve Project with ID ${projectID}`);            else return project!;        }    }    private setProjects(projects: MAProject[]): void {        this.localeStorageService.setObject(MA_LOCAL_STORAGE_PROJECTS, projects);    }}