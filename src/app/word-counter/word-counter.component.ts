import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-word-counter',
  templateUrl: './word-counter.component.html',
  styleUrls: ['./word-counter.component.css']
})
export class TagComponentComponent implements OnInit {
  public message: string = ""
  public submited = false
  public obj = {
    letters: 0,
    words: 0,
    diffWords: [],
    wordsWithCount: {}
  }
  constructor() { }

  ngOnInit(): void {
  }
  messageDetails(msg: string) {
    console.log(msg)
    let words = msg.split(" ").filter(val => val.length > 1 || /^[a-zA-Z0-9]{1,}$/.test(val))
    this.submited = true
    this.obj.letters = msg.split(" ").filter(val => !!val).reduce((main, curr) => main + curr.length, 0)
    this.obj.words = words.length
    this.obj.diffWords = [... new Set(words)]
    this.obj.wordsWithCount = this.obj.diffWords.reduce((main, curr) => {
      return Object.assign(main, { [curr]: words.reduce((main, subCurr) => (main + (curr == subCurr ? 1 : 0)), 0) })
    }, {})

  }
  messageReset() {
    this.message = "";
    this.submited = false;
  }
}
