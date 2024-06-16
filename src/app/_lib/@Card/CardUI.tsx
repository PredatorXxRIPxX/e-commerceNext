import { Card, CardHeader, CardBody, CardFooter, Stack, Heading ,Text,Divider,Button,ButtonGroup} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
}

export default function CardUI({title,description,imageUrl,price}:CardProps){
    return (
        <Card maxW='sm' className='bg-white font-bold text-black p-4 rounded-lg'>
        <CardBody>
          <div className=' border-2 border-solid border-red-500 w-full'>
            <Image
              src={imageUrl}
              alt={title}
              borderRadius='lg'
              className='rounded-lg w-3/4 mx-auto'
            />
          </div>
          <Stack mt='6' spacing='3'>
            <Heading size='md' className=' font-semibold text-xl'>{title}</Heading>
            <Text className=' font-light'>
              {description}
            </Text>
            <Text color='blue.600' fontSize='2xl' className='text-2xl mt-2 mb-2'>
              {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' className='bg-blue-500 text-white p-2 rounded-lg mr-5 ml-2'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue' className='text-blue-500'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    )
}