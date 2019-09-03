import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticlesComponent } from "./articles/articles.component";
import { ShowArticleComponent } from "./show-article/show-article.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  {
    path: "articles",
    component: ArticlesComponent,
    data: { title: "Articles" }
  },
  {
    path: "show-article/:id",
    component: ShowArticleComponent,
    data: { title: "Show Article" }
  },
  {
    path: "add-article",
    component: AddComponent,
    data: { title: "Add Article" }
  },
  {
    path: "edit-article/:id",
    component: EditComponent,
    data: { title: "Edit Article" }
  },
  { path: "", redirectTo: "/articles", pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
