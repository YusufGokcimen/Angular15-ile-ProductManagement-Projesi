import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postList:any;

  constructor(private postService:PostsService){}
  ngOnInit(): void {
    this.postService.get().subscribe(response=>{
      this.postList=response;
    }) 
  }

  postValue(input: HTMLInputElement) {
    const value: Post = { title: input.value, id: 0 }; // 'id' özelliği ilk başta 0 olarak ayarlanıyor
    this.postService.post(value)
      .subscribe(response => {
        this.postList.splice(0, 0, value);
      });
  }

  updateValue(post:any,input:HTMLInputElement){
    let inputValue=input.value;
   
    this.postService.update(post)
    .subscribe(response=>{
      console.log(response)
    })
  }

  deleteValue(post:any){
    this.postService.delete(post)
    .subscribe(response=>{
      console.log("Silme İşlemi Başarılı");
      let valueId=this.postList.indexOf(post);
      this.postList.splice(valueId,1);
    },error=>console.log(error));
  }

}
interface Post {
  id: number;
  title: string;
}


