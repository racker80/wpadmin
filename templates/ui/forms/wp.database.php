{% if not detail == 'true' %}
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
{% else %}

<header class="panel-heading font-bold">
	Manage your Database
</header>

<div class="panel-body">
	<table class="table table-striped text-sm">
		<thead>
			<tr>
				<td></td>
				<td>db name</td>
				<td>username</td>
				<td>password</td>
				<td>last backup</td>
				<td>next backup</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i class="icon-hdd"></i></td>
				<td>wpdb</td>
				<td>dbusername</td>
				<td>****** <span class="label label-default">show</span></td>
				<td class="text-success"><i class="icon-ok"></i> yesterday @ 2:33pm</td>
				<td><i class="icon-ok"></i> tomorrow @ 2:33pm</td>
			</tr>
		</tbody>
	</table>
	<a href="#" class="btn btn-white"><i class="icon-cloud-download"></i> Download DB</a>
	<a href="#" class="btn btn-white"><i class="icon-mail-reply-all"></i> Backup Now</a>
	<a href="#" class="btn btn-white"><i class="icon-cloud-upload"></i> Migrate DB</a>

</div>

{% endif %}

