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


    <header class="panel-heading font-bold">
    	WordPress Users
    	
	</header>

    <div class="panel-body">
		<table class="table table-striped">
			<tbody>
				<tr>
					<td>
						<span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
							<img src="/todo/images/avatar.jpg">
						</span> user.name
					</td>
					<td>
						administrator
					</td>
					<td>
						user.name@email.com
					</td>
					<td>
						<button class="btn btn-xs btn-white pull-right">
							change
						</button>
					</td>
				</tr>
					<tr>
					<td>
						<span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
							<img src="/todo/images/avatar.jpg">
						</span> user.name
					</td>
					<td>
						editor
					</td>
					<td>
						user.name@email.com
					</td>
					<td>
						<button class="btn btn-xs btn-white pull-right">
							change
						</button>
					</td>
				</tr>
				<tr>
					<td>
						<span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
							<img src="/todo/images/avatar.jpg">
						</span> user.name
					</td>
					<td>
						subscriber
					</td>
					<td>
						user.name@email.com
					</td>
					<td>
						<button class="btn btn-xs btn-white pull-right">
							change
						</button>
					</td>
				</tr>				
			</tbody>
		</table>
	</div>



{% endif %}
