// refer docs that connects mongodb using nodejs
// https://www.mongodb.com/docs/drivers/node/current/quick-start/

const {MongoClient} = require("mongodb");
const url = "mongodb+srv://keerthi:_tDJMP_7W_aEx%408@cluster0.kk6t9.mongodb.net/";
const client = new MongoClient(url);

async function dboppo() {

    // const res=await client.db("khan").collection("student").insertMany([{name:"keer",age:23},{name:"insaane",age:25},{name:"insaan",age:23}]);
    // console.log(res);
    
    const dbs = client.db("khan");
    const stu = dbs.collection("student");
    const res2= await stu.find(
        { name: {$exists:true} }
    ).toArray();
    console.log('result'+": "+JSON.stringify(res2,null,2));
    
}
dboppo();
