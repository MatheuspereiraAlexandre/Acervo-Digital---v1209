let vue = new Vue({
    el: "#app",
    data: {
        user: [],
        books: [],
        articles: []
    },
    methods: {
        async fetchUser() {
            const urlUser = "http://localhost:3000/user";
            try {
                const response = await fetch(urlUser);
                if (!response.ok) {
                    throw new Error(`response status: ${response.status}`);
                }

                const json = await response.json();
                this.user = json;
            } catch (err) {
                console.error(err.message);
            }
        },

        async fetchBooks() {
            const urlBook = "http://localhost:3000/books";
            try{
                const response = await fetch(urlBook);
                if(!response.ok){
                    console.log(`Response status: ${response.status}`);
                }

                const json = await response.json();
                this.books = json;
            }
            catch(err){
                console.error(err.message)
            }
        },

        async fetchArticles() {
            const urlArticles = "http://localhost:3000/articles";
            try{
                const response = await fetch(urlArticles);
                if(!response.ok){
                    console.log(`Response status: ${response.status}`);
                }

                const json = await response.json();
                this.articles = json;
            }
            catch(err){

            }
        }
    },
    mounted() {
        try{
            this.fetchUser();
            this.fetchBooks();
        }
        catch(err){
            console.error(err);
        }
    }
});
