import { Link } from "react-router-dom";
function MenuAcc(){
    return(
        <div className="col-sm-3">
        <div className="left-sidebar">
            <h2>Accout</h2>
            <div className="panel-group category-products" id="accordian">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <Link to={"/Account/update/"} data-toggle="collapse" data-parent="#accordian" >
                                <span className="badge pull-right"><i className="fa fa-plus"></i></span> Account
                            </Link>
                        </h4>
                    </div>
                    <div id="sportswear" className="panel-collapse collapse">
                        <div className="panel-body">
                            <ul>
                                <li><a href="#">Nike </a></li>
                                <li><a href="#">Under Armour </a></li>
                                <li><a href="#">Adidas </a></li>
                                <li><a href="#">Puma</a></li>
                                <li><a href="#">ASICS </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default"> 
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <Link to={"/Account/myproduct"} data-toggle="collapse" data-parent="#accordian" >
                                <span className="badge pull-right"><i className="fa fa-plus"></i></span> My product
                            </Link>
                        </h4>
                    </div>
                    <div id="mens" className="panel-collapse collapse">
                        <div className="panel-body">
                            <ul>
                                <li><a href="#">Fendi</a></li>
                                <li><a href="#">Guess</a></li>
                                <li><a href="#">Valentino</a></li>
                                <li><a href="#">Dior</a></li>
                                <li><a href="#">Versace</a></li>
                                <li><a href="#">Armani</a></li>
                                <li><a href="#">Prada</a></li>
                                <li><a href="#">Dolce and Gabbana</a></li>
                                <li><a href="#">Chanel</a></li>
                                <li><a href="#">Gucci</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
    )
}
export default MenuAcc;