import { useState } from 'react';
import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
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
    setImageUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="2.5rem">
        {cards.map((data: Card) => (
          <Card
            key={data.id}
            {...{ data, viewImage: () => handleViewImage(data.url) }}
          />
        ))}
        <ModalViewImage {...{ isOpen, onClose, imgUrl }} />
      </SimpleGrid>
    </>
  );
}
