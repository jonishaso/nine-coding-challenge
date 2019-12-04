# Nine Digital Coding Challenge

## Setup

```sh
yarn
yarn watch
```

## Run Tests

```sh
yarn test
```

For testing, as the project focused around handling HTTP requests (i.e. very data-driven), I used unit testing with a strong focus on snapshot testing.

## Assumptions I Made

Many of the design decisions made for this project were done to accommodate a much larger production-level project. The folder structure in particular is designed to support multiple routes, multiple endpoints, and multiple data sources as well.

With particular regard to `src/server/handleErrors.js`, all errors at this stage are assumed to be JSON errors. If this were a production codebase, then this is surely poor assumption to make. However, I think this is appropriate given the scope of the project and the stated requirements. The benefit of genericising the error message is that it then makes it more difficult for the client to know exactly how the request failed, although I admit that this was not the main intent of such a design.

I used Webpack to build the project into a single `dist/bundle.js` file. Bundling the backend (without including any dependencies) helps us ensure that the directory structure is not affected during runtime. It also means that we cannot make poor assumptions about the directory structure during development time.

## Questions Regarding The Test

1. **What did you think of the test?** I found the test to be very fun. I loved that the test focused more on best practices as opposed to implementing a large number of features.
2. **What was the biggest challenge?** I wanted to architect the project in a way that is suitable for a much larger codebase. Taking insipration from projects I've personally developed and architected in the past, I decided on this as the final directory structure.
3. **How did it take to complete?** 2 hours of coding and 1 hour of deploying/making sure everything works.
4. **How did you choose which language/technology to use?** As the main focus of the job role I am applying for, I chose to use Node.js to complete this project.
