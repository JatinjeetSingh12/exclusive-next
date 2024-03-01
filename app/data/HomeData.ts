export type Categories = {
    id: number;
    name: string;
    subCategoriesCheck: boolean;
}

export type ProductCard = {
    id:number;
    name: string,
    price: number,
    discountPrice: number | null,
    rating: number,
    ratingCount: number,
    image: string;
    slug:string;
    type:string;
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


export const Products:ProductCard[] =[
    {
        id:1,
        name: 'Breed Dry Dog Food',
        price: 360,
        discountPrice: 360,
        rating: 5,
        ratingCount: 65,
        slug:'1-breed-dry-dog-food',
        image: require('@/public/products/dog-food.png'),
        type:'explore',
    },
    {
        id:2,
        name: 'CANON EOS DSLR Camera',
        slug:'2-canon-eos-dslr-camera',
        price: 660,
        discountPrice: 960,
        rating: 5,
        ratingCount: 65,
        type:'explore',
        image: require('@/public/products/nexon-camera.png')
    },
    {
        id:3,
        name: 'ASUS FHD Gaming Laptop',
        price: 170,
        slug:'3-asus-fhd-gaming-Laptop',
        discountPrice: 160,
        rating: 5,
        ratingCount: 65,
        type:'explore',
        image: require('@/public/products/laptop.png')
    },
    {
        id:4,
        name: 'Curology Product Set',
        price: 170,
        slug:'4-curology-product-set',
        discountPrice: 160,
        rating: 5,
        ratingCount: 65,
        type:'explore',
        image: require('@/public/products/face-wash.png')
    },
    {
        id:5,
        name: 'Kids Electric Car',
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        slug:'5-kids-elctric-car',
        type:'explore',
        image: require('@/public/products/toy.png')
    },
    {
        id:6,
        name: 'Jr. Zoom Soccer Cleats',
        price: 660,
        discountPrice: 960,
        rating: 5,
        slug:'5-zoom-soccer-cleats',
        ratingCount: 65,
        type:'explore',
        image: require('@/public/products/shoes.png')
    },
    {
        id:7,
        name: 'GP11 Shooter USB Gamepad',
        price: 170,
        discountPrice: 160,
        rating: 5,
        ratingCount: 65,
        slug:'7-shooter-usb-gamepad',
        type:'explore',
        image: require('@/public/products/gamepad.png')
    },
    {
        id:8,
        name: 'Quilted satin jacket',
        slug:'8-quilted-satin-jacket',
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        type:'explore',
        image: require('@/public/products/jacket.png')
    },
    {
        id:9,
        name: 'The North Coat',
        price: 360,
        discountPrice: 360,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/shirt.png'),
        slug:'9-north-coat',
        type:'month',
    },
    {
        id:10,
        name: 'Gucci duffle bag',
        price: 660,
        discountPrice: 960,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/gucci-bag.png'),
        type:'month',
        slug:'10-gucci-duffle-bag'
    },
    {
        id:11,
        name: 'RGB liquid CPU Cooler',
        price: 170,
        discountPrice: 160,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/speaker.png'),
        type:'month',
        slug:'11-rgb-liquid-cpu-cooler'
    },
    {
        id:12,
        name: 'Small BookSelf',
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/wooden-cabin.png'),
        type:'month',
        slug:'12-small-bookself'
    },
    {
        id:13,
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/sale2.png'),
        name: 'HAVIT HV-G92 Gamepad',
        type:'today',
        slug:'13-havit-hv-g92-Gamepad'
    },
    {
        id:14,
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/sale1.png'),
        name: 'AK-900 Wired Keyboard',
        type:'today',
        slug:'14-ak-900-wired-keyboard'
    },
    {
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        id:15,
        image: require('@/public/products/sale3.png'),
        name: 'IPS LCD Gaming Monitor',
        type:'today',
        slug:'15-ips-lcd-gaming-monitor'
    },
    {
        id:16,
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/sale4.png'),
        name: 'S-Series Comfort Chair',
        type:'today',
        slug:'16-s-series-comfort-chair'
    },
    {
        id:17,
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/sale2.png'),
        name: 'HAVIT HV-G92 Gamepad',
        type:'today',
        slug:'17-s-series-comfort-chair'
        
    },
    {
        id:18,
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/sale1.png'),
        name: 'Ak-900 Wired Keyboard',
        type:'today',
        slug:'19-ak-900-wired-keyboard'
    },
    {
        id:19,
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/sale3.png'),
        name: 'IPS LCD Gaming Monitor',
        type:'today',
        slug: '19-ips-lcd-gaming-monitor'
    },
    {
        id:20,
        price: 360,
        discountPrice: null,
        rating: 5,
        ratingCount: 65,
        image: require('@/public/products/sale4.png'),
        name: 'S-Series Comfort Chair',
        type:'today',
        slug: '20-s-series-comfort-chair'
    },
]