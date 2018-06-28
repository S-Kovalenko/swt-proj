import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Post} from '../../../../models/post';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public posts: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) {
    this.posts = db.list('/post');
  }

  ngOnInit() {
  }

}
