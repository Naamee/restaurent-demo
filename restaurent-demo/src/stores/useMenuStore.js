import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
    state: () => {
        return { menuItems: [
            {
                id: 1,
                title: 'Beverages',
                items: [
                    {
                        id: 1.1,
                        name: 'Honey Tea',
                        description:
                            'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!',
                        price: 'USD 2'
                    },
                    {
                        id: 1.2,
                        name: 'Beary Tea',
                        description:
                            'A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.',
                        price: 'USD 3'
                    }
                ]
            },
            {
                id: 2,
                title: 'Sides',
                items: [
                    {
                        id: 2.1,
                        name: 'Toast and Jam',
                        description:
                            'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.',
                        price: 'USD 1'
                    },
                    {
                        id: 2.2,
                        name: 'Fresh Fruit',
                        description: 'A small bowl of fresh fruit, whatever we find at the market for the day.',
                        price: 'USD 3'
                    }
                ]
            },
            {
                id: 3,
                title: 'Main Dishes',
                items: [
                    {
                        id: 3.1,
                        name: 'Pancakes',
                        description:
                            'A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.',
                        price: 'USD 4'
                    },
                    {
                        id: 3.2,
                        name: 'French Toast',
                        description:
                            'Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.',
                        price: 'USD 5'
                    },
                    {
                        id: 3.3,
                        name: 'Beary Veggy Sandwhich',
                        description:
                            'Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.',
                        price: 'USD 8'
                    },
                    {
                        id: 3.4,
                        name: 'BLT',
                        description: 'Interested in the Beary Veggie Sandwich but also love bacon? Say no more.',
                        price: 'USD 6'
                    },
                    {
                        id: 3.5,
                        name: 'Bagel and Lox',
                        description:
                            "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.",
                        price: 'USD 8'
                    }
                ]
            }
        ]}
    }
})
