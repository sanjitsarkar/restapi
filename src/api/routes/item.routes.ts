import express from "express";
import { createItem, deleteItem, fetchItem, fetchItems, updateItem } from "../controllers/item.controller";


const router = express.Router();
/**
 * @openapi
 * '/api/items':
 *  get:
 *     tags:
 *     - Item
 *     summary: Get all the items
 *     parameters:
 *      - name: skip
 *        in: query
 *        description: The id of the item
 *      - name: limit
 *        in: query
 *        description: The id of the item
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *             type: array
 *             items:
 *                oneOf:
 *                - $ref: '#/components/schema/Item'
 *       404:
 *         description: Items not available
 */
router.get("/", fetchItems);
/**
   * @openapi
   * '/api/items':
   *  post:
   *     tags:
   *     - Item
   *     summary: Create an Item
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schema/Item'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schema/Item'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.post("/", createItem);
/**
 * @openapi
 * '/api/items/{itemId}':
 *  get:
 *     tags:
 *     - Item
 *     summary: Get a single item by the itemId
 *     parameters:
 *      - name: itemId
 *        in: path
 *        description: The id of the item
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Item'
 *       404:
 *         description: Item not found
 */
router.get("/:id", fetchItem);
/**
   * @openapi
   * '/api/items':
   *  put:
   *     tags:
   *     - Item
   *     summary: Update an Item
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schema/Item'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schema/Item'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.put("/:id", updateItem);
/**
 * @openapi
 * '/api/items/{itemId}':
 *  delete:
 *     tags:
 *     - Item
 *     summary: Delete a single item by the itemId
 *     parameters:
 *      - name: itemId
 *        in: path
 *        description: The id of the item
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Item'
 *       404:
 *         description: Item not found
 */
router.delete("/:id", deleteItem);

export const itemRoutes = router;
export default itemRoutes
