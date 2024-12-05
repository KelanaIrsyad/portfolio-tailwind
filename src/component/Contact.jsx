import { useState } from 'react';
import Swal from 'sweetalert2'

function Contact() {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7735bc27-e437-470b-95c4-7a9683e4ccb3");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
        }
      };
    
  return (
    <div className="container mb-20">
        <h2 className="text-4xl font-bold text-primary flex justify-center mt-40 mb-10">Contact</h2>
        <form onSubmit={onSubmit}>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label className="text-base font-bold text-primary hover:text-[#38f7ff]">Nama</label>
                <input
                  type="text"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label className="text-base font-bold text-primary hover:text-[#38f7ff]">Email</label>
                <input
                  type="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label className="text-base font-bold text-primary hover:text-[#38f7ff]">Message</label>
                <textarea
                type="text"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                name="message"
                value={data.message}
                onChange={handleChange} 
                required
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button type="submit" className="text-base font-bold text-black bg-primary py-3 px-8 rounded-full w-full">
                  Send
                </button>
              </div>
            </div>
          </form>
    </div>
  )
}

export default Contact