import React, { useState, useEffect } from "react";
import EmployeeData from "../dummydata/employee";

function EmployeeCard({ img, name, role }) {
  return (
    <div className="employee">
      <div className="employee-img rounded-circle"><img src={img} alt="" srcSet="" /></div>
      <div className="employee-desc w-100">
        <h5 className="employee-name text-center">{ name }</h5>
        <p className="employee-role text-center">{ role }</p>
        <p className="py-1 px-4 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo cumque velit omnis facilis sed eligendi dolor natus accusantium cupiditate.</p>
      </div>
    </div>
  );
}

function Employe() {
  const [slide] = useState(EmployeeData);

  const employeeSlide = (slide || []).map((data, index) => <EmployeeCard img={data.img} key={index}  name={data.name} role={data.role} />);

  return (
    <>
      <section className="section-employee mt-4 d-flex">
        <div className="container">
          <div className="employee-main w-100 h-100">
            <div className="employee-slide d-flex h-100">
              {employeeSlide.slice(0, 3)}
            </div>
          </div>
        </div>
        <div className="employee-overlay row">
          <div className="col-9 employee-gradient"></div>
          <div className="col-3 employee-btn d-flex justify-content-center align-items-center">
            <div className="employee-btn-in">
              <h2>Orang berkontribusi</h2>
              <button
                className="btn px-5"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="employee-modal">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-headerr p-3">
                <div className="" id="exampleModalLabel">
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div className="modal-body">
                <div className="employee-slide d-flex">
                  {employeeSlide}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employe;
