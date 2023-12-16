const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('John', 1, 'john@example.com');

  expect(employee.name).toBe('John');
  expect(employee.id).toBe(1);
  expect(employee.email).toBe('john@example.com');
});

test('gets employee name', () => {
  const employee = new Employee('John', 1, 'john@example.com');
  expect(employee.getName()).toBe('John');
});

// Repeat similar tests for getId, getEmail, and getRole
