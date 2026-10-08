import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Workout } from '../models/Workout';

@Component({
  selector: 'app-gym-card',
  imports: [],
  templateUrl: './gym-card.component.html',
  styleUrl: './gym-card.component.css',
})
export class GymCardComponent {
  @Input() workout!: Workout;
  @Output() edit = new EventEmitter<Workout>();
  @Output() delete = new EventEmitter<number>();
}
