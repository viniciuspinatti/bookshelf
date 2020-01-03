<template>
  <div>
    <p class="headline">Adding the book: {{ bookName }}</p>
    <v-text-field outlined label="Name" dense v-model="bookName"></v-text-field>
    <v-text-field
      outlined
      label="Owner"
      dense
      v-model="bookOwner"
    ></v-text-field>
    <v-text-field
      outlined
      label="Author"
      dense
      v-model="bookAuthor"
    ></v-text-field>
    <v-file-input
      dense
      accept="image/*"
      outlined
      label="Picture"
      v-model="bookPicture"
      prepend-icon="mdi-camera"
    ></v-file-input>
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
      bookName: null,
      bookOwner: null,
      bookAuthor: null,
      bookPicture: null
    };
  }
};
</script>

<style></style>
