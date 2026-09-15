import readline from 'readline/promises'
import { stdin, stdout } from 'process';
import { writeFile, readFile } from 'fs/promises';

const FILE = 'products.json';

const saveCart = async(cart) => {
    await writeFile(FILE, JSON.stringify(cart, null, 2));
}

const getCart = async() => {
    const data = await readFile(FILE, 'utf-8')
    return JSON.parse(data)
    
}

const addtoCart = async (item) => {
    const products = await getCart();
    const productFound = products.find((p) => p.id === item.id);
    if (productFound) {
        productFound.qty += item.qty;
        console.log("Product in cart quantity updated");
        
    } else {
        console.log("Product added successfully");
        products.push(item)
        }
    await saveCart(products);
}

const showCart = async() => {
    const products = await getCart();
    console.log(products);
}

const updateCart = async () => {
    console.log("Update Cart");
}

const deleteFromCart = async() => {
    console.log("Delete Cart");
}

const main = async() => {

    const cin = readline.createInterface({ input: stdin, output: stdout });

    let choice;
    do {
        console.log("Welcome to shopping 🛍️");
        console.log("1 ---------- Add to cart");
        console.log("2 ---------- Show cart");
        console.log("3 ---------- Remove Item");
        console.log("4 ---------- Update Quantity");
        console.log("5 ---------- Checkout");
        choice = await cin.question("Enter you choice: ");
        console.log("Entered choice: ", choice);
        switch (Number(choice)) {
            case 1:
                let data = await cin.question('Enter id, name, price and qty: ');
                let p = data.split(',')  // it returns an array does not modify the same variable;
                let q = p.map((item) => item.trim());
                let [id, name, price, qty] = q;
                const product = {
                    id: Number(id),
                    name,
                    price: Number(price),
                    qty: Number(qty)
                }
                console.log(product);  
                await addtoCart(product);
                break;
            case 2:
                await showCart();
                break;
            case 3:
                await deleteFromCart();
                break;
            case 4:
                await updateCart();
                break;
            case 5:
                console.log("See you later...😃");
                break;
            default:
                console.log("Invalid choice! try again 😇");
        }
    } while (choice != 5);
      cin.close();   //it necessary to close otherwise it will not terminate
    
}

main()