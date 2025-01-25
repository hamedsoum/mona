import {Component, Input} from '@angular/core';

@Component({
    selector: 'ma-loader',
    standalone: true,
    template: `<p class="sh-p-0 sh-m-0">{{ loader }}</p>`,
    styleUrl: './loader.component.scss'
})
export class LoaderComponent {

    @Input() styleClass?: string;

    loader: string = '';

    constructor() {
        setInterval(() => {
            if (this.loader.length < 3) this.loader = this.loader + '.';
            else this.loader = '';
        }, 500);
    }

}
