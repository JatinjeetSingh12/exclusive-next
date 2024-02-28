export type Categories = {
    id: number;
    name: string;
    subCategoriesCheck: boolean;
}

export type ProductCard = {
    name: string,
    price: number,
    discountPrice: number | null,
    rating: number,
    ratingCount: number,
    image: string;
}

export const categories: Categories[] = [
    {
        id: 1,
        name: 'Woman\'s Fashion',
        subCategoriesCheck: true
    },
    {
        id: 2,
        name: 'Men\'s Fashion',
        subCategoriesCheck: true
    },
    {
        id: 3,
        name: 'Electronics',
        subCategoriesCheck: false
    },
    {
        id: 4,
        name: 'Home & Lifesteyle',
        subCategoriesCheck: false
    },
    {
        id: 5,
        name: 'Medicine',
        subCategoriesCheck: false
    },
    {
        id: 6,
        name: 'Sports & Outdoor',
        subCategoriesCheck: false
    },
    {
        id: 7,
        name: "Baby's & Toys",
        subCategoriesCheck: false
    },
    {
        id: 8,
        name: "Groceries & Pets",
        subCategoriesCheck: false
    },
    {
        id: 9,
        name: "Helath & Beauty",
        subCategoriesCheck: false
    },
]


export const carouselData = [
    {
        image: require('@/public/slider.jpg')
    },
    {
        image: require('@/public/slider2.jpg')
    },
    {
        image: require('@/public/slider3.jpg')
    },
    {
        image: require('@/public/slider4.jpg')
    },
]


export const TodaySaleData = [
    {
        img: require('@/public/products/sale2.png'),
        name: 'HAVIT HV-G92 Gamepad'
    },
    {
        img: require('@/public/products/sale1.png'),
        name: 'AK-900 Wired Keyboard'
    },
    {
        img: require('@/public/products/sale3.png'),
        name: 'IPS LCD Gaming Monitor'
    },
    {
        img: require('@/public/products/sale4.png'),
        name: 'S-Series Comfort Chair'
    },
    {
        img: require('@/public/products/sale2.png'),
        name: 'HAVIT HV-G92 Gamepad'
    },
    {
        img: require('@/public/products/sale1.png'),
        name: 'AK-900 Wired Keyboard'
    },
    {
        img: require('@/public/products/sale3.png'),
        name: 'IPS LCD Gaming Monitor'
    },
    {
        img: require('@/public/products/sale4.png'),
        name: 'S-Series Comfort Chair',
    },
]


export const categoriesData = [
    {
        img: require('@/public/categories/Vector.png'),
        name: 'phones'
    },
    {
        img: require('@/public/categories/Category-Computer.png'),
        name: 'Computers'
    },
    {
        img: require('@/public/categories/Category-Gamepad.png'),
        name: 'Gaming'
    },
    {
        img: require('@/public/categories/Category-Computer.png'),
        name: 'Computers'
    },
    {
        img: require('@/public/categories/Category-Gamepad.png'),
        name: 'Gaming'
    },
    {
        img: require('@/public/categories/Category-Headphone.png'),
        name: 'HeadPhones'
    },
    {
        img: require('@/public/categories/Category-SmartWatch.png'),
        name: 'Smartwatch'
    },
]


export const monthProduct: ProductCard[] = [
    {
        name: 'The North Coat',
        price: 360,
        discountPrice: 360,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/shirt.png')
    },
    {
        name: 'Gucci duffle bag',
        price: 660,
        discountPrice: 960,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/gucci-bag.png')
    },
    {
        name: 'RGB liquid CPU Cooler',
        price: 170,
        discountPrice: 160,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/speaker.png')
    },
    {
        name: 'Small BookSelf',
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/wooden-cabin.png')
    },
]



export const ExploreProductsData:ProductCard[] = [
    {
        name: 'Breed Dry Dog Food',
        price: 360,
        discountPrice: 360,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/dog-food.png')
    },
    {
        name: 'CANON EOS DSLR Camera',
        price: 660,
        discountPrice: 960,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/nexon-camera.png')
    },
    {
        name: 'ASUS FHD Gaming Laptop',
        price: 170,
        discountPrice: 160,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/laptop.png')
    },
    {
        name: 'Curology Product Set',
        price: 170,
        discountPrice: 160,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/face-wash.png')
    },
    {
        name: 'Kids Electric Car',
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/toy.png')
    },
    {
        name: 'Jr. Zoom Soccer Cleats',
        price: 660,
        discountPrice: 960,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/shoes.png')
    },
    {
        name: 'GP11 Shooter USB Gamepad',
        price: 170,
        discountPrice: 160,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/gamepad.png')
    },
    {
        name: 'Quilted Satin Jacket',
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/jacket.png')
    },
]