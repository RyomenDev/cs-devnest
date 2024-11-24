const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("IN HERE");

  mongoose
    .connect(
      "mongodb+srv://adityaagr694:adityaagr00@database.iy6osys.mongodb.net/Database?retryWrites=true&w=majority"
    )
    .then((conn) => {
      console.log(conn);
    })
    .catch((error) => {
      console.log(error);
    });

  //   try {
  //     const conn = await mongoose.connect(
  //       "mongodb+srv://adityaagr694:adityaagr00@database.iy6osys.mongodb.net/Database?retryWrites=true&w=majority",
  //       {
  //         useNewUrlParser: true,
  //         useUnifiedTopology: true,
  //       }
  //     );

  //     console.log(conn);

  //     console.log(`MongoDB ÷Connected: ${conn.connection.host}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
};

module.exports = connectDB;
