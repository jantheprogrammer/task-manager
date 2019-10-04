const url = 'https://manage-tasks.herokuapp.com/api/'

export const task = id => {
  const task = 'task'
  return {
    get: url + task,
    post: url + task,
    put: url + task + '/' + id,
    delete: url + task + '/' + id,
  }
}
