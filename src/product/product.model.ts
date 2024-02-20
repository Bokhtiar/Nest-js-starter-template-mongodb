import * as mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    price: {
        type: Number,
        require: true,
    },
    body: {
        type: String,
        trim: true,
        require: false
    },
    image: {
        type: String,
        trim: true,
        require: false
    },
    status: {
        type: Boolean,
        default: false
    }
})

export interface IProduct extends mongoose.Document {
    name: string,
    price: number,
    body: string,
    image: string,
    status: boolean
}