import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {AuthService} from '../auth.service';


import {PostsService} from './shared/posts.services';
import {PostsComponent} from './posts.component';
import {PostFormComponent} from './post-form/post-form.component';
import {MultiselectDropdownModule} from "angular-2-dropdown-multiselect";


@NgModule({
    declarations: [
        PostsComponent,
        PostFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MultiselectDropdownModule,
    ],
    exports: [
       PostsComponent
    ],
    providers: [ PostsService, AuthService],
})
export class PostsModule {
}
