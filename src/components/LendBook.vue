<template>
  <div>
    <p class="headline">Lend book</p>
    <p class="body-1">Choose the owner and the book</p>
    <v-row>
      <v-col cols="6"
        ><v-select
          :items="users"
          item-text="name"
          item-value="id"
          label="Owner"
          dense
          v-model="ownerSelected"
        ></v-select
      ></v-col>
      <v-col cols="6"
        ><v-select
          :items="ownerBooks"
          item-text="name"
          item-value="id"
          label="Book"
          dense
          v-model="bookSelected"
        ></v-select
      ></v-col>
    </v-row>
    <p class="body-1">Choose the user who will receive</p>
    <v-select
      :items="users"
      item-text="name"
      item-value="id"
      label="User"
      dense
      v-model="userDestiny"
    ></v-select>
    <v-btn
      class="mr-2"
      fab
      dark
      large
      color="green"
      title="Save"
      @click="lendBook"
    >
      <v-icon dark>mdi-check-bold</v-icon>
    </v-btn>
    <v-btn class="mx-2" fab dark large title="Clear" @click="clear">
      <v-icon dark>mdi-close</v-icon>
    </v-btn>
    <v-alert dense dismissible type="success" class="my-5" :value="showAlert">
      The book has been borrowed.
    </v-alert>
  </div>
</template>

<script>
/*
  TO DO
  Check why the attribute isLend is undefined when it comes from stateBooks
  The right value is false
*/
export default {
  data() {
    return {
      ownerSelected: null,
      bookSelected: null,
      userDestiny: null,
      showAlert: false
    };
  },
  computed: {
    users() {
      return this.$store.state.Users.allUsers;
    },
    ownerBooks() {
      const books = this.$store.state.Books.allBooks.filter(book => {
        return book.ownerId == this.ownerSelected;
      });
      return books;
    }
  },
  methods: {
    lendBook() {
      let book = this.ownerBooks.find(book => {
        return book.id == this.bookSelected;
      });

      if (book.ownerId == this.userDestiny) {
        console.log("NO!");
      } else {
        book.isLend = true;
        this.$store.commit("Books/LEND_BOOK", book);
        this.showAlert = true;
      }
      this.clear();
    },
    clear() {
      this.ownerSelected = null;
      this.bookSelected = null;
      this.userDestiny = null;
      this.showAlert = false;
    }
  }
};
</script>

<style></style>
