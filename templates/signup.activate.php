{% include 'partials/header.php' %}


<section class="hbox stretch">

    {% include 'partials/nav.sidebar.php' %}

  <section id="content" class=" bg-white">
    <div class="wrapper">
        <div class="alert alert-success alert-block">
          <button type="button" class="close" data-dismiss="alert"><i class="icon-remove"></i></button>
          <h4><i class="icon-thumbs-up"></i>You're signed up!</h4>
          <p>Welcome to Sites.  You'll need to add your billing information before you can create a site. </p>
        </div>

          <section class="row">
            <section class="col-md-4">
                <div class="jumbotron text-center">
                    <span class="icon-stack icon-2x">
                      <i class="icon-circle text-info icon-stack-base"></i>
                      <i class="icon-credit-card icon-light"></i>
                  </span>       
                  <p class="h3">Account and Billing</p>
                  <p>You need to add your billing information before you can bootup a site.  Don't worry, it won't take long.</p>
                  <br>
                  <a href="#billingModal" class="btn btn-info btn-lg" data-toggle="modal">Get Started</a>
              </div>
            </section>
            
            <section class="col-md-4">
                <div class="jumbotron  text-center">
                <span class="icon-stack icon-2x">
                  <i class="icon-circle text-white icon-stack-base"></i>
                  <i class="icon-gear icon-dark"></i>
              </span>                
              <p class="h3">Customize WordPress</p>
              <p>Upload your go-to themes, most used plugins, and set the default WordPress options here. Lorem ipsum dolor sit.</p>
              <br>
                  <a href="{{baseurl}}/wordpress" class="btn btn-white btn-lg">My Wordpress</a>
              </div>
            </section>

            <section class="col-md-4">
                <div class="jumbotron text-center">
                    <span class="icon-stack icon-2x">
                      <i class="icon-circle text-white icon-stack-base"></i>
                      <i class="icon-cloud-upload icon-dark"></i>
                  </span>                      
                  <p class="h3">Create a Site</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, neque vero consectetur illo id!</p>
                  <br>
                  <a href="{{baseurl}}/sites/new" class="btn btn-white btn-lg">Create Site</a>
              </div>
          </section>
          </section>
    </div>
  </section><!-- content -->
</section>



{% include 'modals/modal.credit.card.html' %}



{% include 'partials/footer.php' %}