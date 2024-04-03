const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.DB_PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://gavinlikewind:71HLrYHNxU6VOuB9@cluster0.k7pj1q8.mongodb.net/COMM229_Project?retryWrites=true&w=majority&appName=Cluster0"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/mernproject' 
    }
    export default config
   
