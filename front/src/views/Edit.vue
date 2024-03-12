<template>
    <div>
        <h1>Edit book</h1>
        <book-form
            @createOrUpdate="createOrUpdate"
            :book="this.book"
        ></book-form>
    </div>
</template>

<script>
import BooksForm from '../components/BooksForm.vue'
import { api } from '../helpers/helpers'
// import Books from './Books.vue'

export default {
    name: 'book-edit',
    components: {
        'book-form': BooksForm,
    },
    data: function () {
        return {
            book: {},
        }
    },
    methods: {
        createOrUpdate: async function (book) {
            await api.updatebook(book)
            this.flash('Book updated sucessfully!', 'success')
            this.$router.push(`/books/${book.id}`)
        },
    },
    async mounted() {
        this.book = await api.getbook(this.$route.params.id)
    },
}
</script>
