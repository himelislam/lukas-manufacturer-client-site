import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { useGlobalState } from '../../../context/GlobalStateContext';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { state, setState } = useGlobalState();
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/products/${id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProduct(data))

        fetch(`http://localhost:4000/review/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [id])
    const minimum = product.minimumQuantity;
    const available = product.availableQuantity;
    const [orderQuantity, setOrderQuantity] = useState(minimum);
    const [finalOrderQuantity, setFinalOrderQuantity] = useState();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const order = {
            name: user.displayName,
            email: user.email,
            company: data.company,
            address: data.address,
            phone: data.phone,
            quantity: finalOrderQuantity,
            product: product.name,
            price: product.price,
            paid: false
        }
        fetch('http://localhost:4000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ order })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Your Order Placed Successfully')
                    setState((prev) => ({ ...prev, order: !prev.order }));
                    reset()
                }
            })
    }

    const handleOrder = event => {
        const quantity = event.target.value;
        setOrderQuantity(quantity)
    }

    const handleOrderQuantity = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        if (quantity) {
            setFinalOrderQuantity(quantity)
            toast('Product Quantity Updated');
        }

    }



    let quantityError;
    if (orderQuantity > available) {
        quantityError = <p className='text-red-600'>{`Sorry! Product is not Available more than ${available}`}</p>
    }
    if (orderQuantity < minimum) {
        quantityError = <p className='text-red-600'>{`Sorry! The Minimum Order Quantity is ${minimum}`}</p>
    }
    return (
        <div className=' bg-black'>
            <div className="min-h-screen w-full">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-10 px-10">
                    <div className='col-span-6'>
                        <div id="ezy__epqoverview29_RB8PdL5i-modal">
                            <div
                                class="bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden relative max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-6xl rounded mx-auto my-14"
                            >
                                <button
                                    type="button"
                                    id="ezy__epqoverview29_RB8PdL5i-close-btn"
                                    class="absolute right-0 top-0 mt-4 mr-4 z-50"
                                >
                                    <i class="fas fa-times text-xl"></i>
                                </button>
                                <div class="p-6 lg:p-12">
                                    <div class="grid grid-cols-3 items-center gap-6">
                                        <div class="col-span-3 lg:col-span-1 order-2 lg:order-1">
                                            <div class="flex lg:flex-col justify-center items-center gap-4">
                                                <button
                                                    class="bg-gray-100 dark:bg-slate-700 p-1 md:p-4 lg:p-6 opacity-50 border dark:border-slate-800 hover:border-blue-600 hover:opacity-100"
                                                >
                                                    <img
                                                        src={product.img}
                                                        alt=""
                                                        class="max-w-full h-auto max-h-20"
                                                    />
                                                </button>
                                                <button
                                                    class="bg-gray-100 dark:bg-slate-700 p-1 md:p-4 lg:p-6 opacity-50 border dark:border-slate-800 hover:border-blue-600 hover:opacity-100"
                                                >
                                                    <img
                                                        src={product.img}
                                                        alt=""
                                                        class="max-w-full h-auto max-h-20"
                                                    />
                                                </button>
                                                <button
                                                    class="bg-gray-100 dark:bg-slate-700 p-1 md:p-4 lg:p-6 opacity-50 border dark:border-slate-800 hover:border-blue-600 hover:opacity-100"
                                                >
                                                    <img
                                                        src={product.img}
                                                        alt=""
                                                        class="max-w-full h-auto max-h-20"
                                                    />
                                                </button>
                                                <button
                                                    class="bg-gray-100 dark:bg-slate-700 p-1 md:p-4 lg:p-6 opacity-100 border border-blue-600"
                                                >
                                                    <img
                                                        src={product.img}
                                                        alt=""
                                                        class="max-w-full h-auto max-h-20"
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        <div class="col-span-3 lg:col-span-2 lg:order-2">
                                            <div class="flex items-center gap-3 mb-4">
                                                <span class="">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star-half-alt"></i>
                                                </span>
                                                <h6 class="font-medium">374 Orders</h6>
                                                <span>-</span>
                                                <h6 class="font-medium">283 Reviews</h6>
                                            </div>
                                            <h3 class="text-[28px] font-medium mb-2">
                                                {product.name}
                                            </h3>
                                            <div style={{ minHeight: '500px' }}
                                                class="bg-gray-100 dark:bg-slate-700 flex content-center items-center p-6 my-6"
                                            >
                                                <img
                                                    src={product.img}
                                                    alt=""
                                                    class="max-w-full h-auto w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="grid grid-cols-12 gap-4 text-center items-center w-full mt-6 lg:px-12"
                                    >
                                        {/* <!-- colors --> */}
                                        <div class="col-span-6 lg:col-span-4 xl:col-span-2">
                                            <div
                                                class="flex flex-wrap justify-center lg:justify-start gap-2 mb-2"
                                            >
                                                <input
                                                    type="radio"
                                                    class="absolute hidden"
                                                    autocomplete="off"
                                                    checked=""
                                                />
                                                <label
                                                    class="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white dark:border-[#0b1727] outline outline-1 outline-yellow-500 cursor-pointer mt-1"
                                                ></label>

                                                <input
                                                    type="radio"
                                                    class="absolute hidden"
                                                    autocomplete="off"
                                                />
                                                <label
                                                    class="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-[#0b1727] outline outline-transparent cursor-pointer mt-1"
                                                ></label>

                                                <input
                                                    type="radio"
                                                    class="absolute hidden"
                                                    autocomplete="off"
                                                />
                                                <label
                                                    class="w-8 h-8 rounded-full bg-red-400 border-2 border-white dark:border-[#0b1727] outline outline-transparent cursor-pointer mt-1"
                                                ></label>
                                            </div>
                                        </div>
                                        {/* <!-- size --> */}
                                        <div class="col-span-6 lg:col-span-4 xl:col-span-3">
                                            <div
                                                class="flex flex-wrap justify-center lg:justify-start gap-2 mb-2"
                                            >
                                                <input type="radio" class="absolute hidden" checked="" />
                                                <label
                                                    class="font-medium py-1 px-4 rounded border border-blue-600 dark:border-blue-600 text-blue-600 cursor-pointer mt-1 min-w-[50px]"
                                                >S</label
                                                >

                                                <input type="radio" class="absolute hidden" />
                                                <label
                                                    class="font-medium hover:text-blue-600 py-1 px-4 rounded border border-blue-50 dark:border-blue-600 dark:border-opacity-20 cursor-pointer hover:border-blue-600 dark:hover:border-blue-600 mt-1 min-w-[50px]"
                                                >M</label
                                                >

                                                <input type="radio" class="absolute hidden" />
                                                <label
                                                    class="font-medium hover:text-blue-600 py-1 px-4 rounded border border-blue-50 dark:border-blue-600 dark:border-opacity-20 cursor-pointer hover:border-blue-600 dark:hover:border-blue-600 mt-1 min-w-[50px]"
                                                >XL</label
                                                >
                                            </div>
                                        </div>
                                        {/* <!-- quantity --> */}
                                        <div class="col-span-6 lg:col-span-4 xl:col-span-2">
                                            <div
                                                class="ezy__epqoverview29_RB8PdL5i-qty flex justify-center items-center"
                                            >
                                                <input
                                                    type="number"
                                                    class="max-w-[80px] h-10 text-lg font-bold text-center border dark:border-slate-700 rounded bg-transparent"
                                                    value="2"
                                                />
                                            </div>
                                        </div>
                                        {/* <!-- price --> */}
                                        <div class="col-span-6 xl:col-span-2">
                                            <div>
                                                <h2 class="text-4xl font-medium flex justify-center mb-0">
                                                    $39
                                                </h2>
                                            </div>
                                        </div>
                                        {/* <!-- button --> */}
                                        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                                            <button
                                                class="py-2.5 px-7 rounded-md bg-blue-600 hover:bg-opacity-90 text-white"
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>

                                    <div class="mt-6 lg:ml-12 opacity-75">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                                            harum, tempora esse deserunt nobis nemo? Tenetur, officia
                                            voluptates eius perferendis recusandae itaque odit reprehenderit
                                            ab magni repellendus placeat assumenda. Fugit voluptatibus dolore
                                            facilis ad officia vel voluptatem culpa, molestias, obcaecati
                                            natus consequuntur aperiam, non libero sunt vitae. Ducimus
                                            consequuntur, officia vel voluptatem rerum illo at molestias, ex
                                            blanditiis, enim nobis explicabo error laboriosam nam officia vel
                                            voluptatem nulla. Illum at corporis ipsa non quis tenetur magni.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4 justify-center align-center my-14'>
                        <div className="card-body card text-center mx-8 shadow-2xl bg-base-100">
                            <h2 className="text-center text-2xl font-bold">Billing Details</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={user?.displayName}
                                        value={user?.displayName}
                                        disabled
                                        className="input input-bordered w-full "
                                        {...register("name")}
                                    />

                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder={user?.email}
                                        value={user?.email}
                                        className="input input-bordered w-full "
                                        disabled
                                        {...register("email")}
                                    />
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Company Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="input input-bordered w-full "
                                        {...register("company", {
                                            required: {
                                                value: true,
                                                message: 'Company Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.company?.type === 'required' && <span className="label-text-alt text-red-600">{errors.company.message}</span>}

                                    </label>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Your Address</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Address"
                                        className="input input-bordered w-full "
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.address.message}</span>}

                                    </label>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Your Phone</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Your Phone"
                                        className="input input-bordered w-full "
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'Phone Number is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}

                                    </label>
                                </div>
                                <input className={finalOrderQuantity ? 'btn w-full max-w-xs text-white' : 'btn w-full max-w-xs text-white btn-disabled'} type="submit" value='Place Order' />
                            </form>

                        </div>
                    </div>
                    {/* <div className="mx-auto bg-gray-200 border-slate-400 border-2 rounded-lg w-96 text-center">
                        <div className="">
                            <div className="max-w-md mb-6">
                                <h2 className="mt-6 mb-4 text-3xl md:text-4xl lg:text-4xl font-heading font-medium">{product.name}</h2>
                                <p className=" mb-6 text-center">
                                    <span className="mr-2 text-sm text-blue-500 font-medium">$</span>
                                    <span className="text-3xl text-blue-500 font-medium">{product.price}</span>
                                </p>
                                <p className="text-lg text-gray-400">{product.description}</p>
                            </div>
                            <div className="flex mb-6 items-center">
                                <span className="text-md text-gray-400">{product.rating}</span>
                            </div>
                            <div className="mb-6">
                                <h4 className="mb-3 font-heading font-medium">
                                    <span>Available Quantity : </span>
                                    <span className="text-gray-400"> {product.availableQuantity}</span>
                                </h4>
                                <h4 className="mb-3 font-heading font-medium">Minimum Order Quantity : {product.minimumQuantity}</h4>

                            </div>
                            <div className="mb-10">
                                <h4 className="mb-3 text-xl font-semibold text-green-700">
                                    <span>Order Quantity : </span>
                                    <span> {finalOrderQuantity}</span>
                                </h4>
                                <form onSubmit={handleOrderQuantity}>
                                    <button onClick={() => setOrderQuantity(parseInt(orderQuantity) - 1)} className='btn btn-sm mx-2'>-</button>


                                    <input onChange={handleOrder} className="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="text" name='quantity' placeholder={product.minimumQuantity} value={orderQuantity} />

                                    <button onClick={() => setOrderQuantity(parseInt(orderQuantity) + 1)} className='btn btn-sm mx-2'>+</button>
                                    <br />
                                    {quantityError}
                                    <br />
                                    <button className={orderQuantity > (minimum - 1) && orderQuantity < (available + 1) ? 'btn btn-success ' : 'btn btn-success btn-disabled'}><input type="submit" value="Set Order Quantity" /></button>
                                </form>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
            </div>
            <section
  class="ezy__epreview4_bvRoIpS9 py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10"
>
  <div class="container px-4 mx-auto">
    <div class="flex justify-center max-w-4xl mx-auto">
      <div class="bg-blue-50 dark:bg-slate-800 rounded p-4 lg:p-8">
        <div>
          <div class="p-3 md:p-6">
            <h4 class="text-2xl font-medium mb-2">
              Reviewer Recommendetion
            </h4>
            <div class="flex flex-wrap items-center text-[40px]">91%</div>
            <p class="text-sm opacity-75 mb-6 md:mb-12">
              Recomded by 6 reviewers who responded, 5 would recommend this
              product.
            </p>

            <div class="flex flex-wrap items-center">
              <span class="text-[40px]">4.5</span>
              <span class="text-yellow-500 ml-2">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </span>
            </div>
            <p class="text-sm opacity-75 mb-6">
              Average rating based on 2345 reviews
            </p>
            <div>
              <div class="flex justify-around items-center sm:w-1/2 mb-2">
                <div class="mr-3">
                  <p class="text-sm font-bold mb-0">
                    <span class="opacity-50">5</span>
                    <span class="text-blue-600 ml-1">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
                <div class="flex-grow mr-3">
                  <div
                    class="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden"
                  >
                    <div class="w-full h-full bg-blue-600"></div>
                  </div>
                </div>
                <div>
                  <p class="text-sm opacity-50 mb-0">123</p>
                </div>
              </div>
              <div class="flex justify-around items-center sm:w-1/2 mb-2">
                <div class="mr-3">
                  <p class="text-sm font-bold mb-0">
                    <span class="opacity-50">4</span>
                    <span class="text-blue-600 ml-1">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
                <div class="flex-grow mr-3">
                  <div
                    class="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden"
                  >
                    <div class="w-11/12 h-full bg-blue-600"></div>
                  </div>
                </div>
                <div>
                  <p class="text-sm opacity-50 mb-0">55</p>
                </div>
              </div>
              <div class="flex justify-around items-center sm:w-1/2 mb-2">
                <div class="mr-3">
                  <p class="text-sm font-bold mb-0">
                    <span class="opacity-50">3</span>
                    <span class="text-blue-600 ml-1">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
                <div class="flex-grow mr-3">
                  <div
                    class="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden"
                  >
                    <div class="w-8/12 h-full bg-blue-600"></div>
                  </div>
                </div>
                <div>
                  <p class="text-sm opacity-50 mb-0">12</p>
                </div>
              </div>
              <div class="flex justify-around items-center sm:w-1/2 mb-2">
                <div class="mr-3">
                  <p class="text-sm font-bold mb-0">
                    <span class="opacity-50">2</span>
                    <span class="text-blue-600 ml-1">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
                <div class="flex-grow mr-3">
                  <div
                    class="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden"
                  >
                    <div class="w-5/12 h-full bg-blue-600"></div>
                  </div>
                </div>
                <div>
                  <p class="text-sm opacity-50 mb-0">04</p>
                </div>
              </div>
              <div class="flex justify-around items-center sm:w-1/2 mb-2">
                <div class="mr-3">
                  <p class="text-sm font-bold mb-0">
                    <span class="opacity-50">2</span>
                    <span class="text-blue-600 ml-1">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
                <div class="flex-grow mr-3">
                  <div
                    class="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden"
                  >
                    <div class="w-2/12 h-full bg-blue-600"></div>
                  </div>
                </div>
                <div>
                  <p class="text-sm opacity-50 mb-0">03</p>
                </div>
              </div>
            </div>
          </div>
          <hr class="dark:border-slate-700 my-4" />
          <div class="p-3 pt-0 md:p-6 md:pt-0">
            <div class="flex justify-between items-center">
              <h2 class="text-2xl font-medium">Customer Review</h2>
              <div>
                <button
                  class="text-blue-600 border border-blue-600 hover:text-white hover:bg-blue-600 rounded py-2 px-5 md:px-6"
                >
                  New Comment
                </button>
              </div>
            </div>
            <hr class="dark:border-slate-700 my-5" />
            {/* <!-- item --> */}
            <div>
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 rounded-full mr-2 overflow-hidden">
                  <img
                    src="https://cdn.easyfrontend.com/pictures/users/user18.jpg"
                    alt=""
                    class="max-w-full h-auto mx-auto"
                  />
                </div>
                <div class="flex flex-grow justify-between">
                  <div>
                    <h5 class="font-medium mb-1">Freya Kemp</h5>
                    <p class="text-sm">
                      <span class="text-yellow-500">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </span>
                      <span class="mx-1">5.0</span>
                    </p>
                  </div>
                  <p class="text-sm opacity-50 mb-0">july 11,2020</p>
                </div>
              </div>
              <p class="text-sm leading-normal opacity-75 mb-6">
                WA wonderful serenity has taken possession of my entire
                soul, like these sweet mornings of spring which I enjoy with
                my whole heart. I am alone, and feel the charm of existence
                in this spot, which was created for the bliss of souls like
                mine. I am so happy, my dear friend, so absorbed in the
                exquisite sense of mere tranquil existence, that I neglect
                my talents. I should be incapable of drawing a single stroke
                at the present moment.
              </p>
              <div class="flex justify-end">
                <button
                  class="hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-slate-700 rounded inline-flex justify-center items-center duration-300 px-3 py-2 mr-6"
                >
                  <i class="far fa-thumbs-up fs-6 mr-2"></i> Like (20)
                </button>
                <button
                  class="hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-slate-700 rounded inline-flex justify-center items-center duration-300 px-3 py-2"
                >
                  <i class="far fa-thumbs-down fs-6 mr-2"></i> Dislike (6)
                </button>
              </div>
            </div>
            <hr class="dark:border-slate-700 my-5" />
            {/* <!-- item --> */}
            <div>
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 rounded-full mr-2 overflow-hidden">
                  <img
                    src="https://cdn.easyfrontend.com/pictures/users/user4.jpg"
                    alt=""
                    class="max-w-full h-auto mx-auto"
                  />
                </div>
                <div class="flex flex-grow justify-between">
                  <div>
                    <h5 class="font-medium mb-1">Issy Wong</h5>
                    <p class="text-sm">
                      <span class="text-yellow-500">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </span>
                      <span class="mx-1">5.0</span>
                    </p>
                  </div>
                  <p class="text-sm opacity-50 mb-0">july 11,2020</p>
                </div>
              </div>
              <p class="text-sm leading-normal opacity-75 mb-6">
                WA wonderful serenity has taken possession of my entire
                soul, like these sweet mornings of spring which I enjoy with
                my whole heart. I am alone, and feel the charm of existence
                in this spot, which was created for the bliss of souls like
                mine. I am so happy, my dear friend, so absorbed in the
                exquisite sense of mere tranquil existence, that I neglect
                my talents. I should be incapable of drawing a single stroke
                at the present moment.
              </p>
              <div class="flex justify-end">
                <button
                  class="hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-slate-700 rounded inline-flex justify-center items-center duration-300 px-3 py-2 mr-6"
                >
                  <i class="far fa-thumbs-up fs-6 mr-2"></i> Like (20)
                </button>
                <button
                  class="hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-slate-700 rounded inline-flex justify-center items-center duration-300 px-3 py-2"
                >
                  <i class="far fa-thumbs-down fs-6 mr-2"></i> Dislike (6)
                </button>
              </div>
            </div>
            <hr class="dark:border-slate-700 my-5" />
            {/* <!-- item --> */}
            <div>
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 rounded-full mr-2 overflow-hidden">
                  <img
                    src="https://cdn.easyfrontend.com/pictures/users/user17.jpg"
                    alt=""
                    class="max-w-full h-auto mx-auto"
                  />
                </div>
                <div class="flex flex-grow justify-between">
                  <div>
                    <h5 class="font-medium mb-1">Sophia Dunkley</h5>
                    <p class="text-sm">
                      <span class="text-yellow-500">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </span>
                      <span class="mx-1">5.0</span>
                    </p>
                  </div>
                  <p class="text-sm opacity-50 mb-0">july 11,2020</p>
                </div>
              </div>
              <p class="text-sm leading-normal opacity-75 mb-6">
                WA wonderful serenity has taken possession of my entire
                soul, like these sweet mornings of spring which I enjoy with
                my whole heart. I am alone, and feel the charm of existence
                in this spot, which was created for the bliss of souls like
                mine. I am so happy, my dear friend, so absorbed in the
                exquisite sense of mere tranquil existence, that I neglect
                my talents. I should be incapable of drawing a single stroke
                at the present moment.
              </p>
              <div class="flex justify-end">
                <button
                  class="hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-slate-700 rounded inline-flex justify-center items-center duration-300 px-3 py-2 mr-6"
                >
                  <i class="far fa-thumbs-up fs-6 mr-2"></i> Like (20)
                </button>
                <button
                  class="hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-slate-700 rounded inline-flex justify-center items-center duration-300 px-3 py-2"
                >
                  <i class="far fa-thumbs-down fs-6 mr-2"></i> Dislike (6)
                </button>
              </div>
            </div>
          </div>
          <div class="py-6 lg:py-12 text-center">
            <button
              class="bg-blue-600 text-white text-sm hover:bg-opacity-90 rounded py-2.5 px-6 md:px-10"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Purchase;