const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://tejas:tejas@123@cluster0.3zn45ya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('Error connecting to MongoDB:', err);
});