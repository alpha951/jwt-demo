# JWT Demo Project

This is a simple demo project showcasing the usage of JWT (JSON Web Tokens) for authentication and authorization in an API. It includes several files with different functionalities.

## Setup

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Create a `.env` file and provide the required environment variables (e.g., `JWT_SECRET`).
4. Start the server using `npm start`.

## Endpoints

### 1. POST /api/v1/login [Public]

This endpoint is used to authenticate the user and generate a JWT token for further authorization.

Request body:

```json
{
  "username": "example",
  "password": "password123"
}
```

Response:

```json
{
  "msg": "User created!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwidXNlcm5hbWUiOiJleGFtcGxlIiwiaWF0IjoxNTE2MjM5MDIyfQ.Lhvi7LQaz4a6I4PzxSp1DAqnUcGowYzvjx3cz49c8W8"
}
```

### 2. GET /api/v1/dashboard [Protected]

This endpoint requires a valid JWT token in the `Authorization` header (Bearer token) for access. It returns a personalized message and a randomly generated lucky number.

Request header:

``` js
Authorization: Bearer <token>
```

Response:

```json
{
  "msg": "Hello, example",
  "secret": "Your lucky number is 42"
}
```

## Files

### route.js

This file defines the API routes using the Express Router. It maps the endpoints to the corresponding controller functions and middleware.

### controller.js

The controller file contains the implementation of the main API functions. It includes the following functions:

- `login`: Handles the user authentication. It validates the provided username and password, generates a JWT token, and sends it as a response.
- `dashboard`: Provides access to the protected dashboard route. It retrieves the user information from the decoded JWT token and returns a personalized message with a randomly generated lucky number.

### auth.js

The auth middleware verifies the JWT token sent in the request header. It checks for the presence of the token, validates its format, and verifies its authenticity using the provided JWT secret. If the token is valid, the middleware attaches the decoded user information to the request object for further processing.

### errors/index.js

This file exports custom error classes used within the application. The available error classes are:

- `badRequest`: Represents a 400 Bad Request error.
- `unauthenticatedError`: Represents a 401 Unauthorized error.
- `customAPIError`: Represents a custom API error.

These error classes are used for handling specific error scenarios within the API.
