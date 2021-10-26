let app = new Vue ({
    el: '#display',
    data: {
        greeting: "Hi there! Get to know about me",
        features: [
            {
                name:  'Omolade',
                address: 'Lagos',
                occupation: 'Vue developer',
                foods: ['rice', 'beans', 'noodles', 'yam'],
                countries: ['DRC', 'Toronto', 'Norway', 'Tunisia'],
            }
        ], 
        formData: {
                name: '',
                email: '',
                username: '',
                pnum: '',
            },
            tableData: []
        },
        methods: {
            submit() {
                this.tableData.push(this.formData)
                      
            }
        },
    greeting: {
        greet(){
            return 
        }
    }
})