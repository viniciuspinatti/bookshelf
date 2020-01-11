<template>
  <div>
    <p class="headline">Adding the book: {{ bookName }}</p>
    <v-text-field outlined label="Name" dense v-model="bookName"></v-text-field>
    <v-text-field
      outlined
      label="Author"
      dense
      v-model="bookAuthor"
    ></v-text-field>
    <v-select
      outlined
      :items="users"
      item-text="name"
      item-value="id"
      label="Owner"
      dense
      v-model="bookOwner"
    ></v-select>
    <v-file-input
      dense
      accept="image/*"
      outlined
      label="Picture"
      prepend-icon="mdi-camera"
      v-model="bookPicture"
      id="picture"
    ></v-file-input>
    <v-btn
      class="mr-2"
      fab
      dark
      large
      color="green"
      @click="addBook"
      title="Save"
    >
      <v-icon dark>mdi-check-bold</v-icon>
    </v-btn>
    <v-btn class="mx-2" fab dark large @click="clear" title="Clear">
      <v-icon dark>mdi-close</v-icon>
    </v-btn>
    <v-alert dense dismissible type="success" class="my-5" :value="showAlert">
      The book has been added.
    </v-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookName: null,
      bookOwner: null,
      bookAuthor: null,
      bookPicture: null,
      b64: null,
      showAlert: false
    };
  },
  computed: {
    users() {
      return this.$store.state.Users.allUsers;
    }
  },
  methods: {
    fileTo64() {
      return new Promise(resolve => {
        // Read file content on file loaded event
        var reader = new FileReader();
        reader.onload = function(event) {
          resolve(event.target.result);
        };
        // Convert data to base64
        reader.readAsDataURL(this.bookPicture);
      });
    },
    async imgBase64() {
      let string64;
      await this.fileTo64().then(result => {
        string64 = result;
      });
      this.b64 = string64;
    },
    addBook() {
      if (this.bookName && this.bookOwner && this.bookAuthor) {
        const book = {
          name: this.bookName,
          ownerId: this.bookOwner,
          author: this.bookAuthor,
          picture: this.b64,
          isLend: false
        };
        this.$store.commit("Books/ADD_BOOK", book);
        this.showAlert = true;
      }
      this.clear();
    },
    clear() {
      this.bookName = null;
      this.bookOwner = null;
      this.bookAuthor = null;
      this.bookPicture = null;
      this.b64 = null;
      this.showAlert = false;
    }
  },
  watch: {
    bookPicture() {
      this.imgBase64();
    }
  }
};
</script>

<style></style>
