import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss'],
    animations: [routerTransition()]
})
export class PersonComponent implements OnInit {

    constructor() {}

    ngOnInit() {}

    onScroll () {
        console.log('scrolled!!')
    }

}

//import { DataService } from '../../services/data.service';
//import { FilterPipe } from '../../filter.pipe';
//declare var jquery:any;
//declare var $ :any;

//@Component({
//  selector: 'feed',
//  templateUrl: './feed.component.html',
//  styleUrls: ['./feed.component.css']
//})

//export class FeedComponent implements OnInit {

//term : '';
//posts: Post[];

//  constructor(private dataService: DataService) { }

//  ngOnInit() {
//      this.dataService.getPosts().subscribe((posts)=>{
//          this.posts = posts.slice(0,10);
//      });
//  }

//onScrollDown(){     
//     console.log("scrolled!");   
//}

//interface Post{
//    id:number, 
//    title:string,
//    contact:string,
//    Address:string,
//    Telephone:number,
//    Email:string, 
//    Website:string, 
//    Establishment:string,
//    sector:string,
//    category:string,
//}