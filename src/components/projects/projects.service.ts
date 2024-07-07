import { Injectable } from '@angular/core';
import projects from '../../db/project.json';
import { Observable, of } from 'rxjs';
import { IProject } from '../../interfaces/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(): Observable<IProject[]> {
    return of(projects.map(project => ({
      ...project,
      disabled: project.disabled === 'true'
    })));
  }
}
