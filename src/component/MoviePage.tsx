import {
  Box,
  Flex,
  Heading,
  Stack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Spinner,
  Center
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  RiAlertLine,
  RiArrowUpLine,
  RiFileList3Line,
  RiFireFill,
  RiHeartLine,
  RiInboxLine,
  RiSearchLine
} from "react-icons/ri";

import { getPopularMovie, searchMovie } from '../redux/actionCreators/movieAction';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { Movie } from './Movie';
export const MoviePage = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { movies, hasLoadMore, wish_list, loading, error } = useTypedSelector((state) => state.movies);
  const [isSearch, setIsSearch] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(1);
  //search function
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (loading) {
      return
    }
    if (e.target.value.trim() !== '') {
      setPage(1);
      setIsSearch(true);
      setSearchKey(e.target.value);
      dispatch(searchMovie(e.target.value, 1));
    }
    else {
      setIsSearch(false);
      dispatch(getPopularMovie(page));
    }
  }
  //go to top function
  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = event.currentTarget.scrollTop;
    if (scrollTop > 80) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    document.getElementsByClassName("scroll-top-parent")[0].scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  //load more
  const loadMorePage = () => {
    if (isSearch) {
      dispatch(searchMovie(searchKey, page + 1));
    }
    else {
      dispatch(getPopularMovie(page + 1));
    }
    setPage(page + 1);
  }
  //init page
  useEffect(() => {
    dispatch(getPopularMovie(page));
  }, []);
  return (
    <Box bgColor="#f3f3f3" height='100vh'>
      <Flex w="full" h="full" px="32px" pt="64px" direction="column">
        <Flex w="full" mb="32px" justify="space-between" align="center">
          <Heading fontSize="24px">Movies</Heading>
          <Button
            size="md"
            colorScheme="pink"
            leftIcon={<RiHeartLine />}
            onClick={onOpen}
          >
            Wishlist
          </Button>
        </Flex>
        <InputGroup mb="16px">
          <InputLeftElement
            pointerEvents="none"
            color="gray.500"
            children={<RiSearchLine />}
          />
          <Input type="tel" placeholder="Search Movies" bg="white" onChange={onChangeSearch} />
        </InputGroup>

        {/* ----- Loading UI ----- */}
        {
          loading &&
          <Center py="32px">
            <Spinner color="pink.600" />
          </Center>
        }
        {/* ----- Error UI ----- */}
        {
          error &&
          <Center py="32px" color="pink.600" flexDirection="column">
            <Box fontSize="x-large" mb="8px">
              <RiAlertLine />
            </Box>
            <Box>Something went wrong.</Box>
            <Box>Please try again.</Box>
          </Center>
        }
        {/* ------ render movie list ------ */}
        {
          movies.length > 0 ? (
            <>
              {/* ----- Movie List (Popular movies) ------ */}
              <Flex
                fontWeight="600"
                color="pink.600"
                mb="8px"
                align="center"
                gap="4px"
              >
                {
                  isSearch ? (
                    <>
                      <RiFileList3Line />
                      Search result
                    </>
                  ) : (
                    <>
                      <RiFireFill />
                      Popular movies
                    </>
                  )
                }
              </Flex>
              <Stack
                w="full"
                minH="0"
                pb="32px"
                flex={1}
                overflowY="auto"
                spacing="8px"
                className="scroll-top-parent"
                onScroll={scrollHandler}
              >
                {movies.map((item, idx) => (
                  <Movie movie={item} key={idx} />
                ))}
                {/* ----- Load More Button UI (Bonus) ------ */}
                {
                  hasLoadMore &&
                  <Center>
                    <Button
                      variant="ghost"
                      size="md"
                      colorScheme="blackAlpha"
                      onClick={loadMorePage}
                      isLoading={false} // set true while loading data
                      loadingText="Loading"
                    >
                      Load More
                    </Button>
                  </Center>
                }

                {/* ----- GO to Top Button UI (Bonus)  ------ */}
                {
                  visible &&
                  <IconButton
                    pos="absolute"
                    right="16px"
                    bottom="24px"
                    colorScheme="pink"
                    icon={<RiArrowUpLine />}
                    aria-label="edit"
                    _focus={{ outline: "none" }}
                    isRound
                    onClick={scrollToTop}
                  />
                }
              </Stack>
            </>
          ) : (
            <>
              {/* ----- Empty  UI ----- */}
              <Center py="32px" color="pink.600" flexDirection="column">
                <Box fontSize="x-large" mb="8px">
                  <RiInboxLine />
                </Box>
                {
                  isSearch ? 'No matched result.' : 'no data.'
                }
              </Center>
            </>
          )
        }
        {/* ------ Wishlist UI ------ */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgColor="#f3f3f3">
            <ModalHeader>Wishlist</ModalHeader>
            <ModalCloseButton />
            <ModalBody p="32px">
              {
                wish_list.length > 0 ? (
                  <>
                    {/* ----- Movie List ------ */}
                    <Stack>
                      {wish_list.map((item, idx) => (
                        <Movie movie={item} key={idx} />
                      ))}
                    </Stack>
                  </>
                ) : (
                  <>
                    {/* ----- Empty UI ----- */}
                    <Center py="32px" color="pink.600" flexDirection="column">
                      <Box fontSize="x-large" mb="8px">
                        <RiInboxLine />
                      </Box>
                      Find your favorite movies!
                      <Button
                        mt="16px"
                        size="md"
                        variant="outline"
                        colorScheme="blackAlpha"
                        onClick={onClose}
                      >
                        Close
                      </Button>
                    </Center>
                  </>
                )
              }
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};