import { Schema, model } from 'mongoose';

export interface ItemInput {
  name: string;
  description: string;
}

export interface ItemDocument extends ItemInput, Document {
  createdAt: Date;
  updatedAt: Date;
}

const itemSchema = new Schema({
  name: { type: String, trim: true, required: [true, "Item name is required!"] },
  description: { type: String, trim: true },
}, {
  timestamps: true,
})

export const ItemModel = model<ItemDocument>('Item', itemSchema);
export default ItemModel