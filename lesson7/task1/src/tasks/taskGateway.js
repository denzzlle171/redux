const baseUrl = 'https://62705c5fe1c7aec428f2cda5.mockapi.io/api/v1/tasks';


export const createTask = taskData => 
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(taskData),
    })


export const updateTask = (taskId, TaskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(TaskData),
  });


export const deleteTask = (taskId) => 
   fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  })


export const fetchTasksList = () => 
   fetch(baseUrl)
.then(response => response.json())

