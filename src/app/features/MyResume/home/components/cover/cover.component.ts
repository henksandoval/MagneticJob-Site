import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
})
export class CoverComponent implements OnInit, OnDestroy {
  professions: string[] = ['Designer', 'Developer', 'Freelancer', 'Photographer'];
  currentProfessionIndex = 0;
  currentProfession = '';
  intervalId = 0;

  ngOnInit() {
    this.typeProfession();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  typeProfession() {
    let charIndex = 0;
    const type = () => {
      if (charIndex < this.professions[this.currentProfessionIndex].length) {
        this.currentProfession += this.professions[this.currentProfessionIndex][charIndex];
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(() => {
          this.currentProfession = '';
          this.currentProfessionIndex = (this.currentProfessionIndex + 1) % this.professions.length;
          charIndex = 0;
          setTimeout(type, 500);
        }, 1000);
      }
    };
    type();
  }
}
