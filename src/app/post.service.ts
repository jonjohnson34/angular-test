import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import {Http, Response} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  readonly ROOT_URL = 'https://theburbz.com/wp-json/wp/v2/posts/';

  posts: any;

  constructor(private http: HttpClient) {
  }

  getPosts() {
    // return this.http.get('https://randomuser.me/api/?results=25');
    return this.http.get(this.ROOT_URL);
  }
}
