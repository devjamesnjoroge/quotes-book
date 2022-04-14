import { Component, OnInit } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {



  quotes: Quote[] = [
    new Quote(" The only language that looks the same before and after RSA encryption.", "Keith Bostic", "James Njoroge"),
    new Quote(" Two things are infinite: the universe and human stupidity.", "Albert Einsten", "James Njoroge"),
    new Quote(" Programming is like sex: one mistake and you\u2019re providing support for a lifetime.", "Dick Brandon", "James Njoroge"),
    new Quote(" I love deadlines. I like the whooshing sound they make as they fly by.", "Douglas Adams", "James Njoroge"),
    new Quote(" You should name a variable using the same care with which you name a first-born child.", "James O. Coplien", "James Njoroge"),

  ]

  upVote(index: any, bool: boolean) {
    if (bool === true) {
      this.quotes[index].un++
    }
  }

  downVote(index: any, bool: boolean) {
    if (bool === true) {
      this.quotes[index].dn--
    }
  }

  toggleDetails(index: any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails
  }

  log(x : any){
    console.log(x)
  }

 
  constructor() { }

  ngOnInit(): void {

    
  

  }

}
