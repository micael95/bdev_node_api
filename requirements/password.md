# Signup

> ## Success Case

1. ✔ Receive a POST request -> **/api/{version}/password**.
2. ✔ Validate required fields **description**, **category**, **tags**.
3. ✔ Return 201 status for create password

> ## Exceptions

1. ✔ Return **404** if not found route
2. ✔ Return **400** if required fields not given
3. ✔ Return **500** if exists a server error
