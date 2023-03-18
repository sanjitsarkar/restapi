import { FilterQuery, QueryOptions, UpdateQuery, _FilterQuery } from "mongoose";
import { ItemDocument, ItemInput, ItemModel } from "../models";

class ItemService {
  async createItem(input: ItemInput) {
    try {
      const result = await ItemModel.create(input);
      return result;
    } catch (e) {
      throw e;
    }
  }

  async findItem(
    query: FilterQuery<ItemDocument>,
    options: QueryOptions = { lean: true }
  ) {
    try {
      const result = await ItemModel.findOne(query, {}, options);
      return result;
    } catch (e) {

      throw e;
    }
  }
  async findItems(
    query: FilterQuery<ItemDocument>,
    options: QueryOptions = { lean: true }
  ) {
    try {
      const result = await ItemModel.find(query, {}, options);
      return result;
    } catch (e) {

      throw e;
    }
  }

  async findAndUpdateItem(
    query: FilterQuery<ItemDocument>,
    update: UpdateQuery<ItemDocument>,
    options?: QueryOptions
  ) {
    return ItemModel.findOneAndUpdate(query, update, options);
  }
  async findByIdAndUpdate(
    id: Pick<FilterQuery<ItemDocument>, "_id">,
    update: UpdateQuery<ItemDocument>,
    options?: QueryOptions
  ) {
    return ItemModel.findByIdAndUpdate(id, update, options);
  }

  async deleteItem(query: FilterQuery<ItemDocument>) {
    return ItemModel.deleteOne(query);
  }
  async findAndDeleteItemById(id: Pick<FilterQuery<ItemDocument>, "_id">,
  ) {
    return ItemModel.findByIdAndDelete(id);
  }
}

export default new ItemService()