import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { RouteGuardService } from '../service/route-guard.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }

}
@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {

  todos: Todo[]
  message: string
  // todos=[
  //   new Todo(1 , 'Learn to dance', false, new Date()),
  //   new Todo(2 , 'Became an Expert at Angular', false, new Date()),
  //   new Todo(3 , 'Visit India', false, new Date()),
  //   new Todo(4 , 'Visit USA', false, new Date()),
  //   new Todo(5 , 'Visit Marroco', false, new Date())



  //   // {id: 1 , description: 'Learn to dance'},
  //   // {id: 2 , description: 'Became an Expert at Angular'},
  //   // {id: 3 , description: 'Visit India'},
  //   // {id: 4 , description: 'Visit USA '},
  //   // {id: 5 , description: 'Visit Marroco '}

  // ]
  // todo = {
  //   id : 1 ,
  //   description : 'learn to Dance' 
  // }
  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {

    this.todoService.retrieveAllTodos('Amor').subscribe(
      // response => this.handleSeccessfulResponse(response),
      // error => this.handleErrorResponse(error)
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  refrechTodods() {
    this.todoService.retrieveAllTodos('Amor').subscribe(
      // response => this.handleSeccessfulResponse(response),
      // error => this.handleErrorResponse(error)
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('Amor', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refrechTodods();
      }
    );
  }

  updateTodo(id) {
    console.log(`Update todo ${id}`);
    this.router.navigate(['todos', id]);
    // this.todoService.updateTodo('Amor', id).subscribe(
    //   response => {
    //     console.log(response);
    //     this.message = `Update of Todo ${id} Successful!`;
    //     this.refrechTodods();
    //   }
    // );
  }

  addNewToDo() {
    this.router.navigate(['todos', -1]);

  }






}


// handleSeccessfulResponse(response){
//   this.welcomeMessageFromService = response.message;

// }

// handleErrorResponse(error){

//   this.welcomeMessageFromService = error.error.message;

// }
