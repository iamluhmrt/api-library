<!-- eslint-disable -->
<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

        <div class="ui labeled input fluid">
            <div class="ui label color">
                <i class="book icon color"></i>Name
            </div>
            <input
                type="text"
                placeholder="Enter the name of the book"
                v-model="book.name"
            />
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label color">
                <i class="copy icon color"></i>Pages
            </div>
            <input
                type="number"
                placeholder="Enter the number of pages"
                v-model="book.pages"
            />
        </div>
        <div class="ui labeled input fluid">
            <div class="ui label color">
                <i class="clock icon color"></i>Days
            </div>
            <input
                type="number"
                placeholder="Enter reading days"
                v-model="book.readingDays"
            />
        </div>

        <button class="positive ui button">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'book-form',
    props: {
        book: {
            type: Object,
            required: false,
            default: () => {
                return {
                    name: '',
                    pages: '',
                    readingDays: '',
                }
            },
        },
    },
    data() {
        return {
            errorsPresent: false,
        }
    },
    methods: {
        onSubmit: function () {
            if (
                this.book.name === '' ||
                this.book.pages === '' ||
                this.book.readingDays === ''
            ) {
                this.errorsPresent = true
            } else {
                this.$emit('createOrUpdate', this.book)
            }
        },
    },
}
</script>

<style scoped>
.error {
    color: red;
}
div.color {
    color: black;
}
</style>
