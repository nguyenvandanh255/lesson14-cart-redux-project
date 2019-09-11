var initialState = [
    {
        id: 1,
        name: 'Iphone X',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460-1-400x460.png',
        description: 'Sản phẩm do apple sản xuất',
        price: 1000,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'SamSung Galaxy S10',
        image: 'https://cdn.tgdd.vn/Products/Images/42/161554/samsung-galaxy-s10-white-600x600.jpg',
        description: 'Sản phẩm do SamSung sản xuất',
        price: 900,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Xiaomi Mi 9 SE',
        image: 'https://sudospaces.com/mobilecity-vn/images/2019/04/xiaomi-mi-9-blackk.jpg',
        description: 'Sản phẩm do Xiaomi sản xuất',
        price: 400,
        inventory: 20,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;