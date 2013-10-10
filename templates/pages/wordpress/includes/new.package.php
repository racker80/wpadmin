<div class="row">
     <div class="col-md-6">
          <input type="text" name="account" class="form-control m-b" placeholder="Package Title">


          <section class="panel">
               <header class="panel-heading text-right bg-light">
                    <ul class="nav nav-tabs">
                         <li class=""><a href="#bundles" data-toggle="tab"><i class="icon-comments text-default"></i> Theme</a></li>
                         <li class="active"><a href="#bundles" data-toggle="tab"><i class="icon-comments text-default"></i> Bundles</a></li>
                         <li><a href="#plugins" data-toggle="tab"><i class="icon-user text-default"></i>Plugins</a></li>
                         <li><a href="#settings" data-toggle="tab"><i class="icon-user text-default"></i>Settings</a></li>
                    </ul>
                    <span class="hidden-sm"> </span>
               </header>
               <div class="panel-body m-n no-padder">
                    <div class="tab-content">              
                         <div class="tab-pane active" id="bundles">
                              
                              <div class="table-responsive">
                                   <table class="table table-striped b-t m-n text-sm">
                                        <thead>
                                             <tr>
                                                  <th width="20"><input type="checkbox"></th>
                                                  <th class="th-sortable" data-toggle="class">Bundle Name
                                                       <span class="th-sort">
                                                            <i class="icon-sort-down text"></i>
                                                            <i class="icon-sort-up text-active"></i>
                                                            <i class="icon-sort"></i>
                                                       </span>
                                                  </th>
                                                  <th>plugins</th>
                                                  <th width="30"></th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr>
                                                  <td><input type="checkbox" name="post[]" value="2"></td>
                                                  <td>Default Bundle</td>
                                                  <td>6</td>
                                                  <td>
                                                       <a href="#" class="active" data-toggle="class"><i class="icon-plus text-success text-active"></i><i class="icon-remove text-danger text"></i></a>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td><input type="checkbox" name="post[]" value="2"></td>
                                                  <td>Security</td>
                                                  <td>4</td>
                                                  <td>
                                                       <a href="#" class="active" data-toggle="class"><i class="icon-plus text-success text-active"></i><i class="icon-remove text-danger text"></i></a>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td><input type="checkbox" name="post[]" value="2"></td>
                                                  <td>Buddy Press</td>
                                                  <td>1</td>
                                                  <td>
                                                       <a href="#" class="active" data-toggle="class"><i class="icon-plus text-success text-active"></i><i class="icon-remove text-danger text"></i></a>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td><input type="checkbox" name="post[]" value="2"></td>
                                                  <td>Awesome Bundle</td>
                                                  <td>1</td>
                                                  <td>
                                                       <a href="#" class="active" data-toggle="class"><i class="icon-plus text-success text-active"></i><i class="icon-remove text-danger text"></i></a>
                                                  </td>
                                             </tr>      
                                             <tr>
                                                  <td><input type="checkbox" name="post[]" value="2"></td>
                                                  <td>email Bundle</td>
                                                  <td>1</td>
                                                  <td>
                                                       <a href="#" class="active" data-toggle="class"><i class="icon-plus text-success text-active"></i><i class="icon-remove text-danger text"></i></a>
                                                  </td>
                                             </tr>    
                                        </tbody>
                                   </table>
                              </div>

                              <footer class="panel-footer">
                                   <div class="row">
                                        <div class="col-sm-6 hidden-xs">
                                             <select class="input-sm form-control input-s-sm inline">
                                                  <option value="0">Bulk action</option>
                                                  <option value="1">Delete selected</option>
                                                  <option value="2">Bulk edit</option>
                                                  <option value="3">Export</option>
                                             </select>
                                             <button class="btn btn-sm btn-white">Add</button>                  
                                        </div>
                                        <div class="col-sm-4 text-center">
                                        </div>
                                        <div class="col-sm-4 text-right text-center-xs">                
                                             
                                        </div>
                                   </div>
                              </footer>                              

                         </div>
                         <div class="tab-pane fade  in" id="plugins">profile</div>
                         <div class="tab-pane fade" id="plugin-search">dropdown1</div>
                    </div>
               </div>
          </section>






     </div>
     <div class="col-md-6">
          <section class="panel">
               <header class="panel-heading">
                    <p class="h4 m-n">Package Title</p>
               </header>
               <div class="panel-body no-padder">
                    <table class="table no-border m-n">
                         <tbody>
                              <tr>
                                   <td width="180">
                                        <a href="#" class="thumbnail">
                                             <img src="{{ baseurl }}/images/theme1.jpg" alt="">
                                        </a>
                                   </td>
                                   <td class="v-middle">
                                        <h4 class="m-n">Product</h4>
                                        <strong class="block m-b-sm">by: Jewelleries</strong>
                                   </td>
                                   <td width="50" class="v-middle">
                                        <a href="" class="text-danger"><i class="icon-remove"></i></a>
                                   </td>
                              </tr>
                         </tbody>
                    </table>


                    <table class="table no-border">
                         <tbody>
                              <tr>
                                   <td>Default Bundle</td>
                                   <td width="50" class="v-middle">
                                        <a href="" class="text-danger"><i class="icon-remove"></i></a>
                                   </td>
                              </tr>
                              <tr>
                                   <td>Another Random Plugin</td>
                                   <td width="50" class="v-middle">
                                        <a href="" class="text-danger"><i class="icon-remove"></i></a>
                                   </td>
                              </tr>  
                              <tr>
                                   <td>SEO bundle</td>
                                   <td width="50" class="v-middle">
                                        <a href="" class="text-danger"><i class="icon-remove"></i></a>
                                   </td>
                              </tr>

                         </tbody>
                    </table>                     
               </div>
               <footer class="panel-footer">
                    <button class="btn btn-success"><i class="icon-save"></i>Save Package</button>
               </footer>
          </section>

     </div>
</div>



















