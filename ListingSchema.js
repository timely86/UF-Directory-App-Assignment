/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here */
  name: {type: String, required: true},
  code: {type: String, required:true},
  address: String,
  coordinates:
    {
      latitude: Number,
      longitude: Number
    },

  created_at: Date,
  updated_at: Date

});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  /* your code here */

  // gets current date
  var newDate = new Date();

  // change updated_at to current date
  this.updated_at = newDate;

  // if no create_at, add to it
  if(!this.created_at)
      this.created_at = newDate;

  next();
});


/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
