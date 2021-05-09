import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Hello World";
  imgUrl = "../assets/1555572153465.png";
  url = "https://www.bridgelabz.com/";

  ngOnInit(): void {
    this.title = "Hello form Bridgelabz";
  }

  onClick($event: any){
    console.log("Save button is clicked",$event)
    window.open(this.url,"_blank")
  }
}
