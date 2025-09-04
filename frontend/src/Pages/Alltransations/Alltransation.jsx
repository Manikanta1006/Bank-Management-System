import React, { useEffect, useRef } from 'react'
import "./Alltransations.css"
import { BsBank } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { getaccbytransation } from '../../features/TrasationSlice/transationSlice';
import { gettingUserwithAccount } from '../../features/UserSlice/UserwithAccountSlice';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


function Alltransation() {
  const cardRef = useRef();

  const dispatch = useDispatch()

  const { UserDetails } = useSelector((state) => state.useraccount)
  // console.log(UserDetails.accountDetails.FullName,"uuuuuuuuuu")
  console.log(UserDetails?.accountDetails?._id, "uuuuuuuuuuu")

  const { TransationsById } = useSelector((state) => state?.Transations)
  console.log(TransationsById, "aatattattatatatataatata")
  const { user } = useSelector((state) => state.auth)


  const localdata = localStorage.getItem('user')
  const userdata = localdata ? JSON.parse(localdata) : null




  useEffect(() => {
    if (userdata?.id) {
      dispatch(gettingUserwithAccount(userdata?.id));
    }
    dispatch(getaccbytransation(UserDetails?.accountDetails?._id))
  }, [userdata?.id, UserDetails?._id,UserDetails?.accountDetails?._id, dispatch]);


 



  // 

//  const downloadPDF = async () => {
//     const element = cardRef.current;

//     // Convert card into canvas
//     const canvas = await html2canvas(element, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");

//     // Create PDF
//     const pdf = new jsPDF("p", "mm", "a4");
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//     // Add image to PDF
//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("Transaction_Statement.pdf");
//   };


  return (
    <div className='transation_outer'>

      <div className="filter_outer"></div>

      <div className="transation_card_outer">
        {
          UserDetails?.accountDetails?._id ?
          <>
            {
                TransationsById?.map((data, ind) => (
            <div className="bank_card" key={ind}  ref={cardRef}>
              <div className="card_header">
                <div className="logo_part">
                  <BsBank className="all_bank_icon" />
                  <h2>BMS</h2>
                </div>
                <p className="head_text">Transaction Statement</p>
              </div>

              <div className="card_rows">
                <div className="row">
                  <span>Name</span>
                  <span>{UserDetails?.accountDetails?.FullName}</span>
                </div>
                <div className="row">
                  <span>A/C Number</span>
                  <span>{data?.AccountId}</span>
                </div>
                <div className="row">
                  <span>Type</span>
                  <span className="deposit">{data?.TransationType}</span>
                </div>
                <div className="row">
                  <span>Amount</span>
                  <span>₹ {data?.amount}</span>
                </div>
                <div className="row">
                  <span>Date</span>
                  {new Intl.DateTimeFormat("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(data?.createdAt))}
                </div>
              </div>
              {/* <button className="down_btn" onClick={() => downloadPDF(data)}>Download</button> */}
            </div>
          ))
            }
          </>
          :
          <>
          <h1>No trasation Available</h1>
          </>
        
        }

      </div>
    </div>
  )
}

export default Alltransation
