
var app = new Vue({
    el: '#app',
    data: {
        inputwidth: 60,
        sliderStatus: true,
        labelArr: ['font-weight-bold', 'mt-5'],
        maximum: 70,
        products: null,
        cart: []
    },
    computed:{
        sliderState: function(){
            return this.sliderStatus ? 'd-flex' : 'd-none';
        }
    },
    methods: {
        addItem: function(product){
            this.cart.push(product);
        }
    },
    mounted: function(){
        fetch('https://hplussport.com/api/products/order/price')
        .then(respone => respone.json())
        .then(data =>{
            this.products = data;
        })
    }
    
});