import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength({ value }: any) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  generatePassword() {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+{}:><?';

    let allowedCharacters = '';

    if (this.includeLetters) {
      allowedCharacters += letters;
    }

    if (this.includeNumbers) {
      allowedCharacters += numbers;
    }

    if (this.includeSymbols) {
      allowedCharacters += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
      generatedPassword += allowedCharacters[randomNumber];
    }

    this.password = generatedPassword;
  }

  onButtonClick() {
    this.generatePassword();
  }
}
