import { Modal } from 'flowbite-react'
export const ModalCompleteProfile = ({ show, setShow, children }) => {
  return (
    <Modal
      show={show}
      size='3xl'
      popup={true}
      onClose={() => setShow(!show)}
      className='bg-navBarBlack'
    >
      <Modal.Header className='dark:bg-bgDetail' />
      <Modal.Body className='pt-2 dark:bg-mobileNav'>
        <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
          <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
            Modify your data ✏️
          </h3>
          {children}
        </div>
      </Modal.Body>
    </Modal>
  )
}
