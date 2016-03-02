/**
 * Created by jiaaobo on 16/3/2.
 */

AppModule.controller("AppFooterController", function ($scope,$rootScope) {


    $scope.changeAllStatus = function () {


        $rootScope.todoList.map(function (todo) {
                if ($scope.isAllChecked) {
                    todo.ck = true;
                }
                else {
                    todo.ck = false;
                }
                return todo;
            });


        $rootScope.calcCount();
    }

});

