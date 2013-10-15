{% include 'partials/header.php' %}


<section class="hbox stretch">
        
	{% include 'partials/nav.sidebar.php' %}



	<section id="content" class=" bg-white">

        <section class="panel">
            <header class="panel-heading bg-light">

                <ul class="nav nav-tabs">
                    <li><a href="#themes" data-toggle="tab"><i class="icon-bar-chart text-default"></i> My Themes</a></li>
                    <li><a href="#plugins" data-toggle="tab"><i class="icon-user text-default"></i> Plugins</a></li>
                    <li><a href="#packages" data-toggle="tab"><i class="icon-cog text-default"></i> Packages</a></li>
                    <li class="active"><a href="#wp-settings" data-toggle="tab"><i class="icon-cog text-default"></i> WP Settings</a></li>
                </ul>

            </header>
            <div class="panel-body no-padder">
                <div class="tab-content">              
                    

                    <div class="tab-pane" id="themes">
                    	<div class="wrapper">
                    		<p class="h4">Add themes</p>
                    		{% include 'pages/wordpress/includes/upload.theme.php' %}
                    	</div>
                    	{% include 'pages/wordpress/includes/theme.list.php' %}
                    </div>


                    <div class="tab-pane" id="plugins">

                    	<div class="wrapper">
                    		<p class="h4">Add plugins</p>
                    		{% include 'pages/wordpress/includes/upload.plugins.php' %}
                    	</div>

                    	<div class="row text-sm wrapper">
                    		<div class="col-sm-3 text-right pull-right">
                    			View bundle: 
                    			<select class="input-sm form-control input-s-sm inline">
                    				<option value="0">Default Bundle</option>
                    				<option value="1">eCommerce</option>
                    				<option value="2">Security</option>
                    				<option value="3">view all plugins</option>
                    			</select>
                    		</div>
                    	</div>                    	
                    	
                        {% include 'pages/wordpress/includes/plugins.list.php' %}

                    </div>


                    <div class="tab-pane " id="packages">
                        
                        <div class="wrapper bg-light lter m">
                            <p class="h4">Create a package</p>
                            {% include 'pages/wordpress/includes/new.package.php' %}
                        </div>

                        <div class="line line-dashed line-lg pull-in"></div>
                        <div class="wrapper">
                            
                            {% include 'pages/wordpress/includes/package.list.php' %}
                        </div>
                    </div>

                    <div class="tab-pane active" id="wp-settings">
                        <div class="wrapper">
                            {% include 'forms/wp.php' %}
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
	</section><!-- content -->


</section>


{% include 'partials/footer.php' %}
