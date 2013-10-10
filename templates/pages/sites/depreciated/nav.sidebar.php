<aside class="bg-light aside b-r {{ nav.class }}" id="nav">
	<section class="vbox">
		<section>
			<nav class="nav-primary hidden-xs">
				<ul class="nav">
						<li class="{{ nav.allsites }}">
							<a href="{{ baseurl }}">
								<i class="icon-sitemap"></i>
								<span>All Sites</span>
							</a>
						</li>
						<li class="{{ nav.mysites }}">
							<a href="{{ baseurl }}/sites/my-sites">
								<i class="icon-th-list"></i>
								<span>My Sites</span>
							</a>
						</li>
						<li class="{{ nav.managed }}">
							<a href="{{ baseurl }}/sites/managed">
								<i class="icon-coffee"></i>
								<span>Managed Sites</span>
							</a>
						</li>

						<li class="{{ nav.tasks }}">
							<a href="tasks.html">
								<i class="icon-tasks"></i>
								<span>Tasks</span>
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
