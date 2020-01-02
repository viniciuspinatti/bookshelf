<template>
  <div class="main-style">
    <v-card class="mx-auto">
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
          <v-avatar class="ma-0" size="175">
            <v-img src="../assets/books.jpg"></v-img>
          </v-avatar>
        </div>
        <v-card-actions>
          <v-btn color="green darken-2" text>Add book</v-btn>
          <v-btn color="blue darken-2" text>Search book</v-btn>
          <v-btn color="orange darken-2" text>Lend book</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main-style {
  margin: 2%;
}
</style>
