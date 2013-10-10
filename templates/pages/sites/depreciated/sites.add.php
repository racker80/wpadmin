{% include 'partials/header.php' %}

{% include 'elements/global.header.php' %}

<section class="hbox stretch">

	{% include 'pages/sites/nav.sidebar.php' %}

	<section id="content" class="">
		<section class="vbox">

			<section class="scrollable">
				<section class="header b-b">
					<p class="h4">Add a new site</p>
				</section>
				<section class="hbox stretch">
					{% include 'pages/sites/nav.sidebar.new.php' %}

					<aside class="bg-white">
						{% include 'ui/forms.wp.php' %}
					</aside>

				</section>
			</section>
      </section>
      <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen" data-target="#nav"></a>
	</section><!-- content -->
</section>


{% include 'partials/footer.php' %}








