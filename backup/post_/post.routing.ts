import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PostComponent } from './post.component'

const postRoutes: Routes = [
    { path: 'post', component: PostComponent },
    { path: 'post/:id', component: PostComponent }
]
export const postRouting: ModuleWithProviders = RouterModule.forChild(postRoutes)
