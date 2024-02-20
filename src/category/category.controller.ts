import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService){}

    @Get()
    async getCategories() {
        return this.categoryService.getCategories()
    }

    @Post()
    async createCategory(@Body() payload:any) {
        return this.categoryService.storeCategory(payload)
    }

    @Get(':id')
    async getCategory(@Param('id') id: string) {
        return this.categoryService.getCategory(id)
    }

    @Patch(':id')
    async updateCategory(@Param('id') id: string, @Body() payload:any) {
        return await this.categoryService.updateCategory(id, payload)
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: string) {
        return await this.categoryService.deleteCategory(id)
    }
}
