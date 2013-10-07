<aside class="bg-light aside b-r {{ nav.class }}" id="nav">
	<section class="vbox">
		<section>
			<nav class="nav-primary hidden-xs">
				<ul class="nav">
						<li class="{{ nav.allsites }}">
							<a href="{{ baseurl }}">
								<i class="icon-globe"></i>
								<span>All Users</span>
							</a>
						</li>
						<li class="{{ nav.mysites }}">
							<a href="{{ baseurl }}">
								<i class="icon-usd"></i>
								<span>Clients</span>
							</a>
						</li>
						<li class="{{ nav.managed }}">
							<a href="index.html">
								<i class="icon-group"></i>
								<span>My Users</span>
							</a>
						</li>

						<li class="{{ nav.mail }}">
							<a href="mail.html">
								<b class="badge bg-primary pull-right">3</b>
								<i class="icon-envelope-alt"></i>
								<span>Messages</span>
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

