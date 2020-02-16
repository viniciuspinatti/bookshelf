<template>
  <div class="main-style">
    <v-card class="mx-auto" elevation="0">
      <v-container>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="display-2">Welcome to Bookshelf!</v-card-title>
            <v-card-subtitle class="headline"
              >A contribution platform for reading.</v-card-subtitle
            >
            <v-card-subtitle class="body-1"
              >Start by selecting one of the options.</v-card-subtitle
            >
          </div>
          <v-avatar class="mx-0 my-5" size="150">
            <v-img src="../assets/books.jpg"></v-img>
          </v-avatar>
        </div>
        <v-card-actions>
          <div v-for="btn in actionButtons" :key="btn.actionLetter">
            <v-btn :color="btn.color" text @click="action = btn.actionLetter">{{
              btn.text
            }}</v-btn>
          </div>
        </v-card-actions>
      </v-container>
    </v-card>
    <component :is="loadOption" />
  </div>
</template>

<script>
import AddBook from "./AddBook";
import SearchBook from "./SearchBook";
import LendBook from "./LendBook";

export default {
  components: {
    AddBook,
    SearchBook,
    LendBook
  },
  data() {
    return {
      action: null,
      actionButtons: [
        { color: "green darken-2", actionLetter: "A", text: "Add Book" },
        { color: "blue darken-2", actionLetter: "S", text: "Search Book" },
        { color: "orange darken-2", actionLetter: "L", text: "Lend Book" }
      ]
    };
  },
  computed: {
    loadOption() {
      switch (this.action) {
        case "A":
          return AddBook;
        case "S":
          return SearchBook;
        case "L":
          return LendBook;
        default:
          return null;
      }
    }
  }
};
</script>

<style>
.main-style {
  margin: 2% 30vh 2% 30vh;
}
</style>
