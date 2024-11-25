import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-story-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.css',
})
export class StoryFormComponent {
  storyName: string = '';
  storyPoints: number = 0;
  errorMessage: string = '';
  @Output() addStoryEvent = new EventEmitter<{
    name: string;
    points: number;
  }>();

  addStory() {
    if (!this.storyName.trim() || this.storyPoints <= 0) {
      this.errorMessage =
        'Both fields are required and points must be positive.';
      return;
    }
    this.errorMessage = '';
    this.addStoryEvent.emit({
      name: this.storyName.trim(),
      points: this.storyPoints,
    });
    this.storyName = '';
    this.storyPoints = 0;
  }
}
