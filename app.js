const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();
const newItems=["Buy Food","Eat Food","Cook Food"];
const workItems=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
const day=date.getDate();
res.render("list1",{listTitle:day,newListItems:newItems});

});

app.post("/",function(req,res){

newItem=req.body.newItem;
if(req.body.list==="Work"){
  workItems.push(newItem);
  res.redirect("/work");
}
else{
  newItems.push(newItem);
  res.redirect("/");

}

});
app.get("/work",function(req,res){
res.render("list1",{listTitle:" Work List",newListItems:workItems})
});
app.get("/about",function(req,res){
  res.render("about");
});



app.post("/work",function(){
const newItem=req.body.newItem;
workItems.push(newItem);
res.redirect("/work");
});
app.listen(process.env.PORT||3000,function(){
  console.log("Server gets started at port 3000");
});
