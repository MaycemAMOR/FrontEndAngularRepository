import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from '../list-to-dos/list-to-dos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo


  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }




  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService.retrieveTodo('Amor', this.id).subscribe(
        data => {
          this.todo = data;
          //   console.log("data description : "+data.description );
          //   console.log("data id : "+ data.id);
          //   console.log("data done : "+ data.done );
          //   console.log("data targetDate : "+ data.targetDate );

          // console.log("todo description after call : "+this.todo.description );
          // console.log("todo id after call : "+this.todo.id);
          // console.log("todo done after call : "+this.todo.done );
          // console.log("todo targetDate after call : "+this.todo.targetDate );
        }
      );
    }
  }

  saveTodo() {
    // console.log("todo description : " + this.todo.description);
    // console.log("todo id : " + this.todo.id);
    // console.log("todo done : " + this.todo.done);
    // console.log("todo targetDate : " + this.todo.targetDate);

    if (this.id === -1) {
      // call the create todo  WS
      this.todoService.createTodo('Amor', this.todo).subscribe(
        data => {
          console.log(data);
          // retur to the list todo page 
          this.router.navigate(['todos']);
        }
      );
    } else {
      this.todoService.updateTodo('Amor', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          // retur to the list todo page 
          this.router.navigate(['todos']);
        }
      );
    }


  }

}
