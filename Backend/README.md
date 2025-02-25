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
