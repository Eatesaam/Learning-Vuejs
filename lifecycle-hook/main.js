
var app = new Vue({
    el: '#app',
    data: {
        maximum: 70,
        products: null
    },
    mounted: function(){
        fetch('https://hplussport.com/api/products/order/price')
        .then(respone => respone.json())
        .then(data =>{
            this.products = data;
        })
    }
    
});