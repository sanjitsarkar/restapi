import { Request, Response } from "express";
import mongoose from "mongoose";
import itemService from "../services/item.service";
export const createItem = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    if (!name) throw Error("Item name is required!")
    const item = await itemService.createItem({ name, description, });

    res.json({
      item,
    });
  } catch (err: any) {
    res.status(401).json({ errors: [err?.message?.split(",")] });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id, name, description } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) throw Error("Invalid item id!")
    if (!name || !description) throw Error("There is nothing to update!")
    const item = await itemService.findByIdAndUpdate(id, { name, description, });
    res.json({
      item,
    });
  } catch (err: any) {
    res.status(401).json({ errors: [err?.message?.split(",")] });
  }
};
export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) throw Error("Invalid item id!")
    const item = await itemService.deleteItem({ _id: id });
    res.json({
      item,
    });
  } catch (err: any) {
    res.status(401).json({ errors: [err?.message?.split(",")] });
  }
};

export const fetchItems = async (req: Request, res: Response) => {
  try {
    const { skip = 0, limit = 0 } = req.query;
    if (typeof skip !== "number" || typeof limit !== "number") throw Error("Both skip and limit should be number!")
    const items = await itemService.findItems({}, { skip, limit });
    res.json({
      items,
    });
  } catch (err: any) {
    res.status(401).json({ errors: [err?.message?.split(",")] });
  }
};
export const fetchItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) throw Error("Invalid item id!")
    const item = await itemService.findItem({ _id: id });
    res.json({
      item,
    });
  } catch (err: any) {
    res.status(401).json({ errors: [err?.message?.split(",")] });
  }
};
