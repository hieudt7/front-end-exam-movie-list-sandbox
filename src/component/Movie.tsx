import {
    Box,
    Flex,
    Text,
    IconButton,
  } from "@chakra-ui/react";
  import {
    RiHeartFill,
    RiHeartLine,
  } from "react-icons/ri";
import { addWishList, removeWishList } from '../redux/actionCreators/movieAction';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypeSelector';
export const Movie: React.FC<MovieProps> = ({ movie }) => {
    const dispatch = useDispatch();
    const { wish_list } = useTypedSelector((state) => state.movies);
    const handleAddToWishList = () => {
      if (isExistWishList()) {
        dispatch(removeWishList([movie]));
      }
      else {
        dispatch(addWishList([movie]));
      }
    }
    const isExistWishList = () => {
      let isExist = wish_list.filter((item, idx) => item.id === movie.id)
      if (isExist.length > 0) {
        return true
      }
      else {
        return false
      }
    }
    return (
      <Flex
        w="full"
        px="24px"
        py="16px"
        bgColor="white"
        borderRadius="md"
        justify="space-between"
        align="center"
        boxShadow="sm"
      >
        <Box>
          <Text fontWeight="semibold" isTruncated>
            {movie.title}
          </Text>
          <Text color="gray.400" fontSize="xs" isTruncated>
            {movie.release_date}
          </Text>
        </Box>
        <IconButton
          variant="ghost"
          colorScheme="pink"
          icon={isExistWishList() ? <RiHeartFill /> : <RiHeartLine />}
          aria-label="edit"
          _focus={{ outline: "none" }}
          isRound
          onClick={() => handleAddToWishList()}
        />
      </Flex >
    );
  };