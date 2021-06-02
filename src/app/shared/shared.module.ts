import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCardItemComponent } from './artist-card-item/artist-card-item.component';



@NgModule({
  declarations: [
    ArtistCardItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArtistCardItemComponent
  ]
})
export class SharedModule { }
