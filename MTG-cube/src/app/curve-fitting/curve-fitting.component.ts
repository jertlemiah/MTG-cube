import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// imprt {G}
// import { GoogleSheetsDbService } from 'ng-google-sheets-db';
declare var google: any;
import { GoogleDriveProvider } from 'app/providers/google-drive-provider.service';
import { GoogleApis } from 'googleapis';
import { environment } from 'app/environments/environment.prod';

@Component({
  selector: 'app-curve-fitting',
  templateUrl: './curve-fitting.component.html',
  styleUrls: ['./curve-fitting.component.css'],
  providers: [GoogleDriveProvider]
})
export class CurveFittingComponent implements OnInit, AfterViewInit {
  // cubeData$: Observable<any>;
  dataId: string;
  cubeData: any;
  cubeDataLoaded: Promise<boolean> | undefined;

  ngAfterViewInit(): void {
    
  }

  getLinkToCube(): string {
    return environment.linkToCube;
  }

  constructor( gDrive: GoogleDriveProvider ) {
    // https://docs.google.com/spreadsheets/d/e/2PACX-1vSG4fYJt5FirDhBDZk7io8e2NQP5KMrgkcRqFsOP0CvfEgy3U3RmO_sFZL0Dil2W9YfOfJd9vkqpMhQ/pubhtml
    this.dataId = '1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko';

    // var data = new google.visualization.DataTable();
    //   data.addColumn('string', 'Label');
    //   data.addColumn('string', 'White');
    //   data.addColumn('string', 'Blue');
    //   data.addColumn('string', 'Black');
    //   data.addColumn('string', 'Red');
    //   data.addColumn('string', 'Green');
    //   data.addColumn('string', 'Colorless');
    //   data.addRow([
    //     "0-1",
    //     "10",
    //     "13",
    //     "14",
    //     "19",
    //     "12",
    //     "1"
    //   ]);
    
    
    // this.cubeDataLoaded = Promise.resolve(false);
    // this.dataId = '2PACX-1vSG4fYJt5FirDhBDZk7io8e2NQP5KMrgkcRqFsOP0CvfEgy3U3RmO_sFZL0Dil2W9YfOfJd9vkqpMhQ';
    gDrive.load()
      .then( ( data ) => {
        console.log("data in component: ");
        console.log(data );
        this.cubeData = data;
        
        // this.cubeData = google.visualization.arrayToDataTable([
        //   ['Year', 'Sales', 'Expenses', 'Profit'],
        //   ['2014', 1000, 400, 200],
        //   ['2015', 1170, 460, 250],
        //   ['2016', 660, 1120, 300],
        //   ['2017', 1030, 540, 350]
        // ]);
        this.cubeDataLoaded = Promise.resolve(true);

      }, (error) => {
        console.log( error );
        this.cubeDataLoaded = Promise.resolve(false);
      });
  }

  cubeManacurveOptions = {  
    title: 'Cube Mana Curve (interactable)',
    vAxis: { 
      
      // gridlines: { count: 0 },
      // viewWindowMode:'maximize',
      //         viewWindow:{
      //           min:0
      //         },
              // textPosition: 'none'       
    },
    hAxis: {
      title: 'Mana Value',
    },

    colors: ['#ffcc00','#0099ff', '#404040', '#ff3333', '#00b33c', '#996633'],
    annotations: {
      alwaysOutside: false,
      textStyle: {
        fontSize: 30,
        color: '#000',
        auraColor: 'none'
      }
    },
    // legend: { position: "none" },
    bar: {groupWidth: "85%"},
    titleTextStyle: {
      bold:true
    },
    'chartArea': {'width': '75%', 'height': '70%'},
    
  }; 


    // this.cubeData = data;
    cubeColumnNames = [
      {label: 'Label', type: 'string'},
      {label: 'White', type: 'number'},
      {label: 'Blue', type: 'number'},
      {label: 'Black', type: 'number'},
      {label: 'Red', type: 'number'},
      {label: 'Green', type: 'number'},
      {label: 'Colorless', type: 'number'},
    ];
    cubeData2 = [[
          "0-1",
          10,
          13,
          14,
          19,
          12,
          1
        ]];
    // cubeData2 = [
    //   ['2014', 1000, 400, 200],
    //   ['2015', 1170, 460, 250],
    //   ['2016', 660, 1120, 300],
    //   ['2017', 1030, 540, 350]
    // ]


  deckManacurveColumnNames = [
    {label: 'Name', type: 'string'},
    {label: 'Count', type: 'number'},
    { role: 'annotation' },
    {role: 'tooltip'}
  
  ];
  deckManacurveData = [
    ['0-1', 4, "3", "Mana Value 0-1\nCards: 3"],
    ['2', 8, "7", "Mana Value 2\nCards: 7"],
    ['3', 7, "6", "Mana Value 3\nCards: 6"],
    ['4', 5, "4", "Mana Value 4\nCards: 4"],
    ['5+', 4, "3", "Mana Value 5+\nCards: 3"],
    // ['6+', 3, "1", "Mana Value 6+\nCards: 1"],
 ];
 deckManacurveOptions = {  
    title:'Typical Draft Mana Curve (interactable)',
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
    'chartArea': {'width': '75%', 'height': '70%'},
    
  };   
  //https://docs.google.com/spreadsheets/d/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/edit?usp=sharing
  ngOnInit(): void {
    // //https://docs.google.com/spreadsheets/d/e/2PACX-1vSG4fYJt5FirDhBDZk7io8e2NQP5KMrgkcRqFsOP0CvfEgy3U3RmO_sFZL0Dil2W9YfOfJd9vkqpMhQ/pub?gid=1717074130&single=true&output=csv
    // var id = "2PACX-1vSG4fYJt5FirDhBDZk7io8e2NQP5KMrgkcRqFsOP0CvfEgy3U3RmO_sFZL0Dil2W9YfOfJd9vkqpMhQ";
    // var sheetName = "CubeManacurve";
    // // var queryString = encodeURIComponent('SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8');

    // // var query = new google.visualization.Query(
    // //         'https://docs.google.com/spreadsheets/d/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/edit#gid=1717074130=' + queryString);
    // // query.send(this.handleSampleDataQueryResponse);
    // this.cubeData$ = this.googleSheetsDbService.getActive<>(
    //   id,
    //   sheetName,

    // )
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
