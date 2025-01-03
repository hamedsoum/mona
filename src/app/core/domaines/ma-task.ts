import {SHPKDTOAuditFull, SHPKSearchFilter, SHUser} from '@sh/base';export interface MATask extends SHPKDTOAuditFull<SHUser> {    id: string;    code: string,    name: string;    description?: string;    status: MATaskStatus;    files?: string[]}export interface MATaskPartial {    id: string;    code: string,    name: string;    status: MATaskStatus;}export interface MATaskPartial {    id: string;    code: string,    name: string;    statuses: MATaskStatus;}export interface MATaskSearch extends SHPKSearchFilter {    statuses: string[];    codes: string[]}export enum MATaskStatus {    TODO = 'todo',    IN_PROGRESS = 'inProgress',    IN_VALIDATION = 'inValidation',    DONE = 'done'}