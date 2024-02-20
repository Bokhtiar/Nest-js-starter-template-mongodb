import {Model} from 'mongoose'
import { IProduct } from './product.model';
import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel('Product') private readonly productModel: Model<IProduct>,
    ) { }


    /** list of resource */
    async index() {
        return await this.productModel.find().populate("category", 'name')
    }

    /** store of resoruce */
    async store(payload:any) {
        const product = new this.productModel(payload)
        return await product.save()
    }

    /** single of resource */
    async show(id: string) {
        return await this.productModel.findById(id).populate("category", 'name')
    }

    /** single resource update */
    async update(id:string, payload:any) {
        return await this.productModel.findByIdAndUpdate(id, payload)
    }

    /** single resource delete */
    async destory(id:string){
        return await this.productModel.findByIdAndDelete(id)
    }
}
