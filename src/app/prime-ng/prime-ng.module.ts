import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';

import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports:[
        AccordionModule,
        PanelModule,
        ButtonModule,
        TableModule,
        ToastModule,
        CalendarModule,
        SliderModule,
        MultiSelectModule,
        ContextMenuModule,
        DialogModule,
        DropdownModule,
        ProgressBarModule,
        InputTextModule,
        RatingModule,
        CheckboxModule
    ]
})
export class PrimeNgModule { }
