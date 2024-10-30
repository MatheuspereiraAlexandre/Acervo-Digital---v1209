let vue = new Vue({
    el: "#app",
    data: {
        user: [],
        books: [],
        articles: []
    },
    methods: {
        async fetchUser() {
            const urlUser = "https://api-biblioteca-v101.onrender.com/user";
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
            const urlBook = "https://api-biblioteca-v101.onrender.com/books";
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
            const urlArticles = "https://api-biblioteca-v101.onrender.com/articles";
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
