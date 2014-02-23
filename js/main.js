function TodoController ($scope){

  $scope.todos = [
    {task:"First task", done:false},
    {task:"Second task", done:false},
    {task:"Third task", done:false}
  ];

  $scope.addTask = function(){
    if ($scope.newTask) 
      {
        $scope.todos.push({task:$scope.newTask, done:false});
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

  $scope.clearDone = function(){
    var arr = [];
    for (var k=$scope.todos.length, i=0; i<k; i++){
      if (!$scope.todos[i].done) {arr.push($scope.todos[i])};
    }
    $scope.todos = arr;
  }
}
