<template>
    <div>
        <h1>Books</h1>
        <table id="books" class="ui celled compact table">
            <thead>
                <tr>
                    <!-- if you want to show the ID to users... -->
                    <!-- <th><i class="calendar plus icon"></i>ID</th> -->
                    <th><i class="book icon"></i>Name</th>
                    <th><i class="copy icon"></i>Pages</th>
                    <th><i class="clock icon"></i>Days</th>
                    <th><i class="eye icon"></i>Show</th>
                    <th><i class="edit icon"></i>Edit</th>
                    <th><i class="delete icon"></i>Delete</th>
                </tr>
            </thead>
            <tr v-for="(book, i) in books" :key="i">
                <!-- if you want to show the ID to users... -->
                <!-- <td>{{ book.id }}</td> -->
                <td>{{ book.name }}</td>
                <td>{{ book.pages }}</td>
                <td>{{ book.readingDays }}</td>
                <td width="95" class="center aligned">
                    <router-link
                        :to="{ name: 'book-show', params: { id: book.id } }"
                        ><i class="eye icon color"></i
                    ></router-link>
                </td>
                <td width="95" class="center aligned">
                    <router-link
                        :to="{ name: 'book-edit', params: { id: book.id } }"
                    >
                        <i class="edit icon color"></i>
                    </router-link>
                </td>
                <td
                    width="95"
                    class="center aligned"
                    @click.prevent="onDestroy(book.id)"
                >
                    <a :href="`/books/${book.id}`">
                        <i class="delete icon color"></i>
                    </a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { api } from '../helpers/helpers'
export default {
    name: 'books-list',
    data() {
        return {
            books: [],
        }
    },
    methods: {
        async onDestroy(id) {
            const sure = window.confirm('Are you sure?')
            if (!sure) return
            await api.deletebook(id)
            this.flash('Book deleted sucessfully!', 'success')
            const newbooks = this.books.filter((book) => book.id !== id)
            this.books = newbooks
        },
    },
    async mounted() {
        this.books = await api.getbooks()
    },
}
</script>
