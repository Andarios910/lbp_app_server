import mongoose from 'mongoose';

const connect = async() => {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log('Database Connected');
}

export default connect;