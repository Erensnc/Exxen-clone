<template>
    <div class="col-md-3">
        <div class="movie-item">

            <button v-if="!watchListItem" class="add-watchlist" @click="addToWatchList()" type="button">+</button>
            <button v-if="watchListItem" class="add-watchlist" @click="removeToWatchList()" type="button">-</button>
            <div class="image">
                <img :src="imageUrl">
            </div>
            <div class="title">
                {{ title }}
            </div>
        </div>
    </div>
</template>

<script>
import { addDoc, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';

export default {
    props: {
        imageUrl: String,
        title: String,
        movieId: String,
        watchListItem: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        async addToWatchList() {
            let data = {
                movieId: this.movieId
            }

            let movieExist = query(collection(this.$db, "watchlist"), where("movieId", "==", this.movieId));
            let movieExistSnap = await getDocs(movieExist);
            if (movieExistSnap.empty) {
                await addDoc(collection(this.$db, "watchlist"), data);
                alert("Film izleme listesine eklendi.")
            } else {
                alert("Bu film izleme listesinde zaten var.");
            }
        },

        async removeToWatchList() {
            let movieExist = query(collection(this.$db, "watchlist"), where("movieId", "==", this.movieId));
            let movieExistSnap = await getDocs(movieExist);
            if (!movieExistSnap.empty) {
                movieExistSnap.forEach(async (doc) => {
                    await deleteDoc(doc.ref);
                    alert("Film izleme listesinden çıkarıldı.")
                    location.reload();
                });
            }
        }
    }
}
</script>

<style lang="scss">
.col-md-3 {
    max-width: calc(100% / 4);
    width: 100%;
    flex: 0 0 calc(100% / 4);
    padding: 0 10px;
}

.movie-item {
    border: 1px solid rgba(#fff, .1);
    padding: 5px;
    border-radius: 5px;
    text-align: center;
    transition: .25s all;
    margin-bottom: 20px;
    cursor: pointer;
    position: relative;

    .add-watchlist {
        border: none;
        background: #000;
        position: absolute;
        right: 10px;
        top: 10px;
        color: #fff;
        z-index: 9;
        width: 30px;
        height: 30px;
        font-size: 20px;
        transition: .25s all;

        &:hover {
            background: #ffca05;
        }

    }

    &:hover {
        border-color: $warning;
    }

    .image {
        overflow: hidden;
        display: flex;

        img {
            width: 100%;
            aspect-ratio: 220/320;
            object-fit: cover;
            transition: .25s all;
        }
    }

    &:hover {
        .image {
            img {
                transform: scale(1.2) rotate(5deg);
            }
        }
    }

    .title {
        font-size: 16px;
        padding: 10px 0;
    }
}
</style>

