<div class="wrapper">
	<div class="panel">
		<header class="panel-heading"><p class="h3">Select a plan</p></header>
		<div class="panel-body no-padder bg-dark lter">
			<section class="hbox stretch">
				<section>
					<div class="wrapper">
						<h4>Plan Number One</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, beatae saepe nisi dicta labore cum ad molestias magnam esse tempore.</p>
						<ul class="">
							<li>20gb Storage</li>
							<li>20k Traffic</li>
							<li class="lead">$19.99 / mo</li>
						</ul>
						<form class="form-inline">
							<div class="radio m-l-xs m-r-xs">
								<label>
									<input type="radio">
								</label>
							</div>
							<button type="submit" class="btn btn-white">Select Plan</button>
						</form>
					</div>
				</section>
				<section class="bg-success">
					<div class="wrapper">
						<h4>Most Popular Plan</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, beatae saepe nisi dicta labore cum ad molestias magnam esse tempore.</p>
						<ul class="">
							<li>20gb Storage</li>
							<li>20k Traffic</li>
							<li class="lead">$19.99 / mo</li>
						</ul>	
						<form class="form-inline">
							<div class="radio m-l-xs m-r-xs">
								<label>
									<input type="radio">
								</label>
							</div>
							<button type="submit" class="btn btn-white">Select Plan</button>
						</form>
						
					</div>
				</section>
				<section>
					<div class="wrapper">
						<h4>Bigger Plan</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, beatae saepe nisi dicta labore cum ad molestias magnam esse tempore.</p>
						<ul class="">
							<li>20gb Storage</li>
							<li>20k Traffic</li>
							<li class="lead">$19.99 / mo</li>
						</ul>
						<form class="form-inline">
							<div class="radio m-l-xs m-r-xs">
								<label>
									<input type="radio">
								</label>
							</div>
							<button type="submit" class="btn btn-white">Select Plan</button>
						</form>
					</div>
				</section>
				<section>
					<div class="wrapper">
						<h4>Enterprise Plan</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, beatae saepe nisi dicta labore cum ad molestias magnam esse tempore.</p>
						<ul class="">
							<li>20gb Storage</li>
							<li>20k Traffic</li>
							<li class="lead">$19.99 / mo</li>
						</ul>
						<form class="form-inline">
							<div class="radio m-l-xs m-r-xs">
								<label>
									<input type="radio">
								</label>
							</div>
							<button type="submit" class="btn btn-white">Select Plan</button>
						</form>
					</div>
				</section>
			</section>			
		</div>


	</div>



	<div class="panel">
		<header class="panel-heading"><p class="h3">Basic Setup</p></header>
		<div class="panel-body">
				{% include 'ui/forms/wp.setup.php' %}
		</div>
	</div>



	<div class="panel">
		<header class="panel-heading"><p class="h3">Advanced Setup</p></header>
		<div class="panel-body">

			<form class="form-horizontal" method="get">
				<div class="form-group">
					<label class="col-sm-2 control-label">Settings</label>
					<div class="col-sm-10">
						<div class="checkbox">
							<label>
								<input type="checkbox" value="" checked="checked">
								You are using your <strong>default wordpress settings</strong>.
							</label><br>
							You can edit or configure those settings <a href="{{baseurl}}/wordpress" class="text-info u"><span class="text-info text-underline">here</span></a>
						</div>	      		
											
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">Advanced Setup</label>
					<div class="col-sm-10">
						<div class="checkbox">
							<label>
								<input type="checkbox" value="">
								Setup custom themes, plugins, users, import a database and other advanced options.
							</label><br>
						</div>	      		
											
					</div>
				</div>	
			</form>

			
		</div>
	</div>

	<div class="wrapper text-center bg-success lter">
		<p class="lead m-n">
			<a href="#" class="text-danger"><i class="icon-trash"></i> cancel</a> 
		<button class="btn btn-white btn-lg m-l">Create Site</button>		
		</p>
	</div>

	
</div>
