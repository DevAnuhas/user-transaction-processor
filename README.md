# User Transaction Processor

This is a simple backend application built with Node.js, Express, and TypeScript. The application processes a request body containing user and transaction data, validates it, and returns a response with calculated details.

## Features

- Validates request body data using [Zod](https://zod.dev/).
- Calculates the user's age based on their date of birth.
- Computes the total transaction amount and transaction count.
- Provides a structured JSON response.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/DevAnuhas/user-transaction-processor.git
cd user-transaction-processor
```

2. Install dependencies:

```bash
npm install
```

## Usage

### Development Server

To start the development server with live reload:

```bash
npm run dev
```

### Production Server

To start the production server:

```bash
npm start
```

The server will run on `http://localhost:3000`.

## API Endpoints

`POST /api/process-user`
Processes user and transaction data.

### Request Body

The request body should be a JSON object with the following structure:

```json
{
	"user": {
		"name": "Alice Smith",
		"dateOfBirth": "1990-05-15"
	},
	"transactions": [
		{ "id": 1, "amount": 50 },
		{ "id": 2, "amount": 75.5 },
		{ "id": 3, "amount": 20 }
	]
}
```

### Response

The response will be a JSON object containing the following fields:

```json
{
	"name": "Alice Smith",
	"totalAmount": 145.5,
	"transactionCount": 3,
	"userAge": 34
}
```

## Error Handling

If the request body is invalid, the API will return a `400 Bad Request` response with details about the validation errors.

## Project Structure

`src/index.ts`: Entry point of the application.
`src/api/process-user.ts`: Defines the /api/process-user route.
`src/application/process-user.ts`: Contains the logic for processing user and transaction data.
`src/domain/dtos/process-user.ts`: Defines the schema for validating the request body using Zod.

## Dependencies

**Express**: Web framework for building APIs.
**Zod**: Schema validation library.
**Date-fns**: Utility library for date manipulation.
**Ora**: CLI spinner for better logging.
**TypeScript**: Type-safe JavaScript.
**Nodemon**: Automatically restarts the server during development.
**Ts-node**: Runs TypeScript files directly.

## License

This project is licensed under the ISC License.
