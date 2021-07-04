# Signup

> ## Success Case

1. ✔ Receive a POST request -> **/api/{version}/signup**.
2. ✔ Validate required fields **name**, **email**, **password**, **passwordConfirmation**, **birthday**, **genre**.
3. ✔ Validate **password** and **passwordConfirmation** match.
4. ✔ Ensure is a valid **email**.
5. ✔ Validate if already exists an user with informed email.
6. ✔ Create a hash password.
7. ✔ Create an account with given data.
8. ✔ Create a token from the new user created.
9. ✔ Return 201 status in response header and user object

> ## Exceptions

1. ✔ Return **404** if not found route
2. ✔ Return **400** if required fields not given
3. ✔ Return **400** if passwordConfirmation doesn't match
4. ✔ Return **400** if is an invalid email
5. ✔ Return **403** if email is already in use
6. ✔ Return **500** if exists a server error