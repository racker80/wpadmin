
<header class="wrapper">
	<p class="h3">DNS, Email</p>
</header>


<section class="panel no-border">
  <header class="panel-heading font-bold">
    Form elements
  </header>

    <div class="panel-body">
	    <form class="form-horizontal" method="get">
	      <div class="form-group">
	        <label class="col-sm-2 control-label">Rounded</label>
	        <div class="col-sm-10">
	          <input type="text" class="form-control rounded">                        
	        </div>
	      </div>

	      <div class="line line-dashed line-lg pull-in"></div>
	      <div class="form-group">
	      	<label class="col-sm-2 control-label">With help</label>
	      	<div class="col-sm-10">
	      		<input type="text" class="form-control">
	      		<span class="help-block m-b-none">A block of help text that breaks onto a new line and may extend beyond one line.</span>
	      	</div>
	      </div>

	    </form>
	</div>
</section>

<header class="wrapper">
	<p class="h3">Setup WordPress</p>
</header>

<section class="panel no-border">
  <header class="panel-heading font-bold">
    Site Information
  </header>

    <div class="panel-body">
	    <form class="form-horizontal" method="get">
	      <div class="form-group">
	      	<label class="col-sm-2 control-label">Site Title</label>
	      	<div class="col-sm-10">
	      		<input type="text" class="form-control">
	      		<!-- <span class="help-block m-b-none">A block of help text that breaks onto a new line and may extend beyond one line.</span> -->
	      	</div>
	      </div>

	      <div class="form-group">
	      	<label class="col-sm-2 control-label">Description</label>
	      	<div class="col-sm-10">
	      		<input type="text" class="form-control">
	      		<!-- <span class="help-block m-b-none">A block of help text that breaks onto a new line and may extend beyond one line.</span> -->
	      	</div>
	      </div>

	      <div class="form-group">
	      	<label class="col-sm-2 control-label">Favicon</label>
	      	<div class="col-sm-10">
	      		<div class="input-group">
	      			<input type="text" class="form-control" placeholder="Select a favicon file">
	      			<span class="input-group-btn">
	      				<button class="btn btn-primary" type="button">Upload</button>
	      			</span>
	      		</div>
            </div>
	      </div>

	      <div class="form-group">
	      	<label class="col-sm-2 control-label">Permalinks</label>
	      	<div class="col-sm-10">
	      		<div class="radio">
	      			<label>
	      				<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
	      				 Default -	http://projects.wp/?p=123
	      			</label>
	      		</div>
	      		<div class="radio">
	      			<label>
	      				<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
	      				Day and name -	http://projects.wp/2013/10/04/sample-post/
	      			</label>
	      		</div>
	      		<div class="radio">
	      			<label>
	      				<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
	      				Month and name - http://projects.wp/2013/10/sample-post/
	      			</label>
	      		</div>
	      		<div class="radio">
	      			<label>
	      				<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
	      				 Numeric -	http://projects.wp/archives/123
	      			</label>
	      		</div>	      		
	      		<div class="radio">
	      			<label>
	      				<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
	      				  Post name -	http://projects.wp/sample-post/
	      			</label>
	      		</div>	    
	      		<div class="radio">
	      			<label>
	      				<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
	      				Custom Structure	http://projects.wp <input type="text" class="form-control" placeholder="">

	      				

	      			</label>
	      		</div>  		
	      	</div>
	      </div>
	    </form>
	</div>

	<!-- <div class="line line-dashed line-lg pull-in"></div> -->

	<header class="panel-heading font-bold">
    	Admin
	</header>

    <div class="panel-body">
	    <form class="form-horizontal" method="get">
	      <div class="form-group">
	      	<label class="col-sm-2 control-label">Admin User Name</label>
	      	<div class="col-sm-10">
	      		<input type="text" class="form-control" placeholder="admin">
	      		<span class="help-block m-b-none">It's best practice to change the default admin name to something other than "admin".</span>
	      	</div>
	      </div>

	      <div class="form-group">
	      	<label class="col-lg-2 control-label">Email</label>
	      	<div class="col-lg-10">
	      		<input type="email" class="form-control" placeholder="your@email.address.com">
	      	</div>
	      </div>

	      <div class="form-group">
	      	<label class="col-lg-2 control-label">Password</label>
	      	<div class="col-lg-10">
	      		<input type="password" class="form-control" placeholder="Password">
	      	</div>
	      </div>

	      <div class="form-group">
	      	<label class="col-lg-2 control-label">Password (again)</label>
	      	<div class="col-lg-10">
	      		<input type="password" class="form-control" placeholder="Password">
	      	</div>
	      </div>

	    </form>
	</div>

	<header class="panel-heading font-bold">
    	Additional Users
	</header>

    <div class="panel-body">
	    <form class="form-horizontal" method="get">


	      <div class="form-group">
	      	<label class="col-lg-2 control-label"></label>
	      	<div class="col-lg-10 ">
	      		<div class="pull-right"><span class="label bg-danger">remove user <i class="icon-remove"></i></span></div>
	      		
	      	</div>
	      </div>


	      <div class="form-group">
	      	<label class="col-sm-2 control-label">User Name</label>
	      	<div class="col-sm-10">
	      		<input type="text" class="form-control" placeholder="newusername">
	      		<span class="help-block m-b-none">It's best practice to change the default admin name to something other than "admin".</span>
	      	</div>
	      </div>
	      <div class="form-group">
	      	<label class="col-sm-2 control-label">Role</label>
	      	<div class="col-sm-10">
	      		<select name="account" class="form-control m-b">
	      			<option>admin</option>
	      			<option>editor</option>
	      			<option>user</option>
	      			<option>subscriber</option>
	      		</select>
	      	</div>
	      </div>
	      <div class="form-group">
	      	<label class="col-lg-2 control-label">Email</label>
	      	<div class="col-lg-10">
	      		<input type="email" class="form-control" placeholder="your@email.address.com">
	      	</div>
	      </div>

	      <div class="form-group">
	      	<label class="col-lg-2 control-label">Password</label>
	      	<div class="col-lg-10">
	      		<input type="password" class="form-control" placeholder="Password">
	      	</div>
	      </div>

	      <div class="form-group">
	      	<label class="col-lg-2 control-label">Password (again)</label>
	      	<div class="col-lg-10">
	      		<input type="password" class="form-control" placeholder="Password">
	      	</div>
	      </div>

	      <div class="form-group">
	      	<label class="col-sm-2 control-label">Notify User</label>
	      	<div class="col-sm-10">
	      		<div class="radio">
	      			<label>
	      				<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
	      				Yes, send newuser an email notification of the signup.
	      			</label>
	      		</div>
	      		<div class="radio">
	      			<label>
	      				<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
	      				Nope, don't clutter their inbox.
	      			</label>
	      		</div>
	      	</div>
	      </div>


      	<div class="line line-dashed line-lg pull-in"></div>

      	<div class="form-group">
      		<div class="col-sm-4 col-sm-offset-2">
      			<button type="submit" class="btn btn-primary"><i class="icon-plus-sign"></i> Add another user</button>
      		</div>
      	</div>		

	    </form>
	</div>	

</section>


<header class="wrapper">
	<p class="h3">Themes and Plugins</p>
</header>


<section class="panel no-border">
  <header class="panel-heading font-bold">
    Build from Package?
  </header>

    <div class="panel-body">
	    <form class="form-horizontal" method="get">

	      <div class="form-group">
	      	<label class="col-sm-2 control-label">You can choose to build your WP site from a pre-exisitng package.</label>
	      	<div class="col-sm-10">
	      		<div class="row">
	      			<div class="col-sm-6">                    
	      				<!-- radio -->
	      				<div class="radio">
	      					<label class="radio-custom">
	      						<input type="radio" name="radio" checked="checked">
	      						<i class="icon-circle-blank checked"></i>
	      						No package
	      					</label>
	      				</div>
	      				<div class="radio">
	      					<label class="radio-custom">
	      						<input type="radio" name="radio">
	      						<i class="icon-circle-blank"></i>
	      						App Promotion
	      					</label>
	      				</div>
	      				<div class="radio">
	      					<label class="radio-custom">
	      						<input type="radio" name="radio">
	      						<i class="icon-circle-blank"></i>
	      						eCommerce
	      					</label>
	      				</div>
	      				<div class="radio">
	      					<label class="radio-custom">
	      						<input type="radio" name="radio">
	      						<i class="icon-circle-blank"></i>
	      						Blog
	      					</label>
	      				</div>
	      				<div class="radio">
	      					<label class="radio-custom">
	      						<input type="radio" name="radio">
	      						<i class="icon-circle-blank"></i>
	      						News Letter
	      					</label>
	      				</div>
	      			</div>
	      			<div class="col-sm-6">
	      				<p class="lead">Packages are groups of themes and plugins that get you started quickly with all the best things.</p>
	      				<a href="#" class="btn btn-info">Create a package!</a>
	      			</div>
	      		</div>
	      	</div>
	      </div>

	    </form>
	</div>
</section>

<section class="panel no-border">
	<header class="panel-heading font-bold">
		Theme
	</header>

	<div class="panel-body">
		<form class="form-horizontal" method="get">
			<div class="form-group">
				<label class="col-sm-2 control-label"></label>
				<div class="col-sm-10">
					<div class="row">
						<div class="col-sm-6">
							<div class="wrapper">
															<img src="{{ baseurl }}/todo/images/screenshot.png" style="display:block; width:100%; height:auto;" alt="">
							</div>
						</div>
						<div class="col-sm-6">
							<p class="h3 m-t">Theme Name</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ea dolorum perspiciatis optio minus?</p>
							<p>Author: <strong>Author Name</strong></p>
							<p>Rating: <i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i> <i class="icon-star"></i></p>
							<p><a href="#">Visit site <i class="icon-chevron-right"></i></a></p>
						</div>
					</div>
					


				</div>
			</div>


			<div class="form-group">
				<label class="col-sm-2 control-label">Add a theme</label>
				<div class="col-sm-10">
					<div class="input-group">
						<input type="text" class="form-control" placeholder="Select a theme zip file">
						<span class="input-group-btn">
							<button class="btn btn-primary" type="button">Upload</button>
						</span>
					</div>
					<span class="help-block m-b-none">Upload a theme you've got on your computer.</span>

					<div class="line line-dashed line-lg pull-in"></div>
					<div class="input-group">
						<input type="text" class="form-control" placeholder="">
						<span class="input-group-btn">
							<button class="btn btn-primary" type="button">Browse</button>
						</span>
					</div>
					<span class="help-block m-b-none">We've got a lot of themes already available.</span>

					<div class="line line-dashed line-lg pull-in"></div>

					<div class="input-group m-b">
						<span class="input-group-addon">@</span>
						<input type="text" class="form-control" placeholder="github repo">
						<span class="input-group-btn">
							<button class="btn btn-primary" type="button">Pull Repo</button>
						</span>
					</div>
					<span class="help-block m-b-none">We can grab a theme from github.</span>


				</div>
			</div>

		</form>
	</div>

	<header class="panel-heading font-bold">
		Plugins
	</header>

	<div class="panel-body">
		<form class="form-horizontal" method="get">
			<div class="form-group">
				<label class="col-sm-2 control-label">Add Plugins</label>
				<div class="col-sm-10">

					<p class="h4">4 Plugins to install:</p>
					<table class="table table-striped">
						<tbody>
							<tr>
								<td style="padding:25px 10px;">
									<p class="h5"><a href="#">Jeckpack by Wordpress.com</a></p>
								</td>
								<td style="padding:25px 0;">
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
												<img src="{{ urlbase }}/todo/images/avatar.jpg">
											</span> Josh Hartman
											</a>
										</div>
										<div class="plugin-contributor-links">2 plugins
										</div>
									</div>
								</td>
								<td class="text-center v-middle"  style="padding:25px 0;  width:100px;">
									<span href="" class="label label-danger"><i class="icon-remove"></i></span>
								</td>
							</tr>
							<tr>
								<td style="padding:25px 10px;">
									<p class="h5"><a href="#">WordPress Flash Uploader</a></p>
								</td>
								<td style="padding:25px 0;">
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
												<img src="{{ urlbase }}/todo/images/avatar.jpg">
											</span> Josh Hartman
											</a>
										</div>
										<div class="plugin-contributor-links">2 plugins
										</div>
									</div>
								</td>								
								<td class="text-center v-middle"  style="padding:25px 0;">
									<span href="" class="label label-danger"><i class="icon-remove"></i></span>
								</td>
							</tr>
							<tr>
								<td style="padding:25px 10px;">
									<p class="h5"><a href="#">Require Post Category</a></p>
								</td>
								<td style="padding:25px 0;">
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
												<img src="{{ urlbase }}/todo/images/avatar.jpg">
											</span> Josh Hartman
											</a>
										</div>
										<div class="plugin-contributor-links">2 plugins
										</div>
									</div>
								</td>								
								<td class="text-center v-middle"  style="padding:25px 0;">
									<span href="" class="label label-danger"><i class="icon-remove"></i></span>
								</td>
							</tr>
							<tr>
								<td style="padding:25px 10px;">
									<p class="h5"><a href="#">Dashboard Commander</a></p>
								</td>
								<td style="padding:25px 0;">
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
												<img src="{{ urlbase }}/todo/images/avatar.jpg">
											</span> Josh Hartman
											</a>
										</div>
										<div class="plugin-contributor-links">2 plugins
										</div>
									</div>
								</td>								
								<td class="text-center v-middle"  style="padding:25px 0;">
									<span href="" class="label label-danger"><i class="icon-remove"></i></span>
								</td>
							</tr>														
						</tbody>
					</table>
					

					<div class="line line-dashed line-lg pull-in"></div>

						<div class="input-group">
                      		<input type="text" class="form-control rounded" placeholder="Search WordPress Plugins">    
                      		<span class="input-group-btn">
                      			<button class="btn btn-primary" type="button">Search</button>
                      		</span>
                      	</div>

					
					<div class="line line-dashed line-lg pull-in"></div>

					<div class="input-group">
						<input type="text" class="form-control" placeholder="Select a theme zip file">
						<span class="input-group-btn">
							<button class="btn btn-primary" type="button">Upload</button>
						</span>
					</div>
					<span class="help-block m-b-none">Upload a theme you've got on your computer.</span>

					<div class="line line-dashed line-lg pull-in"></div>
					<div class="input-group">
						<input type="text" class="form-control" placeholder="">
						<span class="input-group-btn">
							<button class="btn btn-primary" type="button">Browse</button>
						</span>
					</div>
					<span class="help-block m-b-none">We've got a lot of themes already available.</span>

					<div class="line line-dashed line-lg pull-in"></div>

					<div class="input-group m-b">
						<span class="input-group-addon">@</span>
						<input type="text" class="form-control" placeholder="github repo">
						<span class="input-group-btn">
							<button class="btn btn-primary" type="button">Pull Repo</button>
						</span>
					</div>
					<span class="help-block m-b-none">We can grab a theme from github.</span>


				</div>
			</div>

		</form>
	</div>
</section>


<header class="wrapper">
	<p class="h3">Database</p>
</header>


<section class="panel no-border">
  <header class="panel-heading font-bold">
    Upload or migrate a database
  </header>

    <div class="panel-body">
	    <form class="form-horizontal" method="get">
	      <div class="form-group">
	        <label class="col-sm-2 control-label">Upload</label>
	        <div class="col-sm-10">
	        	<div class="input-group">
	        		<input type="text" class="form-control" placeholder="Select a database .xml or .sql file">
	        		<span class="input-group-btn">
	        			<button class="btn btn-primary" type="button">Upload</button>
	        		</span>
	        	</div>
	        </div>
	      </div>

	     <div class="form-group">
	        <label class="col-sm-2 control-label">old url</label>
	        <div class="col-sm-10">
	        	<input type="text" class="form-control" placeholder="enter the old url in your .sql file">
	        	<span class="help-block m-b-none">This will find and replace old url's in your .sql file</span>
	        </div>
	      </div> 

	    </form>
	</div>
</section>




<div class="form-group">
	<div class="col-sm-4 col-sm-offset-2">
		<button type="submit" class="btn btn-white">Cancel</button>
		<button type="submit" class="btn btn-primary">Save changes</button>
	</div>
</div>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

