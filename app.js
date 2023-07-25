require("dotenv").config();
require("express-async-errors");

//extra security package
const helmet = require("helmet"),
  cors = require("cors"),
  xss = require("xss-clean"),
  rateLimiter = require("express-rate-limit");
///

const express = require("express"),
  app = express(),
  morgan = require("morgan");

// connect to DB
const connectDB = require("./db/connect");
const authenticateUser = require("./middleware/authentication");

//routers
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    widowsMs: 15 * 60 * 1000, // 15min
    max: 100, //limit each ip to 100 request per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
// extra packages
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
