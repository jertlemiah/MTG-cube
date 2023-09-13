import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';  
import { GoogleChartComponent, ChartType } from 'angular-google-charts'; 

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  //template: `<div #barChart style="width: 100vw; height: 100vh;"></div>`,
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit{  
  @Input() data: any;//(string | number)[][]
  @Input() columnNames: any;
  @Input() title: any;
  //title = 'googlechart';  
  // type = 'PieChart';  
  type = ChartType.ColumnChart;
  
  // data = [  
  //    ['Name1', 5.0],  
  //    ['Name2', 36.8],  
  //    ['Name3', 42.8],  
  //    ['Name4', 18.5],  
  //    ['Name5', 16.2]  
  // ];  
  // columnNames = ['Name', 'Count'];  
  

  roles=['domain', 'data', 'annotation']
  options = {  
    vAxis: { 
      // title: 'Card Count',
      gridlines: { count: 0 },
      chartArea: {
        height: '100%',
        width: '100%',
      },
      viewWindowMode:'maximize',
              viewWindow:{
                min:0
              },
              textPosition: 'none'       
    },
    hAxis: {
      title: 'Mana Value',
      
    },
    lineDashStyle: [1, 1],
    // lineWidth:2,
    // series: {
    //   0: { lineDashStyle: [1, 1],
    //     annotations: {
    //       textStyle: {fontSize: 12, color: 'red' }
    //     } },
    // },
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
    // isStacked:true,
    titleTextStyle: {
      bold:true
    },
    // is3D: true,
    'chartArea': {'width': '100%', 'height': '80%'},
    
  };  
  // width = 500;  
  // height = 300;  
  constructor(){}  
  ngOnInit() {} 
  // @ViewChild('barChart')
  // barChart!: ElementRef;

  // drawChart = () => {

  //   const data = google.visualization.arrayToDataTable([
  //     ['Task', 'Hours per Day'],
  //     ['Work', 11],
  //     ['Eat', 2],
  //     ['Commute', 2],
  //     ['Watch TV', 2],
  //     ['Sleep', 7]
  //   ]);

  //   const options = {
  //     title: 'My Daily Activities',
  //     legend: {position: 'top'}
  //   };

  //   const chart = new google.visualization.PieChart(this.barChart.nativeElement);

  //   chart.draw(data, options);
  // }

  // ngAfterViewInit() {
  //   google.charts.load('current', { 'packages': ['corechart'] });
  //   google.charts.setOnLoadCallback(this.drawChart);
  // }

}
