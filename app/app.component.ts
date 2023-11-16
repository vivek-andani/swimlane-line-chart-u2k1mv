import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import { CustomLinerChartServiceService } from './custom-liner-chart-service.service';
declare var jQuery: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  multi: any[];
  view: any[] = [700, 500];
  @ViewChild('chart') chart: any;

  // options
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Mean';
  timeline: boolean = true;
  yAxisTicks: any[] = [0, 3, 6, 12, 18, 21, 24];
  yScaleMax: any[] = [30];
  yScaleMin: any[] = [-5];

  colorScheme = {
    domain: ['black', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor(
    private customLinerChartServiceService: CustomLinerChartServiceService
  ) {
    Object.assign(this, { multi });
  }

  ngAfterViewInit() {
    this.customLinerChartServiceService.showDots(this.chart);
  }
  onSelect(data): void {
    console.log('Item clicked', data);
  }

  onActivate(data): void {
    console.log('Activate', data);
  }

  onDeactivate(data): void {
    console.log('Deactivate', data);
  }
}
