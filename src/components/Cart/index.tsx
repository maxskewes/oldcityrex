import storeItems from './data/items.json';
import { StoreItem } from './components/StoreItem';
import { Box, HStack, VStack, Button, Container, Icon } from '@chakra-ui/react';
import {
  useShoppingCart,
  ShoppingCartProvider,
} from './context/ShoppingCartContext';
import { RiShoppingBagFill } from 'react-icons/ri';

export function Cart() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <ShoppingCartProvider>
      <Box w='100%'>
        <Container w='100%'>
          {/* {cartQuantity > 0 && ( */}
            <>
              <Button
                onClick={openCart}
                sx={{ width: '3rem', height: '3rem', position: 'relative' }}
                variant='outline'
              >
                <Icon as={RiShoppingBagFill} boxSize={6} />
              </Button>
              <Box
                sx={{
                  color: 'white',
                  width: '1.5rem',
                  height: '1.5rem',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  transform: 'translate(25%, 25%)',
                }}
              >
                {cartQuantity}
              </Box>
            </>
          {/* )} */}
        </Container>

        <Box>
          <h2>Store</h2>
          <VStack>
            {storeItems.map((item) => (
              <HStack key={item.id}>
                <StoreItem {...item} />
              </HStack>
            ))}
          </VStack>
        </Box>
      </Box>
    </ShoppingCartProvider>
  );
}
