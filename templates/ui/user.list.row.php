<!-- <tr>
	<td style="width:150px;" class="v-middle text-center">
		<a class="thumb" href="#">
			<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle avatar pull-left">
			<span>User.name</span>
		</a>
	</td>
	<td>
		{% if managed == 'true' %}
			<a href="#">
				<span class="m-b-xs h5 block">mymanagedsite.com</span>
			</a>
		{% else %}
			<a href="#" class="m-b block h5">mymanagedsite.com</a>
			<a href="#" class="m-b block h5">mymanagedsite.com</a>
			<a href="#" class="m-b block h5">mymanagedsite.com</a>
			<a href="#" class="m-b block h5">mymanagedsite.com</a>
		{% endif %}
	</td>
	<td><small class="text-muted"><i class="icon-ok"></i> Billing</small></td>
	<td class="text-center">
		<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-edit"></i> Edit</a>
		<a href="#" class="btn btn-white btn-sm"><i class="icon-remove-sign"></i> Remove</a>
	</td>
</tr> -->

<section class="hbox stretch">
	<section class="col-lg-1 v-middle text-center hidden-sm hidden-xs">
		
			<a class="thumb" href="#">
				<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle avatar">
			</a>
	</section>
		<section class="col-lg-2 v-middle hidden-sm hidden-xs">
			<a class="h4">
				User.name
			</a>
		</section>

	<section class="siteinfo">
		<div class="hbox stretch">
			<section class="overview v-middle">
					<div class="row">
						{% if managed == 'true' %}
							<div class="col-xs-4">
								<a href="#">
									<span class="m-b-xs h5 block">mymanagedsite.com</span>
								</a>
							</div>

							<div class="col-xs-4">
								<a href="#">
									<small class="text-muted"><i class="icon-ok"></i> Billing</small>
								</a>
							</div>
						{% else %}
							<div class="col-xs-4">
								<a href="#" class="m-b block h5">mymanagedsite.com</a>
								<a href="#" class="m-b block h5">mymanagedsite.com</a>
								<a href="#" class="m-b block h5">mymanagedsite.com</a>
								<a href="#" class="m-b block h5">mymanagedsite.com</a>
							
							</div>

							<div class="col-xs-4">
								<a href="#">
									<small class="text-muted"><i class="icon-ok"></i> Billing</small>
								</a>
							</div>
						{% endif %}
						
					</div>

			</section>
			<section class="col-lg-3 options v-middle">
				<div class="pull-right">
					<a href="{{ baseurl }}/sites/mysite" class="btn btn-white btn-sm"><i class="icon-edit"></i> Edit</a>
					<a href="#" class="btn btn-white btn-sm"><i class="icon-remove-sign"></i> Remove</a>
				</div>

			</section>
		</div>
	</section>

</section>
