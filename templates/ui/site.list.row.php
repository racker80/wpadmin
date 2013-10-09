<tr>
	<td class="text-center v-middle">
		{% if status == 'dev' %}
			<span class="icon-stack">
				<i class="icon-circle text-warning icon-stack-base"></i>
				<i class="icon-beaker icon-light"></i>
			</span>	
		{% elseif status == 'preview' %}
			<span class="icon-stack">
				<i class="icon-circle text-primary icon-stack-base"></i>
				<i class="icon-eye-open icon-light"></i>
			</span>
		{% elseif status == 'down' %}
			<span class="icon-stack">
				<i class="icon-circle text-danger icon-stack-base"></i>
				<i class="icon-fire icon-light"></i>
			</span>
		{% else %}			
			<span class="icon-stack">
				<i class="icon-circle text-success icon-stack-base"></i>
				<i class="icon-ok icon-light"></i>
			</span>
		{% endif %}

	</td>

	<td class="v-middle">
		<a class="thumb-sm">
				<img src="{{ baseurl }}/todo/images/screenshot.png">
			</a>
		<a href="{{ baseurl }}/sites/mysite">Myawesomesite.com</a>
	</td>

	<td class="text-right v-middle">
		{% if status == 'dev' %}
			<a href="#" class="btn btn-success btn-sm"><i class="icon-cloud-upload"></i> Go Live</a>
			<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-edit"></i> Configure</a>
		{% elseif status == 'down' %}
			<a href="#" class="btn btn-danger btn-sm"><i class="icon-remove-sign"></i> Cancel Delete</a>
		{% elseif status == 'preview' %}
			<a href="#" class="btn btn-success btn-sm"><i class="icon-cloud-upload"></i> Go Live</a>
			<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-edit"></i> Configure</a>
		{% else %}
			<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-edit"></i> Configure</a>
		{% endif %}

	</td>
</tr>


<section class="hbox stretch hidden">
	{% if managed == 'true' %}
	<section class="meida text-center v-middle col-lg-1">
		<a class="thumb-sm text-uc text-xs text-muted" href="#" style="position:relative; top:5px;">
			<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle" style="display:block; margin:0 auto;">
			Username
		</a>
	</section>
	{% endif %}
	<section class="col-lg-1 v-middle text-center hidden-sm hidden-xs">
		{% if status == 'dev' %}
			<span class="icon-stack">
				<i class="icon-circle text-warning icon-stack-base"></i>
				<i class="icon-beaker icon-light"></i>
			</span>	
		{% elseif status == 'preview' %}
			<span class="icon-stack">
				<i class="icon-circle text-primary icon-stack-base"></i>
				<i class="icon-eye-open icon-light"></i>
			</span>
		{% elseif status == 'down' %}
			<span class="icon-stack">
				<i class="icon-circle text-danger icon-stack-base"></i>
				<i class="icon-fire icon-light"></i>
			</span>
		{% else %}			
			<span class="icon-stack">
				<i class="icon-circle text-success icon-stack-base"></i>
				<i class="icon-ok icon-light"></i>
			</span>
		{% endif %}
	</section>
		<section class="col-lg-1 v-top text-center hidden-sm hidden-xs">
			<a class="thumb-md">
				<img src="{{ baseurl }}/todo/images/screenshot.png">
			</a>
		</section>

	<section class="siteinfo">
		<div class="hbox stretch">
			<section class="overview">
				<div class="m-l">
					<a href="{{ baseurl }}/sites/mysite" class="h4">Myawesomesite.com</a>
					<div class="row m-t">
						<div class="col-lg-4">

							<small class="text-uc text-xs text-muted">theme</small><br><em>My Sweet Theme</em>
						</div>
						<div class="col-lg-4"><small class="text-uc text-xs text-muted">backup</small><br><em>Yesterday at 5:00pm</em></div>
						<div class="col-lg-4">
							<small class="text-uc text-xs text-muted">monthly usage</small><br>
							<div class="progress progress-xs progress-striped active m-b-sm">
								<div class="progress-bar progress-bar-info" data-toggle="tooltip" data-original-title="32.5%" style="width: 32.5%"></div>
							</div>
						</div>
					</div>

					
				</div>

			</section>
			<section class="col-lg-3 options v-middle">
				{% if status == 'dev' %}
				<div class="pull-right">
					<a href="#" class="btn btn-success btn-sm"><i class="icon-cloud-upload"></i> Go Live</a>
					<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-edit"></i> Configure</a>
				</div>
				{% elseif status == 'down' %}
				<div class="pull-right">
					<a href="#" class="btn btn-danger btn-sm"><i class="icon-remove-sign"></i> Cancel Delete</a>
				</div>
				{% elseif status == 'preview' %}
				<div class="pull-right">
					<a href="#" class="btn btn-success btn-sm"><i class="icon-cloud-upload"></i> Go Live</a>
					<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-edit"></i> Configure</a>
				</div>
				{% else %}
				<div class="pull-right">
					<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-edit"></i> Configure</a>
				</div>
				{% endif %}

			</section>
		</div>
	</section>

</section>

<section class="row hidden">
	<div class="col-lg-1 text-center">
		{% if status == 'dev' %}
			<span class="icon-stack icon-2x">
				<i class="icon-circle text-warning icon-stack-base"></i>
				<i class="icon-beaker icon-light"></i>
			</span>	
		{% elseif status == 'preview' %}
			<span class="icon-stack icon-2x">
				<i class="icon-circle text-primary icon-stack-base"></i>
				<i class="icon-eye-open icon-light"></i>
			</span>
		{% elseif status == 'down' %}
			<span class="icon-stack icon-2x">
				<i class="icon-circle text-danger icon-stack-base"></i>
				<i class="icon-fire icon-light"></i>
			</span>
		{% else %}			
			<span class="icon-stack icon-2x">
				<i class="icon-circle text-success icon-stack-base"></i>
				<i class="icon-ok icon-light"></i>
			</span>
		{% endif %}
		
	</div>
	<div class="col-lg-8">
		<div class="panel lter no-borders" style="background:transparent;  box-shadow:none;">
			<div class="panel-body">
				<a href="{{ baseurl }}/sites/mysite" class="h3">Myawesomesite.com</a>
				{% if managed == 'true' %}
				<br><br>
					<div class="meida">
						<a class="pull-left thumb-sm" href="#">
							<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle avatar">
						</a>
						<div class="media-body">
							owned by: <a href="#">Username</a>
						</div>
					</div>
				{% endif %}

			</div>
			<div class="panel-footer" style="background:transparent; border-top:1px solid #eaeaea">
				<div class="row">
					<div class="col-lg-4">
						<a class="pull-left thumb m-t-xs" style="margin:0 10px 0 0;">
							<img src="{{ baseurl }}/todo/images/screenshot.png">
						</a>
						Theme:<br><em>My Sweet Theme</em>
					</div>
					<div class="col-lg-4">Last Backup:<br><em>Yesterday at 5:00pm</em></div>
					<div class="col-lg-4">
						Monthly Usage:<br>
						<div class="progress progress-xs progress-striped active m-b-sm">
							<div class="progress-bar progress-bar-info" data-toggle="tooltip" data-original-title="32.5%" style="width: 32.5%"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-lg-3">
		
		
	</div>
</section>