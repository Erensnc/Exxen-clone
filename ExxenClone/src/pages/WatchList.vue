<template>
    <q-page class="q-pa-lg">
        <div class="row">
            <MovieItem v-for="movie in movies" :title="movie.title" :imageUrl="movie.imageUrl" :key="movie.title"
                :movieId="movie.id" :watchListItem="true"></MovieItem>
        </div>
    </q-page>
</template>
  
<script>
import MovieItem from 'src/components/MovieItem.vue';
import { defineComponent } from 'vue';
import { getDocs, collection, query, where } from 'firebase/firestore';

export default defineComponent({
    data() {
        return {
            movies: [
            ]
        };
    },
    async mounted() {
        const colRef = collection(this.$db, "watchlist");
        const docsSnap = await getDocs(colRef);
        let watchlist = [];

        docsSnap.forEach((doc) => {
            let data = doc.data();
            watchlist.push(data.movieId);
        });

        const movieRef = collection(this.$db, "movies");
        const movieSnap = await getDocs(movieRef);
        let movies = [];

        movieSnap.forEach((doc) => {
            let data = doc.data();
            console.log(doc.id);
            if (watchlist.includes(doc.id)) {
                movies.push({
                    id: doc.id,
                    ...data
                });
            }
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
  