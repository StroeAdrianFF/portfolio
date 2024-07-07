import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../components/about/about.component';
import { ResumeComponent } from '../components/resume/resume.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MenubarModule,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    ButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild('timeline') timeline: ElementRef | null = null;
  @ViewChild('projects') projects: ElementRef | null = null;
  @ViewChild('contact') contact: ElementRef | null = null;

  navbarItems: MenuItem[] | undefined = undefined;
  showButton: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.createNavbarItems();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showButton = scrollPosition > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private createNavbarItems(): void {
    this.navbarItems = [
      {
        label: 'About',
        icon: 'pi pi-home'
      },
      {
        label: 'Resume',
        icon: 'pi pi-user',
        command: () => this.goToSection(this.timeline)
      },
      {
        label: 'Projects',
        icon: 'pi pi-folder',
        command: () => this.goToSection(this.projects)
      }
    ];
  }

  private goToSection(section: ElementRef | null): void {
    if (!section) {
      return;
    }
    section.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
