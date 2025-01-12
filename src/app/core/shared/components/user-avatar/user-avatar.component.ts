import {Component, Input, OnInit} from '@angular/core';
import {SHUserPartial} from '@sh/base';

@Component({
    selector: 'ma-user-avatar',
    standalone: true,
    imports: [],
    templateUrl: './user-avatar.component.html',
    styleUrl: './user-avatar.component.scss'
})
export class UserAvatarComponent implements OnInit {

    @Input() styleClass?: string;

    @Input() data!: SHUserPartial;

    ngOnInit(): void {
        // SHUtils.notEmpty(this.data, 'data');
    }
}
