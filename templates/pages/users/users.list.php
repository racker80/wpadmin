{% include 'partials/header.php' %}

{% include 'elements/global.header.php' %}

<section class="hbox stretch bg-white">

	{% include 'partials/nav.sidebar.php' %}


	<section id="content">
        <section class="panel">
            <header class="panel-heading bg-light">

                <ul class="nav nav-tabs">
                    <li class="active"><a href="#messages-1" data-toggle="tab"><i class="icon-bar-chart text-default"></i> Managers</a></li>
                    <li><a href="#profile-1" data-toggle="tab"><i class="icon-user text-default"></i> Site Owners</a></li>
                    <li><a href="#settings-1" data-toggle="tab"><i class="icon-cog text-default"></i> Activity</a></li>
                    <li class="pull-right bg-success"><a href="#new-site" data-toggle="tab" class=""><i class="icon-plus text-default"></i> New User</a></li>
                </ul>

            </header>
            <div class="panel-body no-padder">
                <div class="tab-content">              
                    <div class="tab-pane active" id="messages-1">
                    	<section class="hbox stretch">
                            
                    		{% include 'pages/users/users.list.managers.php' %}
                            <aside class="bg-white col-sm-4">
                            	<div class="wrapper">
				                    		{% include 'pages/users/user.card.php' %}

                            	</div>
                            	
                            </aside>

                        </section>
                    	
                    </div>
                    <div class="tab-pane" id="profile-1">
                    	<section class="hbox stretch">

                    		{% include 'pages/users/users.list.owners.php' %}
                    		<aside class="bg-white col-sm-4">
                    			<div class="wrapper">
                    				{% include 'pages/users/user.card.php' %}

                    			</div>

                    		</aside>

                    	</section>


                    </div>
                    <div class="tab-pane" id="settings-1">settings</div>
                    <div class="tab-pane" id="new-site">
                        
                    </div>
                </div>
            </div>
        </section>


	<section id="content" class="hidden">
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
