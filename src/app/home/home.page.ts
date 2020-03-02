import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  display = '0';
  firstval: number = null;
  operator: any = null;
  newcursor = false;
  isc = false;

  constructor() {}

  click(val: any) {
    switch (val) {
      case 'ac':
        this.display = '0';
        this.firstval = null;
        this.operator = null;
        this.newcursor = false;
        break;
      case 'c':
        this.display = '0';
        this.isc = false;
        break;
      case '+/-':
        if (Math.sign(parseInt(this.display, 0)) === 1) {
          const sign = -Math.abs(parseInt(this.display, 0));
          this.display = sign.toString();
        } else if (Math.sign(parseInt(this.display, 0)) === -1) {
          const sign = Math.abs(parseInt(this.display, 0));
          this.display = sign.toString();
        } else {
          this.display = this.display;
        }
        break;
      case '%':
        this.addpercent();
        break;
      case ':':
        this.addoperator(':');
        break;
      case 'X':
        this.addoperator('X');
        break;
      case '-':
        this.addoperator('-');
        break;
      case '+':
        this.addoperator('+');
        break;
      case '=':
        if (this.firstval !== null && this.operator !== null) {
          this.calclast();
        }
        this.operator = null;
        break;
      case '0':
        this.addnumber('0');
        break;
      case '1':
        this.addnumber('1');
        break;
      case '2':
        this.addnumber('2');
        break;
      case '3':
        this.addnumber('3');
        break;
      case '4':
        this.addnumber('4');
        break;
      case '5':
        this.addnumber('5');
        break;
      case '6':
        this.addnumber('6');
        break;
      case '7':
        this.addnumber('7');
        break;
      case '8':
        this.addnumber('8');
        break;
      case '9':
        this.addnumber('9');
        break;
    }
  }

  addnumber(nbr: string) {
    if (nbr === '0') {
      if (this.newcursor === true) {
        this.display = nbr;
        this.newcursor = false;
      } else if (this.display !== '0') {
        this.display = this.display.toString() + nbr;
      }
    } else {
      if (this.newcursor === true) {
        this.display = nbr;
        this.newcursor = false;
      } else if (this.display === '0') {
        this.display = nbr;
      } else {
        this.display = this.display.toString() + nbr;
      }
    }
    this.isc = true;
  }

  addpercent() {
    const dispval = parseInt(this.display, 0) / 100;
    this.display = dispval.toString();
  }

  addoperator(op: string) {
    if (this.newcursor === false) {
      if (this.firstval === null) {
        this.firstval = parseInt(this.display, 0);
      }
      if (this.firstval !== null && this.operator !== null) {
        this.calclast();
      }
    }
    this.operator = op;
    this.newcursor = true;
  }

  calclast() {
    console.log(this.operator);
    switch (this.operator) {
      case ':':
        this.firstval = (this.firstval / parseInt(this.display, 0));
        break;
      case 'X':
        this.firstval = (this.firstval * parseInt(this.display, 0));
        break;
      case '-':
        this.firstval = (this.firstval - parseInt(this.display, 0));
        break;
      case '+':
        this.firstval = (this.firstval + parseInt(this.display, 0));
        break;
    }
    this.display = this.firstval.toString();
  }

}
