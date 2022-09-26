import { Injectable } from '@angular/core';
import { Lesson } from './lesson';


@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  getLessons():Lesson[]
  {
      let lessons=<Lesson[]>JSON.parse(`[
      {"id":1, "title":"Angular darslari", "price":50, "duration":12, "intakeDeadline":"2021-05-31T23:59:59"},
      {"id":2, "title":"Angular darslari2", "price":10, "duration":15, "intakeDeadline":"2021-05-31T23:59:59"},
      {"id":3, "title":"Angular darslar3", "price":60, "duration":11, "intakeDeadline":"2021-05-31T23:59:59"}]`);
      return lessons;
  }}
