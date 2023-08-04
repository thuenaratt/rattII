<template>
    <!-- body -->

    <!-- navbar -->
    <div>
        <nav class="nav">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <div class="mt-2 title">
                        <h3>Added To Your Cart</h3>
                    </div>
                    <div class="mt-3 icon">
                        <router-link to="/">
                            <span class="material-symbols-outlined">
                                close
                            </span>
                        </router-link>
                        
                    </div>
                </div>
            </div>
        </nav>
        <div class="container mt-3">
            <div class="row" v-for="item,index in data" :key="index">
                <div class="col-sm-5">
                    <div class="image">
                        <img :src="item.image" onerror="this.onerror=null; this.src='/PlaceholderImg.png'"
                            class="card-img-top" alt="...">
                    </div>
                    <div class="p-3">
                        <h5 class="card-title">Subtotal:</h5>
   
                    </div>
                </div>

                <div class="p-5 col-sm-7">
                    <div class="para">
                        <div class="mt-0">
                            <h4 class="card-title">{{item.name}}</h4>
                        </div>
                        <div class="mt-5">
                            <h5>Quantity {{item.qty}}</h5>
                        </div>
                        <div class="mt-5">
                            <h5 class="prise">$ {{item.subTotal}}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <h5 class="card-title">({{ data.length }} Items In Your Card)</h5>
            <div class="from-text">
                <span class="material-symbols-outlined">
                    star_rate_half
                </span> &nbsp;
                <span class="text">
                    With supporting text below as a natural lead-in to additional content.
                </span>
            </div>

            <div class="mt-5 line-1"></div>

            <div class="p-3 con">
                <div class="btn d-flex justify-content-between">
                    <button type="button" class="btn btn-one"  :disabled="data.length<=0">
                        <div class="conti">Continue shopping</div>
                    </button>
                    <div class="btn-two">
                        <router-link to="addcart">
                            <button type="button" class="btn">
                                <div class="view">View card</div>
                            </button>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import {ref} from 'vue'
const data=ref([])
data.value=localStorage.getItem("CartData")?JSON.parse(localStorage.getItem("CartData")):[]
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.4s;
    font-family: serif;
}

/* Navbar section */
.nav {
    width: 100%;
    height: 55px;
    text-align: center;
    background-color: rgba(139, 132, 128, 0.8);
}

h3 {
    color: white;
}

.image,
.card-img-top {
    width: 50%;
}

.text {
    font-weight: bold;
}

.line-1 {
    height: 1px;
    background: black;
}

.btn-one {
    background-color: rgb(194, 150, 114);
    width: 20%;
}

.btn-two {
    background-color: black;
    width: 20%;
    color: white;
}

.conti {
    color: black;
}

.view {
    color: white;
}


button:disabled{
    background-color: #d8d8d8 !important ;
    color: #979797  !important;
    cursor: not-allowed  !important;
    pointer-events: all  !important;
}

</style>