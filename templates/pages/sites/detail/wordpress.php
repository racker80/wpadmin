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

<br>
<div class="line line-dashed line-lg pull-in"></div>
<br>

	<div class="wrapper">
	{% include 'ui/forms/wp.setup.php' %}
	</div>

<br>
<div class="line line-dashed line-lg pull-in"></div>
<br>

	<div class="wrapper">
			{% include 'ui/forms/wp.adminuser.php' %}
	</div>

<br>
<div class="line line-dashed line-lg pull-in"></div>
<br>

	<div class="wrapper">
	{% include '/ui/forms/wp.database.php' %}
	</div>

<br>
<div class="line line-dashed line-lg pull-in"></div>
<br>

	<div class="wrapper">
	{% include '/ui/forms/wp.plugins.php' %}
	</div>

<br>
<div class="line line-dashed line-lg pull-in"></div>
<br>

	<div class="wrapper">
	{% include '/ui/forms/wp.theme.php' %}								
	</div>

</section>