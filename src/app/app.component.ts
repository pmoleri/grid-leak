import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
