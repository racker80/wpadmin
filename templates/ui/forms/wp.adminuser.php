{% if not detail == 'true' %}
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
{% else %}


    <header class="header font-bold">
    	WordPress Users
    	
	</header>

    <div class="panel-body">

		{% include 'patterns/list/users/list.wordpress.html' %}
	</div>



{% endif %}
