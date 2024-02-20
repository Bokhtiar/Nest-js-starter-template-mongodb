import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICategory } from './category.model';
import {Model} from 'mongoose'

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel('Category') private readonly categoryModel : Model<ICategory>,
    ){}
    
    /** list of resourse */
    async getCategories() {
        return await this.categoryModel.find()
    }

    /** store of resource */
    async storeCategory(payload:any) {
        const category = new this.categoryModel(payload)
        return await category.save()
    }

    /** single resource */
    async getCategory(id: string) {
        return await this.categoryModel.findById(id)
    }

    /** update of resource */
    async updateCategory(id:string, payload:any) {
        return await this.categoryModel.findByIdAndUpdate(id, payload)
    }

    /** destroy of resource */
    async deleteCategory(id: string) {
        return await this.categoryModel.findByIdAndDelete(id)
    }
}
