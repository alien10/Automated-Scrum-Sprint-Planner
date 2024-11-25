import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sprint-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './sprint-calculator.component.html',
  styleUrl: './sprint-calculator.component.css',
})
export class SprintCalculatorComponent {
  sprintCapacity: number = 0;
  @Output() generateSprintEvent = new EventEmitter<number>();
  @Output() clearStoriesEvent = new EventEmitter<void>();
  @Output() clearSelectedStoriesEvent = new EventEmitter<void>();

  generateSprint() {
    this.generateSprintEvent.emit(this.sprintCapacity);
  }

  clearStories() {
    this.clearStoriesEvent.emit();
  }

  clearSelectedStories() {
    this.clearSelectedStoriesEvent.emit();
  }
}
