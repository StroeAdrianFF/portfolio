import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { TooltipModule } from 'primeng/tooltip';
import { DownloadService } from '../../shared/services/download.service';
import { Social } from '../../enums/social.enum';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ImageModule,
    ButtonModule,
    TooltipModule,
    TagModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  socials: typeof Social = Social;

  constructor(
    private downloadService: DownloadService
  ) {}

  downloadPdf(): void {
    this.downloadService.downloadPdf('assets/pdfs/CV.pdf');
  }

  visitPage(socialMedia: string): void {
    switch (socialMedia) {
      case this.socials.GITHUB:
        window.open('https://github.com/StroeAdrianFF', '_blank');
        break;
      case this.socials.LINKEDIN:
        window.open('https://www.linkedin.com/in/stroe-adrian/', '_blank');
        break;
      case this.socials.INSTAGRAM:
        window.open('https://www.instagram.com/stroeadrianf/', '_blank');
        break;
      default:
        break;
    }
  }

}
