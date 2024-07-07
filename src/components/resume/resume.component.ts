import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { IEventItem } from '../../interfaces/event.model';
import { ResumeService } from './resume.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    TimelineModule,
    CardModule
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  events: IEventItem[] = []

  constructor(
    private resumeService: ResumeService
  ) { }

  ngOnInit(): void {
    this.initEventItems();
  }

  private initEventItems(): void {
    this.resumeService.getResume()
    .pipe(take(1))
    .subscribe((events: IEventItem[]) => {
      this.events = events;
    });
  }
}
