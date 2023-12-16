import { CreateClient } from "../model/createClient.js";

export const getAllClient = async (req, res) => {
  try {
    const searchQuery = req.query.search;
    const dropdownFilter = req.query.dropdownFilter;
    const filter = {};
    if (searchQuery) {
      filter.name = { $regex: searchQuery, $options: "i" };
    }
    if (dropdownFilter) {
      filter.status = dropdownFilter;
    }
    const getClient = await CreateClient.find(filter, { __v: 0 });
    res.send(getClient);
  } catch (e) {
    console.log(e);
  }
};
