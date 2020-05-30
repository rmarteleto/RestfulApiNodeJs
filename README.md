# Instructions

1. Install packages: `npm install`
2. Build: `npm run build`
3. Run unit tests: `npm run test`
4. Start server: `npm start`

# Routes

- /users (post) -- adds an user

```json
{
  "email": "test@ns8.com",
  "password": "passwordIsPizza",
  "phone": "333-222-1111"
}
```

- /users (get) -- gets all users

- /events (post) -- get all events

  ```json
  {
    "type": "LOGIN"
  }
  ```

- /events (get) -- get all events

- /events/:email (get) -- get all events for given email

- /events/lastdayevents (get) -- get all events for the last 24 hours

# Future Work

1. Use async commands
2. Create authentication where necessary
3. Add support for HTTPS
4. Improve error handling
5. Improve swagger documentation
6. Improve UserService and create functions to remove and update an user
