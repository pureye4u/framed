import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import { postRouting } from './post.routing';

@NgModule({
    declarations: [
        PostComponent
    ],
    imports: [
        postRouting
    ],
    bootstrap: [
        PostComponent
    ]
})
export class PostModule { }
