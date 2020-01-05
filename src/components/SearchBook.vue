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
      :items="booksList"
      :search="searchText"
      hide-default-footer
    >
      <template v-slot:item.picture="{ item }"
        ><v-avatar tile max-height="125" max-width="75"
          ><img :src="require('../assets/' + item.picture)"/></v-avatar
      ></template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: null,
      tableHeaders: [
        { text: "Name", align: "left", value: "name" },
        { text: "Owner", align: "left", value: "owner" },
        { text: "Author", align: "left", value: "author" },
        { text: "Picture", align: "center", value: "picture" }
      ],
      booksList: [
        {
          name: "How?",
          owner: "Bob Uncle",
          author: "Kennedy Silveira",
          picture: "how.jpeg"
        },
        {
          name: "How? 2 ed",
          owner: "Patricia Lewad",
          author: "Kennedy Silveira",
          picture: "how.jpeg"
        }
      ]
    };
  }
};
</script>

<style></style>
