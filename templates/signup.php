{% include 'partials/header.php' %}


<!-- <section class="hbox stretch">
    <section class="scrollable">
        <section class="v-middle">
        <a href="{{baseurl}}/templates/modals/modal.lockme.html" data-toggle="ajaxModal" class="btn btn-sm btn-link m-r-n-xs pull-right">
            <i class="icon-off"></i>
          </a>
        </section>
    </section>
    
    
</section> -->
<section class="vbox stretch bg-dark">
  
  <section id="content" class="m-t-lg wrapper-md ">
    <div class="row m-n">
      <div class="col-md-4 col-md-offset-4 m-t-lg">
        <section class="">
          <a class="nav-brand" href="index.html">Sites</a>
          <p class="text-center">Create Your account!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, assumenda perspiciatis accusantium?</p>

          <form action="index.html" class="panel-body">
            <div class="form-group">
              <label class="control-label">Your email address</label>
              <input type="email" placeholder="test@example.com" class="form-control">
            </div>
            <div class="form-group">
              <label class="control-label">Type a password</label>
              <input type="password" id="inputPassword" placeholder="Password" class="form-control">
            </div>
            <div class="form-group">
              <label class="control-label">One more time, just for fun</label>
              <input type="password" id="inputPassword" placeholder="Password again, please" class="form-control">
            </div>            
            <div class="checkbox">
              <label>
                <input type="checkbox"> Agree the <a href="#">terms and policy</a>
              </label>
            </div>
            <a href="{{baseurl}}/signup/activate" class="btn btn-info btn-block">Sign up</a>
            <br>
            <div class="line line-dashed"></div>
            <br>
            <p class="text-muted text-center"><small>Already have an account?</small> <a href="{{baseurl}}" class=""><span class="text-info">Sign in</span></a></p>
            
          </form>
        </section>
      </div>
    </div>
  </section>
</section>



{% include 'partials/footer.php' %}