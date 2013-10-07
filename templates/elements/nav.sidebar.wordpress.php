<aside class="bg-light aside b-r {{ nav.class }}" id="nav">
	<section class="vbox">
		<section>
			<nav class="nav-primary hidden-xs">
				<ul class="nav">
						<li class="{{ nav.packages }}">
							<a href="{{ baseurl }}/wordpress/packages">
								<i class="icon-globe"></i>
								<span>Packages</span>
							</a>
						</li>
						<li class="{{ nav.themes }}">
							<a href="{{ baseurl }}/wordpress/themes">
								<i class="icon-usd"></i>
								<span>Themes</span>
							</a>
						</li>
						<li class="{{ nav.plugins }}">
							<a href="{{ baseurl }}/wordpress/plugins">
								<i class="icon-group"></i>
								<span>Plugins</span>
							</a>
						</li>
					</ul>
			</nav>
		</section>
		<footer class="footer b-r bg-gradient hidden-xs">
			<a href="#nav" data-toggle="class:nav-vertical" class="btn btn-sm btn-link m-l-n-sm">
				<i class="icon-reorder"></i>
			</a>
		</footer>
	</section>
</aside>
