import { Component, OnInit } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ProjectsService } from './projects.service';
import { take } from 'rxjs';
import { IProject } from '../../interfaces/project.model';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    TagModule,
    CarouselModule,
    ButtonModule,
    TooltipModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  responsiveOptions: any[] = [];
  projects: IProject[] = [];

  constructor(
    private projectsService: ProjectsService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


  ngOnInit(): void {
    this.projectsService.getProjects()
    .pipe(take(1))
    .subscribe((projects) => {
      this.projects = projects;
    });
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

}
