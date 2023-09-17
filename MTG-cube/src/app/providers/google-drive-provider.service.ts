import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { map } from 'rxjs/operators';
import { GoogleApis } from 'googleapis';
// import 'rxjs/add/operator/map'


// /*
//   Generated class for the GoogleDrive provider.
//   See https://angular.io/docs/ts/latest/guide/dependency-injection.html
//   for more info on providers and Angular 2 DI.
// */
// function authenticate() {
//   return gapi.auth2.getAuthInstance()
//       .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.readonly"})
//       .then(function() { console.log("Sign-in successful"); },
//             function(err) { console.error("Error signing in", err); });
// }
// function loadClient() {
//   return gapi.client.load("https://sheets.googleapis.com/$discovery/rest?version=v4")
//       .then(function() { console.log("GAPI client loaded for API"); },
//             function(err) { console.error("Error loading GAPI client for API", err); });
// }
// // Make sure the client is loaded and sign-in is complete before calling this method.
// function execute() {
//   return gapi.client.sheets.spreadsheets.get({
//     "spreadsheetId": "1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko",
//     "includeGridData": true
//   })
//       .then(function(response) {
//               // Handle the results here (response.result has the parsed body).
//               console.log("Response", response);
//             },
//             function(err) { console.error("Execute error", err); });
// }
// gapi.load("client:auth2", function() {
//   gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
// });


@Injectable()
export class GoogleDriveProvider {
  data: any = null;

  constructor(public http: HttpClient) {}

  

  load( id: string ) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    var apiKey = 'AIzaSyBZz744YekYkWsJQmZLHBv2RNhaBiqRTXc';
    var sheetid = '1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko';

    // var url = 'https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json'; 
    // https://docs.google.com/spreadsheets/d/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/edit?usp=sharing
    // var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSG4fYJt5FirDhBDZk7io8e2NQP5KMrgkcRqFsOP0CvfEgy3U3RmO_sFZL0Dil2W9YfOfJd9vkqpMhQ/pubhtml';
    // https://docs.google.com/spreadsheets/d/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/edit?usp=sharing
    //https://docs.google.com/spreadsheets/d/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/edit?usp=sharing
    //1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko
    
    // var url = 'https://spreadsheets.google.com/feeds/worksheets/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/public/full?alt=json';
    //var url = 'https://spreadsheets.google.com/feeds/list/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/public/full';
    // var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSG4fYJt5FirDhBDZk7io8e2NQP5KMrgkcRqFsOP0CvfEgy3U3RmO_sFZL0Dil2W9YfOfJd9vkqpMhQ/pubhtml?gid=1717074130&single=true';
     
    // jeremiah-mtg-cube@western-cascade-277002.iam.gserviceaccount.com
    var url = 'https://sheets.googleapis.com/v4/spreadsheets/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/CubeManacurve';
    // var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetid}/values/CubeManacurve!A1%3AF20?key=${apiKey}`
    var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetid}/values/CubeManacurve?key=${apiKey}`
    // https://spreadsheets.google.com/feeds/worksheets/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/private/full
    
    
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .pipe(map(
          (response: any) => {
            console.log( 'response: ', response );
            // return response.json() ;
            return response;
          }
          ))
        .subscribe( rawData => {
          console.log( 'Raw Data', rawData );
          // this.data = data.feed.entry;
          this.data = rawData.values;
          
          // let returnArray: Array<any> = rawData.values;

          var data = new google.visualization.DataTable();
          var dataArr = new Array();

          console.log( 'this.data.length', this.data.length );
          if( this.data && this.data.length > 0 ) {
            this.data.forEach( ( entry: any, index:any ) => {
              
              var obj = {};
              console.log( 'entry', entry );
              if (data.getNumberOfColumns() == 0)
              {
                entry.forEach((label: string) => {
                  if (data.getNumberOfColumns() == 0)
                  {
                    data.addColumn('string', label.toString());
                  }
                  else 
                  {
                    data.addColumn('number', label.toString());
                  }
                  console.log( 'adding column', label.toString() );
                  // data.addColumn('string', label.toString());
                });          
                console.log( 'data', data );     
              }
              else
              {
                // console.log("entry.slice(1)" + entry.slice(1).map((i: any)=>Number(i)));
                // console.log( 'entry[0]', entry[0] );
                // // let arr1 = [entry[0]]
                // // entry = arr1.concat();
                // console.log( '[entry[0], Array(entry.slice(1).map((i: any)=>Number(i)))]', [entry[0]].concat(entry.slice(1).map((i: any)=>Number(i))) );
                var row = [entry[0]].concat(entry.slice(1).map((i: any)=>Number(i)));
                data.addRow(row);
                dataArr.push(row)
                // console.log( 'data', data );
              }
            });
          }
          // data = data.slice(1);
          console.log( 'dataArr', dataArr );
          resolve(dataArr);
        });
      });


      
    // return this.http.get(url)
    //   .pipe(
    //     map((res: any) => {
    //       const data = res.feed.entry;

    //       const returnArray: Array<any> = [];
    //       if (data && data.length > 0) {
    //         data.forEach(entry => {
    //           const obj = {};
    //           for (const x in entry) {
    //             if (x.includes('gsx$') && entry[x].$t) {
    //               obj[x.split('$')[1]] = entry[x]['$t'];
    //             }
    //           }
    //           returnArray.push(obj);
    //         });
    //       }
    //       return returnArray;
    //     })
    //   );
    //});

  }
}