import { Component } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-curve-fitting',
  templateUrl: './curve-fitting.component.html',
  styleUrls: ['./curve-fitting.component.css']
})
export class CurveFittingComponent {
  columnNames = [{label: 'Name', type: 'string'},
    {label: 'Count', type: 'number'},
    { role: 'annotation' },
    {role: 'tooltip'}
  
  ];
  myData = [
    ['0-1', 5, "3", "Mana Value 0-1\nCards: 3"],
    ['2', 9, "7", "Mana Value 2\nCards: 7"],
    ['3', 8, "6", "Mana Value 3\nCards: 6"],
    ['4', 6, "4", "Mana Value 4\nCards: 4"],
    ['5', 4, "2", "Mana Value 5\nCards: 2"],
    ['6+', 3, "1", "Mana Value 6+\nCards: 1"],
 ]; 
}
