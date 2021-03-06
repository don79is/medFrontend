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
import {rolesRouting} from './admin/roles/roles.routing';
import {RolesModule} from './admin/roles/roles.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { MenuNAvBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import {BlogsModule} from './blogs/blogs.module';
import {blogsRouting} from './blogs/blogs.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SchedulesModule} from './admin/schedules/schedules.module';
import {schedulesRouting} from './admin/schedules/scheduless.routing';
import {AppService} from './shared/app.service';




@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        GalleryComponent,
        ContactsComponent,
        AboutComponent,
        MenuNAvBarComponent,
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
        RolesModule,
        rolesRouting,
        BlogsModule,
        blogsRouting,
        SchedulesModule,
        schedulesRouting,
        BrowserAnimationsModule,
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
