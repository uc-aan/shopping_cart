import { writable } from 'svelte/store';

    const cart = writable([
        {
            id: 9,
            title: "children latest fashion clothing set",
            details: "Department Name:Adult * Item Type:casual shoes * Shoes Type:Basic * Season:Summer * Outsole Material:PVC * Feature:Hard-Wearing,Breathable,Massage,Sweat-Absorbant",
            price: 1300,
            image: "https://sc01.alicdn.com/kf/HTB1xG4_btfvK1RjSspoq6zfNpXa0/221858975/HTB1xG4_btfvK1RjSspoq6zfNpXa0.jpg_.webp",
            quantity: 1
        }
    ]);
    const customCart = {
        subscribe: cart.subscribe,
        addItem: (item) => {
            cart.update(items => {
                if(items.find(i => i.id === item.id )){
                    return [...items];
                }
                return [...items, item]
            });
        },
        removeItem: id => {
            cart.update(items => {
                return items.filter(i => i.id !== id);
            });
        }
    };

export default customCart;