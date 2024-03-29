let express = require('express')
let app = express();
let cors = require('cors')
let port = process.env.port || 8080
app.use(cors({
  origin:"*",
  methods:['GET','POST','DELETE','PUT','PATCH']
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/views'));

app.listen(port)


