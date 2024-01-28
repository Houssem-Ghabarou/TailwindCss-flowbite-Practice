import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import image5 from "./assets/5.jpg";
import image6 from "./assets/6.jpg";
import { Sidebar, Carousel, Button, Modal } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='bg-gray-300 min-h-screen '>
      <div className='flex space-x-2'>
        <Sidebar
          aria-label='Default sidebar example'
          className='min-h-screen sticky top-0'
        >
          <Sidebar.Items className='min-h-screen'>
            <Sidebar.ItemGroup>
              <Sidebar.Item href='#' icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                href='#'
                icon={HiViewBoards}
                label='Pro'
                labelColor='dark'
              >
                Kanban
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiInbox} label='3'>
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href='#' icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <div className='flex flex-col	m-0 '>
          <nav className='bg-gray-500 flex justify-between  rounded-md	 items-center p-2 m-2 '>
            {/* logo img */}
            <div>
              <svg
                viewBox='0 0 248 31'
                class='text-slate-900 dark:text-white h-5 w-[100px] sm:w-auto  '
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z'
                  fill='#38bdf8'
                ></path>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z'
                  fill='currentColor'
                ></path>
              </svg>
            </div>

            <ul className='flex space-x-3	'>
              <li className='text-style'>Home</li>
              <li className='text-style'>About</li>
              <li className='text-style'>Contact</li>
            </ul>
          </nav>
          {/* carrousel flowbite */}
          <div className='h-56 sm:h-64 xl:h-80 2xl:h-96 mt-2'>
            <Carousel>
              <img src={image1} alt='image-one' />
              <img src={image2} alt='image-two' />
              <img src={image3} alt='image-three' />
              <img src={image4} alt='image-four' />
              <img src={image5} alt='image-five' />
              <img src={image6} alt='image-six' />
            </Carousel>
          </div>
          {/* grid elements */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 mt-2'>
            <img className='image-style' src={image1} alt='image-one' />
            <img
              className='image-style row-span-3'
              src={image2}
              alt='image-two'
            />
            <img className='image-style 	' src={image3} alt='image-three' />
            <img className='image-style' src={image4} alt='image-four' />
            <img className='image-style' src={image5} alt='image-five' />
            <img
              className='image-style col-span-2'
              src={image6}
              alt='image-six'
            />
          </div>
          <>
            <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>Terms of Service</Modal.Header>
              <Modal.Body>
                <div className='space-y-6'>
                  <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                    With less than a month to go before the European Union
                    enacts new consumer privacy laws for its citizens, companies
                    around the world are updating their terms of service
                    agreements to comply.
                  </p>
                  <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure
                    a common set of data rights in the European Union. It
                    requires organizations to notify users as soon as possible
                    of high-risk data breaches that could personally affect
                    them.
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => setOpenModal(false)}>I accept</Button>
                <Button color='gray' onClick={() => setOpenModal(false)}>
                  Decline
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
