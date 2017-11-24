"use strict"

describe('petyoList', function() {
    beforeEach(module('petyoList'));

    describe('PetyoListController', function() {
        it('should list 4 subjects', inject(function($componentController) {

            var ctrl = $componentController('petyoList');

            expect(ctrl.todo.length).toBe(4);
        }));
    });
});