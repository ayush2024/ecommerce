
import mongoose from "mongoose";
import keys from '../../config/keys.js';

export const Connection = async () => {

    const URL = keys.mongo.Url;
    try {

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database connected succesfully");

    } catch (error) {
        console.log('yahi error hai');
    }
};

export default Connection;