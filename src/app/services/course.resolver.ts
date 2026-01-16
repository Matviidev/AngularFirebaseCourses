import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Course } from '../model/course';
import { CoursesService } from './courses.service';
import { Observable, EMPTY, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CourseResolver implements Resolve<Course> {
  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Course> | Promise<Course> | Course {
    const courseUrl = route.paramMap.get('courseUrl');

    return this.coursesService.findCourseByUrl(courseUrl).pipe(
      switchMap((course) => {
        if (!course) {
          this.router.navigate(['/']);
          return EMPTY;
        }
        return of(course);
      })
    );
  }
}
