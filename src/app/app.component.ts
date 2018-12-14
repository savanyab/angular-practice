import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course4';
  name = '';

  greeter() {
    alert("Hello " + this.name);
  }

  getBg() {
    if (this.name[0] === 'S' || this.name[0] === 's') {
      return "red";
    } else if (this.name.length > 3) {
      return "blue";
    } else {
      return "black";
    }
  }

  getFontColor() {
    if (this.name[0] === 'S' || this.name[0] === 's') {
      return "green";
    } else if (this.name.length > 3) {
      return "yellow";
    }else {
      return "white";
    }
  }

  getSize() {    
      return '60px';    
  }
}
