//jshint esversion:6
require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const PORT = process.env.PORT || 3000

const app = express();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true});

const ArticleSchema = {
  title: String,
  content: String
};

const articleModel = mongoose.model('articles', ArticleSchema);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.route('/articles/')

.get( function(req, res) {
  articleModel.find({}, function(err,result){
    if (!err) {
      // console.log(result);
      res.send(result);  
    }
    else {
      res.send(err);
      
    } 
  })

})
.post(function(req, res) {
  console.log(req.body.title+", "+req.body.content);
  const newArticle = new articleModel(
    {
      title: req.body.title,
      content: req.body.content
    }
  );

  newArticle.save(function(err){
    if(err) {
      res.send(err);
    }
    else {
      res.send("success");
    }
  })

})

.delete(function(req, res) {
  articleModel.deleteMany(function(err){
    if(err) {
      res.send(err);
    }
    else {
      res.send("Deleted successfully!");
    }
  });

})
;

app.route('/articles/:articleTitle')

.get(function(req, res) {
  articleModel.findOne({title:req.params.articleTitle},function(err, article) {
    if(err) {
      res.send(err);
    }
    else {
      res.send(article);
    }
  });
})

.put(function(req, res) {
  articleModel.updateOne({title:req.params.articleTitle}
    // ,{$set:{title:req.body.title,content:req.body.content,content:req.body.content}}
    ,{title:req.body.title,content:req.body.content,content:req.body.content}
    ,{upsert:true}
    ,function (err,updateResult){
      if(err) {
        res.send(err);
      } else if (updateResult.matchedCount === 0){
        res.send("Not found!");
      }
      else {
        res.send(updateResult.modifiedCount + ' document(s) were updated');
      }
    })

})
.patch(function(req, res) {
  articleModel.updateOne({title:req.params.articleTitle}
    // ,{$set:{title:req.body.title,content:req.body.content,content:req.body.content}}
    ,{$set:{title:req.body.title,content:req.body.content,content:req.body.content}}
    ,function (err,updateResult){
      if(err) {
        res.send(err);
      } else if (updateResult.matchedCount === 0){
        res.send("Not found!");
      }
      else {
        res.send(updateResult.modifiedCount + ' document(s) were updated');
      }
    })

})

.delete(function(req, res) {
  articleModel.deleteOne({title:req.params.articleTitle}
    
    ,function (err,deleteResult){
      if(err) {
        res.send(err);
      } else if (deleteResult.deletedCount === 0){
        res.send("Not found!");
      }
      else {
        res.send('One deleted successfully');
      }
    })

})
;



// app.listen(3000, function() {
//   console.log("Server started on port localhost:3000");
// });
connectDB().then(() => {
  app.listen(PORT, () => {
      console.log("listening for requests on localhost:"+PORT+' .');
  })
})
