<template>
  <div>
    <p class="headline">Type book's name, author or book's owner</p>
    <v-text-field
      outlined
      label="Book's name, author or book's owner"
      dense
      single-line
      clearable
      v-model="searchText"
    ></v-text-field>
    <v-data-table
      :headers="tableHeaders"
      :items="books"
      :search="searchText"
      hide-default-footer
    >
      <template v-slot:item.picture="{ item }"
        ><v-avatar tile height="125" width="75">
          <img :src="item.picture" /> </v-avatar
      ></template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      tableHeaders: [
        { text: "Name", align: "left", value: "name" },
        { text: "Owner", align: "left", value: "owner" },
        { text: "Author", align: "left", value: "author" },
        {
          text: "Picture",
          align: "center",
          value: "picture",
          filterable: false
        }
      ]
    };
  },
  computed: {
    books() {
      let books = JSON.parse(JSON.stringify(this.$store.state.Books.allBooks));
      books.forEach(el => {
        const { ownerId } = el;
        el.owner = this.users.find(user => {
          return user.id == ownerId;
        }).name;
      });
      return books;
    },
    users() {
      return this.$store.state.Users.allUsers;
    }
  }
};
</script>

<style></style>
