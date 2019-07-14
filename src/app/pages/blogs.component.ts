import {HttpClient} from "@angular/common/http";
import {Component} from "@angular/core";
import {Post} from '../post';
import {Observable} from "rxjs";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html'
})
export class BlogsComponent {
  readonly ROOT_URL = 'https://theburbz.com/wp-json/wp/v2/posts/';

  posts: Observable<Post[]>;

  constructor(private http: HttpClient) {
  }

  getPosts() {
    // return this.http.get('https://randomuser.me/api/?results=25');
    this.posts = this.http.get<Post[]>(this.ROOT_URL)
  }
}

