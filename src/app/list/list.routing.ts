import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListComponent } from './list.component'

const listRoutes: Routes = [
    { path: 'list', component: ListComponent }
]
export const listRouting: ModuleWithProviders = RouterModule.forChild(listRoutes)
