Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.description }}</task>
        </div>
    `,

    data() {
        return {
            tasks: [
                {description: 'tarea1', complete: true},
                {description: 'tarea2', complete: true},
                {description: 'tarea3', complete: false},
                {description: 'tarea4', complete: true},
                {description: 'tarea5', complete: true},
                {description: 'tarea6', complete: false},
                {description: 'tarea7', complete: true},
                {description: 'tarea8', complete: true},
                {description: 'tarea9', complete: true},
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});