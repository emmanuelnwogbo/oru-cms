export default {
    data() {
        return {
            base_url: 'http://localhost:8080'
        }
    },
    methods: {
        routeTo(path) {
            this.$router.push(path);
        }
    }
}