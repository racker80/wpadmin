	<header class="header bg-black navbar navbar-inverse pull-in">
		<div class="navbar-header nav-bar aside dk">
			<a class="btn btn-link visible-xs" data-toggle="class:show" data-target=".nav-primary">
				<i class="icon-reorder"></i>
			</a>
			<a href="#" class="nav-brand" data-toggle="fullscreen"><img src="images/logo.png"></a>
			<a class="btn btn-link visible-xs" data-toggle="collapse" data-target=".navbar-collapse">
				<i class="icon-comment-alt"></i>
			</a>
		</div>
		<div class="collapse navbar-collapse">

			
			<ul class="nav navbar-nav navbar-right">
				<li class="hidden-xs">
					<a href="#" class="dropdown-toggle dk" data-toggle="dropdown">
						<i class="icon-bell-alt text-white"></i>
						<span class="badge up bg-danger m-l-n-sm">2</span>
					</a>
					<section class="dropdown-menu animated fadeInUp input-s-lg">
						<section class="panel bg-white">
							<header class="panel-heading">
								<strong>You have <span class="count-n">2</span> notifications</strong>
							</header>
							<div class="list-group">
								<a href="#" class="media list-group-item">
									<span class="pull-left thumb-sm">
										<img src="images/avatar.jpg" alt="John said" class="img-circle">
									</span>
									<span class="media-body block m-b-none">
										Use awesome animate.css<br>
										<small class="text-muted">28 Aug 13</small>
									</span>
								</a>
								<a href="#" class="media list-group-item">
									<span class="media-body block m-b-none">
										1.0 initial released<br>
										<small class="text-muted">27 Aug 13</small>
									</span>
								</a>
							</div>
							<footer class="panel-footer text-sm">
								<a href="#" class="pull-right"><i class="icon-cog"></i></a>
								<a href="#">See all the notifications</a>
							</footer>
						</section>
					</section>
				</li>
				<li class="dropdown">
					<a href="#" class="dropdown-toggle aside-sm dker" data-toggle="dropdown">
						<span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
							<img src="{{ baseurl }}/todo/images/avatar.jpg">
						</span>
						John.Smith <b class="caret"></b>
					</a>
					<ul class="dropdown-menu animated fadeInLeft">
						<li>
							<a href="#">Settings</a>
						</li>
						<li>
							<a href="profile.html">Profile</a>
						</li>
						<li>
							<a href="#">
								<span class="badge bg-danger pull-right">3</span>
								Notifications
							</a>
						</li>
						<li>
							<a href="docs.html">Help</a>
						</li>
						<li>
							<a href="signin.html">Logout</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</header>