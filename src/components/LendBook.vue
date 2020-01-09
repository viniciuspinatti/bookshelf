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
    ></v-select>
    <v-btn class="mr-2" fab dark large color="green" title="Save">
      <v-icon dark>mdi-check-bold</v-icon>
    </v-btn>
    <v-btn class="mx-2" fab dark large title="Clear">
      <v-icon dark>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ownerSelected: null
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
  }
};
</script>

<style></style>
