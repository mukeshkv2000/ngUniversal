import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { ArticlesComponent } from "./articles/articles.component";

import { ShowArticleComponent } from "./show-article/show-article.component";
import { DetailComponent } from "./detail/detail.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ArticlesComponent,
    ShowArticleComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    BrowserModule,

    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
