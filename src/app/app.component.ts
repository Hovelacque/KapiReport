import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
	
//pie......................
  public pieChartLabels:string[] = ["Pending", "InProgress", "OnHold", "Complete", "Cancelled"];
  public pieChartData:number[] = [21, 39, 10, 14, 16];
  public pieChartType:string = 'pie';
  public pieChartOptions:any = {'backgroundColor': [
               "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
            ]}

  public change(): void {
	switch(this.pieChartType){
		case 'pie':
			this.pieChartType = 'polarArea';
		break;			
		case 'polarArea':
			this.pieChartType = 'doughnut';
		break;
		case 'doughnut':
			this.pieChartType = 'pie';
		break;
	}
  }


//Bar, line ...........
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public randomize(): void {
	switch(this.barChartType){
		case 'bar':
			this.barChartType = 'line';
		break;	
		case 'line':
			this.barChartType = 'radar';
		break;	
		case 'radar':
			this.barChartType = 'doughnut';
		break;
		case 'doughnut':
			this.barChartType = 'bar';
		break;
	}
  }

}
