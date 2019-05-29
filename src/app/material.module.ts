import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card'

@NgModule({
    imports:[MatButtonModule,MatCardModule],
    exports:[MatButtonModule,MatCardModule]
})

export class MaterialModule{}