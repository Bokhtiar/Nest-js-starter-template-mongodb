import * as mongoose from 'mongoose'

export const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    status: {
        type: Boolean,
        default: false
    }
})

export interface ICategory extends mongoose.Document{
    name: string,
    status: boolean
}