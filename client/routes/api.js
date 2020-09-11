const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const List = require('../models/guide');

const db = 'mongodb://localhost:27017/Information';
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) {
        console.err("Error!!" + err);
    }
    else
        console.log("connected successfully to mongodb on port : " + db);
});



router.get('/guide', function (req, res) {
    console.log("get req for all products");
    List.find({})
        .exec(function (err, info) {
            if (err) {
                console.log("Error retrieving data" + err);
            }
            else res.json(info);
        });
});

// router.param('srNo',function(req,res,srNo){
//     var srNo = req.params.srNo;
//     console.log("get req for serial no. video");
//     List.find({srNo})
//     .exec(function (err, video) {
//         if (err) {
//             console.log("Error retrieving data" + err);
//         }
//         else {
//             res.data=video;
//             res.json(video);
//         }
//     });
// })
router.get('/guide/:ModelNumber/', function (req, res) {
        console.log("get req for Mode lNumber product");
    List.find({ ModelNumber:req.params.ModelNumber },function (err, guide) {
        if (err) {
            console.log("Error retrieving data" + err);
        }
        else {
            console.log(guide);
            res.json(guide[0]);
            // res.render('show',{dataSrNo:video[0]});
            }
        });
});
router.post('/guide/', function (req, res) {
    console.log("Post product");    
    var newList = new List();

    newList.ModelNumber = req.body.ModelNumber;
    newList.Name = req.body.Name;
    newList.OS = req.body.OS;
    newList.RAM = req.body.RAM;
    newList.Camera = req.body.Camera;
    newList.Special_features = req.body.Special_features;
    newList.Price = req.body.Price;
    newList.photoPath = req.body.photoPath;
    newList.video = req.body.video;
    newList.save(function (err, insertedProduct) {

        if (err) {
            console.log("Error saving data" + err);
        }
        else {
            console.log("inserted new", insertedProduct);
            res.json(insertedProduct);
        }
    });
});


router.put('/guide/:ModelNumber', function (req, res) {
    var ModelNumber_new = req.params.ModelNumber;
    console.log("Update video");
    List.findOneAndUpdate(ModelNumber_new,
        {
            $set: {
                ModelNumber_new: req.body.ModelNumber,
                Name : req.body.Name,
                OS : req.body.OS,
                RAM : req.body.RAM,
                Camera : req.body.Camera,
                Special_features : req.body.Special_features,
                Price : req.body.Price,
                photoPath : req.body.photoPath,
                video : req.body.video,
            }
        },
        { new: true },

        // var newList = new List();

        function (err, updatedProduct) {
            if (err) {
                res.send("error updating product")
                console.log("Error saving data" + err);
            }
            else {
                console.log("inserted new", updatedProduct);
                res.json(updatedProduct);
            }
        });
});

router.delete('/guide/:ModelNumber', function (req, res) {
    var ModelNumber = req.params.ModelNumber;
    console.log("deleting a product");
    List.findOneAndDelete(ModelNumber, function (err, deletedProduct) {
        if (err) {
            res.send("error deleting product")
        }
        else res.send(ModelNumber);
    })
})
module.exports = router;