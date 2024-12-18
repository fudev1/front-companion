import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule
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
