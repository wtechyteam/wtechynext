"use client"
import HubspotForm from 'react-hubspot-form'

const MyForm = () => {
    return (
        <>
            <HubspotForm
                portalId='47335383'
                formId='43d2ea42-be16-4028-9d9d-0fb06a39644b'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
        </>
        
    )
    // const [show, setShow] = useState(false);
    // const [contactData, setContactData] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     subject: "",
    //     message: ""
    // })

    // const handleShowModal = () => setShow(true);
    // const handleCloseModal = () => {
    //     window.location.reload();
    //     setShow(false);
    // }

    // const handleSubmit = async (e) => {
    //     console.log("formData", contactData)
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:8000/api/users', contactData);
    //         alert('User created successfully');
    //         setContactData({
    //             name: "",
    //             email: "",
    //             phone: "",
    //             subject: "",
    //             message: ""
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         alert('Failed to create user');
    //     }
    // }

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setContactData({
    //         ...contactData,
    //         [name]: value
    //     });
    // };

    // return (
    //     <>
    //         <form className="customForm bg-gray px-4 py-5 rounded-2" onSubmit={handleSubmit}>
    //             <div className="row mx-0">
    //                 <h3 className='title-lg fw-bold'>How Can We Help?</h3>
    //                 <p>Your email address will not be published. Required fields are marked *</p>
    //                 <div className='inputWrap col-lg-6'>
    //                     <input onChange={handleInputChange} placeholder='Name*' className='form_input' value={contactData.name} type="text" name="name" required />
    //                 </div>
    //                 <div className='inputWrap col-lg-6'>
    //                     <input onChange={handleInputChange} className='form_input' placeholder='Email*' value={contactData.email} type="email" name="email" required />
    //                 </div>
    //                 <div className='inputWrap col-lg-6'>
    //                     <input onChange={handleInputChange} placeholder='Number*' className='form_input' value={contactData.phone} type="number" name="phone" required />
    //                 </div>
    //                 <div className='inputWrap col-lg-6'>
    //                     <input onChange={handleInputChange} className='form_input' value={contactData.subject} type="text" name="subject" placeholder="How can we help you?*" required />
    //                 </div>
    //                 <div className='inputWrap col-lg-12'>
    //                     <textarea onChange={handleInputChange} className='form_input' placeholder='Message...' value={contactData.message} name="message" />
    //                 </div>
    //                 <div className="col-12">
    //                     <button className='dBtn btnSecondary rounded-0 hasShadow w-100 py-2' type="submit" >Contact Us</button>
    //                 </div>
    //             </div>
    //         </form>
    //         <PopupModal handleCloseModal={handleCloseModal} handleShowModal={handleShowModal} show={show} />
    //     </>
    // )
}
export default MyForm;