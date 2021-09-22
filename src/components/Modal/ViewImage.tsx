import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const maxW = ['320px', '540px', '900px'];
  const maxH = ['360px', '440px', '600px'];

  return (
    <Modal {...{ isOpen, onClose }} isCentered>
      <ModalOverlay />
      <ModalContent
        mx="auto"
        w="auto"
        h="auto"
        {...{ maxW, maxH }}
        borderTopRadius="md"
        bgColor="pGray.800"
      >
        <ModalBody p={0} borderTopRadius="md">
          <Image
            src={imgUrl}
            alt={imgUrl}
            {...{ maxW, maxH }}
            objectFit="cover"
            borderTopRadius="md"
          />
        </ModalBody>
        <ModalFooter
          bgColor="pGray.800"
          h="8"
          justifyContent="start"
          p="4"
          borderBottomRadius="md"
        >
          <Link
            href={imgUrl}
            isExternal
            fontSize="sm"
            color="gray.50"
            _hover={{
              opacity: 0.8,
            }}
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
