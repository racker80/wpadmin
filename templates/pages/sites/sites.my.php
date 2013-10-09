{% include 'partials/header.php' %}

{% include 'elements/global.header.php' %}

<section class="hbox stretch bg-white">

	{% include 'pages/sites/nav.sidebar.php' %}

	<section id="content" class="">
		<section class="hbox stretch">
				<section>
					<header class="header b-b">
						<div class="btn-group pull-right">
							<a href="{{ baseurl }}/sites/new" class="btn btn-success"><i class="icon-plus-sign-alt"></i> New Site</a>
						</div>
							<p class="h3">My Sites</p>

					</header>
							<table class="table table-striped">
								<thead>
									<tr>
										<th width="50">Status</th>
										<th width="350">Url</th>                    
										<th></th>
									</tr>
								</thead>
								<tbody>
									{% include 'ui/site.list.row.php' %}
									{% include 'ui/site.list.row.php' %}
									{% include 'ui/site.list.row.php' %}
									{% include 'ui/site.list.row.php' %}									

									{% set status = 'dev' %}
									{% include 'ui/site.list.row.php' %}
									
									{% set status = 'preview' %}
									{% include 'ui/site.list.row.php' %}

									{% set status = 'down' %}
									{% include 'ui/site.list.row.php' %}
								</tbody>
							</table>


				</section>

		</section>
	</section><!-- content -->
</section>


{% include 'partials/footer.php' %}