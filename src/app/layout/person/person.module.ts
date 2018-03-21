import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { PersonEditComponent } from './person-edit.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, PersonRoutingModule, PageHeaderModule],
    declarations: [PersonComponent, PersonEditComponent]
})
export class PersonModule {}
