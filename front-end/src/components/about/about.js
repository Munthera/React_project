import "./about.css";
export default function about(){
    return(<div>
        <section class="page-banner">
				<div class="container">
					<div class="page-banner-in">
						<div class="row">
							<div class="col-xl-6 col-lg-6 col-12">
								<h1 class="page-banner-title text-uppercase">about us</h1>
							</div>
							<div class="col-xl-6 col-lg-6 col-12">
								<ul class="right-side">
									<li><a href="index.html">Home</a></li>
									<li>About us</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="pt-100">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 align-flax order-r-2">
							<div class="about-box about-box-text">
								<h2 class="about-title text-uppercase">THE NEW WAY TO SUCCESS</h2>
								<p class="about-des">Imagine running an online shoe emporium that caters to shoe enthusiasts of all ages and styles. Our website, "feetie.com," will be a one-stop destination for shoe lovers, offering a diverse range of footwear that suits every taste and occasion.</p>
							</div>
						</div>
						<div class="col-lg-6 order-r-1">
							<div class="about-box">
								<img src="images/team.jpg" alt="about"/>
							</div>
						</div>
					</div>
				</div>
			</section>
          

			<div class="top-scrolling">
				<a href="#main" class="scrollTo"><i class="fa fa-angle-up" aria-hidden="true"></i></a>
			</div>
    </div>)
}