import React from "react";
import { motion } from "framer-motion";

function Box() {
  return (
    <section className="page-tentang-box">
      <div className="container h-100">
        <div className="box-text">
          <h1>
            Apa saja di <br /> Tanpabatas?
          </h1>
        </div>
        <div className="box-box">

          <motion.div className="box">
            {/* <img src={} alt="" /> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Box;
