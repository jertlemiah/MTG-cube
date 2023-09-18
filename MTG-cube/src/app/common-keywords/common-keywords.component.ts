import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { KEYWORD, KeywordsDict as KeywordsDictService } from 'app/service/keywords.service';

@Component({
  selector: 'app-common-keywords',
  templateUrl: './common-keywords.component.html',
  styleUrls: ['./common-keywords.component.css']
})
export class CommonKeywordsComponent{
  
  displayedColumns: string[] = ['name', 'type', 'status', 'definition', 'link'];
  dataSource: Array<any>;// = ELEMENT_DATA;
  keywordDict = new Map<string, KEYWORD>();

  constructor(public keywordsDictService: KeywordsDictService) {
    this.keywordDict = this.keywordsDictService.getKeywordsDict();
  this.dataSource = this.keywordsDictService.getDataRows();
  console.log("this.dataSource" + this.dataSource)
  }

  // ngOnInit(): void { 
  // //   ELEMENT_DATA.forEach((element:Keyword) => {
  // //   // for(let child of dataSource){
  // //     this.keywordDict.set(element.name, element);
  // // });
  // this.keywordDict = this.keywordsDictService.getKeywordsDict();
  // this.dataSource = this.keywordsDictService.getDataRows();
  // }
  
}
// export interface Keyword {
//   name: string;
//   type: string;
//   status: string;
//   definition: string;
//   link: string;
// }

// const ELEMENT_DATA: Keyword[] = [
//   {name: 'Deathtouch', type: 'Static', status: 'Evergreen', definition: "Any creature dealt a nonzero amount of damage by a source with deathtouch is destroyed, regardless of that creature's toughness", link: 'https://mtg.fandom.com/wiki/Deathtouch'},
// ];

