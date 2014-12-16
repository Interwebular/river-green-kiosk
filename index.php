<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>River Green Kiosk</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="css/main.css">
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/nav.css">
		<link rel="stylesheet" href="css/slick.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
		<div id="viewport-container">
			<div id="left-nav-wrap">
				<div id="logo-wrap"></div>
				<nav class="nav-left">
					<ul>
						<li class="load-page" data-page="the-views" data-height="90" data-margin="0" data-arrow="153"><span>check out</span>the views</li>
						<li class="load-page" data-page="amenities" data-height="200" data-margin="580" data-arrow="262"><span>view the</span>amenities</li>
						<li class="load-page" data-page="the-suites" data-height="310" data-margin="1160" data-arrow="376"><span>see inside</span>the suites</li>
						<li class="load-page" data-page="community" data-height="420" data-margin="1740" data-arrow="490"><span>learn about</span>community</li>
						<li class="load-page" data-page="quick-facts" data-height="435" data-margin="2320" data-arrow="602"><span>view our</span>quick facts</li>
					</ul>
				</nav>
				<div id="menu-toggle-left" class="menu-toggle"></div>
			</div>
			
			<div id="left-arrow">
				<img src="img/arrow_left.png" />
			</div>
				
			<div id="page-content-container-left">
				<div id="page-content-left">
					<div id="page-content-left-inner">
						<div id="page-content-left-animation">
							<div class="page-content the-views-content">
								<?php require('includes/pages/the-views.php');  ?>
							</div>
							<div class="page-content amenities-content">
								<?php require('includes/pages/amenities.php');  ?>
							</div>
							<div class="page-content the-suites-content">
								<?php require('includes/pages/the-suites.php');  ?>
							</div>
							<div class="page-content community-content">
								<?php require('includes/pages/community.php');  ?>
							</div>
							<div class="page-content quick-facts-content">
								<?php require('includes/pages/quick-facts.php');  ?>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
			<?php require( 'includes/animation-frames.php' ); ?>
			<?php require( 'includes/hotspots-in.php' ); ?>
			<?php require( 'includes/hotspots-out.php' ); ?>


			<!--
			<div id="right-nav-wrap">
				<div id="logo-wrap"></div>
				<nav class="nav-right">
					<ul>
						<li class="load-page" data-page="the-views" data-height="90"><span>check out</span>the views</li>
						<li class="load-page" data-page="amenities" data-height="200"><span>view the</span>amenities</li>
						<li class="load-page" data-page="the-suites" data-height="310"><span>see inside</span>the suites</li>
						<li class="load-page" data-page="community" data-height="420"><span>learn about</span>community</li>
						<li class="load-page" data-page="quick-facts" data-height="525"><span>view our</span>quick facts</li>
					</ul>
				</nav>
				<div id="menu-toggle-right" class="menu-toggle">asdfadsf</div>
			</div>
			-->
			
			<div id="zoom-controls-wrapper">
				<div id="zoom-controls">
					<div id="zoom_out" class="on">-</div>
					ZOOM
					<div id="zoom_in">+</div>
				</div>
			</div>
		</div> <!-- /viewport-container  -->
	
        <script src="js/vendor/jquery-2.1.1.min.js"></script>
        <script src="js/vendor/jquery.panorama.js"></script>
		<script src="js/jquery.panorama.js"></script>
		<script src="js/slick.min.js"></script>	
		<script src="js/animation.js"></script>
        <script src="js/main.js"></script>
		<script src="js/nav.js"></script>
    </body>
</html>
