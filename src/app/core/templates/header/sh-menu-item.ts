import {IconDefinition} from "@fortawesome/fontawesome-common-types";export interface SHMenuItem {    id: string;    styleClass?: string;    disabled?: boolean;    label: string;    link: string;    icon?: IconDefinition;    iconStyle?: string;    click?: () => void;}