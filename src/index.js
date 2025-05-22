const express = require("express");
const app = express();
const passport = require('./config/passport');
const connectMongo = require("./config/mongo");
connectMongo();

const httpLogger = require("./middlewares/httpLogger");

const userRoutes = require("./routes/User");
const serviceRoutes = require("./routes/Service");
const forumPostRoutes = require("./routes/ForumPost");
const commentRoutes = require("./routes/Comment");
const profileRoutes = require("./routes/Profile");
const petRoutes = require("./routes/Pet");
const articleRoutes = require("./routes/Article");
const authRoutes = require('./routes/auth');


const messageRoutes = require('./routes/message');

app.use(express.json());
app.use(passport.initialize());

app.use(httpLogger);

app.use("/users", userRoutes);
app.use("/services", serviceRoutes);
app.use("/forum-posts", forumPostRoutes);
app.use("/comments", commentRoutes);
app.use("/profiles", profileRoutes);
app.use("/pets", petRoutes);
app.use("/articles", articleRoutes);
app.use('/auth', authRoutes);


app.use('/message', messageRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
  });