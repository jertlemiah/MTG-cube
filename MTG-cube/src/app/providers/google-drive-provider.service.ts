import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { map } from 'rxjs/operators';
import { GoogleApis } from 'googleapis';
declare var google: any;
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

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // I would like to also get the data from:
    // https://sheets.googleapis.com/v4/spreadsheets/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/values/KeywordsOutput?key=AIzaSyBZz744YekYkWsJQmZLHBv2RNhaBiqRTXc

    // For testing what data looks like: https://sheets.googleapis.com/v4/spreadsheets/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/values/CubeManacurve?key=AIzaSyBZz744YekYkWsJQmZLHBv2RNhaBiqRTXc
    var apiKey = 'AIzaSyBZz744YekYkWsJQmZLHBv2RNhaBiqRTXc';
    var sheetid = '1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko';

    // var url = 'https://sheets.googleapis.com/v4/spreadsheets/1OUifd8P63Is-UhSTcnf5_fLXqwnIoEgaqKSS5uzi4Ko/CubeManacurve';
    var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetid}/values/CubeManacurve?key=${apiKey}`   
    
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .pipe(map(
          (response: any) => {
            // console.log( 'response: ', response );
            // return response.json() ;
            return response;
          }
          ))
        .subscribe( rawData => {
          // console.log( 'Raw Data', rawData );
          this.data = rawData.values;

          var data = new google.visualization.DataTable();
          var dataArr = new Array();

          if( this.data && this.data.length > 0 ) {
            this.data.forEach( ( entry: any, index:any ) => {
              
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
                });            
              }
              else
              {
                var row = [entry[0]].concat(entry.slice(1).map((i: any)=>Number(i)));
                data.addRow(row);
                dataArr.push(row)
              }
            });
          }

          resolve(dataArr);
          // resolve(rawData);
        });
      });
  }
}