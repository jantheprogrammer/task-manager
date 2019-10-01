const url = 'https://manage-task.herokuapp.com/api/'

export const user = (id) => {
  const task = 'task'
  return {
    get: url + task,
    post: url + task,
    put: url + task + '/' + id,
    delete: url + task + '/' + id
  }
}

