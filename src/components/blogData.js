
import { ref } from "vue"

export const blogData = () => {

    const blogsData = ref([
        {
            id: "1",
            title: "learning Vue.js 3",
            description: "I am learning vue.js with composition Api. I feel great",
            like: 20,
            topics: ["vue-3", "javascript", "composition api"]
        },
        {
            id: "2",
            title: "learning Vuex",
            description: "vuex is a state management pattern + library for Vue.js applications.",
            like: 18,
            topics: ["vue", "Vuex", "flux"]
        },
        {
            id: "3",
            title: "routing with vue router ",
            description: "I am making a complex vue3 app with the help of multi level routing",
            like: 24,
            topics: ["vue-3", "vue-router", "axios"]
        },
        {
            id: "4",
            title: "testing in vue",
            description: "I am writing some test for my vueapp using vue test utilis. it great to learn it",
            like: 17,
            topics: ["vue", "javascript", "testing"]
        }
    ])

    const blogs = ref('')

    const searchTag = ref('')

    blogs.value = blogsData.value

    const increaseLike = (key) => {
        blogsData.value[key - 1].like += 1
    }

    const hashTag = (key) => {
        blogs.value = blogsData.value.filter(blog => {
            return blog.topics.includes(key)
        })
    }

    const searchHash = (key) => {
        blogs.value = blogsData.value.filter((blog) => {
            for (let i = 0; i < 3; i++) {
                if (blog.topics[i].toLowerCase().includes(key)) {
                    return true
                }
            }
        })
    }

    return { blogs, increaseLike, hashTag, searchTag, searchHash }

}