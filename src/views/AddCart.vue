<template>
    <nav class="nav">
        <div class="container">

            <div class="mt-3 d-flex justify-content-between">
                <div class="mt">
                    <h3 class="title">Your Cart</h3>
                </div>
                <div class="btn">
                    <div class="btn-one">
                        <router-link to="checkout">
                            <button type="button" class="btn">
                                <div class="text-uppercase check">Checkout Securel Now</div>
                            </button>
                        </router-link>

                    </div>
                </div>
            </div>
            <div class="line-1"></div>
        </div>

        <div class="container">
            <div class="d-flex bd-highlight">
                <div class="menue flex-grow-1 bd-highlight">
                    <h5>Items</h5>
                </div>
                <div class="menue bd-highlight">
                    <h5>Price</h5>
                </div>
                <div class="menue bd-highlight">
                    <h5>Quantity</h5>
                </div>
                <div class="menue bd-highlight">
                    <h5>Subtotal</h5>
                </div>
            </div>
            <div class="line-1"></div>

            <div class="form-body">
                <div class="mt-5 d-flex bd-highlight">
                    <div class="prise flex-grow-1 bd-highlight">
                        <div class="image">
                            <img src="" class="card-img-top" alt="...">
                        </div>
                    </div>
                    <div class="prise bd-highlight">
                        <div>$41.00</div>
                    </div>
                    <div class="prise bd-highlight">
                        <div>-1+</div>
                    </div>
                    <div class="prise bd-highlight">
                        <div>$41.00</div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <h5 class="mt-3 card-title">ElaMD UV Clear Broad-S[rctrum SPF 46 (1.7) In Stock</h5>
                    </div>
                    <div class="col-sm-6">

                    </div>
                </div>

                <div class="p-3 from-text">
                    <span class="material-symbols-outlined">
                        star_rate_half
                    </span> &nbsp;
                    <span class="text">
                        Save To My Favorites
                    </span>
                </div>
            </div>
            <div class="line-1"></div>


            <div class="mt-2 d-flex bd-highlight">
                <div class="p-2 flex-grow-1 bd-highlight">
                    <span class="material-symbols-outlined">
                        star_rate_half
                    </span> &nbsp;
                    <span class="text">
                        Rewards Members Earn 205 Points On This Order
                    </span>
                </div>
                <div class="p-2 bd-highlight">
                    <div>Cart Subtotal:</div>
                    <div>$41.00</div>
                </div>
            </div>
            <div class="line-1"></div>

            <div class="mt-2 d-flex bd-highlight">
                <div class="p-2 flex-grow-1 bd-highlight">
                    <div class="p-3 from-text">
                        <span class="text">
                            Got A Coupon Code? Enter It Here: <button class="style"></button>
                        </span>
                    </div>
                </div>
                <div class="p-2 bd-highlight">
                    <div class="btn">
                        <div class="btn-one">
                            <button type="button" class="btn">
                                <router-link to="checkout">
                                    <div class="text-uppercase check">ADD</div>
                                </router-link>
                               
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-btn">
                <button class="btn-input"></button>
            </div>
        </div>
    </nav>
</template>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.4s;
    font-family: serif;
    /* background-color: white; */
}

/* Navbar section */
.nav {
    width: 100%;
    height: 55px;
    /* text-align: center; */
    margin-top: 20px;
    /* background-color: rgba(139, 132, 128, 0.8); */
}

.title {
    font-weight: bold;
}

h3 {
    color: black;
}

.btn-one {
    background-color: black;
    width: 100%;
}

.check {
    color: white;
}

.line-1 {
    height: 1px;
    background: black;
    margin-top: 10px;
}

.menue {
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 20px;
}

.image,
.card-img-top {
    width: 50%;
    margin-top: 20px;
}

.prise {
    margin-left: 85px;
    margin-right: 50px;
    margin-top: 20px;
}

.from-text {
    margin-left: 20px;
}

.style {
    background-color: rgb(204, 187, 171);
    width: 150px;
    height: 25px;
    border: none;
}

.btn-input {
    background-color: rgb(209, 207, 207);
    width: 23%;
    height: 80px;
    border: none;
    margin-bottom: 50px;
}
</style>