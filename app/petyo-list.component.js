"use strict"

angular.module("phonecatApp").
component("petyoList", {
    ///template: <>TODO Exercises for: {{$ctrl.todoList.subject}}',
    template: `
        <ul>
           <li ng-repeat="task in $ctrl.todo">
                <span>TODO Exercises for: {{task.subject}}</span>
            </li>
        </ul>`,
    controller: function PetyoListController() {
        this.todo = [
            {
                subject: "AngularJS"
            }, {
                subject: "Angular 2+"
            }, {
                subject: "Node.js"
            }, {
                subject: "MongoDB"
            }
            
        ];
    }

});