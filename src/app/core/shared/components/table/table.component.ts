import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {TableOptions} from "./table";
import {SHUtils} from "@sh/base";
import {NgTemplateOutlet} from "@angular/common";

@Component({
    selector: 'ma-table',
    standalone: true,
    imports: [
        NgTemplateOutlet
    ],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

    @Input() styleClass?: string;

    @Input() options!: TableOptions[];

    @Input() data!: any[];

    @ContentChild('body', {static: false}) bodyTemplateRef!: TemplateRef<any>;

    ngOnInit(): void {
        SHUtils.notEmpty(this.options, "options")
    }
}
