import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movable-bar",
  templateUrl: "./movable-bar.component.html",
  styleUrls: ["./movable-bar.component.css"]
})
export class MovableBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onClick(event) {
    //remove class
    let element = document.getElementsByClassName("imgIcon");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("active");
    }

    //add class
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;
    document.getElementById(value).children[0].classList.add("active");
  }

  resetBtn() {
    //remove class
    let element = document.getElementsByClassName("imgIcon");
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("active");
    }

    //add class
    document.getElementById('lesscontainer').children[0].classList.add("active");
  }
}
