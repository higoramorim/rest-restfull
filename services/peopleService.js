const model = require('../models/peopleModel');

const getAll = async () => model.getAll();

const getById = async (id) => {
  const person = await model.getById(id);

  if (!person) {
    throw { code: 'not_found', message: `Person with ID ${id} was not found` };
  }

  return person;
};

const create = async (name, age, phoneNumbers) => {
  if (age < 18) {
    throw {
      code: 'underage_person',
      message: 'Only people with 18 or more years can be inserted',
    };
  }

  return model.create(name, age, phoneNumbers);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, age, phoneNumbers } = req.body;

  await model.update({name, age, phoneNumbers});

  res.status(204).end();
}

const remove = async (req, res) => {
  const { id } = req.params;

  await model.exclude(id);

  res.status(204).end();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};