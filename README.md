# PayTM Challenge (incomplete)

* Used my personal boilerplate for this: https://github.com/sashimii/react-starteroni
* Implemented API calls for employee related CRUD operations using:
  * express 4.x
  * body-parser
  * sequelize for the ORM
  * Postgres SQL for the db
* Webpack config is mine, with the following:
  * ES2015/ES2016/ES2017
  * Flowtype for static typing
  * Jest for Unit Testing
  * CSS Modules for styles
  * ESLint & Sass-Lint
  * Pre-commit githooks that checks if tests pass first
* Universal Javascript
* Incomplete Front End

## Starting It Up

Make sure you have Node v8.4.x

Place an `.env` file in the root with the variable `POSTGRES_URL=postgres://user:pass@server.tdl:port/db-name`

Run the following commands:

`npm install -g yarn`

`yarn`

`npm run pretty:js`

`npm run build:dev`

`npm run dev:app`


Or, if you are comfortable in running the above commands in succession, use the command `npm run provision`

# Full Stack Developer Challenge
This is an interview challenge for Paytm Labs. Please feel free to fork. Pull Requests will be ignored.

## Requirements
Design a web application that allows employees to submit feedback toward each other's performance review.

*Partial solutions are acceptable.*  It is not necessary to submit a complete solution that implements every requirement.

### Admin view
* Add/remove/update/view employees
* Add/update/view performance reviews
* Assign employees to participate in another employee's performance review

### Employee view
* List of performance reviews requiring feedback
* Submit feedback

## Challenge Scope
* High level description of design and technologies used
* Server side API (using a programming language and/or framework of your choice)
  * Implementation of at least 3 API calls
  * Most full stack web developers at Paytm Labs currently use Node.js and/or Ruby on Rails on the server (with MySQL for the database), but feel free to use other tech if you prefer
* Web app
  * Implementation of 2-5 web pages using a modern web framework (preferably React) that talks to server side
    * This should integrate with your API, but it's fine to use static responses for some of it
* Document all assumptions made
* Complete solutions aren't required, but what you do submit needs to run.

## How to complete this challenge
* Fork this repo in github
* Complete the design and code as defined to the best of your abilities
* Place notes in your code to help with clarity where appropriate. Make it readable enough to present to the Paytm Labs interview team
* Complete your work in your own github repo and send the results to us and/or present them during your interview

## What are we looking for? What does this prove?
* Assumptions you make given limited requirements
* Technology and design choices
* Identify areas of your strengths
* This is not a pass or fail test, this will serve as a common ground that we can deep dive together into specific issues
