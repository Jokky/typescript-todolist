import { Todo, TodoState } from './Model';
import '//code.jquery.com/jquery-1.12.1.min.js';

export default class TodoListComponent {

    private $el: JQuery;

    constructor(el: HTMLElement) {
        this.$el = $(el);
    }

    render(todos) {

        this.$el.html('');

        if (!todos.length) {
            this.$el.html(
                "<div class='list-group-item text-center text-giant'>" +
                "    <strong>You've completed everything you needed to do!</strong>" +
                "</div>"
            );

            return;
        }

        for(var index in todos) {
            var todo = todos[index];
            this.renderTodo(todo).appendTo(this.$el);
        }
    }

    private renderTodo(todo) {
        return $(
            "<div class='todo-item list-group-item "+ (todo.state == 2 ? 'completed' : '') +"'>" +
            "   <div class='row'>" +
            "       <div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center'>" +
            "           <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>" +
            "           <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>" +
            "       </div>" +
            "       <div class='col-lg-10 col-md-10 col-sm-10 col-xs-10'>" +
            "            <span class='incomplete text-giant'>" + todo.name + "</span>" +
            "            <span class='completed text-strikethrough text-muted text-giant'>" + todo.name + "</span>" +
            "        </div>" +
            "    </div>" +
            "    <div class='clearfix'></div>" +
            "</div>"
        ).on('click', function() {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('todo-toggle', true, true, { todoId: todo.id });
            this.dispatchEvent(event);
        });
    }
}
