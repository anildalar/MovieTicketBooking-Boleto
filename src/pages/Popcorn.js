import React from 'react'

export default function Popcorn() {
    return (
        <>
            
            <section className="details-banner hero-area bg_img seat-plan-banner" data-background="assets/images/banner/banner04.jpg">
                <div className="container">
                <div className="details-banner-wrapper">
                    <div className="details-banner-content style-two">
                    <h3 className="title">Venus</h3>
                    <div className="tags">
                        <a href="#0">City Walk</a>
                        <a href="#0">English - 2D</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
           
            <section className="page-title bg-one">
                <div className="container">
                <div className="page-title-area">
                    <div className="item md-order-1">
                    <a href="movie-ticket-plan.html" className="custom-button back-button">
                        <i className="flaticon-double-right-arrows-angles" />back
                    </a>
                    </div>
                    <div className="item date-item">
                    <span className="date">MON, SEP 09 2020</span>
                    <select className="select-bar">
                        <option value="sc1">09:40</option>
                        <option value="sc2">13:45</option>
                        <option value="sc3">15:45</option>
                        <option value="sc4">19:50</option>
                    </select>
                    </div>
                    <div className="item">
                    <h5 className="title">05:00</h5>
                    <p>Mins Left</p>
                    </div>
                </div>
                </div>
            </section>
           
            <div className="movie-facility padding-bottom padding-top">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="c-thumb padding-bottom">
                        <img src="assets/images/sidebar/banner/banner04.jpg" alt="sidebar/banner" />
                    </div>
                    <div className="section-header-3">
                        <span className="cate">You're hungry</span>
                        <h2 className="title">we have food</h2>
                        <p>Prebook Your Meal and Save More!</p>
                    </div>
                    <div className="grid--area">
                        <ul className="filter">
                        <li data-filter="*" className="active">all</li>
                        <li data-filter=".combos">combos</li>
                        <li data-filter=".bevarage">bevarage</li>
                        <li data-filter=".popcorn">popcorn</li>
                        </ul>
                        <div className="grid-area">
                        <div className="grid-item combos popcorn">
                            <div className="grid-inner">
                            <div className="grid-thumb">
                                <img src="assets/images/movie/popcorn/pop1.png" alt="movie/popcorn" />
                                <div className="offer-tag">
                                $57
                                </div>
                                <div className="offer-remainder">
                                <h6 className="o-title mt-0">24%</h6>
                                <span>off</span>
                                </div>
                            </div>
                            <div className="grid-content">
                                <h5 className="subtitle">
                                <a href="#0">
                                    Muchaco, Crispy Taco, Bean Burrito
                                </a>
                                </h5>
                                <form className="cart-button">
                                <div className="cart-plus-minus">
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={2} />
                                </div>
                                <button type="submit" className="custom-button">
                                    add
                                </button>
                                </form>
                            </div>
                            </div>
                        </div>
                        <div className="grid-item bevarage">
                            <div className="grid-inner">
                            <div className="grid-thumb">
                                <img src="assets/images/movie/popcorn/pop2.png" alt="movie/popcorn" />
                                <div className="offer-tag">
                                $57
                                </div>
                                <div className="offer-remainder">
                                <h6 className="o-title mt-0">24%</h6>
                                <span>off</span>
                                </div>
                            </div>
                            <div className="grid-content">
                                <h5 className="subtitle">
                                <a href="#0">
                                    Crispy Beef Taco, Beef Mucho Nachos
                                </a>
                                </h5>
                                <form className="cart-button">
                                <div className="cart-plus-minus">
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={2} />
                                </div>
                                <button type="submit" className="custom-button">
                                    add
                                </button>
                                </form>
                            </div>
                            </div>
                        </div>
                        <div className="grid-item combos">
                            <div className="grid-inner">
                            <div className="grid-thumb">
                                <img src="assets/images/movie/popcorn/pop3.png" alt="movie/popcorn" />
                                <div className="offer-tag">
                                $57
                                </div>
                                <div className="offer-remainder">
                                <h6 className="o-title mt-0">24%</h6>
                                <span>off</span>
                                </div>
                            </div>
                            <div className="grid-content">
                                <h5 className="subtitle">
                                <a href="#0">
                                    Chicken Quesadilla Crispy Beef Taco
                                </a>
                                </h5>
                                <form className="cart-button">
                                <div className="cart-plus-minus">
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={2} />
                                </div>
                                <button type="submit" className="custom-button">
                                    add
                                </button>
                                </form>
                            </div>
                            </div>
                        </div>
                        <div className="grid-item bevarage popcorn">
                            <div className="grid-inner">
                            <div className="grid-thumb">
                                <img src="assets/images/movie/popcorn/pop4.png" alt="movie/popcorn" />
                                <div className="offer-tag">
                                $57
                                </div>
                                <div className="offer-remainder">
                                <h6 className="o-title mt-0">24%</h6>
                                <span>off</span>
                                </div>
                            </div>
                            <div className="grid-content">
                                <h5 className="subtitle">
                                <a href="#0">
                                    MexiDips &amp; Chips, Beef Muchaco
                                </a>
                                </h5>
                                <form className="cart-button">
                                <div className="cart-plus-minus">
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={2} />
                                </div>
                                <button type="submit" className="custom-button">
                                    add
                                </button>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="booking-summery bg-one">
                        <h4 className="title">booking summery</h4>
                        <ul>
                        <li>
                            <h6 className="subtitle">Venus</h6>
                            <span className="info">English-2d</span>
                        </li>
                        <li>
                            <h6 className="subtitle"><span>City Walk</span><span>02</span></h6>
                            <div className="info"><span>10 SEP TUE, 11:00 PM</span> <span>Tickets</span></div>
                        </li>
                        <li>
                            <h6 className="subtitle mb-0"><span>Tickets  Price</span><span>$150</span></h6>
                        </li>
                        </ul>
                        <ul className="side-shape">
                        <li>
                            <h6 className="subtitle"><span>combos</span><span>$57</span></h6>
                            <span className="info"><span>2 Nachos Combo</span></span>
                        </li>
                        <li>
                            <h6 className="subtitle"><span>food &amp; bevarage</span></h6>
                        </li>
                        </ul>
                        <ul>
                        <li>
                            <span className="info"><span>price</span><span>$207</span></span>
                            <span className="info"><span>vat</span><span>$15</span></span>
                        </li>
                        </ul>
                    </div>
                    <div className="proceed-area  text-center">
                        <h6 className="subtitle"><span>Amount Payable</span><span>$222</span></h6>
                        <a href="#0" className="custom-button back-button">proceed</a>
                    </div>
                    <div className="note">
                        <h5 className="title">Note :</h5>
                        <p>Please give us 15 minutes for F&amp; B preparation  once you're at the cinema</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}
