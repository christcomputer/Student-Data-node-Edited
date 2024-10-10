import React, { useRef, useState } from 'react';

const Form = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    fee: '',
    paid: '',
    mobile: '',
    installment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData(formRef.current);
    fetch('https://script.google.com/macros/s/AKfycbxTquWhZQ2XNIJCzhBxckYXl2aBV_1RTjcMZQbj2AXGbj5ZdlTVZOq43aqCgobArl81/exec', {
      method: 'POST',
      body: formDataToSend,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Clear the form fields
        setFormData({
          name: '',
          email: '',
          course: '',
          fee: '',
          paid: '',
          mobile: '',
          installment: "",
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <h1>Student Registration</h1>
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Student Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile No."
        value={formData.mobile}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="course"
        placeholder="Student course"
        value={formData.course}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="fee"
        placeholder="course fee"
        value={formData.fee}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="paid"
        placeholder="fee paid"
        value={formData.paid}
        onChange={handleChange}
        required
      />
      <select
        name="installment"
        value={formData.installment}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select Installment No.</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        {/* <!-- Add more options as needed --> */}
      </select>


      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
