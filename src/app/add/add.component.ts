import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { ApiService } from "../api.service";

import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";
import { MyErrorStateMatcher } from "../matcheredit";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  articleForm: FormGroup;
  title = "";
  author = "";
  description = "";
  content = "";
  isLoadingResults = false;

  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder
  ) {}

  matcher = new MyErrorStateMatcher();
  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addArticle(this.articleForm.value).subscribe(
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
    this.articleForm = this.formBuilder.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      description: [null, Validators.required],
      content: [null, Validators.required]
    });
  }
}
