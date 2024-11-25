import { Component } from '@angular/core';
import { StoryFormComponent } from '../story-form/story-form.component';
import { StoryListComponent } from '../story-list/story-list.component';
import { SprintCalculatorComponent } from '../sprint-calculator/sprint-calculator.component';
import { AutoSelectedSprintComponent } from '../auto-selected-sprint/auto-selected-sprint.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-application',
  imports: [
    StoryFormComponent,
    StoryListComponent,
    SprintCalculatorComponent,
    AutoSelectedSprintComponent,
    CommonModule,
  ],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css',
})
export class ApplicationComponent {
  stories: { name: string; points: number }[] = [];
  selectedStories: { name: string; points: number }[] = [];
  addStory(newStory: { name: string; points: number }) {
    if (this.stories.some((story) => story.name === newStory.name)) {
      alert('Story names must be unique.');
      return;
    }
    this.stories.push(newStory);
  }

  //to take output as per the test cases
  generateSprint(capacity: number): void {
    this.selectedStories = [];
    let bestCombination: { name: string; points: number }[] = [];
    let bestSum = 0;

    const findBestCombination = (
      currentIndex: number,
      currentCombination: { name: string; points: number }[],
      currentSum: number
    ) => {
      if (currentSum > capacity) return;
      // If the current sum is better than the best found so far, update the best combination
      if (currentSum > bestSum) {
        bestSum = currentSum;
        bestCombination = [...currentCombination];
      }

      // If all stories have been considered, stop
      if (currentIndex >= this.stories.length) return;

      // Include the current story
      findBestCombination(
        currentIndex + 1,
        [...currentCombination, this.stories[currentIndex]],
        currentSum + this.stories[currentIndex].points
      );

      // Exclude the current story
      findBestCombination(currentIndex + 1, currentCombination, currentSum);
    };

    // Start recursive combination search
    findBestCombination(0, [], 0);

    // Update selected stories with the best combination found
    this.selectedStories = bestCombination;
  }

  clearStories() {
    this.stories = [];
  }

  clearSelectedStories() {
    this.selectedStories = [];
  }
}
