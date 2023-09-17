// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// // import { environment } from 'src/environments/environment';
// import { CubeManacurve } from 'app/models/cube-manacurve.model';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class SheetService {
//   constructor(private http: HttpClient) {}
//   CONNECTION_URL = 'https://sheet.best/api/sheets/cd0badce-a8be-4707-9a56-300e176dcc12';

//   createSheet(
//     name: string,
//     platform: string,
//     technology: string,
//     link: string
//   ): Observable<CubeManacurve> {
//     return this.http.post<CubeManacurve>(`${this.CONNECTION_URL}`, {
//       name,
//       platform,
//       technology,
//       link,
//     });
//   }

//   listSheet() {
//     return this.http.get(`${this.CONNECTION_URL}`);
//   }

//   deleteSheet(id: number) {
//     return this.http.delete(`${environment.CONNECTION_URL}/${id}`);
//   }

//   getSheetDataById(id: number) {
//     return this.http.get(`${environment.CONNECTION_URL}/${id}`);
//   }

//   updateSheet(
//     id: number,
//     name: string,
//     platform: string,
//     technology: string,
//     link: string
//   ): Observable<Sheet> {
//     return this.http.put<Sheet>(`${environment.CONNECTION_URL}/${id}`, {
//       name,
//       platform,
//       technology,
//       link,
//     });
//   }
// }