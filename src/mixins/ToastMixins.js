export default {
    methods: {
        showToast(title, message, type) {
            this.$root.$bvToast.toast(message, {
                title: title,
                variant: type,
                autoHideDelay: 3000,
                solid: true
            });
        }
    }
}