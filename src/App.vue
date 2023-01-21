<template>
    <div id="app">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">ToDo List</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/">Tasks</b-nav-item>
                    <b-nav-item to="/task">Create Task</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view />
    </div>
</template>

<style>

</style>
