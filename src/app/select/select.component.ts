import { Component } from '@angular/core';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES } from 'igniteui-angular';

@Component({
  selector: 'app-select',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {}
