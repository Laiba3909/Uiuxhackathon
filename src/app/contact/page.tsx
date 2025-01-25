'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function MyAccount() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validateForm = () => {
    const formErrors: { [key: string]: string } = {};
    if (!name) formErrors.name = 'Name is required';
    if (!email) formErrors.email = 'Email is required';
    if (!message) formErrors.message = 'Message is required';
    if(!subject) formErrors.subject = 'Subject is required'
    return formErrors;
  };
  const [submitName, setSubmitName] = useState<string>('');
  const [submittedsubject, setSubmittedsubject] = useState<string>('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      setSubmitName(name);
      setSubmittedsubject(subject)
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <main>
      <div className="relative">
        <Image className="w-full h-60 object-cover" src="/back2.jpg" alt="background" width={300} height={300}  />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex justify-center items-center mt-6">
          <Image className="lg:w-[80px] w-[45px] h-[45px] lg:h-[80px] object-cover" src="/logo.png" alt="Logo" width={300} height={300} />
        </div>

        <div className="absolute inset-x-6 -mt-52 flex justify-center items-center">
          <h2 className="lg:text-5xl sm:text-3xl text-white">Contact</h2>
        </div>

        <div className="absolute inset-x-6 -mt-16 flex justify-center items-center space-x-2 text-white">
          <h2><Link href="/">Home</Link></h2>
          <p className="mt-1"><i className="fa-solid fa-greater-than"></i></p>
          <h2><Link href="/contact">Contact</Link></h2>
        </div>
      </div>

      <div className="py-16">
        <h2 className="text-center font-semibold text-3xl">Get In Touch With Us</h2>
        <div className="text-center mt-4">
          <p className="max-w-md mx-auto text-gray-500">
            For more information about our products & services. Please feel free to drop us an email. Our staff is always here to help you. Do not hesitate!
          </p>
        </div>

        <div className="flex flex-col md:ml-0 ml-20  md:flex-row justify-center mt-10 space-x-4">
          {/* Address Section */}
          <div className="md:w-1/3 space-y-4 text-gray-700 mt-20">
            <h3 className="font-semibold text-xl"><i className="fa-solid fa-location-dot"></i> Address</h3>
            <p>236 5th SE Avenue, New York NY10000, United States</p>

            <h3 className="font-semibold text-xl"><i className="fa-solid fa-phone"></i> Phone</h3>
            <p>Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789</p>

            <h3 className="font-semibold text-xl"><i className="fa-regular fa-clock"></i> Working Time</h3>
            <p>Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00</p>
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 ">
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <div >
                <h2 className="text-xl">Your Name</h2>
                <input
                  className="w-full h-12 rounded-lg border-2 px-3 py-2 mt-2"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <h2 className="text-xl">Email Address</h2>
                <input
                  className="w-full h-12 rounded-lg border-2 px-3 py-2 mt-2"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Abc@def.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <h2 className="text-xl">Subject</h2>
                <input
                  className="w-full h-12 rounded-lg border-2 px-3 py-2 mt-2"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="This is optional"
                />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <h2 className="text-xl">Message</h2>
                <textarea
                  className="w-full h-28 rounded-lg border-2 px-3 py-2 mt-2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi, I'd like to ask about..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button type="submit" className="w-full h-12 bg-black text-white rounded-lg mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Success Message after form submission */}
        {isSubmitted && (
          <div className="mt-8 text-center bg-green-100 p-4 rounded-lg">
            <h3 className="font-semibold text-lg text-green-700">
            {submitName} Your complaint of {submittedsubject}  has been successfully submitted. We will get back to you in 3 to 4 working days.
            </h3>
          </div>
        )}
      </div>

      
      <div className="w-full bg-[#faf4f4] xl:h-44 h-auto mt-16 flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 px-4 lg:px-8">
        <div className="text-center lg:text-left xl:space-x-16">
          <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold">Free Delivery</h2>
          <p className="w-full lg:w-60 xl:w-80 mx-auto lg:mx-0 mt-4 text-gray-500 text-sm md:text-base">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>

        <div className="text-center lg:text-left xl:space-x-16">
          <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold">90 Days Return</h2>
          <p className="w-full lg:w-60 xl:w-80 mx-auto lg:mx-0 mt-4 text-gray-500 text-sm md:text-base">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        <div className="text-center lg:text-left xl:space-x-16">
          <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold">Secure Payments</h2>
          <p className="w-full lg:w-60 xl:w-80 mx-auto lg:mx-0 mt-4 text-gray-500 text-sm md:text-base">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </main>
  );
}
