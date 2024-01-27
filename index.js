import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = 3000;

const submittedTweets = ["hs","bsbyb"]

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended: true}))


app.get ("/", (req,res) => {
    res.render('index.ejs')
})


app.post("/submit", (req, res) => {
    const submittedTweets = req.body.submittedTweets;
    res.render("tweets.ejs", { submittedTweets })
  })

// app.get("/submit", (req,res) => {
//     res.render("tweets.ejs", { tweetRender : tweeterds })
//   })

 
    // res.render(req.body("tweets.ejs"))
   // let tweetedMessage = tweet
        // console.log(tweets)
         // req.render("tweets.ejs")

app.listen(port,(req,res) => {
    console.log(`Listening on port ${port}`)
})