import {NgModule} from '@angular/core';import {SidebarComponent} from './sidebar/sidebar.component';import {HeaderComponent} from './header/header.component';import {MAFooterComponent} from './footer/ma-footer.component';import {MALogoComponent} from './logo/logo.component';@NgModule({    declarations: [        SidebarComponent,        HeaderComponent,        MAFooterComponent,        MALogoComponent    ],    exports: [        SidebarComponent,        HeaderComponent,        MAFooterComponent,        MALogoComponent    ]})export class MATemplatesModule {}