import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Store } from '@ngrx/store';
import {Ingredient} from '../../common/Ingredient';
import * as rootStore from '../../root/root.reducer';
import {State} from '../../store/app.reducer';
import * as inputActions from '../../store/app.action'

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  inputLists: string[] = ["Test1", "Test2", "Test3"];

  constructor(private store: Store<rootStore.AppState>) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const inputValue = form.value;
    const ingredient = new Ingredient(inputValue.name, inputValue.value);
    this.store.dispatch(new inputActions.addInput(inputValue.name));
    this.store.select('inputReducer').subscribe((value: State) => {
      this.inputLists = value.stateList;
    });
    console.log("form handler: name = " + ingredient.name
      + " and value = " + ingredient.value);
  }

}
