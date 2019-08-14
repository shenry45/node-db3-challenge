const db = require('../data/db-config.js');

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({id})
    .first();
}

function findSteps(id) {
  return db('steps')
    .where({id});
}

function add(scheme) {
  return db('schemes')
    .insert(scheme);
}

// function addStep(stepsData, id) {
//   return db('steps')
//     .insert()
// }

function update(changes, id) {
  return db('schemes')
    .where({id})
    .update(changes);
}

function remove(id) {
  return db('schemes')
    .where({id})
    .del();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  //addStep,
  update,
  remove
}