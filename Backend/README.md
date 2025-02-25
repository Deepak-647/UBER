# Backend API Documentation

## Endpoint: `/users/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data, hashes the user's password, creates a new user in the database, and returns an authentication token along with the user details.

### Request Body:

The request body should be a JSON object with the following structure:

- `fullname`(object)

  - `firstname` (string (required, min length: 3)),
  - `lastname` (string (optional, min length: 3))

- `email` (string (required, valid email format)),
- `password` (string (required, min length: 6))

### Example Response

- `user`(object)

  - `fullanme` (object)
    - `firstname` (string (required, min length: 3))
    - `lastname` (string (optional, min length: 3))
  - `email` (string) :valid email format,
  - `password` (string) : min length: 6

- `token` (string) : JWT Token

## `/users/login` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Endpoint

`/users/login`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).



## `/users/logout` Endpoint

### Description

Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookie: