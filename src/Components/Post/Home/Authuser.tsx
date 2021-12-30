import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

const Authuser = (props: any) => {


  return (
    
    <>
          <div className="card h-100" style={{border:'2px solid green'}}>
            <Link to={`/user/${props.props?.id}`}>
              <h1 className="card-header">{props.props?.name}</h1>
            </Link>
            <h4 className="card-header">{props.props.title}</h4>
            <div className="card-body">
              <p className="card-text">{props.props.body}</p>
            </div>
          </div>
    </>
  );
};
export default Authuser;
