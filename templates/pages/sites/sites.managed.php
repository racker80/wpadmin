{% include 'partials/header.php' %}

{% include 'elements/global.header.php' %}

<section class="hbox stretch bg-white">

	{% include 'pages/sites/nav.sidebar.php' %}

	<section id="content" class="">
		<section class="hbox stretch">
				<section>
                    
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


				</section>

		</section>
	</section><!-- content -->
</section>


{% include 'partials/footer.php' %}