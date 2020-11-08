# FEEDBACK FORM

## Description

_Duration: Weekend Project_

Creating a feedback form using the full stack. The feedback is collected over 4 views. In a separate review page, the feedback information is displayed along with a submit button. Clicking the submit button saves feedback to the database.

## Screenshot

## Installation

1. Create a database named `prime_feedback`
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. To begin the feedback form a user can click the **START** button.
2. On the Feeling Page a user can fill in the appropriate bubble. Clicking the **NEXT** button will take them to the next part of the form. Clicking the **BACK** button will take them back to the start page.
3. On the Understanding Page and Support Page a user can fill in the appropriate bubble. Clicking the **NEXT** button will take them to the next part of the form. Clicking the **BACK** button will take them to the previous part of the form.
4. On the Comments Page a user can use the text input to write a comment to be included with their feedback. Clicking the **NEXT** button will take them to the Review Page. Clicking the **BACK** button will take them to the previous part of the form.
5. On the Review Page a user can take a look at their feedback. If they are happy with the information they can click the **SUBMIT** button. If they would like to go back and edit information they can click the **BACK** button.
6. The Success Page announces the successful submission of the feedback. A user can click on the highlighted link to start a new feedback form from the beginning.

## Built With

- HTML
- CSS
- JavaScript
- Node
- Express
- React
- Redux
- Axios
- Postgresql
- @Material-UI

## Acknowledgment

Thank you Castor Cohort family - specifically Sarah and Lara.
Thanks to everyone at [Prime Digital Academy](www.primeacademy.io) for their help and support - good luck with your new adventure, Scott!
