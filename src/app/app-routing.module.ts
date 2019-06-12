import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesComponent } from './species/species.component';

const routes: Routes = [
  { path: 'specieslist/:speciesId', component: SpeciesListComponent },
  { path: '', component: SpeciesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
export const routingComponents = [SpeciesListComponent, SpeciesComponent]
