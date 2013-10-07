{% include 'partials/header.php' %}

{% include 'elements/global.header.php' %}

<section class="hbox stretch bg-white">

	{% include 'elements/nav.sidebar.users.php' %}

	<section id="content" class="">
		<section class="hbox stretch">
				<section>
					<header class="header b-b">
						<p class="pull-right">
							<button class="btn btn-sm btn-success"><i class="icon-plus"></i> New User</button>
						</p>

						<p class="h3">My Clients</p>

					</header>

					<table class="table table-striped b-b">
						<tbody>
							<tr>
								<td class="v-middle" width="30">
									<a href="#" class="thumb">
										<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle">
									</a>
								</td>
								<td class="v-middle">
									<span class="h3 ">John.Smith</span>
								</td>
								<td class="v-middle">
									<small class="text-muted"><i class="icon-map-marker"></i> Company Name</small>
								</td>
								<td class="v-middle">
									<small class="text-muted">5 sites</small>
								</td>
								<td class="text-right v-middle">
									<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-remove"></i> remove</a>
									<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-edit"></i> view</a>
								</td>
							</tr>
							<tr>
								<td class="v-middle" width="30">
									<a href="#" class="thumb">
										<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle">
									</a>
								</td>
								<td class="v-middle">
									<span class="h3 ">John.Smith</span>
								</td>
								<td class="v-middle">
									<small class="text-muted"><i class="icon-map-marker"></i> Company Name</small>
								</td>
								<td class="v-middle">
									<small class="text-muted">5 sites</small>
								</td>
								<td class="text-right v-middle">
									<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-remove"></i> remove</a>
									<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-edit"></i> view</a>
								</td>
							</tr>
							<tr>
								<td class="v-middle" width="30">
									<a href="#" class="thumb">
										<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle">
									</a>
								</td>
								<td class="v-middle">
									<span class="h3 ">John.Smith</span>
								</td>
								<td class="v-middle">
									<small class="text-muted"><i class="icon-map-marker"></i> Company Name</small>
								</td>
								<td class="v-middle">
									<small class="text-muted">5 sites</small>
								</td>
								<td class="text-right v-middle">
									<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-remove"></i> remove</a>
									<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-edit"></i> view</a>
								</td>
							</tr>							
						</tbody>
					</table>

                    <!-- <table class="table table-striped b-b">
                    	<thead>
                    		<tr>
                    			<th width="50">Status</th>
                    			<th width="350">Url</th>                    
                    			<th>Monthly Limit</th>                    
                    			<th></th>
                    		</tr>
                    	</thead>
                    	<tbody>
									{% set status = 'dev' %}
									{% include 'ui/site.list.row.php' %}
									{% set status = '' %}

									{% include 'ui/site.list.row.php' %}
									{% include 'ui/site.list.row.php' %}
									{% include 'ui/site.list.row.php' %}
									{% include 'ui/site.list.row.php' %}	

                    	</tbody>
                    </table>
 -->






					

				</section>



		</section>
	</section><!-- content -->
</section>


{% include 'partials/footer.php' %}
