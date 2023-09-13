import { Component } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-curve-fitting',
  templateUrl: './curve-fitting.component.html',
  styleUrls: ['./curve-fitting.component.css']
})
export class CurveFittingComponent {
  deckManacurveColumnNames = [{label: 'Name', type: 'string'},
    {label: 'Count', type: 'number'},
    { role: 'annotation' },
    {role: 'tooltip'}
  
  ];
  deckManacurveData = [
    ['0-1', 5, "3", "Mana Value 0-1\nCards: 3"],
    ['2', 9, "7", "Mana Value 2\nCards: 7"],
    ['3', 8, "6", "Mana Value 3\nCards: 6"],
    ['4', 6, "4", "Mana Value 4\nCards: 4"],
    ['5', 4, "2", "Mana Value 5\nCards: 2"],
    ['6+', 3, "1", "Mana Value 6+\nCards: 1"],
 ];
 deckManacurveOptions = {  
    vAxis: { 
      // title: 'Card Count',
      gridlines: { count: 0 },
      viewWindowMode:'maximize',
              viewWindow:{
                min:0
              },
              textPosition: 'none'       
    },
    hAxis: {
      title: 'Mana Value',
      
    },

    colors: ['#404040'],
    annotations: {
      alwaysOutside: false,
      textStyle: {
        fontSize: 30,
        color: '#000',
        auraColor: 'none'
      }
    },
    legend: { position: "none" },
    bar: {groupWidth: "95%"},
    titleTextStyle: {
      bold:true
    },
    'chartArea': {'width': '100%', 'height': '80%'},
    
  };   
}
