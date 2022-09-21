import {createStandaloneToast} from "@chakra-ui/react"

export default function toast(title, 
    description="", status,position = "bottom-left"){
    const toast = createStandaloneToast()

    return toast({
            title: title,
            description: description,
            status: status,
            duration: status === "error" ? 5000 : 2000,
            isClosable: true,
            position: position
            }
        );
    }