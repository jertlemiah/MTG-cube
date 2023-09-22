import { Component, Input} from '@angular/core';  
import { ChartType } from 'angular-google-charts'; 

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent {
  @Input() data: any;
  @Input() columnNames: any;
  @Input() title: any;
  @Input() options:any;
  type = ChartType.PieChart;
}