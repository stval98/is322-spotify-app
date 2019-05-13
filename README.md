IS 322 Final Project
=====================

In this assignment you will be tasked with creating a web or mobile application using React and
Redux as well as any other tools or libraries we’ve learned throughout the semester.
This assignment should be written using React and JSX, as well as other libraries like Redux and
React-Router-Dom. I recommend using create-react-app as a basis for the application (see
Setting up React Video in Moodle). This project needs to connect to some kind of API, you can
use a mock server as in Project 2 (see JSON Server Tutorial Video in Moodle) or a 3rd party API
(Twitter, YouTube, OpenWeatherMap, etc). You do not need a full custom back-end component
for this assignment.

There are a few options for the project summarized below:

Option 1: Banking Application
----------------------------------
This option is for students that really just want to create a full application in React/Redux
without coming up with an original idea of their own. It’s a basic banking application that allows
to user to Add, Edit, and Delete Accounts, as well as adjust their balance. Keeping a log of all
changes to the account balance with a separate transactions table. Requirements, details, and
screenshots for this project can be found below.

**Description**

This project requires you to make a basic banking application that follows these requirements. It should have a list of accounts and their current balance (stored in Redux). A list of transactions for all modifications made to the balance of each account (also stored in redux). Then ways to deposit and withdraw money, as well as add and delete existing accounts. A Video of this project working fully can be found in Moodle under Final Project Requirements.

**Requirements**
1. Display a list of all accounts and their current balance on the home page.
    1. Accounts should be retrieved from an API (JSON Test Server) and stored in ReduxState.
    2. Can use my API with Data I already setup
    3. See Redux Containers and State Video in Moodle
    4. See Making API Requests Video in Moodle
    5. See Making API Requests with Redux Video in Moodle
2. Keep a record of all transactions for each account. These should be displayed on a transactions
page. (Filters are not needed but are always good for extra credit)
    1. Accounts should be retrieved from an API (JSON Test Server) and stored in Redux State.
3. An account page that should:
    1. Display the accounts information, balance, and transaction history.
    2. Account ID and info should be retrieved from the URL
    3. Button to Delete and Edit the account
    4. Ability to add and deposit money to account. This should create a new transaction record as well as update the balance for the account everywhere it’s displayed
    5. Resources
    6. See Redux Containers and State Video in Moodle
    7. See Working with Lists Video in Moodle
    8. See Redux Actions and Changing State Video in Moodle
    9. See React Router Video in Moodle
4. Add Account Page (3+ Members Only)
    1. A form with the ability to create a new account with an initial balance
    2. See Redux Actions and Changing State Video in Moodle
5. Edit Account Page (3+ Members Only)
    1. A form with the ability to change an accounts name and current balance
    2. A transaction should be created to withdraw or deposit money to match new balance.

**General Requirements for All Options**
1. All code must be in GitHub by the due date. Anything later will be disregarded.
2. Apps do not need to be deployed to AFS or another server, though they can be for extra
credit (see Building and Deploying a React App video in Moodle)
3. All pages should be responsive, and can be easily viewed on the following resolutions,
you do not need to specifically code for these resolutions, these are just the ones I will
be testing.
    1. See Media Queries Video in Moodle
    2. 1366px Width (Large Desktop)
    3. 1024px Width (Small Desktop)
    4. 768px Width (Tablet)
    5. 411px Width (Phone)
4. Styling and UI Design WILL COUNT for 20% of the final project grade. I will less be giving points for good design, and less be taking off points for bad design. Doesn’t need to be great, just make it look somewhat good and functional on all resolutions.

**Important:**
1. Track changes to your code using GitHub
2. Submit your GitHub link to the app on Moodl, if you missed one of them, you get 20% off
from full credit.
3. ***NO LATE PROJECTS***
4. You will receive a grade for the project as a whole, and an individual grade for your
contributions.