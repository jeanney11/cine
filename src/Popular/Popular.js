import React from "react";
import '../Popular/popular.css';


function Popular(){

    return(

        <div className="bodyPopular">
           
           <div class="row">
	<div class="containerPopular">
		<div class="test_box box-01 col-xs-5 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Title</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div>
		</div>
		<div class="test_box box-02 col-xs-5 col-md-4">
			{/* <div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Title</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div> */}
			
			{/* inicio tarjeta cine */}
			<div class="main-container">
			<div class="poster-container">
				<a href="#"><img src="https://i.ibb.co/Zd51z5c/justice-league.jpg" class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">Justice League</h4>
					<p class="ticket__movie-slogan">You can't save the world alone.</p>
					<p class="ticket__current-price">$20.75</p>
					<p class="ticket__old-price">$40.99</p>
					<button class="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>
			{/* end tarjeta cine */}
		
		</div>
		<div class="test_box box-03 col-xs-5 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Title</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div>
		</div>
		<div class="test_box box-04 col-xs-5 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Title</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div>
		</div>
		<div class="test_box box-05 col-xs-5 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Title</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div>
		</div>
		<div class="test_box box-06 col-xs-5 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Title</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div>
		</div>

        <div class="test_box box-07 col-xs-5 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Title</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div>
		</div>

        <div class="test_box box-08 col-xs-5 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Title</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div>
		</div>

        <div class="test_box box-09 col-xs-5 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Title</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div>
		</div>

        <div class="test_box box-10 col-xs-5 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Title</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div>
		</div>

	</div>
</div>
        </div>
    );
}
export default Popular; 