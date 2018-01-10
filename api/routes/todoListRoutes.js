'use strict'
module.exports = function(app) {
    var todoList = require('../controllers/todoListController')

    app.route('/tasks')
        .get(todoList.list_all_tasks)

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .delete(todoList.delete_a_task)
}