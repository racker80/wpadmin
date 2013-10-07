{% include 'partials/header.php' %}

{% include 'elements/global.header.php' %}

<section class="hbox stretch bg-white">

	{% include 'elements/nav.sidebar.php' %}

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
										<th>Monthly Limit</th>                    
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

							<!-- <ul class="list-group no-radius m-b-none m-t-n-xxs list-group-lg no-border">
		                        <li class="list-group-item">
		                        	{% include 'ui/site.list.row.php' %}
		                        </li>
		                        <li class="list-group-item">
		                        	{% include 'ui/site.list.row.php' %}
		                        </li>
		                        <li class="list-group-item">
		                        	{% include 'ui/site.list.row.php' %}
		                        </li>
		                        <li class="list-group-item">
		                        	{% set status = 'preview' %}		                        	
		                        	{% include 'ui/site.list.row.php' %}
		                        </li>
		                        <li class="list-group-item">
		                        	{% set status = 'down' %}
		                        	{% include 'ui/site.list.row.php' %}
		                        </li>
	                     	</ul> -->

						{% set status = '' %}
					<header class="header b-b">

							<p class="h3">Sites I'm Managing</p>

					</header>

					{% set managed = 'true' %}
					<div class="clearfix b-b wrapper">
                      <a href="#" class="pull-left thumb m-r">
                        <img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle">
                      </a>
                      <div class="clear">
                        <div class="h3 m-t-xs m-b-xs">John.Smith</div>
                        <small class="text-muted"><i class="icon-map-marker"></i> Company Name</small>
                      </div>                
                    </div>

                    <table class="table table-striped b-b">
                    	<thead>
                    		<tr>
                    			<th width="50">Status</th>
                    			<th width="350">Url</th>                    
                    			<th>Monthly Limit</th>                    
                    			<th></th>
                    		</tr>
                    	</thead>
                    	<tbody>
                    		{% include 'ui/site.list.row.php' %}
                    		{% include 'ui/site.list.row.php' %}

                    	</tbody>
                    </table>


                    <div class="clearfix b-b wrapper">
                    	<a href="#" class="pull-left thumb m-r">
                    		<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle">
                    	</a>
                    	<div class="clear">
                    		<div class="h3 m-t-xs m-b-xs">John.Smith</div>
                    		<small class="text-muted"><i class="icon-map-marker"></i> Company Name</small>
                    	</div>                
                    </div>

                    <table class="table table-striped b-b">
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

                    	</tbody>
                    </table>



                    <div class="clearfix b-b wrapper">
                    	<a href="#" class="pull-left thumb m-r">
                    		<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle">
                    	</a>
                    	<div class="clear">
                    		<div class="h3 m-t-xs m-b-xs">John.Smith</div>
                    		<small class="text-muted"><i class="icon-map-marker"></i> Company Name</small>
                    	</div>                
                    </div>

                    <table class="table table-striped b-b">
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

					<!-- <ul class="list-group no-radius m-b-none m-t-n-xxs list-group-lg no-border">
                        <li class="list-group-item">
                        	{% include 'ui/site.list.row.php' %}
                        </li>
                        <li class="list-group-item">
                        	{% include 'ui/site.list.row.php' %}
                        </li>
                        <li class="list-group-item">
                        	{% set status = 'dev' %}
                        	{% include 'ui/site.list.row.php' %}
                        </li>
                 	</ul> -->

				</section>

		</section>
	</section><!-- content -->
</section>


{% include 'partials/footer.php' %}
