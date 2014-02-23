var myApp = angular.module("myApp", ["firebase"]);

function TodoController ($scope, $firebase){

  var todoRef = new Firebase("https://z1lm248cx4g.firebaseio-demo.com");
    // Automatically syncs everywhere in realtime
  //$scope.items.$bind($scope, "remoteItems");
  //$scope.remoteItems.bar = "foo";

  $scope.todos = $firebase(todoRef);

  // $scope.todos1 = [
  //   {task:"First task", done:false},
  //   {task:"Second task", done:false},
  //   {task:"Third task", done:false}
  // ];

  $scope.addTask = function(){
    if ($scope.newTask) 
      {
        $scope.todos.$add({task:$scope.newTask, done:false});
        $scope.newTask = '';
    };
  }

  $scope.calcTasks = function(){
    var doneArr = [];
    for (var k=$scope.todos.length, i=0; i<k; i++) {
      if ($scope.todos[i].done) {doneArr.push($scope.todos[i])};
    }
    return 'Total:' + $scope.todos.length + ' | Done:' + doneArr.length;
  }

  $scope.makeDone = function(todo){
    todo.done = !todo.done;
    //$scope.todos.$remove(todo);
    //alert(todo.$id);
  }

  $scope.clearDone = function(){
    var arr = [];
    for (var k=$scope.todos.length, i=0; i<k; i++){
      if (!$scope.todos[i].done) {arr.push($scope.todos[i])};
    }
    $scope.todos = arr;
  }
}
