{% include 'partials/header.php' %}

		
	{% include 'elements/global.header.php' %}

	<section class="hbox stretch">
		{% include 'pages/wordpress/nav.sidebar.wordpress.php' %}
		
		{% include 'pages/wordpress/nav.sidebar.plugins.php' %}

		<section id="content" class="">
			<section class="vbox stretch">
				<section class="scrollable">

					<section class="bg-white">
						<header class="header bg-white navbar" style="z-index:1;">
							<div class="collapse navbar-collapse pull-in">
								<form class="navbar-form navbar-left m-t-sm" role="search">
									<div class="form-group">
										<div class="btn-group">
											<button type="button" class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown"><i class="icon-cloud-upload"></i> Add Custom Plugin <span class="caret"></span></button>
											<ul class="dropdown-menu" role="menu">
												<li><a href="#">Github</a></li>
												<li><a href="#">Upload Zip</a></li>
											</ul>
										</div>
									</div>
								</form>
								<form class="navbar-form navbar-right m-t-sm" role="search">
									<div class="form-group">
										<div class="input-group input-s">
											<input type="text" class="form-control input-sm" placeholder="WordPress Plugin Index">
											<span class="input-group-btn">
												<button type="submit" class="btn btn-sm btn-success btn-icon"><i class="icon-search"></i></button>
											</span>
										</div>
									</div>
								</form>

							</div>
						</header>
	                    <table class="table table-striped">
						<tbody>
							<tr>
								<td class="v-middle"><i class="icon-star"></i></td>
								<td class="v-middle" style="padding:25px 10px;">
									<p class="h5"><a href="#">Jeckpack by Wordpress.com</a></p>
									<p>Supercharge your WordPress site with powerful features previously only available to WordPress.com users.</p>
									<small>Version 4.5 | Updated 2013-10-4 | Downloads 197,499 | Average Rating <i class="icon-star"></i>
									<i class="icon-star"></i>
									<i class="icon-star"></i>
									<i class="icon-star"></i>
									<i class="icon-star"></i></small>
								</td>

								<td class="v-middle" style="padding:25px 0; width:150px;">
									<div class="plugin-contributor-info">
										<div>
											<a href="http://profiles.wordpress.org/joshhartman/">
											<span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
												<img src="{{ baseurl }}/todo/images/avatar.jpg">
											</span> Josh Hartman
											</a>
										</div>
										<div class="plugin-contributor-links">2 plugins
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td class="v-middle"><i class="icon-star"></i></td>
								<td class="v-middle" style="padding:25px 10px;">
									<p class="h5"><a href="#">WordPress Flash Uploader</a></p>
									<p>'WordPress Flash Uploader' is a replacement of the internal flash uploader which let you also manage your whole WordPress installation.</p>
									<small>Version 4.5 | Updated 2013-10-4 | Downloads 197,499 | Average Rating <i class="icon-star"></i>
									<i class="icon-star"></i>
									<i class="icon-star"></i>
									<i class="icon-star"></i>
									<i class="icon-star"></i></small>									
								</td>
								<td style="padding:25px 0;">
									<div class="plugin-contributor-info">
										<div>
											<a href="http://profiles.wordpress.org/joshhartman/">
											<span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
												<img src="{{ baseurl }}/todo/images/avatar.jpg">
											</span> Josh Hartman
											</a>
										</div>
										<div class="plugin-contributor-links">2 plugins
										</div>
									</div>
								</td>								
							</tr>
							<tr>
								<td class="v-middle"><i class="icon-star"></i></td>
								<td class="v-middle" style="padding:25px 10px;">
									<p class="h5"><a href="#">Require Post Category</a></p>
									<p>Require users to choose a post category before saving a draft, updating a post, or publishing a post. This applies to normal posts and may not be com.</p>
									<small>Version 4.5 | Updated 2013-10-4 | Downloads 197,499 | Average Rating <i class="icon-star"></i>
									<i class="icon-star"></i>
									<i class="icon-star"></i>
									<i class="icon-star"></i>
									<i class="icon-star"></i></small>									
								</td>
								<td style="padding:25px 0;">
									<div class="plugin-contributor-info">
										<div>
											<a href="http://profiles.wordpress.org/joshhartman/">
											<span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
												<img src="{{ baseurl }}/todo/images/avatar.jpg">
											</span> Josh Hartman
											</a>
										</div>
										<div class="plugin-contributor-links">2 plugins
										</div>
									</div>
								</td>								

							</tr>
							<tr>
								<td class="v-middle"><i class="icon-star"></i></td>
								<td class="v-middle" style="padding:25px 10px;">
									<p class="h5"><a href="#">Dashboard Commander</a></p>
									<p>Command your admin dashboard. Manage built-in widgets and dynamically registered widgets. Hide widgets depending upon user capabilities.</p>
									<small>Version 4.5 | Updated 2013-10-4 | Downloads 197,499 | Average Rating <i class="icon-star"></i>
									<i class="icon-star"></i>
									<i class="icon-star"></i>
									<i class="icon-star"></i>
									<i class="icon-star"></i></small>									
								</td>
								<td style="padding:25px 0;">
									<div class="plugin-contributor-info">
										<div>
											<a href="http://profiles.wordpress.org/joshhartman/">
											<span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
												<img src="{{ baseurl }}/todo/images/avatar.jpg">
											</span> Josh Hartman
											</a>
										</div>
										<div class="plugin-contributor-links">2 plugins
										</div>
									</div>
								</td>								

							</tr>														
						</tbody>
					</table>
					</section>

				</section>

			</section>
		</section><!-- content -->
	</section>





{% include 'partials/footer.php' %}
