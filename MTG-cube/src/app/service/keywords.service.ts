import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeywordsDict implements OnInit {
  constructor() { }

  public getKeywordsDict() {
    return Dict;
  } 
  public getDataRows() {
    var arr = [];
    for (let [key,value] of Dict) {
        arr.push(value)
    }
    return arr;
  }
  keywordDict = new Map<string, Keyword>();

  ngOnInit(): void { 
    ELEMENT_DATA.forEach((element:Keyword) => {
    // for(let child of dataSource){
      this.keywordDict.set(element.name, element);
  });
    }

}

export class KEYWORD implements Keyword
{
    constructor(
       public name: string,
       public type: string,
       public status: string,
       public definition: string,
       public link: string,
    ){}
}

 interface Keyword {
    name: string;
    type: string;
    status: string;
    definition: string;
    link: string;
  }
  
  const ELEMENT_DATA: Keyword[] = [
  ];

  const Dict: Map<string, KEYWORD> = new Map([
    ["Deathtouch", new KEYWORD('Deathtouch', 'Static', 'Evergreen', "Any creature dealt a nonzero amount of damage by a source with deathtouch is destroyed, regardless of that creature's toughness", 'https://mtg.fandom.com/wiki/Deathtouch')],
    ["Defender", new KEYWORD('Defender', 'Static', 'Evergreen', "A creature with defender cannot attack", 'https://mtg.fandom.com/wiki/Defender')],


  ])

//   const Dict2: Map<string, Keyword> = new Map([
//     ["Deathtouch", Keyword(name: 'Deathtouch', 'Static', 'Evergreen', "Any creature dealt a nonzero amount of damage by a source with deathtouch is destroyed, regardless of that creature's toughness", 'https://mtg.fandom.com/wiki/Deathtouch')],
//     ["Defender", new KEYWORD('Defender', 'Static', 'Evergreen', "A creature with defender cannot attack", 'https://mtg.fandom.com/wiki/Defender')],


//   ])

