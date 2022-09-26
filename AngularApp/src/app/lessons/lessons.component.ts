import { Component, OnInit } from '@angular/core';
import { Lesson } from '../lesson';
import { LessonsService } from '../lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  title:string="Darslar ruyhati";
  lessons:Lesson[]|undefined;
  selectedLesson?:Lesson;
  constructor(private lessonService:LessonsService)

  {
    this.lessons=lessonService.getLessons();
   }

  ngOnInit(): void {
  }

  getTitle(): string {
    return "Sarlavha:" + this.title;
  }
  onSelect(lesson:Lesson):void
  {
    this.selectedLesson=lesson;
  }
}
