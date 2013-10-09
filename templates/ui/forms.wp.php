
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
	{% include 'ui/forms/wp.setup.php' %}

	<!-- <div class="line line-dashed line-lg pull-in"></div> -->

	{% include 'ui/forms/wp.adminuser.php' %}


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
	{% include 'ui/forms/wp.theme.php' %}


	{% include 'ui/forms/wp.plugins.php' %}


</section>


<header class="wrapper">
	<p class="h3">Database</p>
</header>


<section class="panel no-border">
  {% include '/ui/forms/wp.database.php' %}
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

