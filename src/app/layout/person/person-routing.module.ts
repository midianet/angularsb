import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonEditComponent } from './person-edit.component';

const routes: Routes = [
    {path: ''        , component: PersonComponent},
    {path: 'edit'    , component: PersonEditComponent},
    {path: 'edit/:id', component: PersonEditComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
   
exports: [RouterModule]
})
export class PersonRoutingModule {}
