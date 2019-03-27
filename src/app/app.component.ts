import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  active = false;

  tipos: any[] = [
    { value: 'pie', title: 'Pie' },
    { value: 'polarArea', title: 'Polar Area' },
    { value: 'doughnut', title: 'Doughnut' },
    { value: 'bar', title: 'Bar' },
    { value: 'line', title: 'Line' },
    { value: 'radar', title: 'Radar' }
  ];

  public chartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] }
  };
  public chartLabels: string[] = [];
  public chartType: ChartType = 'bar';
  public chartLegend = true;

  public chartData: ChartDataSets[] = [];

  constructor(
    private chRef: ChangeDetectorRef
  ) { }

  add(): void {
    const data: number[] = [] as number[];
    for (var i = 0; i < this.chartLabels.length; i++)
      data.push(this.generateNumber(i));

    this.chartData.push({
      data, label: `Series ${this.chartData.length + 1}`
    });

    this.active = true;
    if (!this.chRef['destroyed']) {
      this.chRef.detectChanges();
    }
    this.chart.ngOnChanges({});
  }

  public addLabel() {
    this.chartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.chartLabels.push(`Label ${this.chartLabels.length}`);

    this.active = true;
    if (!this.chRef['destroyed']) {
      this.chRef.detectChanges();
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }
}
