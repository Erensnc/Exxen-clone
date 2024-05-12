<template>
  <q-page class="q-pa-lg">
    <div class="row">
      <MovieItem v-for="movie in movies" :title="movie.title" :imageUrl="movie.imageUrl" :key="movie.title" :movieId="movie.id"></MovieItem>
    </div>
  </q-page>
</template>

<script>
import MovieItem from 'src/components/MovieItem.vue';
import { defineComponent } from 'vue';
import { getDocs, collection } from 'firebase/firestore';

export default defineComponent({
  data() {
    return {
      movies: [
      ]
    };
  },
  async mounted() {
    console.log(this.$db);
    const colRef = collection(this.$db, "movies");
    const docsSnap = await getDocs(colRef);
    let movies = [];

    docsSnap.forEach((doc) => {
      let data = doc.data();

      movies.push({
        id: doc.id,
        ...data
      });
    });

    this.movies = movies;
  },
  methods: {
  },
  components: { MovieItem }
})
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}

.no-tasks {
  opacity: 0.5;
}
</style>
