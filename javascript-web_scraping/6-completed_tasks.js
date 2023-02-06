#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log('error:', error);
  } else {
    const tasks = JSON.parse(body);
    let taskCount = {};
    tasks.forEach(task => {
      if (task.completed) {
        if (!taskCount[task.userId]) {
          taskCount[task.userId] = 0;
        }
        taskCount[task.userId] += 1;
      }
    });
    console.log(taskCount);
  }
});
