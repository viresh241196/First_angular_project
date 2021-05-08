import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Hello World";
  imgUrl = "../assets/1555572153465.png";

  ngOnInit(): void {
    this.title = "Hello form Bridgelabz";
  }
}
