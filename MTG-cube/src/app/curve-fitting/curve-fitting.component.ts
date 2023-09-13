import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// imprt {G}
// import { GoogleSheetsDbService } from 'ng-google-sheets-db';
// declare var google: any;

@Component({
  selector: 'app-curve-fitting',
  templateUrl: './curve-fitting.component.html',
  styleUrls: ['./curve-fitting.component.css']
})
export class CurveFittingComponent implements OnInit {
  cubeData$: Observable<any>;

  // constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

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
  //https://docs.google.com/spreadsheets/d/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/edit?usp=sharing
  ngOnInit(): void {
    //https://docs.google.com/spreadsheets/d/e/2PACX-1vSG4fYJt5FirDhBDZk7io8e2NQP5KMrgkcRqFsOP0CvfEgy3U3RmO_sFZL0Dil2W9YfOfJd9vkqpMhQ/pub?gid=1717074130&single=true&output=csv
    var id = "2PACX-1vSG4fYJt5FirDhBDZk7io8e2NQP5KMrgkcRqFsOP0CvfEgy3U3RmO_sFZL0Dil2W9YfOfJd9vkqpMhQ";
    var sheetName = "CubeManacurve";
    // var queryString = encodeURIComponent('SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8');

    // var query = new google.visualization.Query(
    //         'https://docs.google.com/spreadsheets/d/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/edit#gid=1717074130=' + queryString);
    // query.send(this.handleSampleDataQueryResponse);
    this.cubeData$ = this.googleSheetsDbService.getActive<>(
      id,
      sheetName,

    )
  }

  // handleSampleDataQueryResponse(response: { isError: () => any; getMessage: () => string; getDetailedMessage: () => string; getDataTable: () => any; }) {
  //   if (response.isError()) {
  //     alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
  //     return;
  //   }

  //   var data = response.getDataTable();
  //   var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  //   chart.draw(data, { height: 400 });
  // }


}
