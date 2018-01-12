# React TDD Boilerplate

This boilerplate was designed to work with a TDD approach. It has already Enzyme, Mocha and Chai setup for you to go. There's a `test` folder when you can add all your unit tests. The convention we use is
`[testname].spec.js`.

## Running the boilerplate

- First install all dependencies by running the following command:
  - `npm install`

- Then run the command
  - `npm run test:tdd`
  This command will run all your tests once and will setup a watcher so every change you do will automatically run the tests again.

- If you want to see your app in a Browser, then you can run this:
  - `npm run dev:hot`

  It will put your code available to the port 3000. You can type `https://localhost:3000` in your browser and see the boiler plate in action.
  Again, this command will be listening for your changes. Whenever you change a file, the browser will reload and show your changes.

  `Tip:` You can keep two separate terminals, one for each command. Then you can both see your tests running and your changes showing up on the browser.

  `Attention:` Node 8.6.0 at least is required to run this boilerplate