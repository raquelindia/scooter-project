const { TestWatcher } = require('jest')
const User = require('../src/User')

describe('tests username', () => {
  test('username is a string', () => {
    const username1 = typeof this.username;

    expect(username1).toBe(String);
  })
})

describe('tests password', () => {
    test('password is a string', () => {
        const password1 = typeof this.password;

        expect(password1).toBe(String);
    })
})

describe('tests age', () => {
    test('age is a number', () => {
        const age1 = typeof this.age;

        expect(age1).toBe(Number);
    })
})



// User tests here

// test username

// test password

// test age

// test login

// test logout
