<template>
  <v-app>
    <v-app-bar
      app
      dark
      height="100px"
    >
      <div class="d-flex align-center">
        <router-link
        :to = "'/'"
        >
          MAXIMUM
      </router-link>
      </div>

      <v-spacer></v-spacer>
        <v-select
          :items = "items"
          label = "Выберите курс"
          hide-details
          v-model = currentCourse
        ></v-select>
    </v-app-bar>

  <v-content>
    <v-container fluid >
      <router-view></router-view>
    </v-container>
  </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  data: () => ({
    currentCourse: ''
  }),
  computed: {
    ...mapGetters(['getCourses', 'getCurrentCourse']),
    items () {
      let array = []
      this.getCourses.forEach(course => {
        array.push({
          text: course.name,
          value: course.id
        })
      })
      return array
    }
  },
  methods: {
    ...mapActions(['fetchData', 'changeCurrentCourse'])
  },
  watch: {
    currentCourse () {
      this.changeCurrentCourse(this.currentCourse)
      if (this.$router.currentRoute.name !== 'lessons') {
        this.$router.push('/lessons')
      }
    }
  },
  async mounted () {
    this.fetchData('courses')
    this.fetchData('lessons')
  }
}
</script>

<style lang="scss" >
  .centered {
    text-align: center;
  }
</style>
