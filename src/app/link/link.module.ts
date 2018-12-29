import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Link {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number){
      this.title = title;
      this.link = link;
      this.votes = votes || 0;
  }

  voteUp(){
      this.votes++;
  }

  voteDown(){
      this.votes--;
  }
}
