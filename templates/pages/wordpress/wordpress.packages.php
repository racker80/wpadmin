{% include 'partials/header.php' %}

{% include 'elements/global.header.php' %}

<section class="hbox stretch">

	{% include 'pages/wordpress/nav.sidebar.wordpress.php' %}

	<section id="content" class="">
		<section class="hbox stretch">
				<section>
					
					<div class="panel">
						<div class="panel-body text-center">

							<p class="lead m-n">You can create your own packages!  
								Upload or select a theme, then pick your favorite plugins.
								<a href="#" class="btn btn-success"><i class="icon-plus-sign-alt"></i> Create a custom Package</a>
							</p>

						</div>
					</div>

                  	{% set packagename = 'App Promotion' %}
					{% include 'ui/package.list.php' %}


                	{% set packagename = 'Blog' %}
                	{% include 'ui/package.list.php' %}



                 	{% set packagename = 'eCommerce' %}
                 	{% include 'ui/package.list.php' %}



                 	{% set packagename = 'News Letter' %}
                	{% include 'ui/package.list.php' %}
				

				</section>

		</section>
	</section><!-- content -->
</section>


{% include 'partials/footer.php' %}
