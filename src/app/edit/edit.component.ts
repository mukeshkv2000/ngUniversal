import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";

import { MyErrorStateMatcher } from "../matcheredit";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";
@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  articleForm: FormGroup;
  _id = "";
  title = "";
  author = "";
  description = "";
  content = "";
  isLoadingResults = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private formBuilder: FormBuilder
  ) {}

  articleDetails() {
    this.router.navigate(["/show-article", this._id]);
  }

  getArticle(id: any) {
    this.api.getArticle(id).subscribe((data: any) => {
      this._id = data._id;
      this.articleForm.setValue({
        title: data.title,
        author: data.author,
        description: data.description,
        content: data.content
      });
    });
  }
  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.updateArticle(this._id, this.articleForm.value).subscribe(
      (res: any) => {
        const id = res._id;
        this.isLoadingResults = false;
        this.router.navigate(["/show-article", id]);
      },
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
  ngOnInit() {
    this.getArticle(this.route.snapshot.params.id);
    this.articleForm = this.formBuilder.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      description: [null, Validators.required],
      content: [null, Validators.required]
    });
  }
}
