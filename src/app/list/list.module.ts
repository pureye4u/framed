import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { listRouting } from './list.routing'

@NgModule({
    imports: [listRouting],
    declarations: [ListComponent]
})
export class ListModule { }
