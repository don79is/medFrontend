import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


import {BlogsService} from './shared/blogs.services';
import {BlogsComponent} from './blogs.component';


@NgModule({
    declarations: [
        BlogsComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
       BlogsComponent
    ],
    providers: [ BlogsService],
})
export class BlogsModule {
}
