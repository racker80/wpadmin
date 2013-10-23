{% include 'partials/header.php' %}


<section class="hbox stretch">

    {% include 'partials/nav.sidebar.php' %}

	<section id="content" class=" bg-white">

        <header class="header wrapper">
            <p class="h4 m-n">Your Account</p>
        </header>

        <div class="wrapper">

        	<section class="panel">
        		<header class="panel-heading font-bold">
        			User Info
        		</header>
        		<div class="panel-body">
        			<form class="form-horizontal" method="get">
        				<div class="form-group">

        					<label class="col-sm-2 control-label">email address</label>
        					<div class="col-sm-10">
        						<p class="form-control-static">email@example.com</p>
        					</div>

        				</div>
        				<div class="form-group">

        					<label class="col-sm-2 control-label">name</label>
        					<div class="col-sm-10">
        						<p class="form-control-static">First Lastname</p>
        					</div>

        				</div>        				
        				<div class="form-group">

        					<label class="col-sm-2 control-label">username</label>
        					<div class="col-sm-10">
        						<p class="form-control-static">myusername42</p>
        					</div>

        				</div>        				
        				<div class="form-group">

        					<label class="col-sm-2 control-label">image</label>
        					<div class="col-sm-10">
        						<p class="form-control-static"><i class="icon-image"></i></p>
        					</div>

        				</div>        				
     				


        			</form>
        		</div>
        	</section>        	

        	<section class="panel">
        		<header class="panel-heading font-bold">
        			Billing
        		</header>
        		<div class="panel-body">
        			<form class="form-horizontal" method="get">
        				<div class="form-group">

        					<label class="col-sm-2 control-label">Credit Card</label>
        					<div class="col-sm-10">
        						<p class="form-control-static">card ending in 1234</p>
        						<p class="form-control-static">expires 10/14</p>
        					</div>

        				</div>
        			</form>
        		</div>
        	</section>

        	<section class="panel">
        		<header class="panel-heading font-bold">
        			Account Managers
        		</header>
        		<div class="panel-body">
        			{% include 'patterns/list/users/list.site.detail.html' %}
        		</div>
        	</section>        	
            
        </div>
        
        <div class="line line-dashed line-lg pull-in"></div>
        
	</section><!-- content -->
</section>


{% include 'partials/footer.php' %}