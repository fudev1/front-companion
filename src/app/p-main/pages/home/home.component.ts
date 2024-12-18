import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('heroVideo') videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoElement.nativeElement;
    video.currentTime = 5
    video.muted = true;
}

}
