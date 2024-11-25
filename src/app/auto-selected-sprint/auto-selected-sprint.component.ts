import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-auto-selected-sprint',
  imports: [CommonModule],
  templateUrl: './auto-selected-sprint.component.html',
  styleUrl: './auto-selected-sprint.component.css',
})
export class AutoSelectedSprintComponent {
  @Input() selectedStories: { name: string; points: number }[] = [];

  get totalPoints() {
    return this.selectedStories.reduce((sum, story) => sum + story.points, 0);
  }
}
