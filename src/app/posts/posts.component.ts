import { Component } from '@angular/core';
import { Post } from '../models/post';
import { PostaService } from '../services/post.service';
import { MessageService } from 'primeng/api';
import { NgFor } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor,TableModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: Post[]=[];
  
  constructor(
    private postsService:PostaService,
    private messageService:MessageService
  ){}

  ngOnInit():void{
    this.getAllPosts();
  }

  getAllPosts(){
    this.postsService.getPosts().subscribe((data)=>{
      this.posts=data;
      console.log(this.posts);
    });
  }
}
