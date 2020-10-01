Vue.component('task-list', {

    template: '<div><task v-for="task in tasks">{{task.task}}</task></div>',

    data(){
        return{
            tasks: [
                {task: 'Go to store', complete:true},
                {task: 'Go to market', complete:true},
                {task: 'Go to house', complete:false},
                {task: 'Go to workshop', complete:true},
                {task: 'Go to stadium', complete:false}
            ]
        };
    }
});

 Vue.component('task', {

    template: '<li><slot></slot></li>'
});
 
new Vue({
    el: '#root' 
});
