<aside class="bg-dark aside-lg" id="nav">
	<section class="vbox">
		<header class="bg-dark nav-bar">
          <a class="btn btn-link visible-xs" data-toggle="class:nav-off-screen" data-target="#nav">
            <i class="icon-reorder"></i>
          </a>
          <a href="#" class="nav-brand" data-toggle="fullscreen">WP Sites</a>
          <a class="btn btn-link visible-xs" data-toggle="class:show" data-target=".nav-user">
            <i class="icon-comment-alt"></i>
          </a>
        </header>

		<footer class="footer bg-gradient hidden-xs">
			<a href="#nav" data-toggle="class:nav-vertical" class="btn btn-sm btn-link m-l-n-sm">
				<i class="icon-reorder"></i>
			</a>
		</footer>





		<section class="w-f">
          <div class="nav-user hidden-xs pos-rlt">            
            <div class="nav-avatar pos-rlt">
              <a href="#" class="thumb-sm avatar animated" data-toggle="dropdown">
                <img src="{{baseurl}}/todo/images/avatar.jpg" alt="" class="">
                <span class="m-l">user.name</span> <span class="caret caret-white"></span> 
              </a>
              <ul class="dropdown-menu m-t-sm animated fadeInLeft">
              	<span class="arrow top"></span>
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
                <li class="divider"></li>
                <li>
                  <a href="docs.html">Help</a>
                </li>
                <li>
                  <a href="signin.html">Logout</a>
                </li>
              </ul>
              <div class="visible-xs m-t m-b">
                <a href="#" class="h3">John.Smith</a>
                <p><i class="icon-map-marker"></i> London, UK</p>
              </div>
            </div>
            <div class="nav-msg">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <b class="badge badge-white count-n">2</b>
              </a>
              <section class="dropdown-menu m-l-sm pull-left animated fadeInRight">
                <div class="arrow left"></div>
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
            </div>
          </div>
			<nav class="nav-primary hidden-xs">
				<ul class="nav">
					<li class="{{ nav.globalnav.sites }}">
						<a href="{{ baseurl }}">
							<i class="icon-sitemap"></i>
							<span>Sites</span>
						</a>
					</li>
					<li class="{{ nav.globalnav.users }}">
						<a href="{{ baseurl }}/users">
							<i class="icon-group"></i>
							<span>Users</span>
						</a>
					</li>
					<li class="{{ nav.globalnav.wordpress }}">
						<a href="{{ baseurl }}/wordpress">
							<i class="icon-th-list"></i>
							<span>My WordPress</span>
						</a>
					</li>
					<li class="">
						<a href="#">
							<i class="icon-gear"></i>
							<span>Account Settings</span>
						</a>
					</li>
					<li class="">
						<a href="#">
							<i class="icon-comments"></i>
							<span>Support</span>
						</a>
					</li>
				</ul>
			</nav>

        </section>




	</section>

</aside>
