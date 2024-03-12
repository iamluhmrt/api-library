<template>
    <div>
        <h1>New book</h1>
        <book-form @createOrUpdate="createOrUpdate"></book-form>
    </div>
</template>

<script>
import BooksForm from '../components/BooksForm.vue'
import { api } from '../helpers/helpers'
export default {
    name: 'new-book',
    components: {
        'book-form': BooksForm,
    },
    methods: {
        createOrUpdate: async function (book) {
            const res = await api.createbook(book)
            this.flash('Book created successfully', 'success')
            this.$router.push(`/books/${res.id}`)
        },
    },
}
</script>
<style>
i.color {
    color: black;
}
i.color:hover {
    color: rgba(0, 0, 0, 0.87);
}
</style>
