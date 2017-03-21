import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { ListModule } from './list/list.module';
import { PostModule } from './post/post.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        ListModule,
        PostModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
