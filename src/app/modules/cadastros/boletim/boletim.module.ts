import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoletimRoutingModule } from './boletim-routing.module';
import { BoletimComponent } from './boletim.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormularioModule } from '../../formulario/formulario.module';
import { PesquisaModule } from '../../pesquisaboletim/pesquisa.module';


@NgModule({
  declarations: [BoletimComponent],
  imports: [
    CommonModule,
    BoletimRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FormularioModule,
    PesquisaModule,
  ]
})
export class BoletimModule { }
