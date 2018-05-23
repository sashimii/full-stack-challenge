import { Employee } from '../model';
import { getValidObject } from '../lib/validate';

export const addEmployee = (req, res) => {
  let validEmployee = getValidObject(req.body);
  validEmployee.isAdmin = false;
  Employee.create(validEmployee)
    .then(() =>
      Employee.findOrCreate({ where: { username } }).then(employee =>
        res.send(employee)
      )
    )
    .catch(function(err) {
      switch (err.name) {
        case 'SequelizeUniqueConstraintError':
          res.send('Sorry, this username is taken.\n');
          return;
        default:
          console.log('ERROR: ', err);
          return;
      }
    });
  console.log('ADDING EMPLOYEE');
};

export const removeEmployee = (req, res) => {
  Employee.destroy({
    where: {
      username: req.params.username
    }
  })
    .then(() => {
      res.send(`Deleted ${req.params.username}`);
    })
    .catch(() => {
      res.sendStatus(404).send(`User Not Found`);
    });
  console.log('REMOVING EMPLOYEE');
};

export const updateEmployee = (req, res) => {
  let validUpdatedEmployee = getValidObject(req.body);
  Employee.update(validUpdatedEmployee, {
    where: {
      username: req.params.username
    }
  }).then(() => {
    Employee.findOrCreate({
      where: { username: req.params.username }
    }).then(employee => {
      res.send(employee);
    });
  });
  console.log('UPDATING EMPLOYEE');
};

export const getEmployee = (req, res) => {
  Employee.find({ where: { username: req.params.username } })
    .then(employee => {
      if (employee !== null) {
        res.send(employee);
      } else {
        res.sendStatus(404).send('Not found');
      }
    })
    .catch(err => {});
};

export const getAllEmployees = (req, res) => {
  Employee.findAll({
    order: [['lastName', 'ASC']]
  })
    .then(employees => {
      if (employees !== null) {
        res.send(employees);
      } else {
        res.sendStatus(404).send('Not found');
      }
    })
    .catch(err => {
      res.sendStatus(404).send('404 Not Found');
    });
};
