<section class="panel no-border">
			              				{% set detail = 'true' %}


			              				<div class="panel-body">
			              					<form class="form-horizontal" method="get">
			              						<div class="form-group">
			              							<label class="col-sm-2 control-label">Development Site</label>
			              							<div class="col-sm-10">
			              								<button class="btn btn-success"><i class="icon-beaker"></i> Create Development Site</button>
			              							</div>
			              						</div>
			              					</form>
			              				</div>



			              				{% include 'ui/forms/wp.setup.php' %}

			              				{% include 'ui/forms/wp.adminuser.php' %}

			              				{% include '/ui/forms/wp.database.php' %}

			              				{% include '/ui/forms/wp.plugins.php' %}

			              				{% include '/ui/forms/wp.theme.php' %}								
			              			</section>