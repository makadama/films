import React from 'react';

function Footer() {
  return (
    <div className="mb-0">
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-primary text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              Adama Makhtar Sow
            </span>
            , Using <i className="fab fa-react" /> React JS &amp; Redux 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;