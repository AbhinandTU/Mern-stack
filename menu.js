var menu = function() {
  var task = document.getElementById("Task");
  var viewTask = document.getElementById("View Task");
  var sortTask = document.getElementById("Sort Task");
  var searchTask = document.getElementById("Search Task");
  var exit = document.getElementById("Exit");

  task.addEventListener('click', function() {
    alert('Task Created');
  });

  viewTask.addEventListener('click', function() {
    alert('View Task');
  });

  sortTask.addEventListener('click', function() {
    alert('Sort Task');
  });

  searchTask.addEventListener('click', function() {
    alert('Search Task');
  });

  exit.addEventListener('click', function() {
    alert('Exit');
    window.close();
  });
 };

 menu();