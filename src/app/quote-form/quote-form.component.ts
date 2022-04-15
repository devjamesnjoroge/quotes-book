import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote/quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() addNewQuote = new EventEmitter<Quote>();

  newEventQuote(quote: any, author: any, publisher: any) {
    event?.preventDefault()
    let newQuoteValues = new Quote(quote, author, publisher)
    this.addNewQuote.emit(newQuoteValues)
  }

  constructor() { }

  submitQuote() {
    event?.preventDefault();
  }

  status: boolean = false;

  toggleForm() {

  }

  ngOnInit(): void {
  }

}
