export default {
  state: {
    courses: [],
    lessons: [],
    currentCourse: ''
  },
  getters: {
    getCourses (state) {
      return state.courses
    },
    getCurrentCourse (state) {
      return state.currentCourse
    },
    getLessons (state) {
      return state.lessons.filter((lesson) => {
        return lesson.courseId === state.currentCourse
      })
    },
    getLessonById: (state) => (id) => {
      return state.lessons.find(lesson => lesson.id === id)
    }
  },
  mutations: {
    updateData (state, payload) {
      state[payload.field] = payload.resData
    },
    updateCurrentCourse (state, courseID) {
      state.currentCourse = courseID
    }
  },
  actions: {
    async fetchData (context, field) {
      const res = await fetch('https://5daca7380af117001417072a.mockapi.io/api/v1/' + field)
      const resData = await res.json()
      const payload = { field, resData }
      context.commit('updateData', payload)
    },
    changeCurrentCourse (context, courseID) {
      context.commit('updateCurrentCourse', courseID)
    }
  }

}
