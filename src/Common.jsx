import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/JS.svg";

const Common=(props)=> {
  return (
   

        <>
            <section id="header" className="container-fluid mar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-3 order-lg-1 ">


                                <h1>{props.name} <strong className="brand-name">MarkTechnical</strong></h1>
                                <h3 className="my-3">we are the team of talented developers making Websites</h3>
                                <div className="my-3 btn">
                               <NavLink to={props.visit} className=" btn-get-started ">{props.btnname}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-5 order-2 order-lg-2 header-img animated">
                                <img src={props.imgsrc} className="img-fluid animated imge" alt="home image"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}


export default Common;
