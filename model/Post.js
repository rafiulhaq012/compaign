const mongoose = new require("mongoose");

const post_scheme = mongoose.Schema({
    name:{
        type:String,
        required:"Name is required"
    },
    type:{
        type:String,
        required:"Type is required"
    },
    start_date:{
        type:String,
        required:"Start Date is required"
    },
    end_date:{
        type:String,
        required:"End Date is required"
    }

    
},


{
    timestamps: true
}
)



module.exports = mongoose.model("Post",post_scheme)