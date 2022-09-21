import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text
  } from '@chakra-ui/react'

import { useDisclosure } from "@chakra-ui/react";


function PostNewTweetModal({onOpen, isOpen, onClose}) {
    
  
    return (
      <>
     
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
                You can scroll the content behind the modal
              </Text>
             <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta temporibus, optio fugit quibusdam labore saepe ducimus ullam fugiat corporis ad numquam inventore voluptatibus atque, iusto necessitatibus sequi quas perferendis quaerat.
             </div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

 export default PostNewTweetModal