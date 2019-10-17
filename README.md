# antonio-project-week-6

## Motivation

The challenge for week 6 was to develop a game using React. This allowed us to practice using the React framework and functionalities.
I decided to create a Connect 4 game with players that go head to head.

## Prerequisites

### Getting an access token

You'll need a GitHub auth token so you won't get rate limited!

On GitHub go to: Settings > Developer Settings > Personal access tokens > Generate new token

For this project you'll need to select `user` scopes.

## How to run locally

1. Clone repo
2. Install n
3. CD into 'antonio-week-6/src'
4. Create 'token.js' file.
5. Contents of 'token.js' should look like the following.

```javascript
const nasa_key = "VyRVUHwUJahspTDZZEfzIzJRl29my4BkniQ5n8CO";
const github_key = "OMMITED";

export { nasa_key, github_key };
```

Copy and paste this into the 'token.js' folder you have created then replace the "OMITTED" string with the access token you retreived earlier.

5. CD up a level to the 'antonio-week-6' folder and install npm packages with

```cmd
npm install
```

Then run the development server with

```cmd
npm start
```

The development server should now be serving the web app, head to http://localhost:3000
