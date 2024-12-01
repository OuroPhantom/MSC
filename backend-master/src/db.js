import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try{
        const url = 'mongodb+srv://phantom:ouro@msc.dkfzz.mongodb.net/?retryWrites=true&w=majority&appName=MSC'
        //await mongoose.connect('mongodb://127.0.0.1/sistema');
        await mongoose.connect(url);
        console.log('Base de datos conectada');
    }catch(error){
        console.log(error);
    }
}