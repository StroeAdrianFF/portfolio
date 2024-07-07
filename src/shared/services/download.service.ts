import { Injectable } from '@angular/core';
import saveAs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  downloadPdf(pdfUrl: string): void {
    // link to the file
    const link = document.createElement('a');
    link.href = pdfUrl;

    // fetch file as a Blob
    fetch(pdfUrl).then(response => response.blob()).then(blob => {
      saveAs(blob, pdfUrl.split('/').pop() || 'downloaded.pdf');
    }).catch(error => {
      console.error('Download error:', error);
    });
  }
}