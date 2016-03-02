/**
 * Created by jiaaobo on 16/3/2.
 */

AppModule.controller("AppHeaderController", function ($scope,$rootScope) {


    $scope.fm = {}

    //添加todo时候
    $scope.addTodo = function (e) {
        if (e.keyCode === 13) {

            var val = $scope.fm.todoText;
            if (!val) return;

            var newToDoItem = {
                text: val,
                isChecked: false
            }
            $rootScope.todoList.push(newToDoItem);
            $scope.fm.todoText = "";

        }
    }


});

