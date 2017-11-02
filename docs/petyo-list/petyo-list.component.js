"use strict"

angular.
  module("petyoList").
  component("petyoList", {
    templateUrl: "petyo-list/petyo-list.template.html",
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