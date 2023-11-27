import { defineField, defineType } from "sanity";

export const product = defineType({
    name: "product",
    title: "Products",
    type: "document",
    fields:[
        defineField({
            name:"name",
            title:"Name",
            type:"string"
        }),
        defineField({
            name:"slug",
            title:"SLug",
            type:"slug",
            options:{
                source:"name"
            }
        }),
        defineField({
            name:"images",
            title:"Images",
            type:"array",
            of:[{ type:"image"}]
        }),
        defineField({
            name:"categories",
            title:"Categories",
            type:"array",
            of:[{ type:"string"}]
        }),
        defineField({
            name:"sizes",
            title:"Sizes",
            type:"array",
            of:[{ type:"string"}]
        }),
        defineField({
            name:"colors",
            title:"Colors",
            type:"array",
            of:[{ type:"string"}]
        }),
        defineField({
            name:"description",
            title:"Description",
            type:"string",
        }),
        defineField({
            name:"sku",
            title:"Sku",
            type:"string",
        }),
        defineField({
            name:"currency",
            title:"Currency",
            type:"string",
        }),
        defineField({
            name:"price",
            title:"Price",
            type:"number",
        }),
    ]
})
