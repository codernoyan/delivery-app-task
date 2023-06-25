/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useContext, useState } from 'react';
import { RenderContext } from '../contexts/RenderProvider';

export default function Modal({ productData }) {
  let [isOpen, setIsOpen] = useState(false);
  const [deliveryType, setDeliveryType] = useState("");
  const { setProductOrders } = useContext(RenderContext);
  
  function closeModal() {
    setIsOpen(false);
    Object.assign(productData, {deliveryType})
    setProductOrders((prev) => [...prev, productData])
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button onClick={openModal} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
        Buy Now
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
            {/* modal data */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Select a delivery type
                  </Dialog.Title>
                  {/* main data */}
                  <div>
                    <select
                      name="HeadlineAct"
                      id="HeadlineAct"
                      onChange={(e) => setDeliveryType(e.target.value)}
                      value={deliveryType}
                      className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                      <option defaultValue>Please Select</option>
                      <option value="Regular">Regular</option>
                      <option value="Express">Express</option>
                    </select>
                  </div>
                  {/* main data */}
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Place Order
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
