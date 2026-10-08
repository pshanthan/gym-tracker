import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Workout } from '../models/Workout';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../pipes/duration.pipe';

@Component({
  selector: 'app-gym-card',
  imports: [CommonModule, DurationPipe],
  templateUrl: './gym-card.component.html',
  styleUrl: './gym-card.component.css',
})
export class GymCardComponent {
  @Input() workout!: Workout;
  @Output() edit = new EventEmitter<Workout>();
  @Output() delete = new EventEmitter<number>();
}
