import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {adminRouting} from './admin/admin.routing';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {AdminModule} from './admin/admin.module';
import {UsersModule} from './admin/users/users.module';
import {usersRouting} from './admin/users/users.routing';
import {PostsModule} from './admin/posts/posts.module';
import {postsRouting} from './admin/posts/posts.routing';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        AdminModule,
        adminRouting,
        UsersModule,
        usersRouting,
        PostsModule,
        postsRouting,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
