<template>
    <div>
        <h1>Show book</h1>

        <div class="ui labeled input fluid">
            <div class="ui label color"><i class="book icon"></i>Name</div>
            <input type="text" readonly :value="book.name" />
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label color"><i class="copy icon"></i>Pages</div>
            <input type="text" readonly :value="book.pages" />
        </div>
        <div class="ui labeled input fluid">
            <div class="ui label color"><i class="clock icon"></i>Days</div>
            <input type="number" readonly :value="book.readingDays" />
        </div>
        <div class="actions">
            <router-link
                :to="{
                    name: 'book-edit',
                    params: { id: this.$route.params.id },
                }"
            >
                Edit book
            </router-link>
        </div>
    </div>
</template>

<script>
import { api } from '../helpers/helpers'
export default {
    name: 'book-show',
    data() {
        return {
            book: {},
        }
    },
    async mounted() {
        this.book = await api.getbook(this.$route.params.id)
    },
}
</script>

<style scoped>
.actions a {
    display: block;
    text-decoration: underline;
    margin: 20px 10px;
}
div.color {
    color: black;
}
div.color:hover {
    color: rgba(0, 0, 0, 0.87);
}
</style>
}
