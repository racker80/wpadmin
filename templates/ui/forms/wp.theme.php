{% if not detail == 'true' %}
<header class="panel-heading font-bold">
	Theme
</header>

<div class="panel-body">
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

	<form class="form-horizontal" method="get">
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
{% else %}
<header class="panel-heading font-bold">
	Theme
</header>

<div class="panel-body">
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
			<a href="#" class="btn btn-info">Change Theme <i class="icon-mail-forward"></i></a>
		</div>
	</div>	
</div>
{% endif %}