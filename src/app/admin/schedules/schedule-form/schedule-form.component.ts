import { Component, OnInit } from '@angular/core';
import {slideInOutAnimation} from '../../../animations/slide-in-out.animation';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css'],
  animations: [slideInOutAnimation],
  host: {'[@slideInOutAnimation]': ''}
})
export class ScheduleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
