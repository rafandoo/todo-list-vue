<template>
    <div class="container mt-2">
        <div v-for="(task, index) in tasks" :key="index">
            <b-card :title="task.title" class="mb-2">
                <b-card-text>{{ task.description }}</b-card-text>
                <b-button variant="outline-secondary" class="mr-2" @click="edit(index)">Edit</b-button>
                <b-button variant="outline-danger" class="mr-2" @click="remove(task, index)">Delete</b-button>
            </b-card>
        </div>
        <b-modal ref="modalRemove" hide-footer title="Delete Task">
            <div class="d-block text-center">
                Are you sure you want to delete this task?
            </div>
            <div class="mt-3 d-flex justify-content-end">
                <b-button variant="outline-secondary" class="mr-2" @click="hideModal"> Cancelar </b-button>
                <b-button variant="outline-danger" class="mr-2" @click="confirmRemoveTask"> Excluir </b-button>
            </div>
        </b-modal>
    </div>
</template>

<script>
import ToastMixins from "@/mixins/ToastMixins.js";
export default {
    name: "List",

    mixins: [ToastMixins],

    data() {
        return {
            tasks: [],
            selectTask: []
        };
    },
    created() {
        this.tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    },
    methods: {
        edit(index) {
            this.$router.push({ name: "Task", params: { index } });
        },
        remove(task, index) {
            this.selectTask = task;
            this.selectTask.index = index;

            this.$refs.modalRemove.show();
        },
        hideModal() {
            this.$refs.modalRemove.hide();
        },
        confirmRemoveTask() {
            this.tasks.splice(this.selectTask.index, 1);
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
            this.hideModal();
            this.showToast("Success!", "Task deleted successfully", "success");
        }
    }
};
</script>