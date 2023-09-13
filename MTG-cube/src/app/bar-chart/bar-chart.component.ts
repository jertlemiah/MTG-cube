import { Component, Input} from '@angular/core';  
import { ChartType } from 'angular-google-charts'; 

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent{  
  @Input() data: any;
  @Input() columnNames: any;
  @Input() title: any;
  @Input() options:any;
  type = ChartType.ColumnChart;
  
  constructor(){}  
}