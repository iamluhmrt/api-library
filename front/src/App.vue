<template>
    <div id="app">
        <div class="ui inverted segment navbar">
            <div class="ui center aligned container">
                <div class="ui large secondary inverted pointing menu compact">
                    <router-link to="/books" exact class="item">
                        <i class="book icon"></i>Books
                    </router-link>
                    <router-link to="/books/new" class="item">
                        <i class="plus circle icon"></i>New
                    </router-link>
                </div>
            </div>
        </div>

        <div class="ui text container">
            <div class="ui one column grid">
                <div class="column">
                    <router-view />
                </div>
            </div>
        </div>
        <flash-message class="myFlash"></flash-message>
    </div>
</template>

<script>
export default {
    name: 'app',
}
</script>

<style>
#app > div.navbar {
    margin-bottom: 1.5em;
}
.myFlash {
    width: 250px;
    margin: 10px;
    position: absolute;
    top: 50;
    right: 0;
}

input {
    width: 300px;
}
div.label {
    width: 120px;
}
div.input {
    margin-bottom: 10px;
}
button.ui.button {
    margin-top: 15px;
    display: block;
}
i.color {
    color: black;
}
i.color:hover {
    color: rgba(0, 0, 0, 0.87);
}
</style>
