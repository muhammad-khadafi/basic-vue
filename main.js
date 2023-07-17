var app = new Vue({
    el:'#app',
    data: {
        word: 'HELLO WORLD',
        image: 'https://images.unsplash.com/photo-1607192441324-82cb493ec573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80',
        altText: "Gambar Kucing",
        title: "Kucing Lucu",
        inStock: false,
        books: ["Harry Potter", "Laskar Pelangi", "Naruto"],
        books2 : [
            {name: "Harry Potter", author: "JK Rowling"},
            {name: "Laskar Pelangi", author: "Andrea Hirata"},
            {name: "Naruto", author: "Masashi Kishimoto"}
        ],
        cart: 0
    },
    methods: {
        addCart() {
            this.cart += 1
        }
    }
})
