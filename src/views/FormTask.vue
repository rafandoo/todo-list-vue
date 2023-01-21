<template>
    <div class="container mt-2">
        <b-form>
            <b-form-group label="Title" label-for="title">
                <b-form-input id="title" v-model="form.title" type="text" placeholder="" required autocomplete="off"></b-form-input>
            </b-form-group>
            <b-form-group label="Description" label-for="description">
                <b-form-textarea id="description" v-model="form.description" type="text" placeholder="" required autocomplete="off"></b-form-textarea>
            </b-form-group>
            <b-button type="submit" variant="outline-primary" @click="saveTask">Save</b-button>
        </b-form>
    </div>
</template>

<script>
import ToastMixins from '@/mixins/ToastMixins.js';
export default {
    name: "formTask",

    mixins: [ToastMixins],

    data() {
        return {
            form: {
                title: "",
                description: ""
            },
            methodRequest: "new"
        }
    },
    
    created() {
        if(this.$route.params.index === 0 || this.$route.params.index !== undefined) {
            this.methodRequest = "update";
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            this.form = tasks[this.$route.params.index]
        }


    },

    methods: {
        saveTask() {
            if(this.methodRequest === "update") {
                let tasks = JSON.parse(localStorage.getItem("tasks"));
                tasks[this.$route.params.index] = this.form;
                localStorage.setItem("tasks", JSON.stringify(tasks));
                this.showToast("Success!", "Task updated successfully", "success")
                this.$router.push("/");
                return;
            }
            let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

            tasks.push(this.form);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            this.showToast("Success!", "Task created successfully", "success")
            this.$router.push("/");
        }
    }
};
</script>