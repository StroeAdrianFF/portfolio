import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEventItem } from '../../interfaces/event.model';
import events from '../../db/resume.json';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private events: IEventItem[] = events as unknown as IEventItem[];

  constructor() { }

  getResume(): Observable<IEventItem[]> {
    return of(this.events);
  }
}
