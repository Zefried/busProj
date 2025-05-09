import { Link, Outlet } from 'react-router-dom';
import Footer from './footer';

// Functional component for the Home page
function Home() {


  return (
   <>
     {/* template starts from here */}

     <div>
        <div id="wrapper">

            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span></a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
                Interface
            </div>

                {/* Nav Item - Pages Collapse Menu */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog" />
                        <span>Components</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <a className="collapse-item" href="buttons.html">Buttons</a>
                            <a className="collapse-item" href="cards.html">Cards</a>
                        </div>
                        </div>
                    </li>
            
                {/* Nav Item - Utilities Collapse Menu */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench" />
                        <span>Utilities</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <a className="collapse-item" href="utilities-color.html">Colors</a>
                            <a className="collapse-item" href="utilities-border.html">Borders</a>
                            <a className="collapse-item" href="utilities-animation.html">Animations</a>
                            <a className="collapse-item" href="utilities-other.html">Other</a>
                        </div>
                        </div>
                    </li>
                {/* Divider */}
            
            </ul>
            {/* End of Sidebar */}



            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">


                {/* Main Content */}
                <div id="content">
                  
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        {/* Sidebar Toggle (Topbar) */}
                            {/* <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars" />
                            </button> */}
                        {/* Topbar Search */}

                        {/* you can add some design or logo in the navbar */}
                        <div>

                        </div>
                        {/* ends here */}

                        {/* Topbar Navbar */}
                        <ul className="navbar-nav ml-auto">
                            {/* Nav Item - Search Dropdown (Visible Only XS) */}
                            <li className="nav-item dropdown no-arrow d-sm-none">
                            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw" />
                            </a>
                            {/* Dropdown - Messages */}
                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm" />
                                    </button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </li>



                            {/* Nav Item - Alerts */}
                            <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bell fa-fw" />
                                {/* Counter - Alerts */}
                                <span className="badge badge-danger badge-counter">3+</span>
                            </a>
                            {/* Dropdown - Alerts */}
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                                <h6 className="dropdown-header">
                                Alerts Center
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-primary">
                                    <i className="fas fa-file-alt text-white" />
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 12, 2019</div>
                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-success">
                                    <i className="fas fa-donate text-white" />
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-warning">
                                    <i className="fas fa-exclamation-triangle text-white" />
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                                </a>
                                <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                            </li>
                            
                            {/* Nav Item - Messages */}
                            <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-envelope fa-fw" />
                                {/* Counter - Messages */}
                                <span className="badge badge-danger badge-counter">7</span>
                            </a>
                            {/* Dropdown - Messages */}
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                                <h6 className="dropdown-header">
                                Message Center
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_1.svg" alt="..." />
                                    <div className="status-indicator bg-success" />
                                </div>
                                <div className="font-weight-bold">
                                    <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                    problem I've been having.</div>
                                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_2.svg" alt="..." />
                                    <div className="status-indicator" />
                                </div>
                                <div>
                                    <div className="text-truncate">I have the photos that you ordered last month, how
                                    would you like them sent to you?</div>
                                    <div className="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_3.svg" alt="..." />
                                    <div className="status-indicator bg-warning" />
                                </div>
                                <div>
                                    <div className="text-truncate">Last month's report looks great, I am very happy with
                                    the progress so far, keep up the good work!</div>
                                    <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
                                    <div className="status-indicator bg-success" />
                                </div>
                                <div>
                                    <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                    told me that people say this to all dogs, even if they aren't good...</div>
                                    <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                </div>
                                </a>
                                <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                            </li>


                            <div className="topbar-divider d-none d-sm-block" />


                            {/* Nav Item - User Information */}
                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                    <img className="img-profile rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2wX_ZH__dVSIG2wetwnaeH3-sTdlH4te_g&s" />
                                </a>

                                {/* Dropdown - User Information */}
                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                    <a className="dropdown-item" href="#">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                                    Profile
                                    </a>
                                    <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                                    Settings
                                    </a>
                                    <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                                    Activity Log
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                    Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    {/* End of Topbar */}


                    {/* Mount child components here*/}
                    <div className="container-fluid">
                         <Outlet></Outlet>   
                    </div>
                </div>
                {/* End of Main Content */}
                



                {/* Footer */}
                <div>
                    <Footer/>
                </div>
                {/* End of Footer */}  

            </div>

        </div>


    
    </div>

     {/* ends here */}


   
   </>
  );
}

export default Home;