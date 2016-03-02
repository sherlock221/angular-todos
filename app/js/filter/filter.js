/**
 * Created by jiaaobo on 16/3/2.
 */
AppModule.filter("doneCountFilter",function(){

    return function(list){
        //计算数值
        var todoDoneCount = list.filter(function (todo) {
            return todo.ck;
        }).length;

        return todoDoneCount;
    }

});