<template>
    <v-layout
    column
    justify-center
    align-center
  >
      <div class="pagination text-center">
        <v-pagination
          v-model="currentPage"
          :length="pagesNumber"
          dark
        ></v-pagination>
      </div>
      <v-card
        class="mx-auto card"
        max-width="500"
        width="70%"
        v-for="lesson in pages[currentPage]" :key = lesson.id
      >
        <v-card-text>
          <p class="text text--primary">
            {{ lesson.title }}
          </p>
        </v-card-text>
        <v-card-actions>
          <router-link
            color="deep-purple accent-4"
            :to = "{ name: 'lesson', params: { id: lesson.id }}"
          >
            Об уроке
          </router-link>
        </v-card-actions>
      </v-card>

  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'lessons',
  data: () => ({
    pageLimit: 5,
    currentPage: 1
  }),
  computed: {
    ...mapGetters(['getLessons']),
    pagesNumber () {
      return Math.ceil(this.getLessons.length / this.pageLimit)
    },
    pages () {
      let pages = {}
      for (let i = 0; i < this.pagesNumber; i++) {
        let array = this.getLessons.filter((elem, ind) => {
          return (ind >= i * this.pageLimit && ind < this.pageLimit + i * this.pageLimit)
        })
        pages[ i + 1 ] = array
      }
      return pages
    }
  },
  mounted () {
    this.currentPage = 1
  }
}
</script>

<style lang="scss" scoped>
  .card,
  .pagination {
    margin-bottom: 1rem;
  }
  .text {
    font-size: 20px;
  }
</style>
