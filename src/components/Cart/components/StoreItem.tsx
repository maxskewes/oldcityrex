import { Button, Card, CardHeader, CardBody, Image } from '@chakra-ui/react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card h={200}>
      <Image
        src={imgUrl}
        height='200px'
        sx={{ objectFit: 'cover' }}
      />
      <CardBody sx={{display: 'flex', flexDirection: 'column'}}>
        <CardHeader className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </CardHeader>
        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button w='100%' onClick={() => increaseCartQuantity(id)}>
              + Add to Cart
            </Button>
          ) : (
            <div
              className='d-flex align-items-center flex-column'
              style={{ gap: '.5rem' }}
            >
              <div
                className='d-flex justify-content-center align-items-center'
                style={{ gap: '.5rem' }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className='fs-3'>{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant='danger'
                size='sm'
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
