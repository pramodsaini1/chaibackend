require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

const githubData={
  "login": "pramodsaini1",
  "id": 69410719,
  "node_id": "MDQ6VXNlcjY5NDEwNzE5",
  "avatar_url": "https://avatars.githubusercontent.com/u/69410719?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pramodsaini1",
  "html_url": "https://github.com/pramodsaini1",
  "followers_url": "https://api.github.com/users/pramodsaini1/followers",
  "following_url": "https://api.github.com/users/pramodsaini1/following{/other_user}",
  "gists_url": "https://api.github.com/users/pramodsaini1/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pramodsaini1/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pramodsaini1/subscriptions",
  "organizations_url": "https://api.github.com/users/pramodsaini1/orgs",
  "repos_url": "https://api.github.com/users/pramodsaini1/repos",
  "events_url": "https://api.github.com/users/pramodsaini1/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pramodsaini1/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Pramod Kumar Saini",
  "company": null,
  "blog": "",
  "location": "jhunjhunu",
  "email": null,
  "hireable": true,
  "bio": "Nature gives us chances and we have to convert these chances into opportunities and i am on my way. I will try to do my best and will surely grow in the field o",
  "twitter_username": null,
  "public_repos": 31,
  "public_gists": 0,
  "followers": 5,
  "following": 11,
  "created_at": "2020-08-09T04:10:05Z",
  "updated_at": "2024-01-13T08:14:02Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Pramod Kumar Saini')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login chai aur code</h1>')
})


app.get('/youtube',(req,res)=>{
    res.send("<h2>chai aur code</h2>")
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})