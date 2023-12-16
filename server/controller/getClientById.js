import { CreateClient } from "../model/createClient.js";

export const getClientById = async (req, res) => {
  try {
    const id = req.params.id;
    const getClient = await CreateClient.find({ _id: id }, { __v: 0 });
    res.send(getClient);
  } catch (e) {
    console.log(e);
  }
};
