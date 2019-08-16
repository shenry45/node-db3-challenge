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
  // get all cols from steps
  return db('steps as st')
    // joins in scheme to steps table
    .join('schemes as sch', 'st.scheme_id', 
    'sch.id')
    // selects all cols without scheme table id
    .select('st.id', 'st.step_number', 'st.instructions', 'sch.scheme_name')
    // sort by scheme id, if scheme.id === id then return
    .where('sch.id', id);
}

function add(scheme) {
  return db('schemes')
    .insert(scheme);
}

function addStep(stepsData, id) {
  return db('steps')
    .insert({
      ...stepsData,
      scheme_id: id
    })
}

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
  addStep,
  update,
  remove
}