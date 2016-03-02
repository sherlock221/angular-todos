/**
 * Created by jiaaobo on 16/3/2.
 */

AppModule.controller("AppController", function ($scope,$rootScope) {

    console.log("AppController");


    $rootScope.todoList = [];
    $rootScope.isAllChecked = false;


    $rootScope.todoDoneCount = 0;
    $rootScope.todoCount = 0;




});

