import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('>>>MONGO connect already >>>');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            // useUrlParser: true,
            useunifiedTopology: true,
        })
        isConnected = true;
        console.log('>>> MONGO connect >>>')
    } catch (error) {
        console.error(error);

    }
}