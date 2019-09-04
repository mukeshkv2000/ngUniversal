import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Article } from "../article";
@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {
  displayedColumns: string[] = ["title", "author"];
  data: Article[] = [];
  isLoadingResults = true;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getArticles().subscribe(
      (res: any) => {
        this.data = res;
        // console.log("get data", res);
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
