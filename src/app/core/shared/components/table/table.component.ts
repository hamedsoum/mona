import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {TableOptions} from "./table";
import {SHUtils} from "@sh/base";
import {NgTemplateOutlet} from "@angular/common";
import {LoaderComponent} from "../loader/loader.component";

@Component({
    selector: 'ma-table',
    standalone: true,
    imports: [
        NgTemplateOutlet,
        LoaderComponent
    ],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

    @Input() styleClass?: string;

    @Input() options!: TableOptions[];

    @Input() data!: any[];

    @Input() loading?: boolean;

    @ContentChild('body', {static: false}) bodyTemplateRef!: TemplateRef<any>;

    ngOnInit(): void {
        SHUtils.notEmpty(this.options, "options");
        console.log(this.data)
    }

    public isDataEmpty(): boolean {
        return SHUtils.isEmpty(this.data)
    }

    public isLoading(): boolean | undefined {
        return this.loading
    }
}
