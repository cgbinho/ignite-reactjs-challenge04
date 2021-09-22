import { useState } from 'react';
import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface CardData {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imgUrl, setImageUrl] = useState('');

  function handleViewImage(url: string): void {
    onOpen();
    setImageUrl(url);
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="2.5rem">
        {cards.map((data: CardData) => (
          <Card
            key={data.id}
            {...{ data, viewImage: url => handleViewImage(url) }}
          />
        ))}
      </SimpleGrid>
      {isOpen && <ModalViewImage {...{ isOpen, imgUrl, onClose }} />}
    </>
  );
}
