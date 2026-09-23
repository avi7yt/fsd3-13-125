const products = [
    { id: 1, name: 'marker', qty: 100, price: 50 },
    { id: 2, name: 'chalk', qty: 100, price: 5 },
    { id: 3, name: 'pencil', qty: 100, price: 3 },
    { id: 4, name: 'A4 Cheap and Best', qty: 100, price: 100 },    
]


let nextId = 5;

export const getAllProducts = () => { 
    return products;
}

export const addProduct = (item) => { 
    item.id = nextId;
    nextId++;
    products.push(item);
    return item;
}

export const deleteProduct = (id) => {
    const item = products.findIndex((prd) => prd.id === id);
    if (item === -1) {
        return false;
    }
    products.splice(item, 1);
    console.log('products remaining: ', products);
    return true;
};

export const updateProduct = (id, updatedItem) => {
    const index = products.findIndex((prd) => prd.id === id);
    // now check the conditon whether id is present or not.
    if (index === -1) {
        return false;
    }
    // products[index] = { ...products[index], ...updatedItem };
    updatedItem.id = id;
    products[index] = updatedItem;
    return updatedItem;
}

export const getProductByID = (id) => {
    const index = products.findIndex((prd) => prd.id === id);

    if (index == -1) {
        return false;
    }
    return products[index];
};
