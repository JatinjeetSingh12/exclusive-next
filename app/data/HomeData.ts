export type Categories = {
    id:number;
    name:string;
    subCategoriesCheck:boolean;
}

export const categories:Categories[] = [
    {
        id:1,
        name:'Woman\'s Fashion',
        subCategoriesCheck:true
    },
    {
        id:2,
        name:'Men\'s Fashion',
        subCategoriesCheck:true
    },
    {
        id:3,
        name:'Electronics',
        subCategoriesCheck:false
    },
    {
        id:4,
        name:'Home & Lifesteyle',
        subCategoriesCheck:false
    },
    {
        id:5,
        name:'Medicine',
        subCategoriesCheck:false
    },
    {
        id:6,
        name:'Sports & Outdoor',
        subCategoriesCheck:false
    },
    {
        id:7,
        name:"Baby's & Toys",
        subCategoriesCheck:false
    },
    {
        id:8,
        name:"Groceries & Pets",
        subCategoriesCheck:false
    },
    {
        id:9,
        name:"Helath & Beauty",
        subCategoriesCheck:false
    },
]


export const carouselData = [
    {
        image:require('@/public/slider.jpg')
    },
    {
        image:require('@/public/slider2.jpg')
    },
    {
        image:require('@/public/slider3.jpg')
    },
    {
        image:require('@/public/slider4.jpg')
    },
]