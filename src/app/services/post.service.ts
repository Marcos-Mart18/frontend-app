import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostaService {
  private apiUrl ='http://localhost:3000/api/posts';
  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }
  getPostById(post_id:number):Observable<Post>{
    return this.http.get<Post>(`${this.apiUrl}/${post_id}`);
  }
  crearPost(post: Post):Observable<Post>{
    return this.http.post<Post>(this.apiUrl,post);
  }
  editarPost(post: Post):Observable<Post>{
    return this.http.put<Post>(this.apiUrl,post);
  }
  deletePost(post_id: number){
    return this.http.delete(`${this.apiUrl}/${post_id}`);
  }
}
