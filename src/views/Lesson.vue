<template>
  <div class="centered lesson">
    <h1>Страница урока {{ pageName }}</h1>
    <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
    <v-flex>

      <router-link
      :to = "{ path: routes.statistics}"
      exact
      >
          Статистика
      </router-link>

      <router-link
      :to = "{ path: routes.tests}"
      exact
      >
          Тесты
      </router-link>

    </v-flex>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'lesson',
  computed: {
    ...mapGetters(['getLessonById']),
    pageName () {
      return this.getLessonById(this.$route.params.id).title
    },
    routes () {
      return {
        tests: this.$route.path + '/tests',
        statistics: this.$route.path + '/statistics'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .lesson {
    padding: 1rem;
  }
  .flex a:not(:last-child) {
    margin-right: 1rem;
  }
</style>
