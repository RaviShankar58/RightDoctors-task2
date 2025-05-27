import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  age: {
    type:Number
  },
  gender: {
    type:String,
    enum:["Male","Female","Other"],
    required:true
  },
  mobile: {
    type:String,
    required:true
  }
});

export const Person= mongoose.model("Person", personSchema);
