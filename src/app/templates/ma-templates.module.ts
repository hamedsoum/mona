import {NgModule} from '@angular/core';import {SidebarComponent} from './sidebar/sidebar.component';import {HeaderComponent} from './header/header.component';import {MAFooterComponent} from './footer/ma-footer.component';import {MALogoComponent} from './logo/logo.component';import {FaIconComponent} from '@fortawesome/angular-fontawesome';@NgModule({    declarations: [        SidebarComponent,        HeaderComponent,        MAFooterComponent,        MALogoComponent    ],    imports: [        FaIconComponent    ],    exports: [        SidebarComponent,        HeaderComponent,        MAFooterComponent,        MALogoComponent    ]})export class MATemplatesModule {}