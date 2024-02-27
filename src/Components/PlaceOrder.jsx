import { useState } from "react";

function PlaceOrder() {
    const [fullName , setFullName ] = useState(null)
    const [email , setEmail ] = useState(null)
    const [phone , setPhone ] = useState(null)
    const [anotherPhone , setAnotherPhone ] = useState(null)
    const [amount , setAmount ] = useState(null)
    const [payment , setPayment ] = useState(null)
    const [address , setAdress ] = useState(null)
    const [question , setQuestions ] = useState(null)
    const [promo , setPromo ] = useState(false)
    const handleFullName = (event) =>{
        setFullName(event.target.value)
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    const handlePhone = (event) =>{
        setPhone(event.target.value)
    }
    const handleAnotherPhone = (event) =>{
        setAnotherPhone(event.target.value)
    }
    const handleAmount = (event) =>{
        setAmount(event.target.value)
    }
    const handlePayment = (event) =>{
        setPayment(event.target.value)
    }
    const handleAddress = (event) =>{
        setAdress(event.target.value)
    }
    const handleQuestion = (event) =>{
        setQuestions(event.target.value)
    }
    const handlePromo = (event) =>{
        setPromo(event.target.value)
        
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(fullName,payment ,promo ,email, phone , anotherPhone , address , amount , question)
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="space-y-12 px-10">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Full name <span className="text-red-600">*</span> 
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="full-name"
                                id="full-name"
                                autoComplete="given-name"
                                required
                                onChange={handleFullName}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-m sm:leading-6 outline-none"
                                />
                            </div>
                        </div>
                        
                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address <span className="text-red-600">*</span> 
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                onChange={handleEmail}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-m sm:leading-6 outline-none"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone Number <span className="text-red-600">*</span> 
                            </label>
                            <div className="mt-2">
                            <input
                                id="number"
                                name="number"
                                type="tel"  
                                autoComplete="tel"  
                                pattern="[0-9]{11}"  
                                maxLength="11"  
                                required
                                onChange={handlePhone}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-m sm:leading-6 outline-none"
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                                Another Number <span className="text-red-600">*</span> 
                            </label>
                            <div className="mt-2">
                            <input
                                id="number"
                                name="number"
                                type="tel"  
                                autoComplete="tel"  
                                pattern="[0-9]{11}"  
                                maxLength="11" 
                                required 
                                onChange={handleAnotherPhone}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-m sm:leading-6 outline-none"
                            />
                            </div>
                        </div>
                        
                        <div className="sm:col-span-3">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Full Address <span className="text-red-600">*</span> 
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                required
                                autoComplete="street-address"
                                onChange={handleAddress}
                                placeholder="  Available in cairo only"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-m sm:leading-6 outline-none"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="Amount" className="block text-sm font-medium leading-6 text-gray-900">
                            How many scrubs do you want <span className="text-red-600">*</span> 
                            </label>
                            <div className="mt-2">
                                <select
                                id="Amount"
                                required
                                name="Amount"
                                autoComplete="Amount-name"
                                onChange={handleAmount}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2  sm:max-w-xs  sm:text-m sm:leading-6 outline-none"
                                >
                                    <option>Choose number</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="promo-code" className="block text-sm font-medium leading-6 text-gray-900">
                                Apply promo-code
                            </label>
                            <div className="mt-2">
                                <input
                                    type="checkbox"
                                    id="cash-on-delivery"
                                    name="payment-method"
                                    value="promo"
                                    onChange={handlePromo}
                                    className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                />
                                <span className="ml-2 text-sm text-gray-900">Redeem</span>
                            </div>
                            {promo === 'promo' && (
                                <div className="sm:col-span-3">
                                    <label htmlFor="promo-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        Your Promo 
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="promo-code"
                                            name="promo-code"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-m sm:leading-6 outline-none"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="payment-method" className="block text-sm font-medium leading-6 text-gray-900">
                                Payment-method <span className="text-red-600">*</span> 
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            id="cash-on-delivery"
                                            name="payment-method"
                                            value="Cash on delivery"
                                            required
                                            onChange={handlePayment}
                                            className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                        />
                                        <span className="ml-2 text-sm text-gray-900">Cash on delivery</span>
                                    </label>

                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            id="insta-bay"
                                            name="payment-method"
                                            value="Insta Bay"
                                            onChange={handlePayment}
                                            className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                        />
                                        <span className="ml-2 text-sm text-gray-900">Insta Bay</span>
                                    </label>
                                    <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        id="visa-mastercard"
                                        name="payment-method"
                                        value="Visa or Mastercard"
                                        onChange={handlePayment}
                                        className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                    />
                                    <span className="ml-2 text-sm text-gray-900">Visa or Mastercard</span>
                                    </label>
                                </div>
                                {payment === 'Insta Bay' && (
                                    <div className="sm:col-span-3">
                                        <label htmlFor="transaction" className="block text-sm font-medium leading-6 text-gray-900">
                                        Transaction <span className="text-red-600">*</span> 
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="transaction-id"
                                                name="transaction-id"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-m sm:leading-6 outline-none"
                                            />
                                        </div>
                                    </div>
                                )}
                                {payment === 'Visa or Mastercard' && (
                                <div>
                                
                                </div>
                                )}
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            <div className="col-span-full px-10">
                <label htmlFor="questions" className="block text-sm font-medium leading-6 text-gray-900">
                    Questions and comments 
                </label>
                <div className="mt-2">
                <textarea
                    id="questions"
                    name="questions"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-m sm:leading-6 outline-none"
                    defaultValue={''}
                    onChange={handleQuestion}
                />
                </div>
            </div>
            <div className="mt-6 px-10 flex items-center justify-end gap-x-6">
                <button
                type="submit"
                className="rounded-md bg-[#AAD7D9] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#92C7CF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Complete the order 
                </button>
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
            </div>
        </form>
    </>
  );
}

export default PlaceOrder;