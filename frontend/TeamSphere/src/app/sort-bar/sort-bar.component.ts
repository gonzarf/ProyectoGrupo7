import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sort-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sort-bar.component.html',
  styleUrl: './sort-bar.component.css'
})
export class SortBarComponent {
  sortOption: string = 'date';
  isDescending: boolean = true;

  toggleSort(option: string) {
    if (this.sortOption === option) {
      this.isDescending = !this.isDescending;
    } else {
      this.sortOption = option;
      this.isDescending = true;
    }
  }
}

