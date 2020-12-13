import { Component } from "@angular/core";
import { freeApiService } from "./services/freeapi.service";
import { Comments } from "./classes/comments";
import { Posts } from "./classes/posts";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private _freeApiSerives: freeApiService) {}

  listcomments: Comments[];
  listPosts: Posts[];
  objPosts: Posts;

  title = "angular10callrestapi";

  ngOnInit() {
    this._freeApiSerives.getcomments().subscribe(data => {
      this.listcomments = data;
    });

    this._freeApiSerives.getcommentsbyparameter().subscribe(data => {
      this.listPosts = data;
    });

    var opost = new Posts();
    opost.body = "testbody";
    opost.title = "testtitle";
    opost.userId = 5;

    this._freeApiSerives.post(opost).subscribe(data => {
      this.objPosts = data;
    });
  }
}
