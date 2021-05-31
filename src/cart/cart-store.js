import { writable } from 'svelte/store';

    const cart = writable([]);
    
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
        updateItem: (item) => {
            console.log(item);
            cart.update(items => {
                for(var i=0; i<items.length; i++) {
                    if (items[i].id == item.id) {
                        items[i].quantity = item.quantity;
                    }
                }
                return items;
            })
        },
        removeItem: id => {
            cart.update(items => {
                return items.filter(i => i.id !== id);
            });
        }
    };

export default customCart; 