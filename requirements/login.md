# Signup

> ## Success Case

1. ✔ Receive a POST request -> **/api/{version}/login**.
2. ✔ Validate required fields **email**, **password**.
3. ✔ Return 200 status in response and token object

> ## Exceptions

1. ✔ Return **404** if not found route
2. ✔ Return **400** if required fields not given
3. ✔ Return **500** if exists a server error
