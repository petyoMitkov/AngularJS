"use strict"

angular.
  module("petyoList").
  component("petyoList", {
    templateUrl: "petyo-list/petyo-list.template.html",
    controller: function PetyoListController() {
      this.todo = [
          {
              subject: "AngularJS",
              complexity: 2,
              complexityDes: 3     
          }, {
              subject: "Angular 2+",
              complexity: 3,
              complexityDes: 2
          }, {
              subject: "Node.js",
              complexity: 4,
              complexityDes: 1
          }, {
              subject: "Bootstrap",
              complexity: 1,
              complexityDes: 4
          }
          
      ];

      this.order = "subject";
  }
});