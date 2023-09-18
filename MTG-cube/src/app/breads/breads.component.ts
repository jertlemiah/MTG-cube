// import { Component } from '@angular/core';
import { environment } from 'app/environments/environment.prod';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import {Component, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-breads',
  templateUrl: './breads.component.html',
  styleUrls: ['./breads.component.css'],
  // encapsulation: ViewEncapsulation.None,
  // standalone: true,
  // imports: [MatButtonModule, MatTooltipModule],
})
export class BreadsComponent {
  getLinkToCube(): string {
    return environment.linkToCube;
  }

  constructor ( matButtonModule: MatButtonModule , matTooltipModule: MatTooltipModule) {}
}
