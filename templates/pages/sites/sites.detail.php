{% include 'partials/header.php' %}

{% include 'elements/global.header.php' %}

<section class="hbox stretch">

	{% include 'pages/sites/nav.sidebar.php' %}

	<section id="content" class="">
		<section class="vbox">
			<section class="scrollable">
				<section class="panel m-n bg-light">
					<table class="table m-n">
						<tbody>
							<tr>
								<td class="aside-lg text-center padder-n" style="padding:0;">
									<div style="height:100px; overflow:hidden;">
										<img src="{{ baseurl }}/images/screenshot1.png" style="display:block; width:100%; height:auto; margin:0 auto; position:relative; top:-50px">
									</div>

								</td>
								<td width="400" class="v-middle">
									<p class="h3">MyAwesomeSite.com</p>
									<p class="clearfix">
										<span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
											<img src="/todo/images/avatar.jpg">
										</span> 
										user.name
									</p>
								</td>
								<td class="v-middle">
									<small class="text-uc text-xs text-muted">Monthly Usage</small>
									<div class="progress progress-xs progress-striped active m-t-sm ">
										<div class="progress-bar progress-bar-info" data-toggle="tooltip" data-original-title="32.5%" style="width: 32.5%"></div>
									</div>
								</td>
								<td width="300" class="v-middle">
									<div class="btn-group btn-group-justified m-b">
										<a class="btn btn-success btn-rounded active"  data-toggle="button">
											<span class="text">
												<i class="icon-cloud-upload"></i> Live
											</span>
											<span class="text-active">
												<i class="icon-ok"></i> Live
											</span>
										</a>
										<a class="btn btn-default btn-rounded" data-toggle="button">
											<span class="text">
												<i class="icon-eye-open"></i> Priavate
											</span>
											<span class="text-active">
												<i class="icon-eye-open"></i> Priavate
											</span>
										</a>

									</div>   									
								</td>
							</tr>
						</tbody>
					</table>

					<div class="row hidden">
						<div class="col-md-1">
							<img src="{{ baseurl }}/todo/images/screenshot.png" style="display:block; width:100%; height:auto;">

						</div>
						<div class="col-md-6">

							<p class="h3">MyAwesomeSite.com</p>
							<div>
								<p class="clearfix"><span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
									<img src="/todo/images/avatar.jpg">
								</span> user.name</p>
								<div class="line"></div>


								<heading>
									<small class="text-uc text-xs text-muted">Plan</small>
									<a href="#" class="label label-success pull-right">change</a>
								</heading>

								<div class="panel no-border no-shadow m-t-sm bg-light lter" style="box-shadow:none;">
									<div class="row">
										<div class="col-xs-4">
											<a href="#">
												<span class="m-b-xs h4 block">$19</span>
												<small class="text-muted">monthly</small>
											</a>
										</div>
										<div class="col-xs-4">
											<a href="#">
												<span class="m-b-xs h4 block">10k</span>
												<small class="text-muted">Visits</small>
											</a>
										</div>
										<div class="col-xs-4">
											<a href="#">
												<span class="m-b-xs h4 block">20gb</span>
												<small class="text-muted">Traffic</small>
											</a>
										</div>
									</div>
								</div>
								<div class="line"></div>

								<small class="text-uc text-xs text-muted">Monthly Usage</small>
								<div class="progress progress-xs progress-striped active m-t-sm ">
									<div class="progress-bar progress-bar-info" data-toggle="tooltip" data-original-title="32.5%" style="width: 32.5%"></div>
								</div>
								<div class="line"></div>
							</div>

						</div>
						<div class="col-md-4">

							<div class="btn-group btn-group-justified m-b">
								<a class="btn btn-success btn-rounded active"  data-toggle="button">
									<span class="text">
										<i class="icon-cloud-upload"></i> Live
									</span>
									<span class="text-active">
										<i class="icon-ok"></i> Live
									</span>
								</a>
								<a class="btn btn-default btn-rounded" data-toggle="button">
									<span class="text">
										<i class="icon-eye-open"></i> Priavate
									</span>
									<span class="text-active">
										<i class="icon-eye-open"></i> Priavate
									</span>
								</a>

							</div>   

						</div>
					</div>
				</section>
				<section class="hbox stretch">
					{% include 'elements/site.sidebar.php' %}

					<aside class="bg-white">

					<!-- 	                <header class="header">
	                  <ul class="nav nav-tabs nav-white bg-light bg-gradient">
	                    <li class="active"><a href="#activity" data-toggle="tab">WordPress</a></li>
	                    <li class=""><a href="#activity" data-toggle="tab">Backups</a></li>
	                    <li class=""><a href="#activity" data-toggle="tab">DNS</a></li>
	                    <li class=""><a href="#activity" data-toggle="tab">Email</a></li>
	                    <li class=""><a href="#events" data-toggle="tab">Users</a></li>
	                    <li class=""><a href="#interaction" data-toggle="tab">Billing</a></li>
	                  </ul>
	              </header> -->
	              <section class="scrollable">
	              	<div class="tab-content">
	              		<div class="tab-pane active" id="account">
	              			<div class="wrapper">


	              				<section class="panel no-border">
									<header class="panel-heading">
										<span class="label bg-danger pull-right">4 left</span>
										This Month - Basic Plan
									</header>
									<table class="table table-striped m-b-none">
										<thead>
											<tr>
												<th width="200">Item</th>
												<th width="200">Amount per month</th>   
												<th>used</th>                 
												<th width="120"></th>
											</tr>
										</thead>
										<tbody>
											<tr>                    
												<td>Visits</td>
												<td>10k</td>
												<td>
													<span class="pull-left m-r">5k</span>
													<div class="progress progress-sm progress-striped active m-t-xs m-b-none">
														<div class="progress-bar progress-bar-success" data-toggle="tooltip" data-original-title="80%" style="width: 80%"></div>
													</div>
												</td>
												<td class="text-center">
													<div class="btn-group">
														<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-pencil"></i></a>
														<ul class="dropdown-menu pull-right">
															<li><a href="#">Action</a></li>
															<li><a href="#">Another action</a></li>
															<li><a href="#">Something else here</a></li>
															<li class="divider"></li>
															<li><a href="#">Separated link</a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>                    
												<td>Traffic</td>
												<td>20gb</td>
												<td>
													<span class="pull-left m-r">7gb</span>
													<div class="progress progress-xs m-t-xs m-b-none">
														<div class="progress-bar progress-bar-info" data-toggle="tooltip" data-original-title="40%" style="width: 40%"></div>
													</div>
												</td>												
												<td class="text-center">
													<div class="btn-group">
														<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-pencil"></i></a>
														<ul class="dropdown-menu pull-right">
															<li><a href="#">Action</a></li>
															<li><a href="#">Another action</a></li>
															<li><a href="#">Something else here</a></li>
															<li class="divider"></li>
															<li><a href="#">Separated link</a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>                    
												<td>Storage</td>
												<td>10gb</td>
												<td>
													<span class="pull-left m-r">2gb</span>
													<div class="progress progress-xs m-t-xs m-b-none">
														<div class="progress-bar progress-bar-warning" data-toggle="tooltip" data-original-title="20%" style="width: 20%"></div>
													</div>
												</td>												
												<td class="text-center">
													<div class="btn-group">
														<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-pencil"></i></a>
														<ul class="dropdown-menu pull-right">
															<li><a href="#">Action</a></li>
															<li><a href="#">Another action</a></li>
															<li><a href="#">Something else here</a></li>
															<li class="divider"></li>
															<li><a href="#">Separated link</a></li>
														</ul>
													</div>
												</td>
											</tr>
											
										</tbody>
									</table>
	              				</section>

	              				<div class="alert alert-success">
	              					<p class="h4">Your current billing period ends on 08/16/13</p>
	              				</div>

<br>
				<div class="line line-dashed line-lg pull-in"></div>
<br>

								<section class="panel no-border">
									<header class="panel-heading">
										Invoices
									</header>
									<table class="table table-striped text-sm">
										<thead>
											<tr>
												<th>date</th>
												<th>plan</th>
												<th>amount</th>
												<th>paid</th>
												<th width="120">download pdf</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>07/16/13</td>
												<td>Basic</td>
												<td>$19.99</td>
												<td class="text-success"><i class="icon-ok"></i> 07/18/13</td>
												<td class="text-center"><i class="icon-file"></i></td>
											</tr>
											<tr>
												<td>07/16/13</td>
												<td>Basic</td>
												<td>$19.99</td>
												<td class="text-success"><i class="icon-ok"></i> 07/18/13</td>
												<td class="text-center"><i class="icon-file"></i></td>
											</tr>
											<tr>
												<td>07/16/13</td>
												<td>Basic</td>
												<td>$19.99</td>
												<td class="text-success"><i class="icon-ok"></i> 07/18/13</td>
												<td class="text-center"><i class="icon-file"></i></td>
											</tr>
											<tr>
												<td>07/16/13</td>
												<td>Basic</td>
												<td>$19.99</td>
												<td class="text-success"><i class="icon-ok"></i> 07/18/13</td>
												<td class="text-center"><i class="icon-file"></i></td>
											</tr>

										</tbody>
									</table>
								</section>
				<br>
				<div class="line line-dashed line-lg pull-in"></div>
				<br>

								<section class="panel no-border">
									<header class="panel-heading">
										Users managing this account
									</header>
									<table class="table table-striped text-sm">
										<thead>
											<tr>
												<th width="300">user</th>
												<th>role</th>   
												<th width="120"></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
														<img src="/todo/images/avatar.jpg">
													</span> user.name@email.com
												</td>
												<td>
													manager
												</td>

												<td class="text-center">
													<a href="#" class=""><i class="icon-remove"></i></a>
												</td>
											</tr>
											<tr>
												<td>
													<span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
														<img src="/todo/images/avatar.jpg">
													</span> user.name@email.com
												</td>
												<td>
													manager
												</td>
												<td class="text-center">
													<a href="#" class=""><i class="icon-remove icon-white"></i></a>
												</td>
											</tr>
											<tr>
												<td>
													<span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
														<img src="/todo/images/avatar.jpg">
													</span> user.name@email.com
												</td>
												<td>
													manager
												</td>
	
												<td class="text-center">
													<a href="#" class=""><i class="icon-remove white"></i></a>
												</td>
											</tr>		

										</tbody>
									</table>
									<br>
									<div class="clearfix">
										<a href="#" class="btn btn-sm btn-primary pull-right"><i class="icon-plus"></i> Add User</a>
									</div>
									<br>
								</section>								

	              				



	              			</div>
	              		</div>
	              		<div class="tab-pane " id="activity">
	              			<section class="panel no-border">
	              				{% set detail = 'true' %}

	              				{% include 'ui/forms/wp.setup.php' %}

	              				{% include 'ui/forms/wp.adminuser.php' %}

	              				{% include '/ui/forms/wp.database.php' %}

	              				{% include '/ui/forms/wp.plugins.php' %}

	              				{% include '/ui/forms/wp.theme.php' %}								
	              			</section>
	              		</div>
	              				<div class="tab-pane" id="events">
	              					<div class="text-center wrapper">
	              						<i class="icon-spinner icon-spin icon-large"></i>
	              					</div>
	              				</div>
	              				<div class="tab-pane" id="interaction">
	              					<div class="text-center wrapper">
	              						<i class="icon-spinner icon-spin icon-large"></i>
	              					</div>
	              				</div>
	              			</div>
	              		</section>
	              	</aside>

	              </section>
	        </section>
      </section>
      <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen" data-target="#nav"></a>
	</section><!-- content -->
</section>


{% include 'partials/footer.php' %}