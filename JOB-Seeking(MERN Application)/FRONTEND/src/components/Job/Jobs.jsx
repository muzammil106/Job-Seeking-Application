import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";


const Jobs =() => {
    const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/api/v1/job/testUser", {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
          console.log(res.data)
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  

  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE Jobs</h1>
        <div className="banner">
          {jobs.jobs &&
            jobs.jobs.map((element) => {
              return (
                <div className="card" key={element._id}>
                   <p>{element.category}</p>
                  <p>{element.city +"," +element.country}</p>
                  <p>{element.fixedSalary || element.salaryFrom+"-"+element.salaryTo}</p>
                  <p>{element.description}</p>

 
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Jobs;