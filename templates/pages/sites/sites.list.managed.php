<section class="panel m-n no-border">
                <div class="row text-sm wrapper">
                  <div class="col-sm-5 m-b-xs">
                    <select class="input-sm form-control input-s-sm inline">
                      <option value="0">Bulk action</option>
                      <option value="1">Delete selected</option>
                      <option value="2">Bulk edit</option>
                      <option value="3">Export</option>
                    </select>
                    <button class="btn btn-sm btn-white">Apply</button>                
                  </div>
                  <div class="col-sm-4 m-b-xs">
                    You are managing 12 sites!
                    <div class="btn-group hidden" data-toggle="buttons">
                      <label class="btn btn-sm btn-white active">
                        <input type="radio" name="options" id="option1"> Day
                      </label>
                      <label class="btn btn-sm btn-white">
                        <input type="radio" name="options" id="option2"> Week
                      </label>
                      <label class="btn btn-sm btn-white">
                        <input type="radio" name="options" id="option2"> Month
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="input-group">
                      <input type="text" class="input-sm form-control" placeholder="Search">
                      <span class="input-group-btn">
                        <button class="btn btn-sm btn-white" type="button">Go!</button>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table table-striped text-sm">
                    <thead>
                      <tr>
                        <th width="20"><input type="checkbox"></th>
                        <th width="80"></th>
                        <th class="th-sortable" data-toggle="class">Site
                          <span class="th-sort">
                            <i class="icon-sort-down text"></i>
                            <i class="icon-sort-up text-active"></i>
                            <i class="icon-sort"></i>
                          </span>
                        </th>
                        <th class="text-center" width="100">Status</th>
                        <th class="text-center" width="100">Wp-Admin</th>
                        <th class="text-center" width="100">Owner</th>
                        <th class="text-right" width="200">Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="v-middle"><input type="checkbox" name="post[]" value="2"></td>
                        <td class="v-middle"><img src="{{ baseurl }}/images/screenshot1.png" class="thumb" alt=""></td>
                        <td class="v-middle">examplesite.com</td>
                        <td class="text-center v-middle"><span class="text-success"><i class="icon-ok"></i></span></td>
                        <td class="text-center v-middle"><a href="#">Login</i></a></td>
                        <td class="v-middle">user name</td>
                        <td class="text-right v-middle">
                          <div class="btn-group">
                            <a href="#" class="btn btn-white btn-xs text-xs"><i class="icon-eye-open icon-white"></i> private</a>
                            <a href="{{ baseurl }}/sites/mysiteid" class="btn btn-white btn-xs text-xs"><i class="icon-pencil icon-white"></i> edit</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="v-middle"><input type="checkbox" name="post[]" value="2"></td>
                        <td class="v-middle"><img src="{{ baseurl }}/images/screenshot1.png" class="thumb" alt=""></td>
                        <td class="v-middle">examplesite.com</td>
                        <td class="text-center v-middle"><span class="text-warning"><i class="icon-beaker"></i></span></td>
                        <td class="text-center v-middle"><a href="#">Login</i></a></td>
                         <td class="v-middle">user name</td>
                       <td class="text-right v-middle">
                          <div class="btn-group">
                            <a href="#" class="btn btn-success btn-xs text-xs"><i class="icon-cloud-upload icon-white"></i> go live</a>
                            <a href="{{ baseurl }}/sites/mysiteid" class="btn btn-white btn-xs text-xs"><i class="icon-pencil icon-white"></i> edit</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="v-middle"><input type="checkbox" name="post[]" value="2"></td>
                        <td class="v-middle"><img src="{{ baseurl }}/images/screenshot1.png" class="thumb" alt=""></td>
                        <td class="v-middle">examplesite.com</td>
                        <td class="text-center v-middle"><span class="text-default"><i class="icon-eye-open"></i></span></td>
                        <td class="text-center v-middle"><a href="#">Login</i></a></td>
                          <td class="v-middle">user name</td>
                      <td class="text-right v-middle">
                          <div class="btn-group">
                            <a href="#" class="btn btn-default btn-xs text-xs"><i class="icon-eye-open icon-white"></i> private</a>
                            <a href="{{ baseurl }}/sites/mysiteid" class="btn btn-white btn-xs text-xs"><i class="icon-pencil icon-white"></i> edit</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="v-middle"><input type="checkbox" name="post[]" value="2"></td>
                        <td class="v-middle"><img src="{{ baseurl }}/images/screenshot1.png" class="thumb" alt=""></td>
                        <td class="v-middle">examplesite.com</td>
                        <td class="text-center v-middle"><span class="text-danger"><i class="icon-remove"></i></span></td>
                        <td class="text-center v-middle"><a href="#">Login</i></a></td>
                         <td class="v-middle">user name</td>
                       <td class="text-right v-middle">
                          <div class="btn-group">
                            <a href="#" class="btn btn-danger btn-xs text-xs"><i class="icon-remove icon-white"></i> removing...</a>
                          </div>
                        </td>
                      </tr>


                    </tbody>
                  </table>
                </div>
                <footer class="panel-footer">
                  <div class="row">
                    <div class="col-sm-4 hidden-xs">
                      <select class="input-sm form-control input-s-sm inline">
                        <option value="0">Bulk action</option>
                        <option value="1">Delete selected</option>
                        <option value="2">Bulk edit</option>
                        <option value="3">Export</option>
                      </select>
                      <button class="btn btn-sm btn-white">Apply</button>                  
                    </div>
                    <div class="col-sm-4 text-center">
                      <small class="text-muted inline m-t-sm m-b-sm">showing 20-30 of 50 items</small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">                
                      <ul class="pagination pagination-sm m-t-none m-b-none">
                        <li><a href="#"><i class="icon-chevron-left"></i></a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#"><i class="icon-chevron-right"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </footer>
              </section>