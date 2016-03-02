/**
 * Created by jiaaobo on 16/3/2.
 */

AppModule.controller("AppMainController", function ($scope,$rootScope) {


    //删除todo
    $scope.removeTodo = function (todo) {
        $rootScope.todoList.splice($rootScope.todoList.indexOf(todo), 1);
    }


    //切换任务状态
    $scope.changeTodoStatus = function (todo) {
    }

});

