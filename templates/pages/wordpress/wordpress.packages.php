{% include 'partials/header.php' %}

{% include 'elements/global.header.php' %}

<section class="hbox stretch">

	{% include 'partials/nav.sidebar.php' %}



	<section id="content">
        <section class="panel">
            <header class="panel-heading bg-light">

                <ul class="nav nav-tabs">
                    <li class="active"><a href="#messages-1" data-toggle="tab"><i class="icon-bar-chart text-default"></i> My Themes</a></li>
                    <li><a href="#profile-1" data-toggle="tab"><i class="icon-user text-default"></i> Plugins</a></li>
                    <li><a href="#settings-1" data-toggle="tab"><i class="icon-cog text-default"></i> Packages</a></li>
                    <li><a href="#settings-1" data-toggle="tab"><i class="icon-cog text-default"></i> WP Settings</a></li>
                </ul>

            </header>
            <div class="panel-body no-padder">
                <div class="tab-content">              
                    <div class="tab-pane active" id="messages-1">
                    	<div class="wrapper">
                    		<p class="h4">Add themes</p>
                    		{% include 'pages/wordpress/upload.theme.php' %}
                    	</div>
                    		{% include 'pages/wordpress/theme.list.php' %}
                    </div>
                    <div class="tab-pane" id="profile-1">

                    	<div class="wrapper">
                    		<p class="h4">Add plugins</p>
                    		{% include 'pages/wordpress/upload.plugins.php' %}
                    	</div>

                    	<div class="row text-sm wrapper">
                    		<div class="col-sm-5 m-b-xs">
<!--                     			<div class="input-group">
                    				<input type="text" class="input-sm form-control" placeholder="Search">
                    				<span class="input-group-btn">
                    					<button class="btn btn-sm btn-white" type="button">Go!</button>
                    				</span>
                    			</div>  -->            
                    		</div>
                    		<div class="col-sm-4 m-b-xs">
                    			<!-- <div class="btn-group" data-toggle="buttons">
                    				<label class="btn btn-sm btn-white active">
                    					<input type="radio" name="options" id="option1"> Day
                    				</label>
                    				<label class="btn btn-sm btn-white">
                    					<input type="radio" name="options" id="option2"> Week
                    				</label>
                    				<label class="btn btn-sm btn-white">
                    					<input type="radio" name="options" id="option2"> Month
                    				</label>
                    			</div> -->
                    		</div>
                    		<div class="col-sm-3 text-right">

                    			View bundle: 
                    			<select class="input-sm form-control input-s-sm inline">
                    				<option value="0">Default Bundle</option>
                    				<option value="1">eCommerce</option>
                    				<option value="2">Security</option>
                    				<option value="3">view all plugins</option>
                    			</select>


                    		</div>
                    	</div>                    	
                    		{% include 'pages/wordpress/plugins.list.php' %}


                    </div>
                    <div class="tab-pane" id="settings-1">settings</div>
                    <div class="tab-pane" id="new-site">

                    </div>
                </div>
            </div>
        </section>



	</section><!-- content -->



	<section id="content" class="hidden">
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
