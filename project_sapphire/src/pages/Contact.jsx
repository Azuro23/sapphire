import React from 'react';
import { Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalBody, useDisclosure, Button } from "@chakra-ui/react";

function Contact() {
    const Overlay = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
      const {isOpen, onOpen, onClose} = useDisclosure()
      const [overlay, setOverlay] = useState(<Overlay />)

  return (
    <div><Modal isCentered 
    size={"xl"}
    closeOnOverlayClick={false}
    isOpen={isOpen}
    onClose={onClose}>
        {overlay}
        <ModalContent>
            <ModalHeader>Fall Limited Edition Sneakers</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
    

            </ModalBody>
            <ModalFooter> 
            </ModalFooter>
        </ModalContent>
    </Modal>
    </div>
  )
}

export default Contact