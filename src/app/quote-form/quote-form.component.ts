import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Quote } from '../quote/quote';
import { FormGroup, NgForm } from '@angular/forms';

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
    this.signupForm.reset("")
  }

  constructor() { }

  submitQuote() {
    event?.preventDefault();
  }

  clearForm(form: any) {
    form.reset();
  }

  @ViewChild('form')
  signupForm!: NgForm; // import { NgForm } from '@angular/forms';
  // import { NgForm } from '@angular/forms';


  status: boolean = false;

  toggleForm() {

  }

  ngOnInit(): void {
  }

}
