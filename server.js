import express from "express";
const app = express();
const port = 3000;

// Array to store blog posts
const posts = [];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/compose", (req, res) => {
    res.render("compose");
});

app.post("/compose", (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        title: title,
        content: content,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };

    // Add the new post to the beginning of the array (newest first)
    posts.unshift(newPost);
    console.log("New post added:", newPost);
    console.log("Total posts:", posts.length);

    res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
    res.render("blogs", { posts: posts });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});