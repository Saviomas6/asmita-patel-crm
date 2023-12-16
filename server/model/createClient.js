import mongoose from "mongoose";

const createClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

export const CreateClient = mongoose.model("CreateClient", createClientSchema);
