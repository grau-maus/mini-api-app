## Mini API App

### About:

- This mini API app accepts a POST request to the route `/test`, which accepts one argument: `string_to_cut`
- It then returns a JSON object with the key: `return_string`, and a string containing every third letter from the original string

### Getting Started:

- Clone repository
- Navigate into the `mini-api-app` directory
- Run the following commands in your terminal:
  - `npm install`
  - `npm start`
- Then copy and paste the following onto your terminal:
  - `curl -X POST http://localhost:3000/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'`
